import React, { Component } from 'react'

export class User extends Component {
  render() {

    const{login,avatar_url,html_url,repos_url}=this.props.user;
    return (
        <div class="card text-center">
        <img class="card-img-top" src={avatar_url} alt="" />
        <div class="card-body">
            <h4 class="card-title">{login}</h4>
            <p class="card-text">
                <a href={html_url} className="btn btn-primary">Show Profil</a>
            </p>
        </div>
    </div>
    )
  }
}

export default User