import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '@/components/Hello';

const info = {
    name: 'chenf24k',
    age: 18,
    address: 'liuxia'
}

ReactDOM.render(<Hello {...info} />, document.getElementById('root'));