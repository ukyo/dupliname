# dupliname

Duplicate a name.

## Install

```
$ npm install --save dupliname
$ yarn add dupliname
```

## Usage

Simple usage.

```js
import { dupliname } from "dupliname";

const duplicated = dupliname("hello", ["hello", "world"]); // "hello (1)"
```

Use a custom decorator.

```js
const duplicated = dupliname("hello.txt", ["hello.txt"], (source, index) => {
  const body = source.split(".");
  const ext = body.pop();
  return `${body.join(".")} - Copy ${index}.${ext}`;
}); // "hello - Copy 1.txt"
```