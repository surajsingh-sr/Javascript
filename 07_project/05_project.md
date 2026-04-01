# Project 5

## Link [Click](https://codesandbox.io/p/sandbox/project-5-gh9v4r?file=%2Fscript.js%3A7%2C7)

# #HTML
```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Sandbox</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <div class="container">
      <div id="insert">Please press key and see magic</div>
    </div>
    <script src="script.js" type="module"></script>
  </body>
</html>
```
# #CSS
```css
body {
  font-family: sans-serif;
  background-color: #212121;
  color: #fff;
}
.container {
  display: flex;
  justify-content: center;
  margin: 200px;
}
div {
  font-size: 25px;
}
insert {
  border: 2px solid white;
}

```
# #Javascript
```javascript
const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
             <div>
 <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
          </div>
           `;
  insert.style.border = "2px solid #fff";
});

```