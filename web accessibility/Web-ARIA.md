## 한국형 웹 콘텐츠 접근성 지침

### ARIA

마크업에 역할, 속성, 상태 정보를 추가하여 스크린 리더 및 보조 기기 등에서 접근성 및 상호 운용성을 향상시키고 보다 나은 사용자 경험을 제공하기 위함

---
**Notice**

h1이나 nav같은 의미 있는 시맨틱에는 role을 부여하지 않도록 한다.

span이나 p, div 같은 중립적인 태그에만 사용하도록 한다.


### aria-hidden

부트스트랩 아이콘 태그

`<i class="fa fa-delete" aria-hidden=true></i>`

aria-hidden은 시각장애인에게 아이콘 이름 정보(i태그의 클래스 명)가 전달되지 않도록 (아이콘을 읽어주지 않도록) 해주는 역할을 한다.


### 링크

변경된 약관을 확인하려면 [여기](https://www.naver.com)를 확인하세요. (X)

[변경된 약관](https://www.naver.com)을 확인하세요 (O)

* 더보기 링크

<a href="" title="자료실">더보기</a>


### 테이블

* id headers

headers: th
id: tr

`<td headers="국어" id="학년">80</td>`
 
"국어 1학년 80점"


[참고](http://www.wah.or.kr/board/boardList.asp?brd_sn=4)

