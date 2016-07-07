###### Front-end Development School

#DAY 07

## CSS 선택자

#### 속성 선택자

`[attr = "value"]`
* value 내의 값들이 순서도 같아야 됨

`[attr |= "value"]`
* `-`로 구분되는 속성 이름을 찾음
  * CSS 속성 이름을 작성 할 때는 띄어 쓰기를 `-` 로 많이 활용함 ( 국내는 별로 없음 )

`[attr ~= "value"]`
* 공백으로 구분되는 단여가 일치할 때 선택하는 것


#### 상태 디자인(State Design) 선택자
>`E:stat {}` - Pseudo Class

> 가상(유사, 의사) 클래스라고 불림

* 기본 상태 (Normal)
* `:hover` 커서가 올라간 상태 (Hover)
* `:active` 커서로 누른 상태 (Active)

```css
 /*:hover  | 커서 올라간 상태*/
 /*margin-top 은 inline-block 안에서 음수 값이 적용이 안됨*/
a:hover {
  /*text-decoration: underline;*/
  padding-bottom: 1px;
  border-bottom: 2px dotted;
}

/*:active  | 커서로 누르고 있는 상태*/
a:active {
  background: #ff0;
}

/*:focus   | 키보드 포커싱 상태*/
a:focus {
  outline: 3px solid #fc414b;
}

/*:focus:hover;   | 키보드 포커싱 상태*/
a:focus:hover {
  outline-offset: 10px;
}
```
* `border`, `margin`은 주변에 UI축을 움직여서 화면에 영항을 준다
* **`outline`**은  UI 축에 영향을 주지 않음, 근데 키보드 포커싱은 적용 안됨(div, p)


```css
.rounded-box *:first-child {
    background: #FF00FF;
}
.rounded-box:last-child {
     background: #FF7F00;
}
.wrapper:nth-child(2n) {}
```
* `:first-child`,`:last-child`
  * first-child, last-child는 부모로 부터의 관계를 나타냄

* `:root`
  * 페이지에서 루트요소를 가리키는 것 <html>에서는 Html , xml 에서는 루트가 정해져 있지 않음

* `:target`
  * `href="#name"`으로 이동되는 타겟 요소에 스타일을 적용

```css
.parent *:not(a):not(p) {
  border: 1px solid #b64926;
}
```
* `:not`
  * 해당 요소를 제외하고 스타일을 적용

#### 선택자 정리
일반 선택자
hover
focus
child
not
of type

#### 가상(유사, 의사) 요소
> Pseudo Element - 가상으로 요소(콘텐츠)를 만들어 줍니다.


| CSS 2/2.1    | CSS 3+  |
| -------  | ------- |
| :first-line      | ::first-line  |
| :first-letter   | ::first-letter  |
| :before         | ::before  |
| :after           | ::after  |


```css
/*.dropcap::first-letter */
.dropcap::first-line {
  /*font-size: 300%;*/
  color: #7F007F;
  line-height: 1em;
}
```
* `::first-letter`
  * 해당 요소의 첫 글자에 스타일을 적용
* `::first-line`
  * 해당 요소의 첫 에 스타일을 적용


```css
.msg::before {
  display: block;
  content: 'Hey!!';
  color: #800000;
}

.msg::after {
  content: 'Hand up!!';
  color: #800000;
}
```
*`:before`, `:after`
* before after 요소는 꾸밈용으로 사용, 접근성을 위해서는 사용하지 않는것이 좋음.
  * 이미지로 처리됨, 단순한 표현이지 컨텐츠가 아니다. 접근성이 없는 것이다.
  * 기본적으로 inline 요소줄

```css
p::selection {
  text-shadow: 2px 2px 8px #FF00FF;
  background: #AF61AF;
  color: #fff;
}
p::-moz-selection {
  text-shadow: 2px 2px 8px #FF00FF;
  background: #AF61AF;
  color: #fff;
}
```
* `::selection`
  * 사용자가 커서로 클릭 후, 텍스트 블록을 선탁할 경우 가상으로 요소를 만들어 디자인
  * 그룹핑 안됨, 브라우저 지원에 따라 따로 만들어줘야됨
    * fire fox - `::-moz-selection`


#### 접근성 관점에서 링크의 주소를 출력하는 스타일
``` css
/* 해당 미디어에서만 출력되는 스타일 */
@media print {

  a::after {
    /* 함수: () 안에 전달하는 무엇을 통해 뭔가를 처리해서 결과를 보여준다.  */
    content: '(' attr(href) ','attr(title) ')';
/*  content: '(' attr(target) ')';*/
    color: #400080
  }  

  abbr::after {
    content: '(' attr(title) ')';
  }
}
```







## CSS 상속
* 상속이 되는 요소가 있고, 아닌 요소가 있다.
  * 서체 자간 어간 행간, color 속성의 요소들이 주로 상속됨.
  * 내부 공간, 외부공간, 넓이, 공간에 대한 것은 상속 받지 않음
  * 브라우저에서 확인 하자!!!

## CSS Cascading
* 우선 순위
  * 나중에 있는 것이 우선권을 가짐
  * point가 높은 것이 우선권을 가짐
  * `!important` - 최후의 수단이 아니면 안쓰는게 좋다...
      * 특수한 환경에서 반드시 적용해야 할 때 사용하는 것이 좋다.
```css
@media print{
  body {
    background: #fff !important;
    color: #000 !important;
  }
}
```

## CSS Reset
* 브라우져 마다 기본 값이 달라서 리셋하는 과정이 필요하다.
* 요즘은 리셋도 안씀, Normalize를 사용함.




## HTML CSS
* display 요소 변경이 인되는 요소는 가상 선택자 :visited
* 나머지는 다변경됨,


## SELECTORS

| Pattern | Meaning | Described in section | First defined in CSS level |
|---|---|---|---|
| * | any element | Universal selector  | 2 |
| E | an element of type E | Type selector | 1 |
| E[foo]  | an E element with a "foo" attribute | Attribute selectors | 2 |
| E[foo="bar"]  | an E element whose "foo" attribute value is exactly equal to "bar"  | Attribute selectors | 2 |
| E[foo~="bar"] | an E element whose "foo" attribute value is a list of whitespace-separated values, one of which is exactly equal to "bar" | Attribute selectors | 2 |
| E[foo^="bar"] | an E element whose "foo" attribute value begins exactly with the string "bar" | Attribute selectors | 3 |
| E[foo$="bar"] | an E element whose "foo" attribute value ends exactly with the string "bar" | Attribute selectors | 3 |
| E[foo*="bar"] | an E element whose "foo" attribute value contains the substring "bar" | Attribute selectors | 3 |
| E[foo ="en"]  | an E element whose "foo" attribute has a hyphen-separated list of values beginning (from the left) with "en"  | Attribute selectors | 2 |
| E:root  | an E element, root of the document | Structural pseudo-classes | 3 |
| E:nth-child(n)  | an E element, the n-th child of its parent | Structural pseudo-classes | 3 |
| E:nth-last-child(n) | an E element, the n-th child of its parent, counting from the last one | Structural pseudo-classes | 3 |
| E:nth-of-type(n)  | an E element, the n-th sibling of its type | Structural pseudo-classes | 3 |
| E:nth-last-of-type(n) | an E element, the n-th sibling of its type, counting from the last one | Structural pseudo-classes | 3 |
| E:first-child | an E element, first child of its parent| Structural pseudo-classes | 2 |
| E:last-child  | an E element, last child of its parent | Structural pseudo-classes | 3 |
| E:first-of-type | an E element, first sibling of its type| Structural pseudo-classes | 3 |
| E:last-of-type  | an E element, last sibling of its type | Structural pseudo-classes | 3 |
| E:only-child  | an E element, only child of its parent | Structural pseudo-classes | 3 |
| E:only-of-type  | an E element, only sibling of its type | Structural pseudo-classes | 3 |
| E:empty | an E element that has no children (including text nodes) | Structural pseudo-classes | 3 |
| E:link |---|---|---|
| E:visited | an E element being the source anchor of a hyperlink of which the target is not yet visited (:link) or already visited (:visited) | The link pseudo-classes | 1 |
| E:active |---|---|---|
| E:hover |---|---|---|
| E:focus | an E element during certain user actions | The user action pseudo-classes  | 1 and 2 |
| E:target  | an E element being the target of the referring URI | The target pseudo-class | 3 |
| E:lang(fr)  | an element of type E in language "fr" (the document language specifies how language is determined) | The :lang() pseudo-class  | 2 |
| E:enabled |---|---|---|
| E:disabled | a user interface element E which is enabled or disabled | The UI element states pseudo-classes  | 3 |
| E:checked | a user interface element E which is checked (for instance a radio-button or checkbox) | The UI element states pseudo-classes  | 3 |
| E::first-line | the first formatted line of an E element | The ::first-line pseudo-element | 1 |
| E::first-letter | the first formatted letter of an E element | The ::first-letter pseudo-element | 1 |
| E::before | generated content before an E element | The ::before pseudo-element | 2 |
| E::after | generated content after an E element | The ::after pseudo-element  | 2 |
| E.warning | an E element whose class is "warning" (the document language specifies how class is determined). | Class selectors | 1 |
| E#myid | an E element with ID equal to "myid". | ID selectors  | 1 |
| E:not(s) | an E element that does not match simple selector s | Negation pseudo-class | 3 |
| E F | an F element descendant of an E element | Descendant combinator | 1 |
| E > F | an F element child of an E element | Child combinator  | 2 |
| E + F | an F element immediately preceded by an E element | Adjacent sibling combinator | 2 |
| E ~ F | an F element preceded by an E element | General sibling combinator  | 3 |

