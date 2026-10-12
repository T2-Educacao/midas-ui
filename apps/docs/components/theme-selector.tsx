"use client";

import { useTheme } from "fumadocs-ui/provider/base";
import { useEffect, useState } from "react";

const themes = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "dark-blue", label: "Dark Blue" },
];

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div
      role="group"
      aria-label="Tema"
      className="inline-flex items-center rounded-pill border border-border-subtle bg-surface-muted p-0.5"
    >
      {themes.map(({ value, label }) => {
        const active = mounted && theme === value;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={active}
            onClick={() => setTheme(value)}
            className={`rounded-pill px-2.5 py-1 text-label-sm transition-colors ${
              active
                ? "bg-action-accent-bg text-action-accent-content"
                : "text-content-secondary hover:text-content-primary"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
