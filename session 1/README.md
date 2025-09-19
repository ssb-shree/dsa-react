![React Banner](https://philna.sh/_astro/react.Dr2GeIML.gif)

Learn React the right way!  
In **React Handbook Part 1**, you'll build a country search app while following best practices used in the industry.

---

## Table of Contents

1. Introduction to the Web
2. ES6 Features of JS
3. Folder Structure of React apps
4. JSX Components & Props
5. Essential Hooks
6. Building Your First React App

---

Let's dive into React step by step!

---

## **Installation**

Before we start coding, let's get your environment ready. Don’t worry, it’s easier than you think!

- **Windows Users:** [Click here for a quick video guide](https://www.youtube.com/watch?v=lyZDSFzBjVA)
- **Linux Users:** [Grab Node.js here](https://nodejs.org/en/download/)

> Make sure node is installed properly by running `node -v` in your terminal

---

### <h2 style="color: #61dafb; text-align: center;">Introduction to the Web</h2>

1. How JS came into the picture and Node.js

2. Client, Server, and Database - The Restaurant

---

<h2 style="color: #61dafb; text-align: center;"> ES6 Features of JS</h2>

Let's quickly look at some modern JavaScript features we'll use in React.

---

### **1. Object & Array Destructuring**

```js
// Object Destructuring
const user = { name: "YourName", age: 19 };
const { name, age } = user;
console.log(name, age); // YourName 19

// Array Destructuring
const nums = [1, 2, 3];
const [first, second] = nums;
console.log(first, second); // 1 2
```

---

### **2. Callback Function**

```js
function parent(fn) {
  fn();
}

function child() {
  console.log("hello");
}

parent(child); // hello
```

---

### **3. Arrow Function**

```js
// Normal Arrow Function
const add = (a, b) => a + b;

// Single Parameter (no brackets needed)
const square = (n) => n * n;

// Multi-line
const greet = () => {
  console.log("Hey there!");
};
```

---

### **4. Async JS**

```js
const getData = async () => {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Oops!", error);
  }
};

getData();
```

---

<h2 style="color: #61dafb; text-align: center;">Folder Structure of React App</h2>

## Folder Structure of a React App

📁 **my-app**  
├─ 📁 **node_modules** – Installed packages  
├─ 📁 **public** – Static files  
│ └─ 📄 **index.html** – Main HTML file  
├─ 📁 **src** – Source code  
│ ├─ 📁 **components** – Reusable React components  
│ │ └─ 📄 **CountryCard.jsx** – Example component  
│ ├─ 📄 **App.jsx** – Main React component  
│ ├─ 📄 **index.js** – Entry point  
│ └─ 📄 **styles.css** – Global styles  
├─ 📄 **package.json** – Project dependencies & metadata  
└─ 📄 **README.md** – Project overview & instructions

---

---

<h2 style="color: #61dafb; text-align: center;">JSX Components & props </h2>

#### A component is a reusable piece of UI in React. Think of it as a Lego block — you can build small pieces (buttons, cards, forms) and combine them to make complex apps. Components accept inputs called props and render UI based on them.

> Also component is a JS function which returns html or jsx

```js
// A simple functional component
const Greeting = () => {
  return <h1>Hello, welcome to React Handbook!</h1>;
};

// Usage in App.jsx
<Greeting />;
```

### Props (short for properties) are inputs you pass to a React component. They let a component receive data from its parent and display content dynamically.

```js
// A component that accepts props
const CountryCard = ({ name, capital, population }) => {
  return (
    <div>
      <h2>{name}</h2>// Display country name
      <p>Capital: {capital}</p>// Display capital
      <p>Population: {population.toLocaleString()}</p> // Format population
    </div>
  );
};

// Usage in App.jsx
<CountryCard name="India" capital="New Delhi" population={1400000000} />;
```

---

<h2 style="color: #61dafb; text-align: center;">Essential Hooks</h2>

### **1. useState Hook**

```js
import { useState } from "react";

const [count, setCount] = useState(0);
```

### **2. useEffect Hook**

```js
import { useEffect } from "react";

// Runs on every re-render
useEffect(() => {
  console.log("Component rendered or updated");
});

// Runs only once on mount
useEffect(() => {
  console.log("Component mounted");
}, []);

// Runs only when dependency changes
useEffect(() => {
  console.log("Count Changed");
}, [count]);
```

---

<h2 style="color: #61dafb; text-align: center;">5. Building Your First React App 🚀</h2>

### **Steps to Create Your App**

## **1. Create a React App**

```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

## **2. Get Dependencies from npm**

```bash
npm install axios react-icons
```

---

## **3. CountryCard Component Boilerplate**

Main ui

```js
<div
  className="w-80 sm:w-[28rem] md:w-[32rem] lg:w-[36rem] \
            border border-gray-700 rounded-2xl shadow-lg bg-gray-900 \
            flex flex-col items-center p-6 lg:p-10"
>
  {/* Search */}
  <div className="w-full flex flex-col mb-8">
    <div className="flex gap-3">
      <input
        value="Country Name"
        placeholder="Search Country"
        className="flex-1 border border-gray-600 rounded-full \
      px-4 py-2 bg-gray-800 text-gray-200 placeholder-gray-400 \
      focus:outline-none focus:ring-2 focus:ring-blue-500 \
      text-sm sm:text-base"
      />
      <button
        className="p-3 bg-blue-500 text-white rounded-full \
      hover:bg-blue-600 transition"
      >
        <BiSearch size={22} />
      </button>
    </div>
    <p className="text-red-700 text-center text-sm font-mono mt-2">Invalid Country Name</p>
  </div>

  {/* Flag */}
  <div className="w-40 h-24 rounded-md overflow-hidden shadow-md mb-6 border border-gray-700">
    <img className="w-full h-full object-cover" src="https://via.placeholder.com/160x100" alt="Country Flag" />
  </div>

  {/* Info */}
  <div className="flex flex-col items-center gap-2 text-gray-200">
    <div className="text-xl font-semibold">Country Name</div>
    <div className="text-base text-gray-400">Capital City</div>
    <div className="text-base text-gray-400">Region</div>
  </div>

  {/* Population */}
  <div className="mt-5 flex items-center gap-2 text-base text-gray-300">
    <BsPerson className="text-gray-400" />
    1,000,000
  </div>
</div>
```

Fallback ui

```js
<div
  className="w-80 sm:w-[28rem] md:w-[32rem] lg:w-[36rem] 
                border border-gray-700 rounded-2xl shadow-lg bg-gray-900 
                flex flex-col items-center p-6 lg:p-10 text-gray-300"
>
  {/* Placeholder Flag */}
  <div
    className="w-40 h-24 rounded-md overflow-hidden shadow-md mb-6 
                  border border-gray-700 flex items-center justify-center bg-gray-800"
  >
    <span className="text-gray-500 text-sm">Loading Flag</span>
  </div>

  {/* Placeholder Info */}
  <div className="flex flex-col items-center gap-3">
    <div className="h-5 w-32 bg-gray-700 rounded animate-pulse"></div>
    <div className="h-4 w-20 bg-gray-700 rounded animate-pulse"></div>
    <div className="h-4 w-28 bg-gray-700 rounded animate-pulse"></div>
  </div>

  {/* Placeholder Population */}
  <div className="mt-6 flex items-center gap-3">
    <BsPerson className="text-gray-600 text-lg" />
    <div className="h-4 w-16 bg-gray-700 rounded animate-pulse"></div>
  </div>
</div>
```

---

## **4. Use CountryCard in App.jsx**

```js
import React from "react";
import CountryCard from "./components/CountryCard";

const App = () => {
  return (
    <div className="bg-slate-700 text-white h-screen w-screen flex justify-center items-center">
      <CountryCard />
    </div>
  );
};

export default App;
```

## **5. React Logic Tasks**

```js
const url = "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region";
```

- Store country data in a state
- Fetch country data on page load
- Get country data when search button is clicked
- Handle errors for invalid country names

---

## 🎉 That’s a Wrap!

![CONGO!!!](https://gifsec.com/wp-content/uploads/2022/09/congrats-gif-5.gif)

You’ve built your **first React app**, played with **components, props, state, and effects**, and peeked under the hood of modern web apps.

Next steps? **Break stuff, build stuff, and have fun**. React is your playground — go make it yours! 🚀

Keep experimenting, keep coding, and remember: **every expert was once a beginner who just didn’t quit**. 💪
