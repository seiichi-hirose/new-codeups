
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

//トップに戻るボタン スクロール検知
    $(window).on("scroll", function () {
    // トップから100px以上スクロールしたら
    if (100 < $(this).scrollTop()) {
        // is-showクラスをつける
        $(".js-to-top").addClass("is-show");
    } else {
        // 100pxを下回ったらis-showクラスを削除
        $(".js-to-top").removeClass("is-show");
    }
    });
    $(".js-to-top").click(function () {
    $("body,html").animate(
        {
        scrollTop: 0,
        },
        500
    ); //0.5秒かけてトップへ移動
    return false;
    });



//ハンバーガーメニュー
    $(".js-hamburger").on("click", function () {
    $(this, ".header").toggleClass("active");
    $("html").toggleClass("is-fixed");

    if ($(".js-hamburger").hasClass("active")) {
        $(".js-header-drawer").fadeIn();
    } else {
        $(".js-header-drawer").fadeOut();
    }
    });



//要素の取得とスピードの設定
var box = $('.colorbox'),
    speed = 700;

//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
$(this).append('<div class="image-color"></div>')
var color = $(this).find($('.image-color')),
image = $(this).find('img');
var counter = 0;

image.css('opacity','0');
color.css('width','0%');
//inviewを使って背景色が画面に現れたら処理をする
color.on('inview', function(){
    if(counter == 0){
            $(this).delay(200).animate({'width':'100%'},speed,function(){
                image.css('opacity','1');
                $(this).css({'left':'0' , 'right':'auto'});
                $(this).animate({'width':'0%'},speed);
            })
        counter = 1;
        }
    });
});


});


const swiper1 = new Swiper(".js-top-fv", {
    loop: true, // デフォルトはfalse
    autoplay: true, // 自動再生
    effect: 'fade', // フェード
    speed: 2000, // 2秒かけてフェード
    autoplay: { // 自動再生
        delay: 5000, // 1秒後に次のスライド（初期値：3000）
    },
});

const swiper2 = new Swiper(".js-top-campaign", {
    loop: true, // デフォルトはfalse
    // centeredSlides: true,
    autoplay: true, // 自動再生
    autoplay: { // 自動再生
        delay: 4000, // 4秒後に次のスライド
        disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
      },
    speed: 1000,
    autoHeight: true,
      // スライドの表示枚数
    slidesPerView: 1.25,
    spaceBetween: 24,
    breakpoints: {
        660: {
            slidesPerView: 2.25,
        },
        // スライドの表示枚数：769px以上の場合
        769: {
            slidesPerView: 2.6,
            spaceBetween: 40,
            // centeredSlides: true,
        },
        1260: {
            slidesPerView: 3.3,
            spaceBetween: 40,
            // centeredSlides: true,
        }
    },
      // 前後の矢印
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});