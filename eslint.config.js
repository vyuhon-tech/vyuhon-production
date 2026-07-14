import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // False positive in App Router: fonts declared in the root layout <head>
      // apply to every route (the rule targets the legacy pages/ router).
      "@next/next/no-page-custom-font": "off",
    },
  },
];

export default eslintConfig;
