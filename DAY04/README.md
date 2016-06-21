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
> 의미에 맞게 쓴다는 것은 모든 기기에서 인식할 수 있도록 구조화 한다는 것이 중요함.

```html
<form action="/register.php" method="GET" name="register_form" enctype="multipart/form-data">
    <!-- fieldset과 legend로 form field를 구분할 수 있다 -->
    <fieldset>
        <legend>필수 입력사항</legend>
        <div>
            <!-- 암묵적 방식을 사용할 경우, for와 id 맵핑은 필요 없다. -->
            <label>ID: <input type="text" name="register_id"></label>
        </div>
        <div>
            <!-- placeholder 속성을 사용하면 사용자에게 안내(Guide)를 해줄 수 있다 -->
            <label for="register_password" placeholder="Input your ID">PASSWORD</label>
            <input id="register_password" type="password" name="register_password">
        </div>
    </fieldset>
    <div>
        <label for="register_user_gender">gender</label>
        <!-- name값이 같으면 하나의 그룹으로 묶이고, 단일 체크가 가능해진다 -->
        <!-- 아래의 경우, 암묵적 label 방식이 더 유용하다. id 할당 문제로부터 자유로워진다 -->
        <label><input type="radio" value="1" name="register_user_gender">Male</label>
        <label><input type="radio" value="2" name="register_user_gender">Female</label>
    </div>
    <div>
        <label for="register_upload">File</label>
        <!-- multiple 속성으로 여러 파일을 전송할 수 있다 -->
        <input multiple type="file" id="register_upload" name="register_upload">
    </div>
    <div>
        <h3>hobby</h3>
        <ul>
            <!-- GET방식으로 요청을 하면 주소창에서 쿼리부분(?, 물음표) 뒤에 {name}={value} 형식으로 쿼리 요청하는 모습을 볼 수 있다. -->
            <!-- checked 속성을 설정하면 체크 상태로 처리된다. -->
            <li><label><input type="checkbox" value="book" name="register_hobby" checked>독서</label></li>
            <!-- disabled를 사용하여 사용하지 못하게 할 수도 있다 -->
            <li><label><input type="checkbox" value="movie" name="register_hobby" disabled>영화관람</label></li>
            <li><label><input type="checkbox" value="sports" name="register_hobby">스포츠</label></li>
        </ul>
    </div>
    <textarea></textarea>
    <!-- contenteditable 속성 값이 true로 설정되면 사용자가 직접 수정할 수 있다 -->
    <p contenteditable="true">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, blanditiis!</p>
    <div>
        <h3>Your Job</h3>
        <select name="register-job">
            <option value="">Select your job</option>
            <!-- <input> 요소의 checked 속성과 같은 방법으로, <option> 요소는 selected 속성을 설정할 수 있다 -->
            <option value="teacher" selected>Teacher</option>
            <option value="student">Student</option>
            <option value="Doctor">Doctor</option>
            <optgroup label="-WEB-">
                <option value="Doctor">Designer</option>
                <option value="Doctor">Developer</option>
                <option value="Doctor">DevOps</option>
            </optgroup>
        </select>
    </div>
    <!-- <input type="submit"> 요소의 value 속성 값이 전송 버튼 텍스트로 출력된다. -->
    <input type="submit" value="제출 버튼">
    <!-- <button> 요소의 경우는 내부에 텍스트를 포함할 수 있다. -->
    <button type="reset">초기화</button>
</form>
```
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
