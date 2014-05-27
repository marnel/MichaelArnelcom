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
                    dest: "build/app/views/"
                },
                    {
                        expand: true,
                        cwd: "app/controllers",
                        src: ["*.js"],
                        dest: "build/app/controllers/"
                    },
                    {
                        expand: true,
                        cwd: "app/routes",
                        src: ["*.js"],
                        dest: "build/app/routes/"
                    },
                    {
                        expand: true,
                        cwd: "app/",
                        src: ["system.js"],
                        dest: "build/app/"
                    }]
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
    grunt.registerTask("dist", ["clean", "copy:prod"]);
    grunt.registerTask("default", ["dev"]);
};
