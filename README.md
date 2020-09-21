First install dependencies in ./server and ./client then either start them both manually
or run `npm i` and `npm start` from the root folder


API Key is hardcoded, but would/should be part of an environment variable, or even better encrypted and only the deployment machine would have access to the keychain to decrypt the env file.
