var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    reporters: ['spec'],
    port: 9876,
    colors: false,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    autoWatchBatchDelay: 300,

    client: {
      captureConsole: true
    },

    files: [
      './dist/js/app.bundle.js',
      //'./node_modules/angular/angular.min.js',
      './node_modules/angular-ui-router/release/angular-ui-router.min.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './src/**/*.spec.js'],

    preprocessors: {
      './dist/js/app.bundle.js': ['webpack'],
      './src/**/*.spec.js': ['babel']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }
  });
}
