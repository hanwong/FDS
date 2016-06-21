###### Front-end Development School

#DAY 04

## 웹 디자인의 역사
* 테이블을 사용할 때는 무엇이 중요한지 알기가 어려웠음
* CSS는 GPU를 사용해서 사용 환경이 javascript보다 자연스럽고 가볍다.
* javascript는 cpu를 사용함.
* 플래시
    * 비주얼을 하기 전에 근본(접근성)에 기반하여 설계를 해야한다.
        * pallax는 비주얼적으로만 고려해서 접근성은 떨어짐.
    * 디자인이 점점 아트화 되어감.
* 플래시 —> 애니메이트
    * html canvas로 내보내서 사용할 수 있음.
    * 애니메이션은 표현이지 컨텐츠를 가지고 있는 것은 아니다.
    * 중요한것은 컨텐츠이다.
* CSS
* 2007년 - 국내에 웹표준을 전파하기 시작하던 시기
* 반응형 디자인
    * Mobile First
* 웹 디자인의 미래

## 웹 환경
> 프론트엔드 개발자가 OS, 브라우저가 변해도 컨텐츠에 접근할 수 있도록 해줘야 한다.

## 호스팅
> mamp - 로컬 서버 테스팅

## form
> 의미에 맞게 쓴다는 것은 모든 기기에서 인식할 수 있도록 구조화 한다는 것

* button 요소는 type=“button” 일 때 form 밖에 써도 괜찮음.
    * type이 submit, reset 은 form 내부에서 사용하는것이 좋음
* input은 기본 값이 text, 스크린리더가 편집창으로 읽음
* 암묵적 방식 <label><input요소></label>
    * input 요소가 여러개 존재 하는 경우(라디오박스, 체크박스 같은) 일일이 관리하기 어렵기 때문에 암묵적 방식을 활용하는 것이 유용함.
* input
    * text, submit, button, radio, checkbox, file, password, image, hidden, reset,
    * radio는 name이 같아야지만 하나만 선택이 가능하다.
        * label로 묶어줘야지 텍스트만 클릭해도 선택가능한 상태가 됨.
    * checkbox
        * checked - 초기값 설정
        *  xhtml - checked=“checked” 로 표시해야 됨.
    * text
        * disabled = “disabled"
        * size = “” - 이건 CSS에서 처리
        * maxlength - 최대 입력 길이
        * placeholder - 가이드 텍스트
    * file
        * multiple - 여러 파일 선택 가능
        * form의 enctype을 multipart/form-data 로 설정해줘야됨, 텍스트 파일만 업로드 할 경우 굳이 필요 없음
* label
* textarea
    * 여러줄 입력 가능
    * contenteditable=“true”
        * <p>, <div>등 텍스트 단위의 요소를 선택하면 바로 수정 가능하게 만들어주는 속성
* select - 콤보 박스
    * option
        * value
        * selected -  기본값으로 선택시 사용하는 속성
    * optgroup
        * 여러 옵션을 묶어주는 옵션 그룹
        * label 속성 값에 대표 이름 설정
* fieldset - form 요소 내에서 그룹을 만들 경우 사용
* legend - 필드셋의 이름을 지정, 필드 영역의 이름

## prgramming
* script
    * javascript
* noscript
    * 스크립트를 지원하지 못하는 환경에서 사용
    * 스타일을 대체 해주거나 기능을 대체해줄 때 사용
* object
* parameter