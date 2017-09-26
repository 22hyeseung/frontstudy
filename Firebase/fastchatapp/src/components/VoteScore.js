import React from 'react'


export default class VoteScore extends React.Component {
  render() {
    return (
      <div style={{display: 'flex'}}>
        <div style={{ flexGrow: 1 }}>
          <article className="tile is-child notification is-info">
            <p className="subtitle">보기 A</p>
            <p className="title">53</p>
          </article>
          <ul>
            <li>Paul</li>
            <li>Kim</li>
            <li>Park</li>
          </ul>
        </div>
        <div style={{ flexGrow: 1 }}>
          <article className="tile is-child notification is-danger">
            <p className="subtitle">보기 B</p>
            <p className="title">32</p>
          </article>
          <ul>
            <li>Suh</li>
            <li>Dean</li>
            <li>Jay</li>
          </ul>
        </div>
      </div>
    );
  }
}
