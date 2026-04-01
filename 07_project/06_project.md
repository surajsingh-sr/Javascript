# Project 6

## Link [Click](https://codesandbox.io/p/sandbox/project-6-qvn7g7?file=%2Fsrc%2Findex.js%3A1%2C1-34%2C4)

# #HTML
```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Sandbox</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="styles.css" />
    <script src="index.js" type="module"></script>
  </head>
  <body>
    <h1>Background Colour Change</h1>
    <div class="container">
      <button id="start">Start</button>
      <button id="stop">Stop</button>
    </div>
  </body>
</html>
```
# #CSS
```css
body {
  background-color: #212121;
}
h1 {
  color: #fff;
  text-align: center;
  margin-top: 150px;
}
.container {
  display: flex;
  justify-content: center;
}
button {
  width: 100px;
  height: 50px;
  font-size: 25px;
  margin: 10px;
}
```
# #Javascript
```javascript
const randomColorChange = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
// const startChangeColor = function () {
//   intervalId = setInterval(passColor, 1000);
//   const passColor = function () {
//     document.body.style.backgroundColor = randomColorChange();
//   };
// };
// const stopChangeColor = function () {
//     clearInterval(intervalId);
// };

// document.querySelector("#start").addEventListener("click", startChangeColor);
// document.querySelector("#stop").addEventListener("click", stopChangeColor);

//

document.querySelector("#start").addEventListener("click", function () {
  const passColor = function () {
    document.body.style.backgroundColor = randomColorChange();
  };
  intervalId = setInterval(passColor, 1000);
});

document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(intervalId);
});

```