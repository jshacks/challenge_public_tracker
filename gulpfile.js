var gulp = require('gulp');
var clean = require('gulp-clean');
var inject = require('gulp-inject');

gulp.task('clean', function () {
    gulp.src([
        './public/libs'
    ], {read: false})
        .pipe(clean());
});

gulp.task('copyLibs', function () {
    var libs = [
        './bower_components/angular/angular.js',
        './bower_components/underscore/underscore.js',
        './bower_components/angular-sanitize/angular-sanitize.min.js',
        './bower_components/angular-animate/angular-animate.min.js',
        './bower_components/ngToast/dist/ngToast.js',
        './bower_components/angular-ui-router/release/angular-ui-router.js',
        './bower_components/satellizer/satellizer.min.js',
        './bower_components/bootstrap/dist/css/bootstrap.min.css'
    ];

    gulp.src(libs)
        .pipe(gulp.dest('./public/libs'));
});

gulp.task('inject', function () {
    var libsDir = './public/libs/';

    var target = gulp.src('./public/index.html');

    var css = gulp.src('./public/src/css/*.css');

    var jsLibs = gulp.src([
        libsDir + 'underscore.js',
        libsDir + 'angular.js',
        libsDir + 'angular-sanitize.min.js',
        libsDir + 'angular-animate.min.js',
        libsDir + 'ngToast.js',
        libsDir + 'angular-ui-router.js',
        libsDir + 'satellizer.min.js'
    ]);

    var app = gulp.src('./public/app/**/*.js');

    var cssLibs = gulp.src(libsDir + '*.css');

    return target.pipe(inject(jsLibs, {
        relative: false,
        starttag: '<!-- inject:libs:js -->'
    })).pipe(inject(cssLibs, {
        relative: false,
        starttag: '<!-- inject:libs:css -->'
    })).pipe(inject(css, {
        relative: false,
        starttag: '<!-- inject:app:css -->'
    })).pipe(inject(app, {
        relative: false,
        starttag: '<!-- inject:app:{{ext}} -->'
    })).pipe(gulp.dest('./public'));
});

gulp.task('build', ['clean'], function () {
    setTimeout(function () {
        gulp.start(['copyLibs']);
    }, 1000);
});

gulp.task('watch', function () {
    gulp.watch(['./source/**'], ['build-dev']);
});
