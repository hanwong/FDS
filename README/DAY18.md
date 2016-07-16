###### Front-end Development School

# DAY 18

#### Navigation

* CSS만으로 네비게이션 서브 메뉴를 구현하는 방법
  * 해당 서브 메뉴 블럭의 스타일을 설정하고 `display: none`으로 설정하여 보이지 않는 상태로 지정
  * `hover` 할 경우 `display: block`으로 속성을 변경
  * **또는** 해당영역의 `height`를 `0`으로 지정하고 `overflow: hidden`으로 지정후에 `hover`할 경우 `height` 값을 주고 `overflow: visibility`로 변경한다.

```css
.header li ul {
    display: none;
    position: absolute;
    background: #1A1718;
    width: 250px;
    padding: 30px;
    line-height: 1.5;
    box-shadow: 5px 5px 25px #000;
}
.header li:hover>ul {
    display: block;
}
```


#### Video

* 비디오 전체 화면으로 보이게 하기 

[비디오 마스킹1](https://codepen.io/SahAssar/pen/YPWxWX)

[비디오 마스킹2](https://developer.mozilla.org/ko/docs/Web/CSS/filter)
 
```html
<video autoplay loop src="media/adidas.mp4"></video>
```

```css
.go-shop video {
    width: 100%
}
```