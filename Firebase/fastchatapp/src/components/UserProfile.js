import React from 'react'


export default class UserProfile extends React.Component {
  render() {
    return (
      <div className="tile">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="http://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">패스트 캠퍼스</p>
              <p className="subtitle is-6">paulsoh</p>
            </div>
          </div>

          <div className="content">
            paulsoh.dev@gmail.com
          </div>
        </div>
      </div>
    );
  }
}
