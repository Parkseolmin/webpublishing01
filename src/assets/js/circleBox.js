import $ from 'jquery';

// circleBox SVG 길이 구하기
export function circleBox() {
  $(function () {
    $('.svgAni')
      .find('path')
      .each(function (i, path) {
        let length = path.getTotalLength();
      });
  });
}
