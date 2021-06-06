import React, { useState } from 'react';

export default function ToDoList() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  const axios = require('axios').default;

  axios.get('http://localhost:8080/goods')
  .then(function (response: any) {
    // 处理成功情况
    console.log(response);
  })
  .catch(function (error: any) {
    // 处理错误情况
    console.log(error);
  })
  .then(function () {
    // 总是会执行
  });
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

