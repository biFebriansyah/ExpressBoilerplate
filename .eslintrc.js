module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["standard", "prettier", "plugin:flowtype/recommended"],
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": "error",
        "no-unused-vars": "warn",
        "no-console": "off",
        "func-names": "off",
        "no-process-exit": "off",
        "object-shorthand": "off",
        "class-methods-use-this": "off",
    },
};
