import { FlatCompat } from "@eslint/eslintrc";
import configStandard from "eslint-config-standard";
import eslintConfigPrettier from "eslint-config-prettier";

const compat = new FlatCompat();

export default [
  ...compat.config(configStandard),
  ...compat.config(eslintConfigPrettier),
];
