
//打包工作的引用
const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');

//任務
function defaultTask(cb) {
    console.log('hello 中午吃飯');
    cb();
}

exports.log = defaultTask;