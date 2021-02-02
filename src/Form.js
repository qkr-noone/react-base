import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            checked: true,
            gender: 'man',
        }
        this.tempTag = React.createRef()
    }

    handleChange(name, event) { // 主要参数形式前后
        let newState = {};
        newState[name] = name === 'checked' ? event.target.checked : event.target.value;
        this.setState(newState);
        console.log(newState);
        console.log('test ref', this.tempTag, this.tempTag.current);
        this.tempTag.current.focus()
    }

    submitHandle(e) {
        e.preventDefault()
        const is = this.state.checked ? 'Yes' : 'No';
        const gender = this.state.gender === 'man' ? 'man' : 'woman';
        alert(`${this.state.username} + ${is} ${gender}`)
    }
    
    render() { 
        return ( 
            <form onSubmit={this.submitHandle.bind(this)}>
                <label htmlFor="username">your name</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange.bind(this, 'username')} />
                <br/>
                <label htmlFor="checkbox">true or false</label>
                <input
                    type="checkbox"
                    id="checkbox"
                    name="checked"
                    value="YesNo"
                    checked={this.state.checked}
                    onChange={this.handleChange.bind(this, 'checked')}/>
                <br/>
                <label htmlFor="username">Please Choose</label>
                <select
                    name="gender"
                    value={this.state.gender}
                    onChange={this.handleChange.bind(this, 'gender')}>
                        <option value="man">Good Boy</option>
                        <option value="woman">Bay Girl</option>
                </select>
                <br/>
                <button type="submit" ref={this.tempTag}>提交</button>
            </form>
         );
    }
}
 
export default Form;