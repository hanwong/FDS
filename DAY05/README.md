###### Front-end Development School

#DAY 05

##HTML 기타 요소
- style 코드는 script 코드 보다 먼저 나와야 한다
    - css는 병렬식 다운로드 - 그래서 빠름
    - javascript는 직렬식 다운로드 - 그래서 느림
        - script는 중간에 직접 넣을수도 있고, 분리할 수 도 있다.
        - script를 body 중간 중간에 넣는 것은 좋지 않음, 비효율적임
        - 공통적인 사항이 있으면, 재사용이 필요하면 분리해서 사용하는 것이 좋음
        - noscript보다는 script로 class 값을 변경해주는 방식으로 많이 사용되고 있음

- object
    - 요소를 대체하기 위해서 사용됨
    - 예전에 플래시를 사용하기 위해 사용했었음
    - 이미지, 링크, 플래시 등을 불러 올 때 사용했었음
    - embed - ie 8,7,6 같은 하위 버전에서 사용, object가 지원되지 않는 브라우저에서 사용됨

- parameter, argument
    - 나중에 javascript 하면서 자세히 다룰 예정

- blockqoute
    - long quotation

- q
    - short quotation

- abbr - abbreviation - 지금 표준
    -  이름이 긴 단체 이름을 줄여쓸때 사용
    - 예) HTML5
    - title = “"

- acronym
    - MS에서 abbr을 쓸 수 없어서 만듬
    - 이름이 긴 경우, 앞 글자를 이어 발음 사용
    - 예) NATO

- address
    - 웹 상에 연결될 주소 및 겨
    - 내부에 단락이 들어오면 안됨

- 기존의 내용을 남겨두고 내용을 추가하고 싶을 떄
    - CSS로 제어 가능함
    - ins - insert text
    - del - delete text

- output
    - pre
    - code
    - kbd - keyboard text , 단축키 표시 같은 텍스트를 표시 해줄 때
    - var
    - tt
    - dfn
        - 정의 용어 - 하나만 할 때~
    - samp

- frame
    - frameset - 접근성이 떨어지는 관계로 표준 문서 작성시 사용을 권장하지 않음
    - iframe
        - css로 제어
        - 안보이면 링크로 제어
        - londesc - 시각장애인 연결 링크 제공

> 구조를 분석하는 힘
> 이런 의미를 가졌다고 생각했기 때문에 이렇게 구조화 했다!!!


##HTML5
> 시멘틱 웹, 시멘틱 요소, 캔버스 본격활용 - 양산형 코드 NO!!
> javascript  - 사용자 위치 정보 활용, 클라이언튼 데이터 저장, 오프라인 웹 구현!!
> 플러그인을 사용하지 않고도 웹을 쓸 수 있다.!!!

- html5 지원확인
    - caniuse.com
- html5 에서는 <a> 요소가 block-level을 감쌀 수 있음.
    - <a> 요소 내부에 클릭 가능한 컴포넌트가 존재한다면 그것은 문법 오류이다.
    - 예 - button
- section
    - section, article, aside, nav, main
        - main은 딱 한번만 쓸 수 있음
        - section, article 은 여러번 쓸 수 있음
    - header, footer는 section요소 아님.
        - section 요소 위아래로 작성
        - header 안에 section요소를 넣지 않는 것이 원칙
- ~~hgroup~~
- datalist - input요소의 도움말 제공할 때 사용
- details, summary
- figure - 이미지를 감싸는 요소, 그래픽 요소로 인식하게 됨.
    - 애플 사이트에서 볼 수 있음

> id 보다는 class를 사용하는것을 권장
    - class는 멀티로도 됨
    - id = 딱 하나 인것 만 사용, 서울시
        - 요즘은 정말 필요한 경우 아니면 id는 쓰지 않는 것이 좋다!!
    - class  = 같은 역할을 하는 것을 여러번 사용할 때, OO시청

## Web forms 2.0
> email, url, number, search, range, data picker, color, datalist, keygen, output

## CSS
- 1em = 16px, 인터넷 환경 기본 폰트 크기
- inline 스타일을 사용할 때만 크롬 콘솔에서 $0으로 요소 값을 가져 올 수 있음
    - window.getComputedStyle($0, null).color - 이 방법으로 가져올 수 있음
    - inline스타일의 권한을 가진 것은 javascript지 사람이 하는것이 아니다.
        - javascript가 동적으로 관리할 때 필요한 스타일
- import 방식은 직렬식으로 파일을 로드해서 좋지 않은 방법이다.
    - import 보다는 html에서 link를 사용하는 방법이 낫다.
- firefox - quick java - css 까보는 용도
- Selector 선택자
    - selector { property: value; }

- inline-block 요소
    - img
        - 이미지 크기 자동 입력 emmet - ctrl+shift+i
    - input