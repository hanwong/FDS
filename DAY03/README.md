
# HTML 요소
- image - src, alt
    - alt - 이미지를 보지 못하는 사용자를 위한 속성, 적절한 문구를 넣어야 한다.
    - width, height - 로딩 중에 위치 및 구조가 지정되어 있어서 화면이 바뀌는 경험
    - longdesc - 긴 설명을 추가 하는 속성,
- image map
    - img tag에서 usemap으로 연결
    - map - 맵의 전체 영역
    - area - 맵 안에 다른 문서를 연결시키는 영역, 겹치는 경우 위에 있는 요소가 우선순위가 됨.
        - title - 마우스 기반의 데스크탑에서만 보임
        - taget=“_blank” 새로운 창으로 열리도록 하는 속성
        - alt - 명시해야됨.
    - http://summerstyle.github.io/summer/ - preview 로 소스 볼 수 있음.
- list - 항상 의미를 파악해야함 순서가 중요한가 아닌가?
    - ordered list - ol : 순서가 중요한 내용
    - unordered list - ul : 순서가 상관 없는 내용 - 불릿이 붙음
    - list item - li : ol, ul의 자식으로 쓸 수 있는 요소 , 감쌀 수 있는 요소도 ul,ol 뿐
    - 정의 목록 - dl, dt, dd
        - 정의를 위해서 쓰는 요소임
        - 들여쓰기 처럼 보여주기 위해서 사용하면 안됨,
- q - ‘ —>이 요소를 구조화하는 경우
- blackquote - 인용문
    - p
    - cite
- tables - 웹 표준 문서 작성하는데 있어 테이블은 무조건 사용하지 말아야 한다.
    - 제목 - tr - th
    - 내용 - tr - td
    - table의 속성은 CSS에게 맞겨라. table의 표현 속성을 사용하지 말라.
    - 테이블의 접근성?
        - thead, tfoot, tbody
        - tfoot - 선언 자체는 thead 바로 아래에 사용하지만, 보여지는 것은 표 가장 아래에 보임
        - tbody 는 선언하지 않으면 브라우저에서 자동생성됨.
    - column group - colgroup: col 내에 span속성이 없으면 사용할 수 있음.
    - column - col
    - caption

        - 테이블의 제목은 반드시 필요하다. table 요소 바로 밑에 있어야됨 ,
        - 적절한 제목이 필요하다. - 데이터 테이블인 경우 사용, 레이아웃 테이블일 때는 필요 없음.
    - 셀 합치기 - colspan, rowspan
    - table - summary - 테이블 요약 내용 문구 삽입, html5에서는 문법 오류가 생김.
        - 왜 html5에서 없엤는가? - 사람들이 제목, 캡션 내용과 비슷하게 쓰니까 필요없다고 생각해서 빠짐
        - 그래서 WAI-ARIA를 사용함.
        - <p id=“id”>~~~
        - aria-describedby=“id"
    - scope
        - 제목의 행열에 대한 scope를 지정해주는 것
        - 스크린 리더가 제대로 읽을수 있도록 접근성 높은 테이블을 만들기 위함.

- abbr
    - title 속상에 약어 표시
    - 링크요소를 추가하기 위해 <a>요소로 감싸면 됨, taget=“_blank”를 추가해서 새로운 창에서 열리도록 함.

- meta-info - http://cafe.naver.com/webstandardproject/603

    - og:
- html 요소는 block, inline  속성으로 구성된다.

    - block - 공간을 가지고 있음.
    - inline - 공간이 없어서, text align 속성을 줄 수 없음

- form
    - 속성
    - name - 이름, 요즘 대부분 id로 변경되지만 form에서는 사용함
        - name 안에 이름을 쓸 때는 _를 삽입하면 크롬 검사에서 document.name_name 으로 검색 가능하고
        - -가 삽입 되면 document[name-name]으로 검색 가능함
    - action - 데이터 전송 목적지
    - method
        - get - 덜 보안적, 주소에 모든게 표시됨. 길이가 제한적
        - post - 겟이 비해 보안적, 모든 주소가 표시 안됨, 길이 제한 없음.
    - enctype - multipart/form-data, 인코딩 타입, 파일 업로드 시 사용함

    - 인풋 요소
    - input
        - 암묵적 연결 방법은 쓰면 안됨, 스크린리더가 읽어주지 않음
        - 명시적 방법 id로 연결
        - name 값이 있어야지만 전송이 가능하고, 벨류 값을 가져 올 수 있다.
        - id는 label과 연결시키주기 위해서 필요한 속성

# Emmet 기능
- `.` - class,  `#` - id
- emmet update : ctrl+shift+i  - 이미지 크기 자동으로 넣기

# Sublime 기능
- ctrl+shift+↑↓ - 다중커서 선택
- ctrl+command+↑↓ - 위치 변경

