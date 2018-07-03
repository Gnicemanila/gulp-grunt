
var gulp = require("gulp");
var babel = require("gulp-babel");
var utf8Convert = require('gulp-utf8-convert');


// 压缩PC端所有js
// gulp
gulp.task("default", function() {
  return gulp.src("ssc/js/game/source/*.js") // ES6 源码存放的路径

    .pipe(utf8Convert({
      encNotMatchHandle: function(file) {
        console.log(file + " 编码错误，已经修改！");
      }
    }))

    .pipe(babel())
    .pipe(gulp.dest("ssc/js/game/es5")); //转换成 ES5 存放的路径
});





// 压缩移动端所有js
// gulp mobile
gulp.task("mobile", function() {
  return gulp.src("sscmobile/js/game/source/*.js") // ES6 源码存放的路径
    .pipe(utf8Convert({
      encNotMatchHandle: function(file) {
        console.log(file + " 编码错误，已经修改！");
      }
    }))
    .pipe(babel())
    .pipe(gulp.dest("ssc/js/game/es5")); //转换成 ES5 存放的路径
});






// 压缩单个js
// gulp jslhc
