/**
 * Created by qiubeixin on 2017/2/25.
 */
~function () {
    var desW = 640;
    var winW = document.documentElement.clientWidth;
    if (winW >= 640) {
        // document.documentElement.style.fontSize='60px';
        return;
    };
    document.documentElement.style.fontSize = winW / desW * 100 + 'px';
}();