const {src, dest, watch, parallel} = require('gulp');

//Css
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

//Imagenes
const webp = require('gulp-webp');


function css(done){
    src('src/scss/**/*.scss') //Lo identifica
        .pipe(plumber())
        .pipe(sass()) //Lo compila
        .pipe((dest('build/css'))) //Lo almacena en el hdd


    done();
}

function versionWebp( done ){

    const opciones = {
        quality: 50
    }

    src('img/**/*.{png,jpg}')
        .pipe( webp(opciones) )
        .pipe( dest('build/img') )
    
    done()
}


function dev(done){
    watch('src/scss/**/*.scss', css)

    done()
}

exports.css = css;
exports.versionWebp = versionWebp;
exports.dev = parallel(dev, versionWebp)