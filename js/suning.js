window.onload=function () {
    let banner_daohang=document.getElementsByClassName("banner_daohang")[0];
    let lis=banner_daohang.getElementsByTagName("li");
    let banner_main=banner_daohang.getElementsByClassName("banner_main");
    // console.log(lis);
    for(let i=0;i<lis.length;i++){
        lis[i].onmouseenter=function () {
            banner_main[i].style.display="block";
        }
        lis[i].onmouseleave=function () {
            banner_main[i].style.display="none";
        }
    }
}