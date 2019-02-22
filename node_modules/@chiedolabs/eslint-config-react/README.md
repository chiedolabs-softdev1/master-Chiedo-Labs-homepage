# React ESLint Config

This is the Chiedo Labs eslint configuration file for React.JS projects. Currently it's based on the Airbnb eslint config.

## Installation

Install this eslint config on npm by running

	  yarn add --dev eslint @chiedolabs/eslint-config-react eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y

Add to your project by creating an `.eslintrc` file and then setting the contents to the following.

	  {
	    "extends": "@chiedolabs/eslint-config-react"
	  }

Update `package.json` to always download latest version of Chiedo Labs eslint config:

    "@chiedolabs/eslint-config-react": "latest",

## Development

1. Make a change
2. Commit your changes to git and push your changes to a branch on Github.
3. Submit a pull request


## Deployment (For those with access)

1. run <code>npm login</code> in the terminal
2. run <code>npm version patch</code>
3. run <code>npm publish</code>
