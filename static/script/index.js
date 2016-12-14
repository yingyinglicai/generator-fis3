(function () {
    //人物1
    var twCloth1 = TweenMax.to('.market-cloth-1', 1, {y: $(window).height(), ease: Linear.easeNone});
    var c1Scene = new ScrollScene({
        triggerElement: '.m-section-market-1 .t-center',
        duration: $(window).height()
    }).setTween(twCloth1).addTo(controller);
    $(window).on('resize', function (e) {

        c1Scene.duration($(window).height());
    });
})();

(function () {
    //人物4
    var twCloth4 = TweenMax.fromTo('.market-cloth-4', 1, {
        y: -1 * $(window).height(),
        ease: Linear.easeNone
    }, {y: $(window).height(), ease: Linear.easeNone});
    var c4Scene = new ScrollScene({
        triggerElement: '.m-section-market-1 .t-center',
        duration: $(window).height() * 2
    }).setTween(twCloth4).addTo(controller);
    $(window).on('resize', function (e) {
        c4Scene.duration($(window).height() * 2);
    });
})();


(function () {
    //人物5
    var twCloth5 = TweenMax.from('.market-cloth-5', 1, {y: -1 * $(window).height(), ease: Linear.easeNone});
    var c5Scene = new ScrollScene({
        triggerElement: '.m-section-market-2 .t-center',
        duration: $(window).height()
    }).setTween(twCloth5).addTo(controller);

    $(window).on('resize', function (e) {
        c5Scene.duration($(window).height());
    });
})();


(function () {
    //人物5
    var twCloth5 = TweenMax.from('.market-cloth-6', 1, {y: -1 * $(window).height(), ease: Linear.easeNone});
    var c5Scene = new ScrollScene({
        triggerElement: '.m-section-market-3 .t-center',
        duration: $(window).height()
    }).setTween(twCloth5).addTo(controller);

    $(window).on('resize', function (e) {
        c5Scene.duration($(window).height());
    });
})();

(function () {
    //首屏图片预加载
    var preLoad = function () {
        var imgList = [];
        var timeout = 3000;
        var count = 0;
        var fire = false;
        var fireFn = function () {
            fire = true;
            $('.m-section-market-1').addClass('active');
            clearTimeout(timemac);
        }
        var timemac = setTimeout(fireFn, timeout);
        for (var i = 0, len = imgList.length; i < len; i++) {
            var img = new Image();
            var loadFn = function (e) {
                count++;
                if (count == len && !fire) {
                    fireFn();
                }
                ;
            }
            img.onload = loadFn;
            img.onerror = loadFn;
            img.src = imgList[i];
        }
    }
    preLoad();
    //侧边菜单
    ;
    (function () {
        $('.mod-nav-right ul').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 750,
            scrollThreshold: 0.5,
            filter: '',
            easing: 'swing'
        });
    })();
    //平滑滚动
    if (!(navigator.userAgent.indexOf('Firefox') >= 0) && !(navigator.userAgent.indexOf('MSIE') >= 0) && !(navigator.userAgent.indexOf('MSIE') >= 0) && !(navigator.userAgent.indexOf('Trident') >= 0)) {
        $('body').smoothWheel();
    }
    //文字适配
    var checkWindow = function () {
        var winHeight = $(window).height();
        if (winHeight < 650) {
            $('.top-icon').addClass('small');
            $('.top-title').addClass('small')
            //去掉图标,文字变化
        } else if (winHeight < 900) {
            //去掉图标,文字正常
            $('.top-icon').addClass('small');
            $('.top-title').removeClass('small');
        } else {
            //图标正常，文字正常
            $('.top-icon').removeClass('small');
            $('.top-title').removeClass('small');
        }
    }
    checkWindow();
    $(window).on('resize', checkWindow);

})();