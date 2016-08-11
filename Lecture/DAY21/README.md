###### Front-End Develop SCHOOL

# DAY 21

### 모바일 최적화

- `handheldfriendly`, `mobileoptimized` 속성 값은 오래된 모바일 기기 화면에 최적활 할 때 사용. (스마트 폰 환경에서는 불 필요)
- `viewport` 속성 값은 스마트 폰 화면에 최적화할 때 사용.
    - `width=device-width` 설정은 기기(Device)의 화면 가로 폭에 최적화된 뷰를 제공.
    - `initial-scale=1` 설정은 기본 화면 비율 크기를 배율 x1로 설정.

```html
<meta name="handheldfriendly" content="true">
<meta name="mobileoptimized" content="240">
<meta name="viewport" content="width=device-width,initial-scale=1">
```

> ※ 최신 iOS 버전의 사파리에서는 화면에 맞게 수축(Shrink)하는 설정 여부가 추가됨.<br> &nbsp;&nbsp;
`shrink-to-fit=no` 설정은 화면 크기에 맞게 화면 요소들이 축소되는 것을 방지함.

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

-

### [참고: CSS Device Adapt](https://drafts.csswg.org/css-device-adapt/#translate-meta-to-at-viewport)

`@viewport` 규칙은 `<meta name="viewport">` 코드(비표준)를 대체하는 표준이 될 코드이지만, 모든 웹 브라우저가 지원하는 것은 아님.

```css
@-webkit-viewport { width: device-width; zoom: 1; }
@-moz-viewport    { width: device-width; zoom: 1; }
@-ms-viewport     { width: device-width; zoom: 1; }
@-o-viewport      { width: device-width; zoom: 1; }
@viewport         { width: device-width; zoom: 1; }
```

위 `@viewport` 규칙은 아래 `<meta name="viewport">` 코드와 동일한 역할을 수행.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

-

### 기타 설정

- `box-sizing: border-box;` 설정은 `width`, `height` 영역을 `border`영역까지 확대시켜 디자인을 용이하게 설정.
- `text-size-adjust: 100%;` 작은 화면(모바일)에 웹 사이트를 최적화하하는 과정에서 텍스트 크기를 임의로 변경(팽창)하지 않도록 설정.

```css
html {
    /* 박스 크기 설정 */
    box-sizing: border-box;
    /* 텍스트 크기 조정 설정 */
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
}

*, *::before, *::after {
    /* 박스 크기 설정 상속 */
    box-sizing: inherit;
}
```

-

### Sub Pixel Problems In CSS

* `%` ,` font`를 사용할 때 브라우저에 따라서 버그가 있다. 
  * 소수점 계산의 기준이 브라우져마다 달라서 생성되는 문제가 크다. 올림 내림...
  * 이방법을 해결하기 위한 것이 `isloate float` 방법이다.


### Flex Box
* 요소의 흐름을 쉽게 바꿀 수 있다.
* Main Axis - 기본적으로 좌에서 우로 흘러간다.
  * `flex-direction` : `row`, `column`, `row-reverse`, `column-reverse`
* Main Start, End 에 맞춰서 정렬할 수 있다.  - `justify-content`: `flex-start`, `center `, `flex-end`
  * Main Size
* Cross Axis - 메인과 수직 방향, 교차점
  * Cross start, end 에 맞춰서 정렬할 수도 있다.  - `align-items`: `stretch`, `flex-start`, `center `, `flex-end`
  * Cross Size

* flex-shrink - 폭에 따라 줄어들게 하는 속성, 기본값: 1
* flex-grow - 폭에 따라 늘어나게 하는 속성, 기본값: 0
* flex-basis - min-width 같은 값, grow, shrink 값의 기준이 된다.
