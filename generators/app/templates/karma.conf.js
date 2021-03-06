// Karma configuration
// Generated on Sat May 06 2017 00:06:22 GMT+1000 (AUS Eastern Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './lib/magnifyall.min.js',
      './test/application.config.js',
      './test/**/*.spec.js',
      {pattern: './src/**/*.js', included: false, served: true, watched: true},
      {pattern: './lib/defaultAspect.js', included: false, served: true, watched: true}
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage','html'],


    htmlReporter: {
      outputDir: 'reports/test', // where to put the reports  
      templatePath: null, // set if you moved jasmine_template.html 
      focusOnFailures: true, // reports show failures on start 
      namedFiles: true, // name files instead of creating sub-directories 
      pageTitle: "<%= projectName %>: Test Report", // page title for reports; browser info by default 
      urlFriendlyName: true, // simply replaces spaces with _ for files/dirs 
      reportName: 'index', // report summary filename; browser info by default 
      
      
      // experimental 
      preserveDescribeNesting: false, // folded suites stay folded  
      foldAll: true, // reports start folded (only with preserveDescribeNesting) 
    }, 
    coverageReporter: {
      // specify a common output directory 
      dir: 'reports',
      reporters: [
        // reporters not supporting the `file` property 
        { type: 'html', subdir: 'coverage' },
        { type: 'lcov', subdir: 'coverage/report-lcov' },
        // reporters supporting the `file` property, use `subdir` to directly 
        // output them in the `dir` directory 
        { type: 'cobertura', subdir: 'coverage', file: 'cobertura.txt' },
        { type: 'lcovonly', subdir: 'coverage', file: 'report-lcovonly.txt' },
        { type: 'teamcity', subdir: 'coverage', file: 'teamcity.txt' },
        { type: 'text', subdir: 'coverage', file: 'text.txt' },
        { type: 'text-summary', subdir: 'coverage', file: 'text-summary.txt' },
      ]
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['PhantomJS', 'Chrome'],
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
