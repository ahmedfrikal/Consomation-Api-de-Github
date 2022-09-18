import React, { Component } from 'react'
import SearchUsers from './SearchUsers';
import axios from 'axios';
import User from './User';

export class Users extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }
    getUsers = () => {
        axios.get('https://api.github.com/users')
            .then(response => {
                this.setState({
                    users: response.data
                })
            })
    }
    componentDidMount() {
        this.getUsers();
    }
    searchUsersFormGit = (data) => {
        if (data != '') {
            axios.get(`https://api.github.com/search/users?q=${data}`)
                .then((response) => {
                    this.setState({
                        users: response.data.items
                    })
                })
        }
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <SearchUsers getUserSearch={this.searchUsersFormGit} />
                    </div>
                </div>
                <div className="row mt-2">
                    {this.state.users.map(user => (
                        <div className="col-md-4" key={user.id}>
                            <User user={user} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Users