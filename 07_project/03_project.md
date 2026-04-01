# Project 3

## Link [Click](https://codesandbox.io/p/sandbox/project-3-56qzz4?file=%2Fsrc%2Fscript.js%3A1%2C1-9%2C1)

# #HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <script src="script.js"></script>
    <title>Project 3</title>
  </head>
  <body>
    <h1>Time Clock</h1>
    <div class="container">
      <div id="clock"></div>
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
  margin-top: 200px;
  text-decoration: underline red;
}
.container {
  display: flex;
  justify-content: center;
}
#clock {
  width: 150px;
  height: 50px;
  background-color: #00ffea;
  border-radius: 20px;
}
#clock {
  font-size: 28px;
  padding: 10px;
}

```
# #Javascript
```javascript
const clock = document.querySelector("#clock");

setInterval(function () {
  let date = new Date();
  //   console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
  //   clock.style.fontSize = "20px";
}, 1000);

```