const gulp = require("gulp");
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

//パス設定
const paths = {
    dev: {
        img: './dev/assets/images/**/*.{jpg,png,gif,svg,ico}'
    },
    dist: {
        img: './dist/assets/images'
    }
};

// 画像圧縮
// jpgファイルは圧縮しない
gulp.task('img', () => {
    const dev = paths.dev.img;
    const dist = paths.dist.img;

    return gulp.src(dev)
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error %>')
        }))
        .pipe(
            imagemin([
                imagemin.gifsicle({ interlaced: true }),
                imagemin.svgo({
                    plugins: [
                        { removeViewBox: true },
                        { cleanupIDs: false }
                    ]
                }),
                pngquant({ floyd: 0, quality: '100', speed: 1 })
            ])
        )
        .pipe(gulp.dest(dist));
});