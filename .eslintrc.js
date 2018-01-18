module.exports = {
    "parserOptions": {
                "ecmaVersion": 6,
                "sourceType": "module"
    },
    "globals": {
        "jQuery": true,
        "$": true,
    },
    "env": {
        "browser": true,
        "es6": true,
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "warn",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
