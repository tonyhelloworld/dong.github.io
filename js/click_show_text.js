/*
 * @Author: xuesongLi 
 * @Date: 2019-11-29 10:02:48 
 * @Last Modified by: 
 * @Last Modified time: 2019-12-10 17:07:46
 */

var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array
        ("富强", "爱国", "和谐","敬业", "友善");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "font-family": "Ovo",
            //  Ovo, Georgia, STZhongsong, "Microsoft YaHei", serif;
            "color": "#FFB6C1"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
            3000,
            function() {
                $i.remove();
            });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}