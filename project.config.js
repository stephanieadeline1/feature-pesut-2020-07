module.exports = {
  /**
   * A unique identifier that's generated when a project is created.Used to
   * sync up asset and workspace deploys.
   */
  id: '9ZODUZ3MDlmvKg2MoOlaE',
  /**
   * Month that the project was created.
   */
  createMonth: '07',
  /**
   * Year that the project was created.
   */
  createYear: '2020',
  /**
   * What project type was passed in on creation.
   */
  projectType: 'feature',
  /**
   * What slug was passed in on creation.
   */
  slug: 'pesut',
  /**
   * The destination S3 bucket for a deploy.
   */
  bucket: 'pesutfeature',
  /**
   * The folder (or "Key" in S3 lingo) to deploy the project into.
   */
  folder: 'feature-pesut-2020-07/dist',
  /**
   * The S3 bucket that's used to store raw asset and workspace files.
   */
  assetsBucket: 'feature-assets-pesut',
  /**
   * Any Google Doc and Google Sheet files to be synced with this project.
   */
  files: [
    {
      fileId: '1wbVuk1l9nMB00tnIL-MegkGSaNjGxHujqPH9SJK4bR4',
      type: 'doc',
      name: 'text',
    },
  ],
  /**
   * The dataMutators option makes it possible to modify what's returned by
   * the data fetchers. This is a good place to restructure the raw data, or
   * to do joins with other data you may have.
   *
   * Example:
   * dataMutators: {
   *   // the function name should match one of the `name` values in `files`
   *   votes(originalData) {
   *   // what you return in this function is what ends up in the JSON file
   *   return originalData;
   * },
  },
   */
  dataMutators: {},

  /**
   * `createAPI` makes it possible to bake out a series of JSON files that get
   * deployed with your project. This is a great way to break up data that users
   * only need a small slice of based on choices they make. The toolkit expects
   * this to return an array of objects. Each object should have a "key" and
   * a "value" - the "key" determines the URL, the "value" is what is saved at
   * that URL.
   */
  createAPI(data) {
    return null;
  },

  /**
   * Where custom filters for Nunjucks can be added. Each key should be the
   * name of the filter, and each value should be a function it will call.
   *
   * (journalize comes built in and does not need to be added manually.)
   *
   * Example:
   * customFilters: {
   *   square: (val) => val * val;
   * };
   *
   * Then in your templates:
   * {{ num|square }}
   *
   */
  customFilters: {},
};
