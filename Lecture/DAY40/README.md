###### Front-End Develop SCHOOL

# DAY 40

### jQuery 

#### Filtering
* eq(index)
* not( selector | element | function )
* filter( selector | element | function | selection(jQuery Object) )
* slice( start, [end] )
* first, last ...
* is( selector | element | function | selection(jQuery Object) ) - 자신
* :has - 자식

#### Finding
* 요소의 자식 자손 요소들 안에서 찾는것
* find( selector )
* children 
* parent - parents - parentsUntil
* next - nextAll - nextUntil
* prev - prevAll - prevUntil 
* siblings - 나빼고모든 형제!!!
* contents - 모든 노드요소를 찾아 온다.
* closest - 가장 가까운 부모 요소

#### Chaning
* add( selector | element | html | selection(jQuery Object) | selector, context)
* addBack
* end

#### Manipulation
* $('<div>') - 요소 생성
* text()
* html()
* attr() - html에 직접 선언된 속성
* removeAttr()
* prop() - property , 사용자가 입력해서 js에서 동적으로 선언된 속성, `form` validation  할 때 많이 사용됨.
* removeProp()

#### Insert! in
* prependTo('parent')
* parent.prepend(element)
* appendTo('parent')
* parent.append(element)
* A.before(B) - A 앞에 B를 삽입해라
* A.insertBefore(B) - B 앞에 A를 삽입해라
* A.after(B) - A 뒤에 B를 삽입해라
* A.insertAfter(B) - B 뒤에 A를 삽입해라

#### Insert! Wrap
* wrap() - 개별적으로 하나씩 감싸는 것
* unwrap()
* wrapAll() - 여러개를 한꺼번에 감싸는 것




* each( callback-function(index, element){} ) 
