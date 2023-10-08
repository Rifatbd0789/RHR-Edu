<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>at first declared an variable which name is greeting.
then, the value of greetign was set to an empty object.
that is why greetign will be an empty object {}.
it is not related to that variable because of the spelling is different from each other.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The input value of sum is the first one is number and the second one is string.
we know if we try to use addition between number and string.
it will just put that first number on first of an string.
then, it will output an string.
that is why output will be "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>food is a variable which is a array. when another variable declared as a object new variable name info value will be the first element of that array.
but then again when the value of that object is changed with another photo the new variable called info value changed with new value. but here when use console log it just output the total food. in this process food element is not changed that is why output will be same as food variable was before.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>when we declared a function.
there has a parameter called name.
but trying to call the function in console.log but, not providing any parameter value.
that is when the function returning a template string including that parameter.
that is why the output will be undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Here count variable is declared by let, because the value will change. nums variable is declared by const, because the value will not change.
Here when using forEach loop.
it is taking all the value one by one from that array called nums, and if the value is truthy the value or count is adding by 1.
when the first value come is 0, but 0 is a falsy. that is why the count value is not changed.
after that serially when the array value come for each loop is 1,2,3 which are truthy.
that is why step by step the count was adding 1 with his previous value 3 time.
that is why the count value is 3.
</i>

</p>
</details>
