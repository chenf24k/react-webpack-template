import React from 'react';
import css from '../css/cmtitem.scss';

console.log(css);

const CmtItem = (props) => {
    return (
        <div className={css.cmtbox}>
            <h3 className={css.title}>评论人：{props.user}</h3>
            <p className={css.content}>内容：{props.content}</p>
        </div>
    )
}
export default CmtItem;