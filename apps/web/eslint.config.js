import baseConfig, { restrictEnvAccess } from "@dismantled/eslint-config/base";
import nextjsConfig from "@dismantled/eslint-config/next-js";
import reactConfig from "@dismantled/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
