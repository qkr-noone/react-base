import React from 'react';
import ReactModal from 'react-modal';

class Noodle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ visible: true });
    }

    handleCloseModal() {
        this.setState({ visible: false });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOpenModal}>Open Modal</button>
                <TempNoodle
                    handleCloseModal={this.handleCloseModal}
                    visible={this.state.visible}
                />
            </div>
        );
    }
}

class TempNoodle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            loading: false,
        };
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        if (this.props.visible) {
            this.fetchData()
        }
    }

    componentWillMount() {
        ReactModal.setAppElement('body');
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.visible && this.props.visible) {
            this.fetchData();
        }
    }

    fetchData() {
        this.setState({ loading: true });
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(json => this.setState({
                user: json.results[0],
                loading: false,
            }))
            .catch(err => console.log(err))
    }

    render() {
        const user = this.state.user;
        return (
            <ReactModal
                isOpen={this.props.visible}
            >
                <button onClick={this.props.handleCloseModal}>Close Modal</button>
                {this.state.loading ?
                    <div>loading...</div>
                    :
                    <ul>
                        <li>Name: {`${(user.name || {}).first} ${(user.name || {}).last}`}</li>
                        <li>Gender: {user.gender}</li>
                        <li>Phone: {user.phone}</li>
                    </ul>
                }
            </ReactModal>
        )
    }
}

export default Noodle;