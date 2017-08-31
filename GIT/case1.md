# 로컬 저장소를 github 저장소와 연결하기

## 로컬 저장소 만들기

### 1. 프로젝트 폴더 만들기

우선 git 관리를 할 프로젝트 폴더를 적당한 디렉터리에 생성한다.  

터미널에서 `cd 디렉터리` 명령어를 통해 원하는 디렉터리로 이동한다. `mkdir 폴더명`을 입력하면 현 위치에 새로운 폴더(디렉터리)를 만들어준다. (mkdir은 'make directory'이다.) `cd` 명령어를 이용해 새로 만들어진 폴더로 이동한다.

```bash
$ cd 이동할 디렉터리
$ mkdir 생성할 폴더명
$ cd 생성한 폴더명
```

아래 예제는 desktop 디렉터리로 이동한 후, gitTest라는 폴더를 생성하였다. 그리고나서 생성한 gitTest 폴더로 이동하였다. 터미널의 오른쪽에서 디렉터리가 이동되는 것을 확인할 수 있다.  

![PC에 git 로컬 저장소 만들기](/images/1.png)

<br>

### 2. git init

앞에서처럼 새로운 폴더를 만들고 git 저장소로 만든 후 프로젝트를 진행할수도 있지만, 기존에 진행하던 (git 저장소가 아니던) 프로젝트 폴더를 git 저장소로 만들 수도 있다.

`git init` 명령어는 'git 관리를 하겠다'는 일종의 선언 같은 것이다. 이 명령어를 터미널에 입력하면 현 위치(디렉터리)에 `.git`이라는 폴더(하위 디렉터리)를 만든다.  
![.git](/images/2.png)  

.git 디렉터리에는 저장소에 필요한 뼈대 파일(Skeleton)이 들어 있다. 구조는 아래와 같다. 

![.git의 구조](/images/3.png)  

`git init` 명령어를 적용하면 이제 이 디렉터리는 git에 의해 관리되는 워킹 디렉터리가 된다. 하지만 이 명령은 앞에서도 말했듯, 관리를 하겠다는 선언한 것일 뿐 이것 만으로는 어떠한 버전 관리도 이루어지지 않는다.  

현재 gitTest폴더에 아무것도 없는 상태이므로 변경 사항을 만들기 위해 파일 하나를 생성한다. 예시로 new.txt 파일을 생성하였다. 만약 기존에 진행하던 프로젝트 폴더를 git 저장소로 추가하고 있다면 새 파일을 만드는 이 과정은 생략해도 무방하다.

![프로젝트 파일 추가](/images/4.png)  


### 3. git status

git은 워킹 디렉터리의 변경 사항(파일 또는 폴더의 수정/삭제/생성 등)을 감지할 수 있다. `git status` 명령어는 현재 git 관리 상태가 어떠한지를 보여준다.  

```bash
$ git status
```

![git status](/images/5.png)

위 상황은 현재 new.txt라는 관리대상이 아닌 (untracked) 파일이 감지되었으며 커밋되지 않았고, stage에 올라가지 않은 상태임을 의미한다. 즉 기존에 git이 관리하던 대상(파일이나 폴더)이 아닌 것이 발견되었다는 것이다. 이는 앞에서 new.txt 파일을 새롭게 생성했던 것이 git에 의해 감지된 것이다.

> 워킹 디렉토리의 모든 파일은 크게 Tracked(관리대상임)와 Untracked(관리대상이 아님)로 나눈다. Tracked 파일은 이미 스냅샷에 포함돼 있던 파일이다. Tracked 파일은 또 Unmodified(수정하지 않음)와 Modified(수정함) 그리고 Staged(커밋하면 저장소에 기록되는) 상태 중 하나이다. 그리고 나머지 파일은 모두 Untracked 파일이다. Untracked 파일은 워킹 디렉토리에 있는 모든 파일이 스냅샷에 포함돼 있는 것은 아니고 Staging Area에 있는 것도 아니다. 처음 저장소를 Clone하면 모든 파일은 Tracked이면서 Unmodified 상태가 된다. 파일을 Checkout하고 나서 아무것도 수정하지 않았기 때문에 그렇다.

마지막 커밋 이후 아직 아무것도 수정하지 않은 상태에서 어떤 파일이 수정되면 Git은 그 즉시 파일을 Modified 상태로 인식한다. 그리고 이 수정한 파일을 Stage하고 Staged 상태인 파일을 커밋한다. 이 라이프사이클을 그림처럼 계속 반복한다.

![파일의 라이프 사이클](https://git-scm.com/figures/18333fig0201-tn.png)

status에 대한 더 자세한 내용은 [링크](https://git-scm.com/book/ko/v1/Git%EC%9D%98-%EA%B8%B0%EC%B4%88-%EC%88%98%EC%A0%95%ED%95%98%EA%B3%A0-%EC%A0%80%EC%9E%A5%EC%86%8C%EC%97%90-%EC%A0%80%EC%9E%A5%ED%95%98%EA%B8%B0)를 참고한다.


## 4. git add

commit은 내 로컬 디렉터리에서 감지된 변경 사항을 확정하는 것이다. add는 변화가 감지된 파일들 중에서 git에 반영할(commit할) 후보를 선정하여 목록에 올리는 것이다. 메뉴얼에서는 'stage에 올린다'라고 표현한다.

![출처: https://rogerdudler.github.io/git-guide/index.ko.html](/images/git-tree.png)

add는 특정 변화만 선택적으로 stage에 올릴 수도 있고, 변화 전체를 한꺼번에 올릴 수도 있다. 아래 예제는 변화된 파일 전체를 스테이지에 올리는 명령이다.

```bash
$ git add .
```

만약 여러 파일 중 하나의 파일만 선택적으로 stage에 올리고 싶다면 `.`대신 `파일명`을 입력하면 된다.

```bash
$ git add new.txt
```

![git add.](/images/6.png)

<br>

### 5. git commit

이제 스테이지에 올린 변경 사항들을 commit 명령을 통해 저장한다. 

```bash
$ git commit -m "첫번째 버전"
```

`-m`과 `""`는 커밋 메시지를 추가하는 명령이다.  `""`안에 메시지를 입력하면 된다.

![git commit](/images/7.png)

해석해보면 **master 브랜치에 2fb5223이라는 ID를 갖는 커밋 로그가 추가되었으며, 커밋 메시지는 '첫번째 버전'이다. 이 커밋으로 1개의 파일이 변화하였으며, 1줄의 삽입(+)이 있었다**라는 의미이다.

<br>

## 로컬 저장소를 github 저장소에 연결하기

지금까지는 내 PC에서만 관리 가능한 로컬 저장소를 만들었다. 로컬 저장소만으로는 다른 이들과 프로젝트를 공유할 수 없기 때문에 공동 작업(협업)이 불가하다.

따라서 협업이나 프로젝트의 공유를 위해서는 특정 서버에 git 저장소를 만들고, 서버를 통해 관리할 필요가 있다. 가장 많이 사용되는 깃 클라이언트인 github를 통해 git 원격 저장소를 생성해보도록 한다.

### 1. 계정 만들기

[github.com](github.com)에 접속하여 계정을 생성하고 로그인한다.

### 2. 원격 저장소 생성하기  

github에 새 프로젝트를 생성하면 원격 저장소가 만들어진다. 아래 예제에서는 test라는 이름의 원격 저장소를 생성하였다.

![github에 저장소 만들기](/images/8.png)  

readme.md는 저장소의 프로젝트에 대한 설명을 작성하는 용도로 흔히 사용된다. 지금은 있어도 되고, 없어도 크게 상관 없다. (만약 readme.md를 만들어서 원격 저장소를 생성하였다면 아래에서 remote 대신 바로 clone하도록 하자. 이유는 아래 설명되어있다.)

### 3. 로컬 저장소와 원격 저장소 연결하기

지금까지는 로컬 저장소와 원격 저장소 별개로 존재할 뿐 아직 연결되지 않은 상태이다.

### git remote

git remote는 리모트 저장소를 생성한다. 리모트 저장소란 인터넷이나 네트워크 어딘가에 있는 저장소를 말한다. remote 명령어를 통해 저장소를 추가하는 것은 **네트워크 어딘가에 있는 원격 저장소를 관리할 저장소로 등록하는 행위**이다. remote 명령은 아래와 같이 실행할 수 있다.

```bash
$ git remote add 단축이름 원격저장소url

$ git remote

$ git remote -v
```

첫번째 명령은 원격저장소를 내 리모트 저장소로 등록(추가)한다. 이때 저장소의 단축 이름을 직접 지정할 수 있다. 저장소명은 특별하지 않다면 origin을 사용하는 것이 일반적이다.

`git remote` 명령은 내가 등록한 모든 리모트 저장소 목록을 설정한 단축 이름으로 보여준다.

`git remote -v`는 단축 이름과 url을 함께 보여준다. 

![git remote](/images/git-remote.png)


### git clone

remote 명령을 생략하고 바로 clone 명령을 사용할 수도 있다. clone은 대상이 되는 원격 저장소를 통째로 나의 로컬 저장소(PC)에 복제해온다. 이때 커밋 로그도 함께 가져온다. 그리고 저장소를 clone하면 origin이라는 이름의 리모트 저장소가 자동으로 등록된다. 따라서 remote하는 과정을 생략하고 바로 `git clone 저장소url` 명령을 수행할 수 있다.

---

### 4. 로컬 저장소와 원격 저장소 동기화하기

로컬 저장소와 원격 저장소를 동기화 즉, 같은 상태로 만들어주는 방법에는 두 가지가 있다. (사실 더 많지만 일단은 크게 두 가지만 다룬다.)

### git push

push 명령은 내 로컬 저장소의 확정 변경 사항(commit)을 원격 저장소에도 반영하는 것이다. 

```bash
$ git push --set-upstream origin master
```

`--set-upstream`은 push할 리모트 저장소를 지정해준다. 위에서는 origin이라는 리모트 저장소의 master 브랜치에 push 명령을 내리겠다는 의미이다. `--set-upstream`은 한번만 지정해두면 새로운 저장소 브랜치를 set하기 전까지는 `git push` 입력만으로 간편하게 push 할 수 있다.

---

<push 오류>  
remote 후 바로 push하는 중 발생할 수 있는 오류를 소개한다!  아래와 같은 에러메시지를 만날 수 있다. 

```
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'https://github.com/huusz/test.git'
```

![remote and push](/images/remote-and-push.png)  

**rejected**: push가 거부되었다.  
**master -> master**: 로컬 저장소의 master 브랜치의 변경 사항을 원격 저장소의 master 브랜치에 반영하려 하였는데,  
**non-fast-forward**: 원격 저장소의 master 브랜치가 로컬 저장소의 버전보다 이전 버전이 아니다!  

라는 의미이다.

즉, 오류가 발생하게 된 원인은 github에서 새로운 프로젝트를 생성하면서 만들어진 원격 저장소에 함께 만들어진 readme.md 파일 때문이다. 더 정확히 말하면 readme.md 파일의 존재가 문제가 되는 것이 아니고, 원격 저장소에서 이루어진 readme.md를 추가하는 커밋이 로컬 저장소의 커밋 로그에 없기 때문이다.

push 명령은 로컬 저장소의 commit 목록과 원격 저장소의 commit 목록을 비교한다. 그런 다음 원격 저장소의 마지막 commit id와 동일한 commit id를 가진 로컬 저장소의 commit 시점을 찾아낸 뒤, 원격 저장소의 마지막 커밋과 연결한다. 이제 무엇이 문제인지 이해가 될 것이다. 원격 저장소의 첫번째이자 마지막 commit인 readme를 추가하는 commit이 로컬 저장소에는 존재하지 않고, 따라서 현 상태에서는 둘을 연결할 수 없다.

이와 같은 상황에서 할 수 있는 조치는,

1. 원격 저장소를 삭제하고 다시 만들거나, (물론 readme 파일 없이 만들어야 한다. readme 파일을 함께 생성하면 자동으로 커밋이 생성되기 때문이다.)

2. fetch나 pull 명령으로 원격 저장소의 마지막 커밋을 로컬 저장소 커밋 로그의 맨 앞으로 받아와야 한다.

두 번째 방법으로 해결해본다.

```bash
$ git pull origin master
```

한번에 해결되면 좋겠지만, 안타깝게도 또다른 오류가 발생한다.

```
fetal: refusing to merge unrelated histories
```

![pull error](/images/pull-error.png)

원격 저장소(리모트 저장소)의 master 브랜치에서 데이터를 불러와(fetch) 로컬 저장소의 `FETCH_HEAD`에 담아둔 상태에서, 이를 로컬 저장소 master에 병합(merge)하려 하였는데, 병합하는 것이 거부된 상황이다. 커밋 히스토리가 서로 관련이 없다. 즉 서로 관련성이 없기 때문에 merge할 수 없다는 것이다. 뒤에서도 설명하겠지만, pull 명령은 fetch + merge 작업을 한번에 처리한다. 현 상황은 fetch는 되었지만, merge가 되지 않은 상태이다.

기본적으로 merge는 원격 저장소와 로컬 저장소가 공통으로 가지고 있는 commit 지점이 존재해야 한다. 그 지점부터 병합을 시도하기 때문이다. 애초에 공통되는 commit 지점이 존재하지 않아 pull 명령도 사용할 수 없는 것이다. 

해결하기 앞서 상황을 이해하기 위해 간단하게 짚고 넘어갈 개념이 있다. pull과 fetch이다.

* fetch는 리모트 저장소에 있는 내용을 가져오지만 자동으로 내 로컬 저장소에 merge하지 않는다. 원격 저장소의 내용을 확인만 하고 로컬에 병합(merge)하고 싶지는 않을 때 fetch를 사용한다.

HEAD에는 가장 마지막에 행해진 commit 정보가 담긴다. 더 정확히 말하면 HEAD는 현재 작업중인 워킹디렉터리를 가리키는 포인터이다. checkout 명령을 통해 작업 중인 브랜치를 이동하면 HEAD도 따라서 이동한다. `FETCH_HEAD`는 리모트 저장소가 가장 최근에 작업했던 디렉터리를 가리킨다. 즉 원격 저장소의 가장 최근에 행해진 commit을 가리키는 포인터이다.

`FETCH_HEAD`는 이름 없는 브랜치로 로컬에 가져오게 된다. 이 브랜치는 `FETCH_HEAD`로 checkout도 가능하다.

* pull 명령은 리모트 저장소에 있는 내용을 가져올 뿐 아니라 자동으로 로컬 저장소에 merge한다. 즉, git pull은 git fetch + merge FETCH_HEAD인 셈이다.


복잡하고 긴 설명 끝에 결론은 어쨌든 연결되는 **공통적으로 가리키고 있는 커밋 포인트가 없다**는 것이다. 

결국은 clone으로 원격 저장소를 복제해오는 것이 가장 간단한 해결책이다.

```
$ git clone 저장소url
```

이렇게 하면 원격 저장소의 커밋이 내 로컬 저장소에 복사된다. 이후 add -> commit -> push를 통해 내 로컬 저장소에 있던 커밋 로그를 clone으로 불러온 커밋 로그 뒤에 merge할 수 있으며 이를 원격 저장소에도 반영할 수 있게 된다.

> clone은 자동으로 로컬의 master 브랜치가 리모트 저장소의 master 브랜치를 추적하도록 한다. git pull 명령은 clone한 저장소에서 데이터를 가져오고 그 데이터를 자동으로 현재 작업하는 코드와 merge시킨다.



---
Reference

* [git-scm.com](https://git-scm.com/book/ko/v1/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EB%A6%AC%EB%AA%A8%ED%8A%B8-%EB%B8%8C%EB%9E%9C%EC%B9%98)  
* [git-scm.com - 브랜치란 무엇인가](https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EB%B8%8C%EB%9E%9C%EC%B9%98%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80)  
* [stack overflow](https://stackoverflow.com/questions/9237348/what-does-fetch-head-in-git-mean)  
* [git tutorial - fetch](https://backlogtool.com/git-tutorial/kr/stepup/stepup3_2.html)

