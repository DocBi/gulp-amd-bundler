gulp = require 'gulp'
coffee = require 'gulp-coffee'
imgCssSprite = require 'gulp-img-css-sprite'

gulp.task 'compile', ->
	gulp.src('src/**/*.coffee')
		.pipe coffee()
		.pipe gulp.dest('lib')

gulp.task 'sprite', ->
	gulp.src('example/src/**/*.+(jpg|png)')
		.pipe imgCssSprite.imgStream
			padding: 2
		.pipe gulp.dest('example/dest')

gulp.task 'example', ['sprite'], ->
	bundler = require './lib/index'
	gulp.src(['example/src/index.js'])
		.pipe bundler
			baseDir: 'example/src'
			generateDataUri: true
			findVendor:
				requireBaseDir: 'example/dest'
				outDir: 'example/dest/lib'
				inDir: './'
				mkdir: true
				suffix: '-main'
				minifyJS: true
				minifyCSS: true
				overWrite: true
				mainMap:
					'react': 'dist/react.js'
					'react-with-addons': 'dist/react-with-addons.js@react'
					'angular-resource': '@bower-angular-resource'
			cssSprite: 
				base: 
					url: '//webyom.org'
					dir: 'example/src'
			beautifyTemplate: true
			trace: true
			isRelativeDependency: (dep, isRelative) ->
				if dep is './mod-b'
					false
				else
					isRelative
		.pipe gulp.dest('example/dest')

gulp.task 'default', ['compile']