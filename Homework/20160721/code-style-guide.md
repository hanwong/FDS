###### Front-end Development School

# Code Style Guide
* [HTML](#html)
* [CSS](#CSS)


## HTML
* [Syntax](#syntax)
* [HTML5 doctype](#html5-doctype)
* [Language attribute](#language-attribute)
* [Internet Explorer compatibility mode](#internet-explorer-compatibility-mode)
* [Character encoding](#character-encoding)
* [CSS and JavaScript includes](#css-and-javascript-includes)
* [Attribute order](#attribute-order)
* [Reducing markup](#reducing-markup)
* [Sectioning markup](#sectioning-markup)
* [Entity Code](#entity-code)

###Syntax

```html
<!DOCTYPE html>
<html lang="ko-KR">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>  
  <img src="images/company-logo.png" alt="Company">
  <h1 class="hello-world">Hello, world!</h1>
</body>
</html>
```
* Indentation 
  * 직계 자식 요소는 `・ ・` , `Space` 두칸을 이용하여 들여쓰기 한다. 
* `img` 요소의 `alt`속성은 반드시 의미 있는 단어를 사용한다.
  * 별다른 의미를 가지지 않는 이미지의 경우 `background`속성을 활용한다. 

###HTML5 doctype

```html
<!DOCTYPE html>
```
* HTML5 표준 사용을 위해 위의 Doctype을 사용한다.
  * Doctype 코드는 반드시 문서 첫줄에 명시한다. 코드의 윗부분에는 절대로 아무런 요소도 삽입하지 않는다. 

###Language attribute

```html
<html lang="ko-KR">
  [・・・]
  <section lang="en">English</section>
  [・・・]
</html>
```
* 문서에 쓰이는 주언어를 html 요소에 삽입한다.
  * 문서 중간에 다른 언어를 사용하는 경우 해당 언어의 속성을 명시한다.

###Internet Explorer compatibility mode

```html
  <!--[if IE 6]><html lang="ko-KR" class="ie6"><![endif]-->
  <!--[if IE 7]><html lang="ko-KR" class="ie7"><![endif]-->
  <!--[if IE 8]><html lang="ko-KR" class="ie8"><![endif]-->
  <!--[if IE 9]><html lang="ko-KR" class="ie9"><![endif]-->
  <!--[if !IE]><!--><html lang="ko-KR"><!--<![endif]-->
  [・・・]
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
```
* IE 하위 버전 호환이 필요한 경우 IE 조건부 주석문을 활용하여 각 버전의 클래스를 명시한다.
* 비표준 코드이나 IE 호환성 모드에 대한 대응을 위해서 최소 IE 동작 버전을 명시한다.

###Character encoding

```html
  <meta charset="UTF-8">
```
* 텍스트 언어 인코딩을 UTF-8로 설정하여 모든 유니코드 문자를 표현할 수 있도록 설정하고, 깨지는 한글 문제를 해결한다.

###CSS and JavaScript includes

```html
<link rel="stylesheet" href="style.css">
<style>
</style>
<script src="script.js"></script>
```
* `link`, `style`, `script` 사용시 `type` 속성을 별도로 입력하지 않는다.

###Attribute order
```html
<a class="..." id="..." data-modal="toggle" href="#">Example link</a>
<input class="form-control" type="text">
<img src="..." alt="...">
```
* `class`
* `id`, `name`
* `data-*`
* `src`, `for`, `type`, `href`, `value`
* `title`, `alt`
* `aria-*`, `role`

* 코드의 가독성 향상을 위해 HTML 태그 속성들을 특정한 순서로 명시한다.

###Reducing markup

* 의미 없는 `div`, `span` 요소의 사용을 자제한다.
* `<b>`, `<i>`, `<u>`, `<strike>`, `<s>`, `<big>`, `<small>`, `<center>`, `<font>` 등 표현에 국한된 요소는 사용하지 않는다. 

###Sectioning markup
```html
<header></header>
<section class="header">
  <nav></nav>
</section>
<main>
  <section></section>
  <aside></aside>
</main>
<section class="footer"></section>
<footer></footer>
```
* Sectioning 요소 - `section`, `article`, `main`, `nav`, `aside`
* 화면의 전체 구조를 마크업 할 때 헤더와 푸터 영역에 Sectioning 요소를 포함하지 않으면 `<header>`, `<footer>` 태그를 사용하고, `nav`와 같은 Sectioning요소를 포함할 경우 `<section>`태그를 활용하여 명시한다.
* 헤더와 푸터 영역의 요소를 제외한 요소들은 `main` 요소 안에 명시한다. 


### Entity Code
```html
  <title>코드 가이드 &amp; 스타일</title>
```
* 문서 내에서 특수문자는 반드시 [Entity Code](http://entitycode.com/)를 활용한다. 
  * 특히 `title` 영역에서는 `&` 도 `&amp;` Entity Code로 명시한다. 
    * `title` 이 인코딩 선언 요소보다 앞에 있을 경우에 `&` 가 포함되어 있으면 인코딩이 제대로 이루어지지 않을 수 있다. 
    * 그래서 `title`를 인코딩 요소보다 뒤에 써주는 것이 좋다.

-

## CSS
* [Declaration order](#declaration-order)
* [Don't use @import](#dont-use-import)
* [Classes](#classes)
* [Selectors](#selectors)

###Declaration order
```css
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* Box-model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;

  /* Typography */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  color: #333;
  text-align: center;

  /* Visual */
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;

  /* Misc */
  opacity: 1;
}
```

* 다음과 같은 속성의 순서대로 선언한다.

1. Positioning
2. Box
3. Typography
4. Visual, Misc


###Don't use @import
```
<link rel="stylesheet" href="core.css">
<style>
  @import url("more.css");
</style>
```
* CSS 파일을 연결할 때 `@import`를 사용하지 않고 `link`를 활용한다.
  * `@import`는 직렬 방식으로 파일을 불러오기 때문에 성능에 영향을 미친다.

###Classes
* Class 명칭은 소문자를 사용하고, 단어 사이에는 `-` 로 구분한다.
* 지나친 축약 보다는 의미가 명확히 전달 가능한 이름을 사용한다.
* 인접한 부모 Class를 접두사로 활용한다.

###Selectors
* 일반 요소를 지정하기 보다 Class를 지정하여 선택자로 명시한다.
* 멀티클래스로 클래스를 나누어 사용하기 보다 접두사를 이용하여 독립적인 클래스를 선택자로 명시한다.
[Scope CSS classes with prefixes](http://markdotto.com/2012/02/16/scope-css-classes-with-prefixes/)
-