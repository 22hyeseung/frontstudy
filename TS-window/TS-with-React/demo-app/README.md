# TS-in-React

[TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter)

## Install create-react-app

```bash
$ npm install -g create-react-app
```

<br/>

## Create our new project

```bash
$ ceate-react-app demo-app --script-version=react-script-ts
```

Then, project layout should look like the following:

```
my-app/
├─ .gitignore
├─ node_modules/
├─ public/
├─ src/
│  └─ ...
├─ package.json
├─ tsconfig.json
└─ tslint.json
```

<br>

## Running the project

```bash
$ npm run start
```

<br>

## Writing tests with Jest

### Define spec.

* If write something like `<Hello name="Daniel" enthusiasmLevel={3} />`

  * then, the component should render to something like `<div>Hello Daniel!!!</div>`.

* If `enthusiasmLevel` isn't specified,
  * then, the component should default to showing one exclamation mark.
* If `enthusiasmLevel` is `0` or negative,
  * then, it should throw an error.

### Write Test Code With Jest & Enzyme

```bash
$ npm install -D enzyme @types/enzyme react-addons-test-utils
```

**_We need to install packages `enzyme` as well as `@type/enzyme`._**

* `enzyme` refer to the package containing Javascript Code that actually gets run
* `@types/enzyme` refer to the package containing declaration files (.d.ts files)

```tsx
// src/components/Hello.test.tsx

import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name="Daniel" />);
  expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={1} />);
  expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={5} />);
  expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={0} />);
  }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={-1} />);
  }).toThrow();
});
```

If you meet enzyme adapter error like the following:

```bash
Enzyme Internal Error: Enzyme expects an adapter to be configured, but found none. To
          configure an adapter, you should call `Enzyme.configure({ adapter: new Adapter() })`
          before using any of Enzyme's top level APIs, where `Adapter` is the adapter

          corresponding to the library currently being tested. For example:

          import Adapter from 'enzyme-adapter-react-15';

          To find out more about this, see http://airbnb.io/enzyme/docs/installation/index.html
```

* [Check this Medium article: Configuring React 16 + Jest + Enzyme + Typescript](https://medium.com/@mateuszsokola/configuring-react-16-jest-enzyme-typescript-7122e1a1e6e8)

* [Or this issue of github repo: Enzyme test fails](https://github.com/Microsoft/TypeScript-React-Starter/issues/76)

We need `enzyme-adapter-react-16` package.

```bash
$ npm i -D enzyme-adapter-react-15 @types/enzyme-adapter-react-15
```

then, by creating a file called `setUpTests.ts` in the `src/` directory. and putting the following in:

```ts
// src/setUpTests.ts
import { configure } from 'enzyme';
import * as React15Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new React15Adapter() });
```
