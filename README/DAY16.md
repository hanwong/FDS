###### Front-end Development School

# DAY 16

## Button Effects
#### 기본 스타일
#### 슬라이드(← → ↑ ↓) 이펙트
   * 텍스트는 z-index 가 안먹는다. 먹일려면 다른 요소로 감싸줘야 한다. 

> .slide-from-left

> .slide-from-right

> .slide-from-top

> .slide-from-bottom

```css
button[class*="slide-"] {
  position: relative;
  border: 2px solid #CC66FF;
  background: #CC66FF;
  color: #fff;
  z-index: 0;
}

button[class*="slide-"]::after {
  content: '';
  position: absolute;
  background: #A050CB;
  transition: all 0.3s;
  z-index: -1;
}

button[class*="slide-"]:hover::after,
button[class*="slide-"]:focus::after { 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

button.slide-from-left::after { right: 100%; }
button.slide-from-right::after { left: 100%; }
button.slide-from-top::after { bottom: 100%; }
button.slide-from-bottom::after { top: 100%; }

```

#### 그로우(Grow) 이펙트

> .grow-box

> .grow-ellipsis

> .grow-circle

```css

button[class*="grow-"] {
  overflow: hidden;
  position: relative;
  border: 4px solid #54AAD6;
  padding: 0.725em 0.9em;
  background: #54AAD6;
  color: #4C4C4C;
  z-index: 1;
}

button[class*="grow-"]::after {
  content: '';
  position: absolute;
  background: #66CCFF;
  transition: all 0.3s;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

button.grow-circle::after {
  border-radius: 50%;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  margin: -50px 0 0 -50px;
  transform: scale(0);
}
button.grow-circle:hover::after,
button.grow-circle:focus::after{ 
  transform: scale(1.5);
}
```

> .grow-skew-45deg

> .grow-skew--45deg

```css
button.grow-skew::after {
  left: 50%;
  right: 50%;
  transform: skew(45deg);
}
button.grow-skew:hover::after,
button.grow-skew:focus::after{ 
  left: -20%;
  right: -20%;
}

```

> .grow-spin-cw

> .grow-spin-ccw

* transform-orgin - 기준점 변경
  * roatate의 기준점을 변경해준다.

```css
button.grow-spin-cw::after {
  transform: rotate(-180deg) scale(0) ;
}
button.grow-spin-cw:hover::after,
button.grow-spin-cw:focus::after{ 
  transform: rotate(0deg) scale(1) ;
}

```



#### 애니메이션 작성 방법


```css
@keyframes 애니메이션 이름 {
  from { /* CSS 속성 */}
  to { /* CSS 속성 */}
}
@keyframes 애니메이션 이름 {
  0% { /* CSS 속성 */}
  10% { /* CSS 속성 */}
  30% { /* CSS 속성 */}
  50% { /* CSS 속성 */}
  70% { /* CSS 속성 */}
  100% { /* CSS 속성 */}
}

.something:hover {
  animation: 애니메이션이름 0.3s;
}
```

#### Sprite Animation 만들기

```css
.hi {
    width: 50px;
    height: 72px;
    background-image: url("img/sprite-steps.png");
    animation: play .8s steps(10) infinite;
}

@keyframes play {
  100% { background-position: -500px; }
}
```

#### Fluid Grid Systems
* background-clip - 색
* background-origin - 이미지


#### 동일한 높이의 컬럼 디자인
* 각 컬럼의 길이가 달라서 배경이 서로 다르게 들어갈 때 `height` 없이도 배경을 적용하는 기능

```css
.trick-container { 
  background: linear-gradient(to right, #34c0ff 320px, #fff 870px, #fe4940 870px); 
}
```

#### CSS 기타
* background-attachment - 스크롤해도 배경이 움직이지 않음
* position - fixed - 요소 고정