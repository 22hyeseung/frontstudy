import React from 'react'


export default class Card extends React.Component {
  render() {
    return (
      <div className="tile">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">
              이것 먹을까요
            </p>
            <figure className="image is-4by3">
              <img src="http://bulma.io/images/placeholders/640x480.png" />
            </figure>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">
              저것 먹을까요
            </p>
            <figure className="image is-4by3">
              <img src="http://bulma.io/images/placeholders/640x480.png" />
            </figure>
          </article>
        </div>
      </div>
    );
  }
}
