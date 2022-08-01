// gulpfile.js


const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const nodemon = require('gulp-nodemon');

// 合併檔案
const concat = require('gulp-concat');
// Sass
const sass = require('gulp-sass')(require('sass'));
const tildeImporter = require('node-sass-tilde-importer');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const cssnano = require("cssnano");
const autoprefixer = require('autoprefixer');

// 圖片壓縮

const imagemin = require('gulp-imagemin');
// const mozjpeg = require('imagemin-mozjpeg');
// const pngquant = require('imagemin-pngquant');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegtran = require('imagemin-jpegtran');
const svgo = require('gulp-svgo');
const webp = require('gulp-webp');
// const cache = require('gulp-cache');

sass.compiler = require('dart-sass');
gulp.task('img', () => {
  return gulp
    .src('assets/img/**')
    .pipe(imagemin([
      imageminJpegtran({
        quality: 10,
      }),
      imageminPngquant({
        quality: [0.4, 0.6],
        speed: 1,
      }),
    ]))
    .pipe(gulp.dest('assets/dist/img'));
});

gulp.task('svg', () => {
  return gulp
    .src('assets/img/**')
    .pipe(svgo())
    .pipe(gulp.dest('assets/dist/img'));
});
gulp.task('icons', () => {
  return gulp
    .src('assets/img/icons/**')
    .pipe(svgo())
    .pipe(gulp.dest('assets/dist/icons'));
});
gulp.task('webpimgs', () =>

  gulp.src('assets/Ai/0801/**')
  .pipe(imagemin([
      imageminJpegtran({
        quality: 10,
      }),
      imageminPngquant({
        quality: [0.4, 0.6],
        speed: 1,
      }),
    ]))
  .on('error', (err) => {
    console.log(err);
  })
  .pipe(gulp.dest('assets/Ai/dist/'))
);
gulp.task('webp', () =>
  gulp.src('assets/img/**')
  .pipe(webp())
  .on('error', (err) => {
    console.log(err);
  })
  .pipe(gulp.dest('assets/dist/img'))
);

// Sass 編譯
gulp.task('sass', () => {
  var plugins = [
    autoprefixer(),
    // cssnano()
  ];
  return gulp
    .src('assets/scss/*.scss')
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(sass({
        importer: tildeImporter,
        outputStyle: 'expanded' // nested expanded compact compressed
      })
      .on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.', {
      sourceRoot: '../scss/'
        // 寫入Sourcemaps 到當前資料夾(以下下列 dest('assets/css')為基準點，
        // SourceRoot：以匯出的資料夾為基準點找他原本的scss資料夾位置。
    }))
    .pipe(gulp.dest('assets/css'))
});


function buildStyles() {
  return gulp.src('assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
};

exports.buildStyles = buildStyles;
exports.watch = function() {
  gulp.watch('assets/scss/*.scss', ['sass']);
};


// gulp.task('watch', () => {
//     gulp.watch('assets/scss/*.scss', gulp.series('sass'));
// });

// gulp.task('iconfonts', function(done){
//   var iconStream = gulp.src(['assets/_icons/*.svg'])
//     .pipe(iconfont({ fontName: 'turbo_blur' }));

//   async.parallel([
//     function handleGlyphs (cb) {
//       iconStream.on('glyphs', function(glyphs, options) {
//         gulp.src('assets/_icons/_templates/_icons.css')
//           .pipe(consolidate('lodash', {
//             glyphs: glyphs,
//             fontName: 'turbo_blur',
//             fontPath: 'assets/fonts/',
//             className: 'tub-'
//           }))
//           .pipe(gulp.dest('assets/css/dist/'))
//           .on('finish', cb);
//       });
//     },
//     function handleFonts (cb) {
//       iconStream
//         .pipe(gulp.dest('assets/fonts/'))
//         .on('finish', cb);
//     }
// ], done);
// });


// gulp.task('watch', function() {
//   gulp.watch('app/css/*.css', gulp.series('styles'));
//   gulp.watch('app/js/*.js', gulp.series('scripts'));
//   gulp.watch('app/img/*', gulp.series('images'));
// });

// gulp.task('iconfonts', function(done){
//   var iconStream = gulp.src([path.source + 'icons/*.svg'])    // 載入 svg
//     .pipe(iconfont({ fontName: 'icon' }));                    // 定義 fontName

//   async.parallel([
//     function handleGlyphs (cb) {
//       iconStream.on('glyphs', function(glyphs, options) {
//         gulp.src(path.source + 'assets/css_template/iconfonts.css')  // 取用要輸出的 CSS 樣板
//           .pipe(consolidate('lodash', {
//             glyphs: glyphs,
//             fontName: 'turbo_blur',
//             fontPath: 'fonts/',                            // CSS 對應的字體路徑
//             className: 'tub-'                         // CSS Class 的前輟詞
//           }))
//           .pipe(gulp.dest(path.public + 'stylesheets'))       // CSS 輸出資料夾
//           .on('finish', cb);
//       });
//     },
//     function handleFonts (cb) {
//       iconStream
//         .pipe(gulp.dest(path.public + 'fonts/'))              // 字體輸出資料夾
//         .on('finish', cb);
//     }
//   ], done);
// });
// gulp.task('deploy', () => {
//     return gulp
//         .src('dist/**/*')
//         .pipe($.ghPages());
// });



// git clone https://github.com/Barry028/eHrApp.git
// function sass() {
//     return (
//         gulp.src('scss/*.scss')
//         .pipe(sourcemaps.init({
//             loadMaps: true
//         }))
//         // Initialize sourcemaps before compilation starts
//         .pipe(sass({
//             outputStyle: 'expanded' //nested expanded compact compressed
//         }))
//         .on("error", sass.logError)
//         // Use postcss with autoprefixer and compress the compiled file using cssnano
//         .pipe(postcss([autoprefixer(), cssnano()]))
//         // Now add/write the sourcemaps
//         .pipe(sourcemaps.write('.', {
//             includedContent: false,
//             sourceRoot: '../scss'
//         }))
//         .pipe(gulp.dest('dist/css'))
//         .pipe(browserSync.stream())
//     );
// }


// We don't have to expose the reload function
// It's currently only useful in other functions

// function scripts() {
//     return gulp.src(paths.src, {
//             sourcemaps: true
//         })
//         .pipe(babel()) // 使用babel轉成瀏覽器所看的懂的JavaScript
//         .pipe(uglify()) // 將程式碼壓縮成一行
//         //.pipe(concat('index.min.js')) // 合併所有檔案
//         .pipe(gulp.dest(paths.dest)); // 編譯後產出到指定資料夾中
// }



// function nodemons(done) {
//     nodemon({
//         script: 'dist/index.js' // 使用nodemon監聽指定的程式碼
//             ,
//         ext: 'js' // 監聽JavaScript
//             ,
//         watch: paths.src // watch ES2015 code
//             ,
//         tasks: ['default'] // compile synchronously onChange
//             ,
//         env: {
//             'NODE_ENV': 'development'
//         }
//     })
//     done();
// }



// const build = gulp.series(clean, gulp.parallel(scripts));
// const serve = gulp.series(clean, scripts, nodemons);

// // deploy product
// gulp.task('default', build);
// // development 開發模式
// gulp.task('serve', serve);


// gulp.task('watch', function() {
//     gulp.watch('scss/*.scss', gulp.series('sass'));

// });