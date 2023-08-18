
//打包工作的引用
const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');

//任務1
function defaultTask(cb) {
    console.log('hello 中午吃飯');
    cb();
}

exports.log = defaultTask;


// 任務A
function taskA(cb){
    console.log('任務A');
    cb();
}

// 任務B
function taskB(cb){
    console.log('任務B');
    cb();
}

exports.sync = parallel(taskA , taskB);//同時執行A B任務
exports.async = series(taskA , taskB);//執行A後再執行B任務


//檔案搬家任務

function move(){
    return src('src/index.html').pipe(dest('dist'))
}

exports.m = move;


//html 架構整合


const fileinclude = require('gulp-file-include');  //引入套件

function includeHTML() {
    return src('src/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('./dist'));
}

exports.template = includeHTML



// sass

const sass = require('gulp-sass')(require('sass'));


function styleSass() {
    return src('./src/sass/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(dest('./dist/css'));
}

exports.style = styleSass


