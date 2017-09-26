import React from 'react'


export default class CurrentUser extends React.Component {
  render() {
    return (
      <div className="nav-right nav-menu">
        <a className="nav-item is-active">
          로그인
        </a>
        <figure
          className="image is-48x48"
        >
          <img
            src="http://bulma.io/images/placeholders/128x128.png"
            style={{
              marginTop: '3px',
              borderRadius: '100%',
            }}
          />
        </figure>
        <a className="nav-item">
          소용석님 안녕하세요
        </a>
      </div>
    );
  }
}
