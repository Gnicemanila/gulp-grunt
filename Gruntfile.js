
module.exports = function(grunt) {

  // 项目配置信息
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      uglify_grunt: {
        options: {
          sourceMap: false,
          output: {
            quote_style: 3
          }
        },
        files: [{
          expand: true,


          //路径写对
          // src: ['ssc/js/game/es5/*.js', 'sscmobile/js/game/es5/*.js'],
          src: ['ssc/js/game/es5/*.js'],
          //src: ['sscmobile/js/game/es5/*.js'],








          dest: '',
          cwd: '.',
          rename: function(dst, src) {
            // To keep the source js files and make new files as `*.min.js`:
            // return dst + '/' + src.replace('.js', '.min.js');
            // Or to override to src:
            // return src;
            return src.replace('es5', 'min').replace('.js', '.min.js');
          }
        }]
      }
    },
  });

  // 加载插件
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 执行任务，任务名称是default
  grunt.registerTask('default', ['uglify']);

};
