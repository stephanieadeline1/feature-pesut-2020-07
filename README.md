# Pesut

This `feature` was created using [`data-visuals-create`](https://github.com/texastribune/data-visuals-create) 2.7.2 on 2020-07-08.
[Link to your project](https://tiny.cc/pesut)
[Link to your doc](https://docs.google.com/document/d/1wbVuk1l9nMB00tnIL-MegkGSaNjGxHujqPH9SJK4bR4)
[Link to your sheet](https://docs.google.com/spreadsheets/d/1YTnpRLtzdWV6sW2Ow55HdK4izaOfQ43TrLFa2NI3-Mg)

Code for graphics in this project are in the `app/scripts/packs` folder. This includes the scrolly map, which code is called `mapscroll.js`. The template for this is from [mapbox's scrollytelling template](https://github.com/mapbox/storytelling), with a few adjustments.

Most of the text are fed from [this google doc](https://docs.google.com/document/d/1wbVuk1l9nMB00tnIL-MegkGSaNjGxHujqPH9SJK4bR4), except for the scrolly map, which lives in `mapscroll.js` itself. Image captions all live in their respective html files. (see below)

As for the HTML templates, they are composed of a few different HTML files that are all included in `index.html`. See `index.html` for structure of the app.

<!-- ONLY EDIT BELOW THIS LINE -->

## Available commands

All project templates share the same build commands.

#### `npm start` or `npm run serve`

The main command for development. This will build your HTML pages, prepare your SCSS files and compile your JavaScript. A local server is set up so you can view the project in your browser.

#### `npm run deploy`

The main command for deployment. It will always run `npm run build` first to ensure the compiled version is up-to-date. Use this when you want to put your project online. This will use the `bucket` and `folder` values in the `project.config.js` file to determine where it should be deployed on S3. Make sure those are set the appropriate values!

#### `npm run data:fetch`

This command uses the array of files listed under the `files` key in `project.config.js` to download data to the project. This data will be processed and made available in the `data` folder in the root of the project.

You can also set `dataDir` in `project.config.js` to change the location of that directory if necessary.

#### `npm run assets:push`

This pushes all the raw files found in the `app/assets` directory to S3 to a `raw_assets` directory. This makes it possible for collaborators on the project to sync up with your assets when they run `npm run assets:pull`. This prevents potentially large assets like photos and audio clips from ending up in GitHub. This also runs automatically when `npm run deploy` is used.

#### `npm run assets:pull`

Pulls any raw assets that have been pushed to S3 back down to the project's `app/assets` directory. Good for ensuring you have the same files as anyone else who is working on the project.

#### `npm run workspace:push`

The `workspace` directory is for storing all of your analysis, production and raw data files. It's important to use this directory for these files (instead of `assets` or `data`) so we can keep them out of GitHub. This command will push the contents of the `workspace` directory to S3.

#### `npm run workspace:pull`

Pulls any `workspace` files that have been pushed to S3 back down to the project's local `workspace` directory. This is helpful for ensuring you're in sync with another developer.

## Environment variables and authentication

Any projects created with `data-visuals-create` assume you're working within a Texas Tribune environment, but it is possible to point AWS (used for deploying the project and assets to S3) and Google's API (used for interfacing with Google Drive) at your own credentials.

### AWS

Projects created with `data-visuals-create` support two of the built-in ways that `aws-sdk` can authenticate. If you are already set up with the [AWS shared credentials file](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html) (and those credentials are allowed to interact with your S3 buckets), you're good to go. `aws-sdk` will also recognize the [AWS credential environmental variables](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-environment.html).

### Google

The interface with Google Drive within `data-visuals-create` projects currently only supports using Oauth2 credentials to speak to the Google APIs. This requires a set of OAuth2 credentials that will be used to generate and save an access token to your computer. `data-visuals-create` projects have hardcoded locations for the credential file and token file, but you may override those with environmental variables.

## License

MIT
