const scaffold = require("@tekclaw/scaffold/.eslintrc.ui");

module.exports = {
  ...scaffold,
  parserOptions: {
    ...scaffold.parserOptions,
    project: "./tsconfig.json",
  },
};
