module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        less: {
            dev: {
                options: {
                    paths: ["src/css"]
                },
                files: {
                    "src/css/styles.css": "src/less/*.less"
                }
            }
        }
    });
    // Load the plugin that provides the "less" task.
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', 'less');
    
};