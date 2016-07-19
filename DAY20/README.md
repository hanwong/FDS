###### Front-end Development School

# DAY 20

## RWD 반응형 디자인

* 반응형 웹이 의미하는 바는 서비스를 디자인하는 과정에 사용자의 환경(스크린 사이즈, 플랫폼, 회전방향 등)을 고려하여 응답할 수 있도록 제작하는 것을 말한다.
* 모바일 퍼스트 ←→ 데스크탑 퍼스트
* 모바일 퍼스트 - 중요한 컨텐츠가 무엇인가? 정말 필요한 콘텐츠와 구성이 필요하다.
* 중단점 - 기기를 기준으로? 컨텐츠를 기준으로?
* 점진적 기능 향상 - 중요한것은 모양이 아니라, 컨텐츠의 접근이 가능하면 크로스 브라우징을 한것이라고 생각할 수 있다. 

* 데이터 요청 회수 줄임
  * 통합 병합 관리, 그래서 Sass

* Fluid와 Adaptive의 차이...

* 클리핑 이미지
   * 높이는 고정하고 폭 만 줄일 수 있는 형태로 구현

* **Content Strategy**

-

#### Flexible Image 
> Content Image

```css
width: 100%;
height: auto;
```

> Keep Scale Image

```css
 min-width: 100%;
```

> BG Image

```css
  width: 100%;
  padding-bottom: 40%; /* 800x320 => 40% */
```

> Crop Image 

  * **※ BG Image 방식에 height 고정**
```css
    .scale-bg {
      width: 100%;
      min-width: 100%;
      padding-bottom: 49.4%;
      background-image: url(media/photo.jpg);
      background-size: cover;
      background-position: center;
    }
    .crop-bg {
      width: 100%;
      height: 494px;
      background-image: url(media/photo.jpg);
      background-size: cover;
      background-position: 30%;
    }
```

-

#### Flexible Video
* HTML5 `<video>`
* youtube, vimeo 비디오 파일 `<iframe>`, `<object>`, `<embed>`
  * `<iframe>`을 감싸는 컨테이너 요소가 필요
  * `position` 속성 필요
  * `<iframe>` 요소에 top: 0; width: 100%; height: 100%;
  * 부모 컨테이너 요소에는 `height: 0; padding-bottom: <아래 스크린 비율>;`
  * ※ margin, padding 속성에 설정되는 % 값의 기준 크기는 부모 요소가 된다.
  * 스크린 비율(가로x세로)
    * 4:3  = 75%
    * 16:9 = 56.25%
    * 21:9 = 42.857142857%


-

#### Media Query, Break Point
* 중단점 설정이 중요하다.
  * 사용자 통계자료를 통해서 적정한 값을 기준으로 설정하면 된다. 
  * [google-resposive-ui-참고](https://material.google.com/layout/responsive-ui.html)
* media query를 link에 추가해도 해당 style 파일을 다운은 받는다. 
* mdn - [[@media]](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)
[[@media query]](https://developer.mozilla.org/ko/docs/Web/Guide/CSS/Media_queries)

```css
/* CSS v2  */
@media screen {}
@media all {}
@media print {}

/* CSS v3  */
@media [only|not] <media-type> and (<condition>) {}
```


```
**반응형 UI - 중단점(Breakpoint) 설계에 따른 레이아웃(Layout) 디자인 가이드**

최적의 사용자 경험(UX)을 위한 중단점 설계 (Material Design)
480, 600, 840, 960, 1280, 1440, 1600
① 600을 기준 삼아...
600 이하의 경우는 싱글 레이아웃(콘텐츠 레벨이 복잡하지 않은 1계층)으로 Summary/Details View를 한 화면에 모두 제공하지 않는다. (독립적으로 제공)
600 이상의 경우는 멀티 레이아웃(복잡한 콘텐츠 레벨)으로 Summary/Details View를 한 화면에 모두 제공할 수 있다.
② 1600 이상을 넘어가는 와이드 스크린의 경우는 상황에 따라 그리드 레이아웃이 변경될 수 있는데 크게 다음과 같은 방법으로 처리할 수 있다.
1. 가운데 정렬을 유지하면서 마진을 키우는 경우
2. 왼쪽에 정렬된 상태에서 오른쪽 공간이 커지는 경우
3. 콘텐츠가 추가되면서 레이아웃이 보다 복잡하게 변경되는 경우
```

-

#### Vertical Design
* 높이에 따른 디자인을 미디어 쿼리로 제어한다.
* 여러 테스팅을 통해 코드 변경의 필요성을 알 수 있다.


