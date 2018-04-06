'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the epic ' + chalk.green('generator-magnifyalljs') + ' generator!'
    ));

    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'What should be the project name?',
        default: 'sample-project'
      },
      {
        type: 'input',
        name: 'projectDesc',
        message: 'What should be the project Description?',
        default: 'MagnifyAll.js sample project'
      },
      {
        type: 'input',
        name: 'basePackage',
        message: 'What should be the base package for the application?',
        default: 'com.magnifyall.sample'
      }
      /* ,{
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      } */
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.props.projectFormatedName = this.props.projectName.toLowerCase().replace(" ", "-");
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('karma.conf.js'),
      this.destinationPath('karma.conf.js'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('Gruntfile.js'),
      this.destinationPath('Gruntfile.js'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('public/index.html'),
      this.destinationPath('public/index.html'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('public/app.js'),
      this.destinationPath('public/app.js'),
      this.props
    );
    this.fs.copy(
      this.templatePath('test/application.config.js'),
      this.destinationPath('test/application.config.js')
    );
    this.fs.copy(
      this.templatePath('test/application.config.spec.js'),
      this.destinationPath('test/application.config.spec.js')
    );
    this.fs.copy(
      this.templatePath('lib/defaultAspect.js'),
      this.destinationPath('lib/defaultAspect.js')
    );
    this.fs.copy(
      this.templatePath('lib/magnifyall.min.js'),
      this.destinationPath('lib/magnifyall.min.js')
    );
    this.fs.copy(
      this.templatePath('lib/router.min.js'),
      this.destinationPath('lib/router.min.js')
    );
    var _packagePath = '';
    var _packageArr = this.props.basePackage.split('.');
    for (var _i = 0; _i < _packageArr.length; _i++) {
      _packagePath += _packageArr[_i] + '/';
    }
    this.fs.copyTpl(
      this.templatePath('test/com/magnifyall/sample/HelloWorld.spec.js'),
      this.destinationPath('test/' + _packagePath + 'HelloWorld.spec.js'),
      this.props
    );
    this.fs.copy(
      this.templatePath('src/com/magnifyall/sample/HelloWorld.js'),
      this.destinationPath('src/' + _packagePath + 'HelloWorld.js')
    );
  }

  install() {
    this.npmInstall();
    // This.installDependencies();
  }

  end() {
    this.log(yosay(
      chalk.green('Thanks, your project is setup, please do ') +
      chalk.red('npm start') +
      chalk.green(' to start this application.')
    ));
  }
};
