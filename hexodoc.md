## Document
#### _config.yml
```config.yml```은 사이트 구성([configuration](https://hexo.io/docs/configuration.html)) 파일이다. 여기서 대부분의 사이트 설정을 구성할 수 있다.

#### package.json
어플리케이션 데이터이다. EJ, Stylus, Markdown renderer가 기본적(default)으로 설치된다. 원한다면 나중에 제거할 수 있다.
```
package.json
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "hexo": {
    "version": ""
  },
  "dependencies": {
    "hexo": "^3.0.0",
    "hexo-generator-archive": "^0.1.0",
    "hexo-generator-category": "^0.1.0",
    "hexo-generator-index": "^0.1.0",
    "hexo-generator-tag": "^0.1.0",
    "hexo-renderer-ejs": "^0.1.0",
    "hexo-renderer-stylus": "^0.2.0",
    "hexo-renderer-marked": "^0.2.4",
    "hexo-server": "^0.1.2"
  }
}
```

#### scaffolds
[scaffold](https://hexo.io/docs/writing.html#Scaffolds) 폴더. 새 포스트(글)을 쓸 경우, Hexo는 새 파일을 scaffold 폴더에 올린다.

#### source
Source 폴더. 사이트의 콘텐츠를 저장하는 곳이다. Hexo는 ```_posts```폴더를 제외하고, 숨김 폴더나 이름 앞에 ```_```(밑줄)이 붙은 폴더는 무시한다. 렌더링 가능한(Renderable) 파일(e.g. Markdown, HTML)은 처리되어 public 폴더로 들어가지만, 다른 파일들은 그저 복사된다.

#### themes
[테마](https://hexo.io/docs/themes.html) 폴더. Hexo는 사이트 컨텐츠를 테마와 결합하여 정적 웹 사이트를 생성한다.

---
