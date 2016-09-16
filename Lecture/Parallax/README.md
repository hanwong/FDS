###### Front-End Develop SCHOOL

# Parallax

* Scroll 마다 씬이 여러개 있을 수 도 있기 때문에 어러개의 컨트롤러 객체를 각 씬을 제어한다.

###STEP
1. css 속성 초기에 보이지 않도록 설정, fade-in을 덫붙인 선택자에서 나타나도록 설정.
2. triggerElement, setClassToggle 등 설정

```js
// init controller
var controller = new ScrollMagic.Controller();

// create a scene
var scene = new ScrollMagic.Scene({
        'triggerElement': '#scene01',
        'trggerHook': 0, // 0(화면 맨위 ) ~ 1(화면 맨 아래)
        'duration': 100,  // the scene should last for a scroll distance of 100px
        'offset': 50      // start this scene after scrolling for 50px
    })
    .setClassToggle('#scene01', 'fade-in') // 첫번째 클래스에게 두번째 클래스를 추가함.
    .addTo(controller); // assign the scene to the controller

```

3. pin 설정 - 'pushFollowers'는 애니매이션 사용할 때 true 로 설정, 이어지는 것들이 따라 오게 만드는것 

```js
핀(Pin, 고정) 설정

// 핀 설정
var pin = new ScrollMagic.Scene({
  'triggerElement': '#intro',
  'triggerHook': 0,
  'location': '35%'
});

pin
  .setPin('#intro', {'pushFollowers': false}) //
  .addTo(controller);
```

4. anmation  설정 
 * on('method', function(){})

```js
   var home_pin = new ScrollMagic.Scene({
    'triggerElement': `.home`,
    'triggerHook': 0,
    'duration': '80%'
  })
    .setPin('.home', {'pushFollowers': false})
    .addTo(ctrl)
    .on('end', function (event) {
       this.removePin(true);
    });
```

https://youtu.be/ZCBw6cW9Pmc
https://youtu.be/eY4yolrt_RI
https://youtu.be/p5pzIG0DOLY
https://youtu.be/mMg64hyApcw
https://youtu.be/68uf7MRzea0
https://youtu.be/5MjCXEz55CU

  // var home_pin = new ScrollMagic.Scene({
  //   'triggerElement': `.home`,
  //   'triggerHook': 0,
  //   'duration': '30%'
  // })
  //   .setPin('.home', {'pushFollowers': false})
  //   .addTo(ctrl)
  //   .on('end', function (event) {
  //       // TweenMax.to( 'main .home', 1, {'x': -1000, 'autoAlpha': 0, 'ease': Power0.easeNone});
  //   });

  // $('.navigation .nav-home').on('click', function () {
  //   TweenMax.from(this, 1, {css: {rotation: 180, opacity:0, scale:0.5}, ease: Quad.easeInOut});
  // })

> node + gulp 강의
https://youtu.be/R6VhorvMH6I
