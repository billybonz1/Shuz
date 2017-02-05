var gulp         = require('gulp'),
		sass         = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		cleanCSS    = require('gulp-clean-css'),
		browserSync  = require('browser-sync').create(),
		concat       = require('gulp-concat'),
		imagemin = require('gulp-imagemin'),
		pngquant    = require('imagemin-pngquant'),
		cache       = require('gulp-cache'),
		uglify       = require('gulp-uglify');

gulp.task('img', function() {
    return gulp.src('app/images/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('app/images'));
});

gulp.task('browser-sync', ['styles', 'scripts'], function() {
		browserSync.init({
				server: {
						baseDir: "./app"
				},
				notify: false
		});
});

gulp.task('styles', function () {
	return gulp.src('scss/*.scss')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	//.pipe(cleanCSS())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	return gulp.src([



		'./app/libs/jquery/jquery-2.1.4.min.js',



        './app/libs/animatedModal/js/animatedModal.js',

		'./app/libs/slick/slick.min.js',
		'./app/js/PageScroll2id.min.js',


		'./app/js/waypoints.min.js',


		'./app/libs/fancyBox/source/jquery.fancybox.js',



		'./app/libs/phone/jquery.maskedinput.js',
		'./app/libs/phone/jquery.maskedinput.min.js',
		'./app/libs/aos/dist/aos.js',


		'./app/js/wow.js',
		'./app/js/jquery.countTo.js',




	])
		.pipe(concat('libs.js'))
		//.pipe(uglify()) //Minify libs.js
		.pipe(gulp.dest('./app/js/'));
});

gulp.task('common', function() {
  return gulp.src('./app/js/common.js')
    .pipe(uglify())
    .pipe(gulp.dest('./app/js/'));
});

gulp.task('watch', function () {
	gulp.watch('scss/*.scss', ['styles']);
	gulp.watch('app/libs/**/*.js', ['scripts']);
	gulp.watch('app/js/*.js').on("change", browserSync.reload);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);