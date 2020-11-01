import React from "react";
import ReactDOM from 'react-dom';

// const h1 = React.createElement('h1', null, '这里是h1');
// const div = React.createElement('div', { id: "first" }, '这里是div', h1);

/**
 * JSX，是一个 JavaScript 的语法扩展。
 * 我们建议在 React 中配合使用 JSX，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。
 * JSX 可能会使人联想到模版语言，但它具有 JavaScript 的全部功能。
 */

const name = 'Josh Perez';
const element = <h1>Hello,{name}</h1>;
const bool = true;
const element2 = <h1>Hello,{bool ? name : "..."}</h1>;
const element3 = <h1 title={bool ? name : null}>绑定title属性</h1>;
const element4 = <div>{element}</div>;
const arr = [
    <p key="1">1</p>,
    <p key="2">2</p>
];
const element5 = <div>{arr}</div>;

const arrString = ['路飞', '乔巴', '索隆'];
const arrElement = [];
arrString.forEach(item => {
    const temp = <p>·{item}</p>;
    arrElement.push(temp);
});

const element6 = arrString.map(item => { return <p>·{item}</p>; })


ReactDOM.render(element6, document.getElementById('root'));