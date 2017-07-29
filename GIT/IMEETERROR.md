
# I MEET ERROR FROM GIT

## (1) REMOTE

* **오류 메시지**  
```fatal: remote origin already exists```

* **배경**  
git 로컬 저장소와 원격 저장소를 연결하려고 하였다.  
  ```$ git remote add origin (원격저장소 https 주소)```

* **해결**  
remote origin이 이미 존재하기 때문이다. 따라서 origin 을 지우니 해결되었다.  
```$ git remote rm origin```
---

## (2) Repository 해제하기

* **배경**  
실수로 사용자 폴더를 git 저장소로 지정하였다. 해당 폴더를 git 관리에서 해제하고 싶다.

* **해결**  
이미 로컬 저장소로 지정한 것을 해제하는 명령어는 존재하지 않는다. 그러니 해당 폴더의 .git 폴더를 탐색기 상에서 직접 삭제해야 한다. .git 폴더는 숨김 파일로 되어 있으므로 탐색기의 보기 옵션에서 숨김 파일이 보이게 설정(윈도우)해야 한다. 맥에서는 Finder 또는 데스크탑에서 ```shift``` + ```command``` + ``` . ```키를  누르면 된다.
이렇게하면 .git 폴더를 볼 수 있다. .git 폴더를 삭제하면 Git 로컬 저장소 기능이 삭제된 것을 의미하므로 git 관리에서 벗어날 수 있다.
---
## (3) Push

* **오류**  
```
remote: Permission to huusz/huusz.github.io.git denied to hyeseungLee93.
fatal: unable to access 'https://github.com/huusz/huusz.github.io.git/': The requested URL returned error: 403
```

* **배경**  
hexo파일이 있는 git 로컬 저장소와 github page url을 가지고 있는 원격 저장소를 연결, commit까지 성공하였으나 push에서 error가 발생.  
```$ git push -u origin master```  
403 error는 액세스 권한이 없음을 의미. github 계정을 기존에 'A계정'을 사용하다가 블로그 개설을 위해 'B계정'을 새롭게 만들었다.
하지만 블로그 git에 대한 add, commit, remote, push가 A계정으로 이루어져 당연히 A계정은 권한이 없으니 액세스 거부된 것.

* **해결**  
SSH키를 생성하여 계정을 추가로 등록한다.  

**1) 우선 SSH 공개키를 만든다.**  
  * ```-t```: 암호화 타입을 정할 수 있다. ```rsa``` 타입으로 설정한다.
  * ```-b```: 생성할 키의 비트수를 지정한다. 각 암호화 타입마다 필요한 비트수가 다른데, rsa타입은 최소 768비트가 필요하며 default로 2048비트로 설정된다. 처음 이 옵션을 지정해주지 않고 SSH키를 생성하였더니 github에서 보안상의 이유로 2048보다 큰 키만 허용한다며 거부되었다(...) 따라서 더 크고 견고한 4096 비트로 설정한다.
  * ```-C```: 대문자 C이다. 주석을 입력할 수 있다. github에서는 사용자의 로그인 ID(username 또는 email)을 적으라고 가이드한다.
  ```
  $ ssh-keygen -t rsa -b 4096 -C "이메일주소"
  ```
  그런 다음 아래 문구가 뜨면,
  ```
  Generating public/private rsa key pair.
  Enter file in which to save the key (/c/Users/사용자명/.ssh/id_rsa):
  ```
  마지막 :(콜론) 뒤에 이어서 아래 경로를 입력한다.
  ```
  /c/Users/사용자명/.ssh/id_rsa_second
  ```
  이렇게 하면, 기존에 있던 ssh에 덮어쓰지않고 새 ssh키를 추가 생성할 수 있다.
  
  이후 passphrase를 설정하라는 메시지가 뜨는데 이를 설정하면 키를 사용할때마다 암호를 입력해야하므로 상당히 번거롭다고 한다. 그래서 암호 설정 없이 그냥 넘어가기 위해 엔터만 누르고 넘어간다.

  이 과정이 모두 끝나고 나면 .ssh 폴더에 id_rsa_second 파일과 id_rsa_second.pub 파일이 생성된다. pub이 공개키(public key)이다.

  필요한 것은 공개키이다.
  ```
  $ vim ~/.ssh/id_rsa_second.pub
  ```
  ssh-rsa로 시작하는 스트링 전체를 복사한다.  
  [Vim 단축키 참고](https://blog.outsider.ne.kr/540)  
  Vim을 종료할때는 반드시 ESC를 누른 후 ```:q(저장하지 않고 종료)``` 또는 ```:wq(저장 후 종료)```를 통해 빠져나온다. 이 경우에는 ```:q```가 안전하다.

<br>

**2) 추가하고자 하는 계정으로 [github](https://github.com)에 로그인한다.**
  1. 계정의 Settings로 이동한다.

  2. SSH and GPG keys 메뉴로 간 후 SSH keys 탭에서 **New SSH key** 버튼을 클릭한다.

  3. Title을 적당히 입력하고, 위에서 복사한 SSH 공개키를 Key란에 붙여넣기한다. 그리고 Add SSH key 버튼을 누른다.

<br>

**3) git으로 돌아와서, 기존 remote경로로 지정되어 있는 HTTPS 경로를 삭제한다.** origin으로 설정해둔 상태이다.
  ```
  $ git remote rm origin
  ```
  그리고 다시 origin에 SSH 경로를 새로 추가해준다.
  ```
  $ git remote add origin git@github.com:huusz/huusz.github.io.git
  ```

**4) push하면, 정상 작동 된다.**
```
$ git push -u origin master
```


**[참고]:**  
[해결 방법 전문](http://recoveryman.tistory.com/283)  
[SSH키 옵션 설정](http://storycompiler.tistory.com/112)

---
