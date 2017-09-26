import React from 'react'


export default class PostQuestion extends React.Component {
  render() {

    return (
      <div>
        <article className="tile is-child notification is-info">
          <div className="container">
            <p className="title">
              질문 올리기
            </p>
            <div className="field is-horizontal">
              <div className="field-label is-large">
                <p className="title">보기 1</p>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input className="input is-large" type="text" placeholder="간단한 문구 작성" />
                  </div>
                </div>
                <div className="field">
                  <div className="file is-danger">
                    <label className="file-label">
                      <input className="file-input" type="file" name="resume" />
                      <span className="file-cta">
                        <span className="file-icon">
                          <i className="fa fa-upload"></i>
                        </span>
                        <span className="file-label">
                          첨부 파일은 필수
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-large">
                <p className="title">보기 1</p>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input className="input is-large" type="text" placeholder="간단한 문구 작성" />
                  </div>
                </div>
                <div className="field">
                  <div className="file is-info">
                    <label className="file-label">
                      <input className="file-input" type="file" name="resume" />
                      <span className="file-cta">
                        <span className="file-icon">
                          <i className="fa fa-upload"></i>
                        </span>
                        <span className="file-label">
                          첨부 파일은 필수
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <a className="button is-danger  is-large" style={{ marginRight: '5px' }}>취소</a>
              <a className="button is-info  is-large">질문</a>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
