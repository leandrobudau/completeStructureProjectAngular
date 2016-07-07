//Variables declaration
var gulp = require('gulp'),
    usemin = require('gulp-usemin'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    minifyHtml = require('gulp-minify-html'),
    cleanCSS = require('gulp-clean-css'),
    rev = require('gulp-rev'),
    imagemin = require('gulp-imagemin'),
    less = require('gulp-less'),
    connect = require('gulp-connect'),
    pug = require('gulp-pug'),
    templateCache = require('gulp-angular-templatecache'); 
/**
 * build
 * Create build of the aplication
 */
gulp.task('build', ['image', 'usemin']);
gulp.task('image', function () {
    return gulp.src('./src/assets/img/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/assets/img'))
});
gulp.task('usemin', function () {
    gulp.src('./src/**/*.html')
        .pipe(usemin({
            css: [],
            js: []
        }))
        .pipe(gulp.dest('build/'))
        //.pipe(connect.reload())
});

gulp.task('buildFonts', function () {
    return gulp.src('bower_components/font-awesome/fonts/*.*')
        .pipe(gulp.dest('build/css/fonts'));
});

gulp.task('reload', function () {
    gulp.src(['./src/**/*.pug', './src/**/*.js'])
        .pipe(connect.reload());
});

gulp.task('less', function () {
    gulp.src('./src/assets/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./src/assets/css'))
        .pipe(connect.reload());
});

gulp.task('connect', function () {
    connect.server({
        port: 5000,
        livereload: true
    });
});

gulp.task('pug', function () {
    gulp.src(['./src/pug/**/*.pug'])
        .pipe(pug())
        .pipe(gulp.dest('./src/'));
});

gulp.task('templateCache', function () {
    gulp.src(['./src/pug/templates/**/*.pug'])
        .pipe(pug())
        .pipe(templateCache())
        .pipe(gulp.dest('./src/modules/')); 
});




gulp.task('watch', function () {
    gulp.watch('./src/assets/less/**/*.less', ['less']);
    gulp.watch('./src/pug/**/*.pug', ['pug', 'templateCache']);
    gulp.watch(['./src/**/*.html', './src/**/*.js', './src/assets/img/**/*.*'], ['reload']);
});

gulp.task('default', ['connect', 'watch']);