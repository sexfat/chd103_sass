
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
