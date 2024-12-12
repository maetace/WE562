import React from 'react';
import ReactDOM from 'react-dom/client';

/* Lab 4: การใส่ค่า expression ลงใน JSX */
/* 6: การแทรกลูกหลานใน JSX (Embedding Children in JSX) */
/* Lab 5: Embedding Children in JSX */
/* 7. การจัดการเหตุการณ์ใน React (Handling Events in React) */
/* Lab 6: Events Handling */

const name4 = 'Maetee';
// let now4 = new Date;
let now4 = new Date(2024, 10, 26, 6);

function greeting() {
  if (now4.getHours() < 12) {
    return 'Good morning';
  }
  else if (now4.getHours() <= 18) {
    return 'Good afternoon';
  }
  else {
    return 'Good evening';
  }
}

function handleClick() {
  /* alert('Button clicked!'); */
  console.log((new Date).toLocaleString());
}

const element4 = (
  <div>
    <h1>{now4.toLocaleTimeString()}</h1>
    <p>{greeting()}, <b>{name4}</b></p>
    <button onClick={handleClick}>Refresh</button>
  </div>
);
const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(element4);


/* 5: การใช้ JSX กับฟังก์ชัน (Using Functions inside JSX) */

/* ตัวอย่างการเรนเดอร์ Element: */
const element1 = <h1>Hello, world!</h1>;
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(element1);


/* 4: การใส่ค่าตัวแปรลงใน JSX (Embedding Expressions in JSX) */

/* ตัวอย่างการใส่ตัวแปร: */
let name2 = 'Maetee';

let a2 = 10;
let b2 = 20;

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<h1>Hello, {name2}. a = {a2}, b = {b2}, a*b = {a2*b2}</h1>);


/* 3: การแสดงผล UI ใน React (Rendering UI in React) */

/* ตัวอย่างการใช้ฟังก์ชัน: */
function formatName(user3) {
  return user3.firstName + ' ' + user3.lastName;
}

const user3 = {
  firstName: 'John',
  lastName: 'Doe'
};

const element3 = <h1>Hello, {formatName(user3)}!</h1>;
const root3 = ReactDOM.createRoot(document.getElementById('root3'));
const leaf3 = ReactDOM.createRoot(document.getElementById('leaf3'));
root3.render(<h1>{user3.firstName}</h1>);
leaf3.render(element3);