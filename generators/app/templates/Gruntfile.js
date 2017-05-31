module.exports = function(grunt){
    //project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                compress: {
                    sequences: false
                },
                sourceMap: false
            },
            build: {
                expand: true,
                src: '**/*.js',
                dest: 'dist/src',
                cwd: 'src'
            }
        },
        clean: {
            src: ['dist']
        },
        copy:{
            main: {
                files: [
                    {expand: false, src: ['lib/defaultAspect.js'], dest: 'dist/lib/defaultAspect.js'},
                    {expand: false, src: ['lib/magnifyall.min.js'], dest: 'dist/lib/magnifyall.min.js'},
                    {expand: false, src: ['lib/router.js'], dest: 'dist/lib/router.min.js'},
                    {expand: true, src: ['**/*.*'], dest: 'dist/',cwd: 'public'}
                ]
            }
        },
        watch: {
            src: {
                files: ['src/**/*', 'public/**/*'],
                tasks: ['build']
            }
        },connect: {
            server: {
            options: {
                port: 80,
                hostname: '*',
                base: 'dist',
                open: true,
                onCreateServer: function(server, connect, options) {
                    /*var io = require('socket.io').listen(server);
                    io.sockets.on('connection', function(socket) {
                        // do something with socket
                    });*/
                },middleware: function(connect, options, middlewares) {
                    // inject a custom middleware into the array of default middlewares
                    middlewares.unshift(function(req, res, next) {
                        return next();
                    });

                    return middlewares;
                }
            }
            }
        }
    });


    
    // load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Define Tasks
    grunt.registerTask('build', ['clean', 'uglify', 'copy']);
    grunt.registerTask('default', ['build', 'connect', 'watch']);
};