
# Step By Step Guide to Build React Apps

[Click here to open Code Editor](https://stackblitz.com/edit/react-yv42wszn?file=src%2FApp.js)

## 1. Counter App using useState Hook

### Step 1 import the hook from react

```javascript 
import {useState} from "react"
```
### Step 2 Create a count state

```javascript 
const [count, setCount] = useState(0)
```
### Step 3 Begginer way of rendering and updating the state
```javascript 
<div>{count}</div>
<button onClick={()=> setCount(count+1)} >Add</button>
<button onClick={()=> setCount(count-1} >Sub</button>
```
### Step 4 How to actually do it
```javascript 
<div>{count}</div>
<button onClick={()=> setCount((prev)=> prev+!)} >Add</button>
<button onClick={()=> setCount((prev)=> prev-1} >Sub</button>
```

## 2. Background Color Changer (Experiment)
### Step 1 create a color state

```javascript 
const [color, setColor] = useState("white")
```
### Step 2 use inline styling

```javascript 
<div style={{ backgroundColor: color, height: '100vh' }}></div>
```

### Step 3 generate buttons to change state Begginer way
```javascript 
<button onClick={()=> setColor("red")}>red</button>
<button  onClick={()=> setColor("yellow")}>yellow</button>
<button  onClick={()=> setColor("blue")}>blue</button>
<button  onClick={()=> setColor("purple")}>purple</button>
```

### Step 4 how to do it the react way dynamically generating html

```javascript
["red", "yellow", "blue", "purple"].map((item, inex)=> <button key={index} onClick={()=> setColor(item)}>item</button>)
```

## 3. useEffects do stuff on (pageLoad, state-change, re-renders)

```javascript
useEffect(()=>{alert("page loaded")}, []) will only run on page load
useEffect(()=>{alert("count changes")}, [count]) will run everytime count changes
useEffect(()=>{alert("page loaded")}) will run every time the component re-renders
```

## 4. Handling from
```html
<form>
    <div>
        <label>Username</label>
        <input type="text" />
    </div>
    <div>
        <label>Password</label>
        <input type="password" />
    </div>
    <button type="button">Submit</button>
</form>
```
## Beginner way to create state
```javascript
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
```
## Advance way to create state
```javascript
const [data, setData] = useState({username:"", password:""})
```

## Beginner way to update state
```javascript
<input onChange={(e)=> setUsername(e.target.value)} type="text"/>
<input onChange={(e)=> setPassword(e.target.value)} type="password"/>
```
## Advance way to update state
```javascript
<input onChange={(e)=> setData((prev)=> ({...prev, username:e.target.value}))} type="text"/>
<input onChange={(e)=> setData((prev)=> ({...prev, password:e.target.value}))} type="password"/>
```

## Handling Submit
```javascript
<button onClick={handleSubmit}type="button">Submit</button>
```

```javascript
const handleSubmit = ()=>{
const {username, password} = data;
alert(`${username} and ${data}`)
}
```
[FeedBack Form]()
