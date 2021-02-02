import ReactModal from 'react-modal';
import { useEffect, useState, Component } from 'react';
import CommentApp from './CommentApp';

function useFetchUser(visible) {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!visible) return
        setLoading(true)
        fetch('https://randomuser.me/api/').then(res => res.json()).then(json => {
            setUser(json.results[0]);
            setLoading(false);
        });
    }, [visible]);
    return { user, loading };
}

function TempNoodleHook(props) {
    const { user, loading } = useFetchUser(props.visible);

    return (
        <ReactModal
            isOpen={props.visible}
        >
            <button onClick={props.handleCloseModal}>Close Hook Modal</button>
            {loading ?
                <div>loading...</div>
                :
                <ul>
                    <li>Name: {`${(user.name || {}).first} ${(user.name || {}).last}`}</li>
                    <li>Gender: {user.gender}</li>
                    <li>Phone: {user.phone}</li>
                </ul>
            }
            <CommentApp />
        </ReactModal>
    )
}

class NoodleHook extends Component {
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
                <button onClick={this.handleOpenModal}>Open Hook Modal</button>
                <p>总结对比：
                    await/async 把 Callback Hell 干掉了，异步编程思维变成了同步编程思维
                    Hooks 把 Wrapper Hell 干掉了，面向生命周期编程变成了面向业务逻辑编程</p>
                <TempNoodleHook
                    handleCloseModal={this.handleCloseModal}
                    visible={this.state.visible}
                />
            </div>
        );
    }
}

export default NoodleHook;