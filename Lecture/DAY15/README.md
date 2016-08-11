###### Front-end Development School

# DAY 15

## Grid Systems

#### Overlay grid guide module

```css
.grid-container::before {
  content: '';
  position: absolute;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 2300px;
}

.grid-container.show-grid::before {
  background: hsla(60, 50%, 50%, 0.3);
  background: linear-gradient(90deg, rgba(191, 64, 64, 0.3) 120px, rgba(0, 0, 0, 0) 120px),     linear-gradient(rgba(0, 0, 0, 0) 9px, #26923f 9px);
  background-size:
    240px 1px,
    1px 10px;
}
```

#### Grid container module

```css
.grid-container {
  position: relative;
  width: 960px;
  height: 2300px;
  margin-left: auto;
  margin-right: auto;
}
```


#### Grid module

```css
.grid::after {
  content: '';
  display: block;
  clear: both;
}
```

#### Unit module

```css
[class*="unit-"] {
  float: left;
}
.unit-1_2 { width: 60px; }
.unit-1 { width: 120px; }
.unit-2 { width: 240px; }
.unit-3 { width: 360px; }
.unit-4 { width: 480px; }
.unit-5 { width: 600px; }
.unit-6 { width: 720px; }
.unit-7 { width: 840px; }
.unit-8 { width: 960px; }
```

#### Push, Pull module
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

#### Prefix, Suffix module

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

## Link Effects

* 기본 스타일 - 배경 색상 페이드(Fade In/Out)
  * transition: 속성 지속시간 움직임유형 지연시간
  * 장면 전환: A → B, B → A
    * 언제 animation 사용해야 하나?     
      * 별도의 사용자 인터랙션 없이 처음부터 움직임을 제어하려면 animation 
      * keyframe 기반으로 애니메이션 제어를 하려면 animation 

```css
.fade-bg {
  padding: 0.25em 0.375em;
  transition: all 0.25s;
  border-bottom: none;
}
.fade-bg:focus {
  background: #1c80dc;
  color: #fff;
}
```

* 전 방위 슬라이드(← → ↑ ↓)

> .slide-from-left

> .slide-from-right

> .slide-from-top

> .slide-from-bottom

```css
a[class*="slide-"] {
  overflow: hidden;
  display: inline-block;
  position: relative;
  padding: 0.06em 0.12em;
  vertical-align: bottom;
}

a[class*="slide-"]::after {
  content: attr(data-linktext);
  position: absolute;
  width: 100%;
  background: #1c80dc;
  color: #fff;
  transition: all 0.25s;
  text-align: center;
}

a.slide-from-left::after {
  left: -100%;
}

a.slide-from-left:hover::after,
a.slide-from-left:focus::after {
  left: 0;
}
```



* 언더라인 페이드
```css
.fade-underline {
  border-bottom: 2px solid transparent;
  transition: all .25s ease;
}

.fade-underline:hover,
.fade-underline:focus {
  border-bottom-color: currentColor;
}
```


* 언더라인 슬라이드(← → ↔)

> .underline-from-left

> .underline-from-right

> .underline-from-center

```css
a[class*="underline-"] {
  position: relative;
  border-bottom: none;
}

a[class*="underline-"]::before {
  content: '';
  position: absolute;
  top: 100%;
  border-bottom: 2px solid currentColor;
  transition: all 0.3s;
}

a.underline-from-left::before {
  left: 0;
  right: 100%;
}

a.underline-from-left:hover::before,
a.underline-from-left:focus::before {
  left: 0;
  right: 0%;
}
```