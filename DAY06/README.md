###### Front-end Development School

#DAY 06

##CSS 기본 문법
> 반복되는 속성을 잘 관리할 수 있도록 설계해야 한다.

> 자주 사용하는 것을 모듈화!!!

- 웹 브라우저마다 기본 스타일 값이 다르다.
  - 소수점 처리 방식이 브라우저 마다 다르다. 
      - **그래서 정수로 크기를 정의하는 것이 좋음**
  - 우리가 작업하는 것을 기본에 덮어 씌우는 것, 그래서 우선순위를 잘 아는 것이 중요.
  - 아래 있는 요소가 우선
  - 모든 헤딩은 마진 값을 가짐
  - em은 부모의 값을 기준으로 변경된다.
      - CSS는 부모 값에 따라 자식에게 상속된다.
- CSS 음절과 음절 사이에는 `-`를 넣는다.
- `-webkit`붙은 요소는 그 브라우저에서만 적용되는 거고, 표준이 아닌 경우가 많음.

##CSS 선택자
#### 선택자 기본 규칙
> 요소 선택자  -  `E`

> 전체 선택자  -  `*`

> 자손 선택자  -  `E(P)  E(C)` (띄어쓰기)

> 그룹핑 - `E, E, E`

- CSS 설계를 할 때는 id를 안쓰는 것이 좋다. 페이지 안에서 하나의 요소에만 사용할 수 있기 때문이다.
    - **ID 선택자 점수 - 0100, CLASS 선택자 점수 - 0010**
- 선택자는 가장 마지막 요소가 선택된다.
- 부모 요소 선택자에 스타일을 적용하면 모든 자식 자손 선택자까지 적용됨

- 공통적인 속성들을 묶어 주는 **리팩토링**을 생각해야 한다.

- 초기화를 전체에 해주는 것은 성능을 저하 시킨다.
    - 필요한 색센에만 초기화를 하는 것이 좋다.
    - 목적 없이 모든것을 초기화는 것은 좋지 않다.

#### 자식 선택자

```css
.shopping1 > h4 {
  color: #FF0000;
}
```

- ` > `Child Combinator
- 아래 자식 및 자손에게 상속하지 않기 위해서는 개별 선택 해주면 됨,  `shopping1 > h2` 
- 직계 자식을 가리키는 선택자
- 원뎁스 투뎁스 까지 있는 네비게이션이 있을 때 그중에서  원뎁스 요소에만 적용할 때 사용한다.
    - 이렇게 사용하면 유지 보수가 어렵다, 그래서 class로 관리하는 것이 좋다.


#### 클래스 선택자  -  0010

```html
<button type="button" class="btn btn-buy">구매</button>
<div class="btn">
  <button type="button" class="btn btn-cancel-buy">취소</button>
</div>
```

```css
.btn.btn-buy { color: orange;  }
.btn .btn-cancel-buy { color: lime;  }
```

- `E.class-name `
    - E요소의 클래스에만 적용됨 
    - 디자인 컨셉이 명확하지 않은 경우에는 사용을 자제
- `.class-name`  
    - 일반적으로 사용되는 방법, 코드 재사용 목적
    - 특정한 상황이 아니면 앞에 E요소를 안쓰는 것이 좋다. 어디에나 적용하게 만드는 것이 좋다.
- `.class-name1.class-name2`  
    - 멀티 클래스
    - 교집합, HTML 속성에서 선언된 클래스 이름을 모두 가지고 있어야 한다.
    - `class = class-name1 class-name2`형태로 클래스 이름을 작성해야됨.
    - **붙어 있으면 하나의 클래스임**
- `.class-name1 .class-name2`  
    - `class-name1`부모 요소 안에 `class-name2`자식 요소에게 스타일을 적용하는 결과가 나옴
    - **띄어쓰기는 자손을 찾아가는 방법**
- CSS에서 클래스 입력의 순서가 HTML에서 선언된 클래스의 순서와 달라도 상관 없음
    - 단, IE6에서는 순서도 모두 일치해야 


#### 인접 형제 선택자 
`E + E`
```css
.parent ul { border: 1px solid red; }
.parent h4 + ul { border: none; }
```
- 인접 형제 선택자 사용시, 주의점!!!
    - 절대적으로 틀(프레임)이 무너지지 않아야 한다.
    - 바뀔 가능성이 있는 요소에 대해서는 인접 형제 선택자를 쓰지 않는 것이 좋다.


#### 일반 형제 선택자
`E ~ E`
```css
#shoppingGrpTab > #shopping1 ~ h3 a { color: #00FF00; }
#shoppingGrpTab > #shopping1 + h3 a { color: darkred; }
```
- 인접 형제 선택자와의 차이점 !!!
    - 인접 형제와 달리 인접하지 않아도 되며, 
    - 인접 형제가 1개인데 반해,
    - 일반 형제는 1개 이상이 될 수 있다.


#### 속성 선택자
`[attr]`
`[attr = "value"]`
```css
/*#shopping3 .screen_out {}*/

[id="shopping3"] [class="screen_out"] {
  border: 4px solid #FF00FF;
}
```

`^=` 해당 속성 맨 앞 부분이 해당 값으로 시작하는 모든 경우를 찾음
```
#shopping3 [class^="screen_out"] {
  border: 4px solid #FF00FF;
}
```

`$=` 해당 속성 맨 뒷 부분이 해당 값으로 끝나는 모든 경우를 찾음
```
#shopping3 [class$="screen_out"] {
  border: 4px solid #FF00FF;
}
```
- class 안의 속성이 완전히 같은 요소에만 적용됨
- 특정 조건에 맞는 요소에 적용하기 위해서 속성 선택자를 사용한다.


##CSS 박스모델
![박스모델](../ASSETS/boxmodel.png)
 - content padding border margin offset
 - border 안쪽은 padding 바깥은 margin
 - offset 은 margin 바깥쪽 흰색 영역

## HTML 기타 중요 규칙
- 단락은 inline요소만 감쌀 수 있음 `<p>` `<span>` 안에는 블락 요소 넣으면 안됨
- html5 에서 `<a>` 는 inline 이지만 블락을 감쌀 수 있음, 하지만 링크 요소는 안됨
- 스타일을 초기화 한다면 그 요소에 맞는 스타일을 입혀야 한다.




