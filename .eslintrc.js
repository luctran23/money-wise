module.exports = {

    root: true,

    parser: "@typescript-eslint/parser",

    env: {

        browser: true,

        node: true,

        mocha: true,

        jest: true

    },

    ignorePatterns: [".eslintrc.js"],

    extends: [

        "plugin:react/recommended",

        "plugin:@typescript-eslint/recommended",

    ],

    parserOptions: {

        ecmaVersion: 2019,

        sourceType: "module",

        ecmaFeatures: {

            jsx: true

        }

    },

    plugins: ["react", "import", "prettier", "@typescript-eslint"],

    rules: {

        "prettier/prettier": [

            "error",

            {

                endOfLine: "auto",
                tabWidth: 4

            }

        ],

        "react/jsx-filename-extension": [

            1,

            {

                extensions: [".tsx"]

            }

        ],

        // Codebase is in Typescript

        "react/require-default-props": 0,

        "import/extensions": 0,

        // React doesn't have extension types in imports

        "@typescript-eslint/explicit-function-return-type": 0,

        "import/prefer-default-export": "off",

        "no-use-before-define": "off",

        "no-shadow": "off",

        "@typescript-eslint/no-shadow": "error",

        "@typescript-eslint/explicit-module-boundary-types": "off",

        "import/no-default-export": "error",

        "react/display-name": 0,

        "no-underscore-dangle": 0,

        "no-param-reassign": [

            2,

            {

                props: false

            }

        ]

    },

    overrides: [

        {

            // Config file overrides

            files: [

                "webpack.common.config.js",

                "rollup.config.js",

                "webpack.optimisation.config.js",

                "webpack.dev.config.js",

                "webpack.prod.config.js"

            ],

            rules: {

                "@typescript-eslint/no-var-requires": "off",

                "import/no-extraneous-dependencies": [

                    "error",

                    {

                        devDependencies: true

                    }

                ]

            }

        },

        {

            // JS file overrides

            files: ["**/*.js"],

            rules: {}

        }

    ],

    settings: {

        react: {

            version: "detect"

        },

        polyfills: [

            // polyfilled by react-app-polyfill

            // for async / await support

            "Promise",

            // a Promise-based way to make web requests in the browser

            "window.fetch",

            // a helper required for Object Spread, i.e. { ...a, ...b }

            "Object.assign",

            // a built-in object used by for...of syntax and friends

            "Symbol",

            // a built-in static method used by array spread, i.e. [...arr]

            "Array.from"

        ],

        "import/resolver": {

            alias: {

                extensions: [".js", ".jsx", ".ts", ".tsx"]

            }

        }

    }

};