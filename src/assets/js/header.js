import $ from 'jquery';

export function header() {
  // 1.gnb 마우스오버, 포커스시 밑줄 => span.bar
  $(function () {
    $('.gnb li a').on('mouseenter focus', function () {
      const bar = $(this).position().left;
      const winNum = $(this).width();
      $('span.bar').css({ left: bar + 'px', width: winNum + 'px', opacity: 1 });
    });
    $('.gnb li a').on('mouseleave', function () {
      $('span.bar').css({ left: 0, width: 0, opacity: 0 });
    });
  });
}
