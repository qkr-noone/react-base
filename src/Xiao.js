import React, { Component } from 'react';

class Xiao extends Component {
    constructor(props) {
        super(props);
        this.deleteXiao = this.deleteXiao.bind(this)
    }

    componentWillReceiveProps() {
    };

    componentWillUnmount() {
    }

    deleteXiao() {
        this.props.deleteXiao(this.props.index)
    }

    render() { 
        return ( 
            <div onClick={this.deleteXiao}>{this.props.content}</div>
         );
    }
}
 
export default Xiao;