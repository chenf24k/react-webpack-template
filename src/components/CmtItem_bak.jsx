import React from 'react';
import style from './style';

/**
方法一
const divStyle = { border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc' }
const h3Style = { fontSize: '14px' };
const pStyle = { fontSize: '12px' };
*/

/**
方法二
const style = {
    item: { border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc' },
    user: { fontSize: '14px' },
    content: { fontSize: '12px' }
}
*/

const CmtItem = (props) => {
    return (
        <div style={style.item}>
            <h3 style={style.user}>评论人：{props.user}</h3>
            <p style={style.content}>内容：{props.content}</p>
        </div>
    )
}
export default CmtItem;