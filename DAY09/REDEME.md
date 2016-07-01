###### Front-end Development School

#DAY 09

## CSS 타이포그래피 속성
* line- height 기본값은 120%
  * 1.2 에서 2 사이의 값을 사용하는 것이 좋다.
  * 적절한 값을 찾아야 한다. 고정값을 쓰지 말고 상대값을 써야 한다. 
  * 1.5를 쓰면 정수 값으로 나오기가 좋다.

* vmax 
  ` width: 80vmax; `
  * 창크기를 줄이다가 넓이가 세로 크기 보다 줄어들면 넓이가 세로 폭의 80%로 고정됨.

* Heading
  * type scale을 사용해서 운율을 맞춰야 한다.
    * 그래야 리듬을 맞출 수 있다.
  * 디자이너와 개발자가 소통할 수 있는 가이드가 필요하다.

* font-variant
  * small-caps
* text-transform
  * uppercase
  * lowercase
  * capitalize

* font 속기형 
`font: size / line-height family; [필수]`
`font: style weight size / line-height family; [선택]`

* letter-spacing - 자간
  * web 속성은 photoshop 설정 / 1000 

* word-spacing - 어간

* white-spacing - 여백
  * 기본값 : wrap
  * nowrap, pre, pre-wrap, pre-line
  * pre - pre 요소랑 비슷한 요소 

* text-align - block 요소에 만 적용됨
* vertical-alig - inline, table-cell 요소에 만 적용됨

* text-decoration 

* text-indent
  * 단락의 첫줄에만 적용됨.
  * block요소에는 적용 안됨.
  * ir technic (image replacement)
    * 이미지 대체 기법
    * phark method - 접근성 문제가 있기 때문에 쓰지 않는 것이 좋다.
      * IE 환경에서 고대비 모드(저시력 장애자들을 위한 기능)를 사용하면 이미지, 텍스트 모두 다 안보임.

-

## CSS 배경 속성

-

## CSS 레이아웃 속성

* display 
  * none
  * block - 높이는 자식만큼 갖고 폭은 부모 만큼 갖는다.
  * inline, inline-block, ... list-item ...
  * ppk javascript

* visibility
   * 기본값: visible
   * hidden - 영역을 남아 있고 보이지만 않는다. ( display: none 은 영역도 없어진다.)

* overflow 
  * 하위요소가 영역을 넘어갔을 경우 표현 방법
  * 기본값: visible
  * hidden이 ie6에서는 적용되지 않았었다.....

* float
  * 이미지에 텍스트가 감싸는 구조를 만들기 위해서 만들어진 속성임.
  * 그래서 텍스트는 이미지와 레이어가 겹치지 않는다. 
  * left, right, none
  * 모든 element의 float값은 none으로 설정되어 있다.
  * none은 반응형 웹에서 float을 해제할 때 많이 사용된다.
    * 부모의 폭이 줄어들면 떨어지는 현상이 생긴다.



-

## CSS 리스트 속성

-

## CSS 테이블 속성


-

## Photoshop, Design
* Screen Resolution을 96ppi로 설정하는 이유
  * 웹은 96ppi로 처리됨
  * 최종 출력되는 환경을 고려해야 할 필요가 있음
  * px -> pt = px*(96/72)
* History State, Cache Levels, Cache Title Size
  * 메모리를 많이 할당하는 설정들은 줄여주는 것이 좋다.
* 폰트 안티앨리어싱 (font-antialiasing)
  * 글씨의 부드러움을 표현하는 정도를 조절
  * 웹브라우저에는 스무스 속성이 따로 있다. 
* 컬러 켈리브레이션 해야한다.
  * 디바이스 마다 달라보이는 환경을 이해해야 한다.

* 웹디자인 작업에서는 paragraph text 방식으로 텍스트를 입력해야 한다.
  * text - point & drag 

* Character - 폰트 관련 속성
* Paragraph - 텍스트 관련 속성 
  * 웹에서는 커닝이 잘 안되서 저스티파이 속성을 쓰는 것이 좋지 않다.
      * CSS3에서는 text-align last 같은 속성이 생겼다. 
  * Hyphenate 설정도 꺼주고 작업해야 한다. 
  * 자간보다 어간이 어간보다는 행간이 넓어야 읽기 쉽게 인식된다.
  * 공간에 대한 인식이 필요하다. 적절한 행폭 조절, 여백 조절이 필요하다.

* 본문의 컨텐츠는 대비 값이 4.5이상 이어야 한다.
  * 24px(18pt) 이상, 굵은 18px(14pt) - 명도 대비 3:1 이상
* photoshop의 값을 CSS로 옮기기 

* 색조절 - 캘리브레이션

* 사물 없애기 
  1 레이어 복제
  2 marque tool로 선택
  3 edit - fill (shift f5)
