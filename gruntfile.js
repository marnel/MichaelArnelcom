/**
 * Created by marnel on 5/14/14.
 */
module.exports = function(grunt){
    grunt.initConfig({
        shell: {
            clean: {
                command: 'hexo clean'
            },
            generate: {
                command: 'hexo generate'
            },
            server: {
                command: 'hexo server -s'
            }
        },
        watch: {
            js: {
                files: [
                    'work/js/**/*.js'
                ],
                tasks: [
                    //'jshint:work',
                    //'browserify2'
                ]
            }
        },
        hashres: {
            options: {
                encoding: 'utf8',
                fileNameFormat: '${name}.${hash}.cache.${ext}',
                renameFiles: true
            },
            css: {
                options: {
                },
                src: [
                    'build/js/app.min.ec1a70d1.cache.js',
                    'build/css/app.ae53d279.cache.css',
                    'build/css/normalize.css' ],
                dest: 'build/**/*.html'
            },
            js: {
                options: {
                },
                src: [
                    'build/js/app.min.ec1a70d1.cache.js',
                    'build/css/app.ae53d279.cache.css',
                    'build/css/normalize.css' ],
                dest: 'build/**/*.html'
            },
            images: {
                options: {
                },
                src: [
                    'build/**/*.png',
                    'build/**/*.jpg'
                ],
                dest: [
                    'build/**/*.html',
                    'build/**/*.js',
                    'build/**/*.css',
                    'build/**/*.md'
                ]
            }
        },
        copy: {
            dev: {
                files: [{
                    expand: true,
                    cwd: "app/views",
                    src: ["*.html"],
                    dest: "public/app/views/"
                },
                {
                    expand: true,
                    cwd: "app/controllers",
                    src: ["*.js"],
                    dest: "public/app/controllers/"
                },
                {
                    expand: true,
                    cwd: "app/routes",
                    src: ["*.js"],
                    dest: "public/app/routes/"
                },
                {
                    expand: true,
                    cwd: "app/",
                    src: ["*.js"],
                    dest: "public/app/"
                },
                {
                    expand: true,
                    cwd: "css/",
                    src: ["*.css"],
                    dest: "public/css/"
                }]
            },
            prod: {
                files: [{
                    expand: true,
                    cwd: "app/views",
                    src: ["*.html"],
                    dest: "../MichaelArnelStatic/public/app/views/"
                },
                    {
                        expand: true,
                        cwd: "app/controllers",
                        src: ["*.js"],
                        dest: "../MichaelArnelStatic/public/app/controllers/"
                    },
                    {
                        expand: true,
                        cwd: "app/routes",
                        src: ["*.js"],
                        dest: "../MichaelArnelStatic/public/app/routes/"
                    },
                    {
                        expand: true,
                        cwd: "app/",
                        src: ["*.js"],
                        dest: "../MichaelArnelStatic/public/app/"
                    },
                    {
                        expand: true,
                        cwd: "css/",
                        src: ["*.css"],
                        dest: "../MichaelArnelStatic/public/css/"
                    }]
            },
            prod2: {
                files: {
                    src: ["public/*"],
                    flatten: true,
                    dest: "../MichaelArnelStatic/public",
                    expand: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-line-remover');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-hashres');
    grunt.loadNpmTasks("grunt-contrib-copy");


    grunt.registerTask("dev", ["shell:clean", "shell:generate", "copy:dev", "shell:server"]);
    grunt.registerTask("dist", ["shell:clean", "shell:generate", "copy:prod2"]);
    grunt.registerTask("default", ["dev"]);
};
