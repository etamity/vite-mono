const scaffold = require("@tekclaw/vm-scaffold/.eslintrc.ui");

module.exports = {
  ...scaffold,
  parserOptions: {
    ...scaffold.parserOptions,
    project: "./tsconfig.json",
  },
};
