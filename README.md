Tiny to-do application I made, to help better understand react-transition-group.

To build:

```sh
npx browserify -t [ babelify --presets [ env react ] --plugins transform-object-rest-spread ] src/index.js -o dist/index.js
```

Then to run:

```sh
npx http-server .
```
