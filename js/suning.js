window.onload = function () {
    //轮播图
    let banner = document.querySelector(".banner")

    let index = 0;
    let now = 0;
    $(".banner_tuPian .banner_pic").css("opacity", 0).eq(index).css("opacity", 1)

    function change() {

        index++;
        if (index >= $(".banner_tuPian .banner_pic").length) {
            index = 0;
        }


        $(".banner_tuPian .banner_pic").css("opacity", 0).eq(index).css("opacity", 1)

        // console.log($(".backcolor"));
        $(".banner_anniu1").click(function () {
            let index1 = $(this).index();
            $(".banner_anniu1").removeClass("hot").eq(index1).addClass("hot");


            $(".banner_tuPian .banner_pic").css("opacity", 0).eq(index1).css("opacity", 1);

            banner.className = "banner"
            banner.classList.add("backcolor" + index1)
            index = index1;
        })
        $(".banner_anniu1").removeClass("hot").eq(index).addClass("hot");

        $(".banner_lbtn").click(function () {
            index--;
            if (index < 0) {
                index = $(".banner_tuPian .banner_pic").length - 1;
            }

            $(".banner_anniu1").removeClass("hot").eq(index).addClass("hot");


            $(".banner_tuPian .banner_pic").css("opacity", 0).eq(index).css("opacity", 1);

            banner.className = "banner"
            banner.classList.add("backcolor" + index)
        })
        $(".banner_rbtn").click(function () {
            index++;
            if (index >= $(".banner_tuPian .banner_pic").length) {
                index = 0;
            }

            $(".banner_anniu1").removeClass("hot").eq(index).addClass("hot");


            $(".banner_tuPian .banner_pic").css("opacity", 0).eq(index).css("opacity", 1);

            banner.className = "banner"
            banner.classList.add("backcolor" + index)
        })


        banner.className = "banner";

        banner.classList.add("backcolor" + index)
        now = index;
    }

    let t = setInterval(change, 2000);
    $(".banner_tuPian").mouseenter(function () {
        clearInterval(t)
        $(".banner_btn").css("display", "block")
    })
    $(".banner_tuPian").mouseleave(function () {
        t = setInterval(change, 2000);
        $(".banner_btn").css("display", "none")

    })

    // 顶部开头隐藏

    $(window).scroll(function () {
        let top = $(this).scrollTop();
        // console.log(top)
        if (top >= 620) {
            $(".topTitle").css("display", "block");
        } else {
            $(".topTitle").css("display", "none");

        }


    })

    //网站导航

    $(".wenDaohang").mouseenter(function () {
        $(".tanchu11")
            .css("height", "242px")
            .css("border", "1px solid #CBC7D2")
        $(".wenDaohang").css("background-color", "white")
        $(".wenDaohang .tanchu_zhezhao").css("display", "block")
    })
    $(".wenDaohang").mouseleave(function () {
        $(".tanchu11").css("height", "0").css("border", "0");
        $(".wenDaohang .tanchu_zhezhao").css("display", "none")
        $(".wenDaohang").css("background-color", "#F5F5F5")


    })
    //商家入驻
    $(".shangjiaruzhu").mouseenter(function () {
        $(".theMostTop_fuyemian").css("height", "124px").css("border", "1px solid #CBC7D2")
        $(".shangjiaruzhu").css("background-color", "white")
        $(".shangjiaruzhu .tanchu_zhezhao").css("display", "block")
    })
    $(".shangjiaruzhu").mouseleave(function () {
        $(".theMostTop_fuyemian").css("height", "0").css("border", "0");
        $(".shangjiaruzhu .tanchu_zhezhao").css("display", "none")
        $(".shangjiaruzhu").css("background-color", "#F5F5F5")
    })
    //客服中心
    $(".kehufuwu").mouseenter(function () {
        $(".curstonServer").css("height", "124px").css("border", "1px solid #CBC7D2")
        $(".kehufuwu").css("background-color", "white")
        $(".kehufuwu .tanchu_zhezhao").css("display", "block")
    })
    $(".kehufuwu").mouseleave(function () {
        $(".curstonServer").css("height", "0").css("border", "0");
        $(".kehufuwu .tanchu_zhezhao").css("display", "none")
        $(".kehufuwu").css("background-color", "#F5F5F5")
    })
    //我的订单
    $(".top_dingdan").mouseenter(function () {
        $(".mydingdan").css("height", "127px").css("border", "1px solid #CBC7D2")
        $(".top_dingdan").css("background-color", "white")
        $(".top_dingdan .tanchu_zhezhao").css("display", "block")
    })
    $(".top_dingdan").mouseleave(function () {
        $(".mydingdan").css("height", "0").css("border", "0");
        $(".top_dingdan .tanchu_zhezhao").css("display", "none")
        $(".top_dingdan").css("background-color", "#F5F5F5")
    })
    //我的易购
    $(".top_dingdan1").mouseenter(function () {
        $(".myYigou").css("height", "163px").css("border", "1px solid #CBC7D2")
        $(".top_dingdan1").css("background-color", "white")
        $(".top_dingdan1 .tanchu_zhezhao").css("display", "block")
    })
    $(".top_dingdan1").mouseleave(function () {
        $(".myYigou").css("height", "0").css("border", "0");
        $(".top_dingdan1 .tanchu_zhezhao").css("display", "none")
        $(".top_dingdan1").css("background-color", "#F5F5F5")
    })
    //我的购物
    $(".top_dingdan2").mouseenter(function () {
        $(".allGouwu").css("height", "402px").css("border", "1px solid #CBC7D2")
        $(".top_dingdan2").css("background-color", "white")
        $(".top_dingdan2 .tanchu_zhezhao").css("display", "block")
    })
    $(".top_dingdan2").mouseleave(function () {
        $(".allGouwu").css("height", "0").css("border", "0");
        $(".top_dingdan2 .tanchu_zhezhao").css("display", "none")
        $(".top_dingdan2").css("background-color", "#F5F5F5")
    })
    //手机苏宁
    $(".top_dingdan3").mouseenter(function () {
        $(".phone_sunig").css("height", "222px").css("border", "1px solid #CBC7D2")
        $(".top_dingdan3").css("background-color", "white")
        $(".top_dingdan3 .tanchu_zhezhao").css("display", "block")
    })
    $(".top_dingdan3").mouseleave(function () {
        $(".phone_sunig").css("height", "0").css("border", "0");
        $(".top_dingdan3 .tanchu_zhezhao").css("display", "none")
        $(".top_dingdan3").css("background-color", "#F5F5F5")
    })





    //楼层开始
    let arr = $(".loucengkongzhi").map(function () {
        let num = $(this).offset().top;
        return num;
    });

    let newarr = arr.toArray();
    // console.log(newarr)
    let flag = true;

    $(window).scroll(function () {
        if (!flag) {
            return
        }
        let top = $(this).scrollTop();
        let index = newarr.findIndex((item) => item > top);
        top >= 964 ? $(".louceng").css("display", "block") : $(".louceng").css("display", "none")
        if (index >= 0) {
            $(".louceng_list li")
                .removeClass("active")
                .eq(index)
                .addClass("active")
        }

        $(".louceng_list li").click(function () {
            let index = $(this).index()
            flag = false
            $("html")
                .stop()
                .animate({ scrollTop: arr[index] - 200 }, function () {
                    flag = true
                })
            $(".louceng_list li")
                .removeClass("active")
                .eq(index)
                .addClass("active")
        })
        $(".zhiding").click(function () {
            let index = $(this).index()
            flag = false
            $("html")
                .stop()
                .animate({ scrollTop:0}, function () {
                    flag = true
                })
            $(".zhiding")
                .removeClass("active")
                .eq(index)
                .addClass("active")
            $(".louceng").css("display","none");

        })





    })

    $(".sousuo_liubai").focus(function(){
        $(".sousuo_centerDown").css("display","block")
    })
    $(".sousuo_liubai").blur(function(){
        $(".sousuo_centerDown").css("display","none")
    })
































    let banner_daohang=document.getElementsByClassName("banner_daohang")[0];
    let lis=banner_daohang.getElementsByTagName("li");
    let banner_main=banner_daohang.getElementsByClassName("banner_main");
    // console.log(lis);
    //轮播图左部
    for(let i=0;i<lis.length;i++){
        lis[i].onmouseenter=function () {
            banner_main[i].style.display="block";
        }
        lis[i].onmouseleave=function () {
            banner_main[i].style.display="none";
        }
    }
    //轮播图左完


    // let banner_tuPian=document.querySelector(".banner_tuPian");
    // let img= banner_tuPian.querySelectorAll(".banner_pic");
    // let forward=banner_tuPian.getElementsByClassName("banner_btn")[1];
    // let back=banner_tuPian.getElementsByClassName("banner_btn")[0];

    // let backcolor=document.querySelectorAll(".banner_pic")
    //     console.log(backcolor)
    // let now=0;
    // let next=0;
    // let width=830;

    // function fn(){
    //     next++;
    //     if(next==img.length){
    //         next=0;
    //     }
    //     img[next].style.left=width+"px";
    //     animate(img[now],{left:-width});
    //     animate(img[next],{left:0});







    //     now=next;
    // }

    // setInterval(fn,1000);



    // let fn=function(){
    //     for (let i=0;i<img.length;i++){
    //         img[i].style.zIndex="5";
    //     }


    //     img[num].style.zIndex="10";
    //     num++;
    //     if(num==5){
    //         num=0;
    //     }
    // }
    // let t=setInterval(fn,2000);
    // banner_tuPian.onmouseenter=function () {
    //     clearInterval(t)
    // }
    // banner_tuPian.onmouseleave=function () {
    //     t=setInterval(fn,2000)
    // }

    // function move() {
    //     for (let i=0;i<img.length;i++){
    //         img[i].style.zIndex="5";
    //     }
    //     num++;
    //     img[num].style.zIndex="10";
    //     if(num==5){
    //         num=0;
    //     }
    // }
    // function move1() {
    //     for (let i=0;i<img.length;i++){
    //         img[i].style.zIndex="5";
    //     }
    //     num--;
    //     img[num].style.zIndex="10";
    //     if(num<0){
    //         num=5;
    //     }
    // }
    // forward.onclick=move;
    // back.onclick=move1;

}