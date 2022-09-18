import React, { Component } from 'react'
import axios from 'axios';
import User from './User';

class Useritem extends Component {
    state = {
        user: {}
    }
    componentWillMount() {
       const login=this.props.params.login;
        axios.get(`https://api.github.com/users/${login}`)
            .then(res => {
                this.setState({
                    user: res.data
                })
            })
    }
    render() {
        const { user } = this.state;
        
        return (
            
            <div key={user.id}>
                <User user={user} />
            </div>
        )
    }
}

export default Useritem