import { SocialButton } from "@t2-educacao/midas";

export default function SocialButtonBasico() {
  return (
    <div className="flex max-w-xs flex-col gap-3">
      <SocialButton provider="google" size="lg" />
      <SocialButton provider="linkedin" size="lg" variant="filled" />
      <SocialButton provider="google" variant="inverse" shape="pill" />
      <div className="flex gap-2">
        <SocialButton provider="google" layout="icon" />
        <SocialButton provider="linkedin" layout="icon" variant="filled" />
        <SocialButton provider="google" layout="icon" disabled />
      </div>
    </div>
  );
}
