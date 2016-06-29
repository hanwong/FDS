##Team Activity Log
**Kakao**
* footer 영역이 창 크기를 확대해야지만 보임. 사용자입장에서 수정이 필요해 보임
* `div`보다는 `article` 로 구조화하는 것이 좋을것 같음
* sectioning 요소 안에 sectioning 요소가 들어갈 수 있음
* `main` 요소는 `body`안에 바로 한번만 쓰고 다른 sectioning 요소 안에는 들어갈 수 없음
```html
<main>
    <section>
          <h2></h2>
          <article><h3></h3></article>
          <article><h3></h3></article>
    </section>
    <section>
          <h2></h2>
          <article><h3></h3></article>
          <article><h3></h3></article>
    </section>
</main>
```

* 구조화 순서는 `header`,`footer`를 묶어주고 콘텐츠들은 `main`안에 구조화

