
//ÏÔÊ¾ËÑË÷
var iconSearch=(function () {
    var $header_search=$('.icon_search'),
        $inputSearch=$('.search');
    var isBok=false;
    return {
        init:function () {
            $header_search.tap(function () {
                if(isBok){
                    $inputSearch.css({height:0});
                    isBok=false;
                    return;
                }
                $inputSearch.css({
                    height:'.88rem'
                });
                isBok=true;
            })
        }
    }
})();
iconSearch.init();
