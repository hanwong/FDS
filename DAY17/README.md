###### Front-end Development School

# DAY 17


## CSS3 Align Justify
* `text-align-last` 
  * block이나 line의 마지막 라인의 텍스트를 정렬하는 속성
  * 아직 표준이 아니고 호환되지 않는 브라우져가 많음
* Formal syntax
  * `auto` | `start` | `end` | `left` | `right` | `center` | `justify`

```css
.align-last-justify {
  width: 20rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 6rem;
  text-align: justify;
  -moz-text-align-last: justify;
  text-align-last: justify;
  font-weight: 900;
}
```

## Sprite Animation
* `background-position-x` 와 `steps(n)` 속성을 활용해서 움직이는것 같은 애니메이션을 구현한다.

```css
    .mario {
      border: 1px solid #999;
      height: 57px;
      width: 39px;
      background: url(img/css-sprite-animation-steps-mario.png) no-repeat;
      animation: mario steps(27) 2s infinite;
    }
    @keyframes mario {
      100% { background-position:  -1080px; }
    }
```

-

## Fluid Grid
* 중단점을 지정하여서 행 Flexible page를 구현한다.
* 퍼센트를 시스템화 해서 만든다.
* 패딩으로 양옆의 커터를 만든다. 퍼센트 값을 사용할 경우 부모 컨테이너의 비율을 따르기 때문에 박스마다 일일이 계산해야 한다. 

#### Unit, Gutterm Offset Module

```html

[class*="unit-"] {
  box-sizing: border-box;
  float: left;
  /* float이 적용된 박스의 width가 컨텐츠만큼으로 바뀌므로 100% 설정을 해준다 */
  width: 100%;
}
.unit-2-4,
.unit-3-6,
.unit-1-2 { width: 50%; }
.unit-2-6
.unit-1-3 { width: 33.3333%; }
.unit-4-6
.unit-2-3 { width: 66.6667%; }
.unit-1-4 { width: 25%; }
.unit-3-4 { width: 75%; }
.unit-1-5 { width: 20%; }
.unit-2-5 { width: 40%; }
.unit-3-5 { width: 60%; }
.unit-4-5 { width: 80%; }
.unit-1-6 { width: 16.6666667%; }
.unit-5-6 { width: 83.3333333%; }
[...]

/* 거터 모듈, 그룹핑을 통해 편하게 관리 */
.gutter-group [class*="unit-"],
.gutter {
  padding-left: 1rem;
  padding-right: 1rem;
}
.no-gutter,
.grid .no-gutter {
  padding-left: 0;
  padding-right: 0;
}

/* offset */
unit-offset-1-2,
unit-offset-2-4,
unit-offset-3-6,
unit-offset-4-8 {
  margin-left: 50%;
}
unit-offset-1-3,
unit-offset-2-6,
unit-offset-3-9 {
  margin-left: 33.3333%;
}
[...]
```
-

## CSS3 Multiple column layout
* `column-count`, `column-gap`, `column-rule`, `column-span`
  * 단락이나 여러 컨텐츠들의 뷰를 컬럼으로 분리하여 이어지는 흐름으로 보여지게 할 때 사용
  * 없는것을 만들어서 구현 하는것~ 추상화 

```css
.use-multi-columns {
   
   [...]

  /* CSS3 Multi Columns */
  /* 컬럼의 개수 */
  column-count: 3;

  /* 컬럼 사이 간격(gap) */
  column-gap: 1.5rem;

  /* 컬럼 사이 간격 중앙에 배치되는 수직 선 */
  column-rule: 1px solid #aaa;

  /* 제목이 모든 컬럼을 사용할 때 */
  column-span: all;
}
```

-

## CSS3 Masonry Layout
* 높이가 불규칙한 블록을 벽돌 쌓듯이 디자인하는 레이아웃 방법

```css
.masonry-container {
  max-width: 1200px;
  margin: 3rem auto;
  column-count: 3;
  column-gap: 1.5rem;
  line-height: 1.5rem;
}
.masonry-container .masonry-item {
  display: inline-block;
  margin-bottom: 1rem;
  width: 100%;
  }
``` 


-
> CSS3 기타

* letter-spacing, word-spacing 은 해당 글자 기준으로 적용해야 하기 때문에 em 단위를 쓰는 것이 좋다.
