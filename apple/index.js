$(function () {
    // var next=0;
    // var now=0;
    // $(".imgbox>a").css("left",a+"px").eq(0).css("left","0px");
    // function ban(type) {
    //     var a=document.documentElement.clientWidth;
    //     var type=type||"right";
    //     if(type=="right"){
    //         next++;
    //         if(next>=$(".imgbox>a").length){
    //             next=0;
    //         }
    //         // $(".imgbox>a").eq(now).css("marginLeft",'0px');
    //         $(".imgbox>a").eq(next).css("left",a+'px');
    //         $(".imgbox>a").eq(now).animate({left:'-'+a+'px'});
    //         $(".imgbox>a").eq(next).animate({left:'0px'});
    //         now=next;
    //     }else if(type=="left"){
    //         next--;
    //         if(next<=-1){
    //             next=$(".imgbox>a").length-1;
    //         }
    //         $(".imgbox>a").eq(next).css("left",'-'+a+'px');
    //         $(".imgbox>a").eq(now).animate({left:a+'px'});
    //         $(".imgbox>a").eq(next).animate({left:'0px'});
    //         now=next;
    //     }
    // }


    function banner() {
        var cw = document.documentElement.clientWidth;
        $(".imgbox>a").css("left", cw + "px").eq(0).css("left", "0");
        var t = setInterval(move, 1000)
        var next = 0;
        var now = 0;

        function arg(cw) {
            $(".imgbox>a").eq(next).css("left", cw + "px");
            $(".imgbox>a").eq(now).css("left", "0");
            $(".imgbox>a").eq(next).animate({left: "0"});
            $(".imgbox>a").eq(now).animate({left: -cw + "px"});
            $(".con>li").removeClass().eq(next).addClass("active");
            now = next;
        }

        function move(type, speed) {
            type = type || "right";
            if (type == "right") {
                next++;
                if (next >= $(".imgbox>a").length) {
                    next = 0;
                }
                arg(cw)
            } else if (type == "left") {
                next--;
                if (next <= -1) {
                    next = $(".imgbox>a").length - 1;
                }
                arg(-cw);
            }
        }
        $(".banner").mouseover(function () {
            clearInterval(t)
        })
        $(".banner").mouseout(function () {
            t=setInterval(t)
        })
        $(".leftbtn").click(function () {
            move("left")
        })
        $(".rightbtn").click(function () {
            move("right")
        })
        $(".con>li").each(function(index,obj){
            $(obj).click(function(){
                if(index<now){
                    next=index;
                    arg(-cw);
                }else{
                    next=index;
                    arg(cw);
                }
            })
        })

    }
    banner()
    // $(".leftbtn").hover(function () {
    //     $(".leftbtn").css("display","block")
    // },function () {
    //     $(".leftbtn").css("display","none")
    // })
})
