var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var bowerFiles = require('main-bower-files');
var browserSync = require('browser-sync');
var eventStream = require('event-stream');

var paths = {
	scripts: './app/**/*.js',
	styles: ['./app/**/*.css', './app/**/*.scss'],
	images: './app/**/*',
	index: './app/index.html',
	partials: ['./app/**/*.html', '!app/index.html'],
	distDev: './dist.dev',
	distProd: './dist.prod'
};

var pipes = {};
pipes.orderedVendorScripts = function() {
	return plugins.order(['jquery.js', 'angular.js']);

};

pipes.buildVendorScriptDev = function() {
	return gulp.src(bowerFiles())
	.pipe(gulp.dest(paths.distDev + '/bower_components'));
};

pipes.buildAppScriptDev = function() {
	return gulp.src(paths.scripts)
	.pipe(plugins.concat('app.js'))
	.pipe(gulp.dest(paths.distDev));
};

pipes.buildStyleDev = function(){
	return gulp.src(paths.styles)
	.pipe(gulp.dest(paths.distDev + '/css'));
};
//for index
pipes.buildIndexDev = function() {
	var orderedVendorScripts = pipes.buildVendorScriptDev()
	.pipe(pipes.orderedVendorScripts());

	var orderedAppScripts = pipes.buildAppScriptDev();
	var appStyles = pipes.buildStyleDev();

	return gulp.src(paths.index)
	.pipe(gulp.dest(paths.distDev))
	.pipe(plugins.inject(orderedVendorScripts, {relative:true, name: 'bower'}))
	.pipe(plugins.inject(orderedAppScripts, {relative: true}))
	.pipe(plugins.inject(appStyles, {relative: true}))
	.pipe(gulp.dest(paths.distDev));
};

pipes.buildPartialsFilesDev = function() {
	return gulp.src(paths.partials)
	.pipe(gulp.dest(paths.distDev));
};

pipes.prosessedImagesDev = function(){
	return gulp.src(paths.images)
	.pipe(gulp.dest(paths.distDev + '/img'));
};



pipes.buildAppDev = function(){
	return eventStream.merge(pipes.buildIndexDev(),
							  pipes.buildPartialsFilesDev(),
							  pipes.prosessedImagesDev() )
}
//task
gulp.task('build-app-script-dev', pipes.buildAppScriptDev);

gulp.task('build-index-dev', pipes.buildIndexDev);

gulp.task('build-partials', pipes.buildPartialsFilesDev);

gulp.task('build-app-dev', pipes.buildAppDev);

gulp.task('build-styles', pipes.buildStyleDev);

gulp.task('watch-dev', ['build-app-dev'], function() {
	var reload = browserSync.reload;

	browserSync({
		port: 8000,
		server: {
			baseDir:paths.distDev
		}
	});


gulp.watch(paths.index, function(){
	return pipes.buildIndexDev()
	.pipe(reload({stream: true}));
});

gulp.watch(paths.scripts, function(){
	return pipes.buildAppScriptDev()
	.pipe(reload({stream: true}));
});

gulp.watch(paths.partials, function(){
	return pipes.buildPartialsFilesDev()
	.pipe(reload({stream: true}));
});	

gulp.watch(paths.styles, function(){
	return pipes.buildStyleDev()
	.pipe(reload({stream: true}));
});	

});

