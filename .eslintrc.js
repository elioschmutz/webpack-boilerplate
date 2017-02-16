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
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
