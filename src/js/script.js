
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
    $(this,".header").toggleClass("active");
    $("html").toggleClass("is-fixed");

    if ($(".js-hamburger").hasClass("active")) {
      $(".js-header-drawer").fadeIn();
    } else {
      $(".js-header-drawer").fadeOut();
    }
  });



});
