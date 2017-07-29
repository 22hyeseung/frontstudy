## Computation VS Calculation

* Calculation: 연산을 수행하는 것  
* Computation: 알고리즘 연산을 통해 시스템 명령을 수행하는 것

* Computer: Stored Program computer
* Calculator: Fixed Program  computer(단순 연산)

> _공학용 계산기는 시스테믹하게 연산 과정을 저장하고 수행할 수 있으므로 **computer** 에 속한다._

### 1. Computer Science and Engineering  
컴퓨터의 소프트웨어를 다루는 학문.  
컴퓨터라는 물리적 기기를 연구하는 것이 아닌
 Computer 의 개념과 구조를 이해
하고 구현하는 학문  

### 2. Basic Computer Architecture
* Program Counter ‑ contains the address (location) of the instruction
being executed at the current time  
* ALU(Arithmetic Logic 근위식) ‑  +, -, *, /, AND, OR, NOT, 

### 3. CPU and MicroProcessor
D8086 프로세서

##### Architecture Naming  
* x86  
8080 ‑ 8bit  
8086 ‑ 16bit  
8088 ‑ 8bit  
80286 ‑ 16bit  
80386 ‑ 32bit  
..

* IA64
Itanium ‑ IA64 based 64bit, 1999  
...  
* AMD64  
Opteron ‑ x86‑64based 64bit, 2003  
Athlon  
AMD Phenom  
AMD FX  
Ryzen  
..  
* ~~Intel64~~ == AMD64  
Xeon ‑ x86‑64 based 64bit, 2004  
Core 2  
Core i Series  

### 4. CISC&RISC Architecture
* Complex Instruction Set Computers
  - 복잡한 명령구조
  - 어드레싱에 강점
  - 전력 신경쓸 필요없이 고성능 컴퓨팅에 사용
  - Intel x86, AMD64, ..
* Reduced Instruction Set Computers  
  - 명령어의 단순화
  - 메모리 접근 횟수가 적음
  - 저전력 프로세싱에 사용
  - SPARC, ARM, ..

### 5. Memory
컴퓨터에서 사용할 수 있도록 정보를 저장하는 공간

##### 1) Random Access Memory (RAM)
- 자유롭게 읽고 쓸 수 있는 주기억장치
- 메모리의 주소(번지)로 그 위치에 접근
- RAM 의 어떤 위치로든 동일한 시간에(다이렉트로) 접근 가능 (Random Access) (접근 소요시간이 전부 동일하다.)
- 컴퓨터를 부팅할때마다 초기화된다.(휘발성 저장공간)  
- **실시간 데이터, 연산이 저장되는 곳**

##### 2) Read Only Memory (ROM)
- 전원이 공급되지 않아도 그 정보를 유지하는 주기억장치 (컴퓨터를 재부팅해도 데이터가 유지되는)
- 비싸거나 느려서 안정적인 정보를 저장해야 할 때 사용
- **BIOS, OS, Firmware 정보 저장에 쓰임**

##### 3) OS
- Operating System: 운영체제  
- **시스템 하드웨어와 응용 소프트웨어 ( 한글 , excel, ..) 의 리소스를 관리하는 시스템
소프트웨어**

> Bios는 어떠한 하드웨어와 소프트웨어를 가지고 있더라도 동일한 명령어를 사용할 수 있는 환경 + 이를 기반으로 한 windows(아니면 메모리, CPU에 따라 다 다른 소프트웨어 환경을 갖게 된다.) Bios 덕분에 windows10이라는 단일 OS만으로 서로 다른 하드웨어 스펙에서도 동일한 소프트웨어 환경을 누릴 수 있는 것.

###### + Chronicles of OS - OS 연대기
* Unix
  - Starting in the 1970s by AT&T
  - Ken Thompson, Denis Ritchie, .. (C언어, GO언어 창시자)

* Unix‑like
  - Solaris
  - BSD
  - MacOS

* Linux  
  - Unix‑clone OS
  - GNU(GNU is not Unix)/Linux
  - Sep 17 1991 by Linus Torvalds  

* Linux-like
  - Ubuntu
  - Fedora
  - CentOS
  - Debian
  - Linux Mint
  - Android
  - Tizen
  -Chrome OS
  - ..  

* Windows
  - CP/M‑DOS ‑> MS‑DOS
  - Windows 95
  - Windows 98
  - Windows 2000
  - ...
  - Windows 8
  - Windows 10

- Windows 9x vs Windows NT
  - MS‑DOS based ‑> 16bit ( ~ Windows2000)
  - WindwosNT Kernel(3.1) based ‑> 32bit (Windows XP)
  - WindwosNT Kernel(6.1) based ‑> x86‑64(AMD64)  (Windows vista ~ )


### 6. Type
- Single‑tasking / Multi‑tasking
한번에
  - 1개/n개 의 프로그램을 동시 수행 (achieved by time‑sharing)
- Single‑user / Multi‑user
- Distributed

> Hardware <‑‑>  Operating System  <‑‑> Application Software <‑‑> User

### 7. Patch & Debug
* **Patch**: 기능 업데이트  
과거 프로그래밍은 종이 카드로 펀칭하며 코딩아였다. 당시 잘못된 곳에 구멍을 뚫은 경우 종이테이프를 붙여서 메꿨는데, 이를 '패칭(Patching)'이라 하였다. 시스템 '패치'의 개념은 여기서 시작되었다.  
* **Debug**(=debugging):  
컴퓨터 프로그램의 정확성이나 논리적인 오류(버그)를 찾아내는 테스트 과정  
프로그램상 잘못된 오류를 수정하는 것  

## GIT

#### 1. VCS (Version Control System)
== SCM (Source Code Management)  
< SCM (Software Configuration Management: 형상관리)  
**형상관리=일정관리**

#### 2. git의 특징
* 빠른속도, 단순한 구조
* 분산형 저장소 지원 (오프라인 상태에서도 개발이 가능하다. 로컬, 온라인 저장소)
* 비선형적 개발 ( 수천개의 브랜치 ) 가능

#### 3. git의 장점
* 소스코드 주고받기 없이 동시작업이 가능해져 생산성이 증가
* 수정 내용은 commit 단위로 관리 , 배포 뿐 아니라 원하는 시점으로 Checkout 가능 (완성되지 않은 것은 commit하면 안된다. '작동 하는' 단위로 commit하며 관리해야 한다.)
* 새로운 기능 추가는 Branch 로 개발하여 편안한 실험이 가능하며 , 성공적으로 개발이 완료되면 Merge 하여 반영
* 인터넷이 연결되지 않아도 개발할 수 있음

#### 4. git
* Blob: 모든 파일이
* Blob 이라는 단위로 구성
* Tree: Blob(tree) 들을 모은 것
* Commit: 파일에 대한 정보들을 모은 것


***Make First Repo !!!***

##### bash 명령어
```
cd: 폴더명 또는 디렉토리명 : 해당 디렉토리로 이동
ls: 현재 디렉토리의 모든 폴더 및 파일 확인
mkdir: 디렉토리 만들기 (빈 폴더 만들기)
```
##### git 명령어

* ```git --version```: 현재 git의 버전 확인
* ```git init```: 현재 디렉토리에 git 저장소 생성
* ```git add 파일명```: git add는 2가지를 하는데 untracked files의 파일들을 git가 추적하도록 하거나 파일은 수정했지만 아직 스테이징 영역에 올라가지 않은(Changed but not updated) 파일들을 스테이징 영역에 올립니다. -i 옵션을 주면 대화형모드가 시작되며 파일의 일부분만 선택해서 스테이징하는 것이 가능합니다. -p 옵션을 사용하면 -i 대화형모드없이 바로 패치모드를 사용할 수 있습니다.
* ```git commit -m "커밋메시지"```:스테이징 영역에 올라가 있는 파일 커밋
* ```git status```: 커밋되지 않은 변경사항 조회
* ```git clone 레파지토리주소 폴더명```: 레파지토리를 복제하여 저장소를 생성. 폴더명은 생략 가능.
* ```git fetch```: 레파지토리의 변경사항을 가져와 원격 브랜치 갱신
* ```git pull```: git fetch에서 하는 레파지토리의 변경사항을 가져와서 로컬 브랜치에 합치는 작업을 한꺼번에 한다. 파라미터로 풀링할 레파지토리와 반영할 로컬브랜치를 줄 수 있다.
*```git push```: 파라미터를 주지 않으면 origin 저장소에 pushing하여 현재 로컬브랜치와 같은 이름의 브랜치에 pushing한다.
*```git remote add 이름 저장소주소```: 새로운 레파지토리 추가
*```git remote```: 추가한 원격저장소의 목록을 확인할 수 있다.

[자세하고 더 많은 git 명령어 참고 링크](https://blog.outsider.ne.kr/572)

**실습** ***Make First Repo !!!***  
command
```
$ git config --global user.name "username"
$ git config --global user.email "github eamil"
$ git config --list 
$ cd c:/Users/Judith/Documents
$ ls
$ mkdir dev
$ cd dev
$ mkdir my-fitst-repo
$ cd my-first-repo
```
윈도우 탐색기를 통해 해당 폴더로 이동한 후 HTML파일을 생성하고 폴더에 저장한다.  
command
```
$ git status
```
result
<pre>
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        index.html

nothing added to commit but untracked files present (use "git add" to track)
</pre>

command
```
$ git add .
$ git status
```
result
<pre>
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   index.html
</pre>

command

```
$ git commit -m "Create index.html
> I created index.html while I'm doing my lecture.
> "
$ git status
```

result
<pre>
On branch master
nothing to commit, working tree clean
</pre>

다음으로 github에 접속하여 새로운 레파지토리를 만든다. (readme파일 없이)  
생성된 레파지토리의 url을 복사한다.  

command
```
$ git remote add origin https://github.com/hyeseungLee93/my-first-repo.git

$ git status
$ git push origin master 
```
result
<pre>
On branch master
nothing to commit, working tree clean
</pre>

## github
**License**  
* Apache License  (개인적 사용은 자유롭지만 영리적 사용에는 코드에 대한 권리 주장 가능)
* MIT License (영리적 개인적 사용 모두 자유로운 라이센스)

### github으로 블로그 생성하기

#### Static Site Generator

  * [Hexo](https://hexo.io/): Node.js 기반 정적 블로그 생성기