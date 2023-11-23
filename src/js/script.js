jQuery(function ($) {
 
  // ロゴの表示 ローディング
  $(window).on('load', function () {
    $("#splash").delay(1500).fadeOut('slow');
    $("#splash_logo").delay(1200).fadeOut('slow');
  });
 

  // ヘッダー
  $(window).scroll(function () {
    const header = $('.p-header');
    const headerHeight = header.height();
    const scrollY = window.pageYOffset;

    if (scrollY >= 100) {
      header.addClass('header--sticky');
      $('body').css('margin-top', headerHeight + 'px');
    } else {
      header.removeClass('header--sticky');
      $('body').css('margin-top', '0');
    }
  });

  // ハンバーガーメニュー
  $(".js-hamburger").click(function () {
    $(".js-hamburger").toggleClass('is-active');
    $(".js-sp-nav").fadeToggle(300);
  });

  // ナビゲーションリンクのクリックを処理
  $(".sp-nav__item a").click(function () {
    $(".js-hamburger").removeClass('is-active');
    $(".js-sp-nav").fadeOut(300);

    var targetId = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(targetId).offset().top
    }, 100);
  });

// Micromodalの初期化
MicroModal.init({
  disableOverlayClose: true, // オーバーレイをクリックしても閉じないようにする
  disableScroll: true,        // 背後のスクロールを無効にする
});

// Micromodalの初期化
MicroModal.init({
  disableOverlayClose: true, // オーバーレイをクリックしても閉じないようにする
});

// モーダルの初期化
$(".modal__btn").click(function () {
  $(".js-hamburger").removeClass('is-active');
  $(".js-sp-nav").fadeOut(300);

  // Micromodalを使用してモーダルを表示
  MicroModal.show('modal-1');
});

// 閉じるボタンとオーバーレイの処理
$('#modal__close-btn').click(function () {
  // ✖印がクリックされたときだけモーダルを閉じる
  MicroModal.close('modal-1');
});

// SPナビのエントリーボタンがクリックされたときの処理
$(".p-nav__button .c-button, .sp-nav__btns .c-button").click(function () {
  $(".js-hamburger").removeClass('is-active');
  $(".js-sp-nav").fadeOut(300);
});

// 他のイベントハンドラは変更なし



  // フォームの送信処理
  const $submitBtn = $('#js-submit');
  $('#form input,#form textarea').on('change', function () {
    $submitBtn.prop('disabled', !(
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form input[type="password"]').val() !== "" &&
      $('#form #privacyCheck').prop('checked') === true
    ));
  });

  // フォーム送信処理 (Vanilla JavaScript)
  const form = document.getElementById('form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const formData = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeWd3EXzuxGmNNDByAZrVSbX1CSjFuCQjSq3ihZB4vKfO_2lw/formResponse', true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          window.location.href = "thanks.html";
          form.reset();
        }
      };
      xhr.send(formData);
    });
  }
});

// 全て入力しないと送信できない
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('loginForm');
  var submitButton = document.getElementById('js-submit');

  form.addEventListener('input', function () {
      var inputs = form.querySelectorAll('input[required]');
      var isFormValid = true;

      inputs.forEach(function (input) {
          if (!input.value.trim()) {
              isFormValid = false;
          }
      });

      submitButton.disabled = !isFormValid;

      // ボタンのスタイルを変更
      if (isFormValid) {
          submitButton.style.backgroundColor = 'orange';
      } else {
          submitButton.style.backgroundColor = 'gray';
      }
  });
});

// フォームに全て入力でボタン活性化

document.addEventListener("DOMContentLoaded", function () {
  // フォームと送信ボタンを選択
  const form = document.getElementById("form");
  const submitButton = document.getElementById("button");

  // すべての必須入力フィールドにinputイベントリスナーを追加
  const requiredInputs = form.querySelectorAll("[required]");
  requiredInputs.forEach(function (input) {
    input.addEventListener("input", function () {
      // フォームの妥当性に基づいて送信ボタンの色を変更
      if (form.checkValidity()) {
        submitButton.classList.remove("disabled");
      } else {
        submitButton.classList.add("disabled");
      }
    });
  });

  // ページ読み込み時にも一度チェックしてボタンの初期色を設定
  if (form.checkValidity()) {
    submitButton.classList.remove("disabled");
  } else {
    submitButton.classList.add("disabled");
  }

  // フォームを検証するための関数
  function validateForm() {
    // HTML5のcheckValidity()メソッドを使用してフォームの妥当性を確認
    return form.checkValidity();
  }
});