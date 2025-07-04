import baseConfig from "@dismantled/eslint-config/base";
import reactConfig from "@dismantled/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
