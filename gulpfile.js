const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');


function css(done){
    src('src/scss/**/*.scss') //Lo identifica
        .pipe(plumber())
        .pipe(sass()) //Lo compila
        .pipe((dest('build/css'))) //Lo almacena en el hdd


    done();
}


function dev(done){
    watch('src/scss/**/*.scss', css)

    done()
}

exports.css = css
exports.dev = dev