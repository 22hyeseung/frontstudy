import React from 'react';
import firebase from 'firebase';
import { database, googleProvider, auth } from './firebase';
import map from 'lodash/map';

const tileClasses = ['danger', 'primary', 'info', 'success', 'warning'];

export default class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isSigned: false,
      message: '', // 개별 메시지 (입력받는 메시지)
      messages: [], // 데이터에서 받아오는 메시지
      currentUser: {
        name: '',
        photourl: '',
        email: '',
      },
    };
  }

  componentDidMount = () => {
    // database.ref('/').set({}); //루트 오브젝트를 빈 객체로 =데이터 초기화
    database.ref('/messages').once('value', snapshot => {
      this.setState({
        messages: map(snapshot.val(), message => message),
      });
    });

    auth.onAuthStateChanged(user => {
      if (user) {
        //로그인 상태
        const currentUser = {};
        currentUser.name = user.displayName;
        currentUser.photourl = user.photoURL;
        currentUser.email = user.email;
        this.setState({
          currentUser,
        });
        // console.log('user has logged in.');
        // console.log('Welcome' + user);
        this.getMessagesFromDB();
      } else {
        //로그아웃 상태
        const currentUser = {};
        currentUser.name = '';
        currentUser.photourl = '';
        currentUser.email = '';
        this.setState({
          currentUser,
          messages: [],
        });
        // console.log('user has logged out.');
      }
    });
  };

  getMessagesFromDB = () => {
    database.ref('/messages').on('value', snapshot => {
      // ref에는 최상단 루트를 넣는다. value가 변하는 이벤트가 발생하면, 2번째 인자를 실행한다.
      this.setState({
        messages: map(snapshot.val(), message => message),
      });
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    document.body.scrollTop = document.body.scrollHeight;
  };

  onTextChange = e => {
    this.setState({
      message: e.target.value,
    });
  };

  loginWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then(user => {
        console.log(user);
      })
      .catch(error => console.log(error));
  };

  logout = () => {
    auth
      .signOut()
      .then(() => {})
      .catch(() => {});
  };

  addMessageToDB = e => {
    e.preventDefault();
    const currentTime = new Date();
    const message = {
      text: this.state.message,
      time: currentTime.toLocaleTimeString(),
      userName: this.state.currentUser.name,
      photo: this.state.currentUser.photourl,
    };
    database.ref('/messages').push(message);
    this.setState({
      message: '',
    });
  };

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: 'white',
            position: 'fixed',
            zIndex: 100,
            display: 'flex',
            justifyContent: 'center',
            padding: '15px',
            width: '100%',
          }}>
          <h1 className="title is-1">CHAT:ME</h1>
          {/* <button onClick={this.addDataToDB}> Click me</button> */}

          {this.state.currentUser.name ? (
            <div>
              <img
                className="image is-64x64"
                src={this.state.currentUser.photourl}
                alt=""
              />
              {/* <span>{this.state.currentUser.email}</span> */}
              <span>{this.state.currentUser.name}</span>
              <a onClick={this.logout} className="button is-info">
                logout
              </a>
            </div>
          ) : (
            <a onClick={this.loginWithGoogle} className="button is-danger">
              login
            </a>
          )}
        </div>
        <div
          className="container"
          style={{ paddingTop: '100px', paddingBottom: '100px' }}>
          {this.state.messages.map((message, i) => {
            return (
              <div className="tile is-parent">
                {/* <article className="media"> */}
                <article
                  className={`tile is-child notification is-${tileClasses[
                    i % 5
                  ]}`}>
                  <figure className="media-left">
                    <p className="image is-64x64">
                      <img src={message.photo} alt={message.userName} />
                    </p>
                    <span className="subtitle">{message.userName}</span>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p className="title">{message.text}</p>
                      <p className="subtitle">{message.time}</p>
                    </div>
                  </div>
                  <div className="media-right">
                    <button className="delete is-right" />
                  </div>
                </article>
                {/* </article> */}
              </div>
            );
          })}
        </div>
        <div style={{ position: 'fixed', bottom: '0', width: '100%' }}>
          <footer
            className="footer"
            style={{ padding: '24px', backgroundColor: 'white' }}>
            <div className="container">
              <div className="content has-text-centered">
                <form onSubmit={this.addMessageToDB}>
                  <div class="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="text"
                        placeholder="message"
                        onChange={this.onTextChange}
                        value={this.state.message}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
