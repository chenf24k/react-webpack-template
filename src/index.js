import React from "react";
import ReactDOM from 'react-dom';

const h1 = React.createElement('h1', null, '这里是h1');
const div = React.createElement('div', { id: "first" }, '这里是div', h1);

const divtest = <div title="123">1123</div>;

ReactDOM.render(divtest, document.getElementById('root'));