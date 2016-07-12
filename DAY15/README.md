###### Front-end Development School

# DAY 15

* **Push, Pull module**
  * 일반흐름에서 순서를 바꿀때 많이 사용함
  * position을 써야 주변 요소에 영향을 주지 않고 이동할 수 있음

```css
.grid [class*="push-"] { position: relative; }
.push-1 { left: 160px; }
.push-2 { left: 320px; }
...

.grid [class*="pull-"] { position: relative; }
.pull-1 { right: 160px; }
.pull-2 { right: 320px; }
...
```

* **Prefix, Suffix module**
  * 축전체를 움직일 때 사용하기에 유용하다.
  * 마진은 색을 안먹고 패딩은 색을 먹는다는 것을 고려해서 골라 사용하면 된다.

```css
.prefix-1 { margin-left: 160px; }
.prefix-2 { margin-left: 320px; }
...

.suffix-1 { margin-right: 160px; }
.suffix-2 { margin-right: 320px; }
...
```

* link effects
기본 스타일
배경 색상 페이드(Fade In/Out)
.fade-bg
전 방위 슬라이드(← → ↑ ↓)
.slide-from-left
.slide-from-right
.slide-from-top
.slide-from-bottom
언더라인 페이드
.fade-underline
언더라인 슬라이드(← → ↔)
.underline-from-left
.underline-from-right
.underline-from-center