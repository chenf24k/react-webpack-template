import React, { Component } from 'react';
import CmtItem from './CmtItem';
import css from '../css/cmtlist.scss';
import bootcss from 'bootstrap/dist/css/bootstrap.css';

class CmtList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CommentList: [
                { id: 1, user: '张三', content: '哈哈 沙发' },
                { id: 2, user: '李四', content: '哈哈 凉席' },
                { id: 3, user: '王五', content: '哈哈 板凳' },
                { id: 4, user: '赵六', content: '哈哈 砖头' },
                { id: 5, user: '田七', content: '哈哈 下楼山炮' }
            ]
        }
    }

    render() {
        return (
            <div>
                <h2 className={css.title}>评论列表：</h2>
                <button className="btn btn-primary">按钮</button>
                <div className="panel panel-primary"></div>
                {this.state.CommentList.map(item => <CmtItem {...item} key={item.id} />)}
            </div>
        )
    }
}

export default CmtList;
