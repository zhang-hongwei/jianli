//->解决click的300ms延迟
FastClick.attach(document.body);

//->动态计算REM的值
~function () {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / 640 * 100 + "px";
}();



//->初始化Swiper
new Swiper(".swiper-container", {
    loop: true,
    direction: "vertical",
    onSlidePrevEnd: changeEnd,
    onSlideNextEnd: changeEnd
});


//->获取每个Id下的动画
function changeEnd(swiper) {
    var n = swiper.activeIndex,
        slideAry = swiper.slides;
    [].forEach.call(slideAry, function (slide, index) {
        if (n === index) {
            if(n===1||n===6){
                slide.id="page1";
                return
            }
            if(n===2){
                slide.id="page2";
                return
            }
            if(n===3){
                slide.id="page3";
                return
            }
            if(n===4){
                slide.id="page4";
                return
            }
            if(n===5||n===0){
                slide.id="page5";
                return
            }
        }
        slide.id = null;
    });
}



//->音频的自动播放
var music = document.getElementById("music"),
    musicAudio = document.getElementById("musicAudio");
window.setTimeout(function () {
    musicAudio.play();
    musicAudio.addEventListener("canplay", function () {
        music.style.display = "block";
        music.className = "music move";
    }, false);
}, 1000);
music.addEventListener("click", function () {
    if (musicAudio.paused) {
        musicAudio.play();
        music.className = "music move";
        return;
    }
    musicAudio.pause();
    music.className = "music";
}, false);





