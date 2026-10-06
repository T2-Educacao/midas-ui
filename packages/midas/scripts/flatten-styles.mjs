import { readFileSync, writeFileSync } from "node:fs";
import postcss from "postcss";

const file = "dist/styles.css";
const root = postcss.parse(readFileSync(file, "utf8"));

const v3Transform =
  "translate(var(--tw-translate-x,0),var(--tw-translate-y,0)) rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))";

let layers = 0;
for (;;) {
  let found = null;
  root.walkAtRules("layer", (node) => {
    found ??= node;
  });
  if (!found) break;
  layers += 1;
  if (found.nodes?.length) found.replaceWith(found.nodes);
  else found.remove();
}

let converted = 0;
root.walkRules((rule) => {
  if (rule.selector === ".transform") {
    rule.removeAll();
    rule.append({ prop: "transform", value: v3Transform });
    converted += 1;
    return;
  }
  const individual = rule.nodes.filter(
    (node) => node.type === "decl" && ["translate", "rotate", "scale"].includes(node.prop),
  );
  if (!individual.length) return;
  for (const decl of individual) {
    if (decl.prop === "rotate") rule.insertBefore(decl, { prop: "--tw-rotate", value: decl.value });
    decl.remove();
  }
  rule.append({ prop: "transform", value: v3Transform });
  converted += 1;
});

writeFileSync(file, root.toString());
console.log(
  `styles.css compatível com Tailwind v3: ${layers} camadas removidas, ${converted} regras de transform convertidas.`,
);
