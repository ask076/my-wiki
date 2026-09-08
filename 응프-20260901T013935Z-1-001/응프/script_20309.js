/* =========================================================
   우리반 백과 - script.js
   지금은 비어 있습니다.
   2차시부터 이 파일에 '외관' 패널을 움직이는 코드를 넣습니다.
   /* 글자 크기 변경 */
var fontInputs = document.querySelectorAll('input[name="fontsize"]');

fontInputs.forEach(function (input){
  input.addEventListener("change", function (){
    // <html> 태그의 data-fontsize 속성 값을 선택한 라디오 버튼의 value로 변경
    document.documentElement.setAttribute("data-fontsize", input.value);
  });
});
var themeInputs = document.querySelectorAll('input[name="theme"]');

themeInputs.forEach(function (input){
  input.addEventListener("change", function (){
    document.documentElement.setAttribute("data-theme", input.value);
  });
});