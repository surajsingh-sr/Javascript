# Project 1
## All Project:-  [Click](https://codesandbox.io/dashboard/recent)


## Link:-  [click](https://codesandbox.io/p/sandbox/project-2-kj63gs?file=%2Findex.html%3A1%2C1-32%2C1)

# #HTML
```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Sandbox</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./styles.css" />
    <script src="./script.js"></script>
  </head>

  <body>
    <h1>Calculate BMI</h1>
    <div class="form-block">
      <form class="form-bmi">
        <label class="lable-text" for="text">Height (m): </label>
        <input id="height" class="input-bmi" type="text" name="height" /><br />
        <label class="lable-text" for="text">Weight (kg): </label>
        <input id="weight" class="input-bmi" type="text" name="weight" /><br />
        <button>Calculate</button>
        <h2 id="result"></h2>
        <p>
          <ul>
            <li class="li-text">Underweight: Below 18.5</li>
            <li class="li-text">Normal range: = 18.5 to 24.9</li>
            <li class="li-text">Over Weight: = Greater than 24.9</li>
          </ul>
        </p>
      </form>
     
    </div>
  </body>
</html>

```
# #CSS
```css
body {
  background-color: #000000;
  font-family: sans-serif;
}
h1 {
  color: #fff;
  font-size: 50px;
  text-align: center;
  margin: 50px;
}
.form-block {
  width: 80%;
  height: 600px;
  background-color: #000000;
  margin-left: 100px;
  display: flex;
  justify-content: center;
  border: 0.5px solid #ffffff;
}
.lable-text {
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  padding-left: 10px;
}
.input-bmi {
  height: 30px;
  width: 200px;
  font-size: 20px;
  margin: 20px;
}
button {
  color: #fff;
  background-color: green;
  font-size: 30px;
  margin: 40px;
  text-align: center;
}
.li-text {
  font-size: 20px;
  font-style: italic;
  color: #fff;
  margin-top: 10px;
}
#result {
  text-align: center;
  margin-top: 10px;
  color: #ff0000;
}
```
# #Javascript
```javascript
const form = document.querySelector(".form-bmi");
// this is usecase given empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === " " || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter valid height ${height}`;
  } else if (weight === " " || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter valid weight ${weight}`;
  } else {
    const result_bmi = (weight / (height * height)).toFixed(2);
    result.innerHTML = `BMI Calculate: ${result_bmi}`;
  }
});
```
