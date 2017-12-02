Props

* 컴포넌트 내부의 변하지 않는 데이터(immutable data)를 표현할 때 사용한다.

* JSX 내부에 `{this.props.propsName}`
컴포넌트를 사용할 때, `<>`괄호 안에 `propsName = "value"`

* `this.props.children`은 기본적으로 갖고 있는 props로서, `<Cpnt>`여기에 있는 값이 들어간다. `<Cpnt>`

```js
class Codelab extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Codelab name={this.props.name}>여기가 children</Codelab>
    )
  }
}

ReactDOM.render(<App/>.document.getElementById('root'));
```
