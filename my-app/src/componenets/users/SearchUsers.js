import React, { Component } from 'react'

export class SearchUsers extends Component {

    state = {
        search: ''
    }

    handlerFrom = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    SearchUsers = (e) => {
        e.preventDefault();
        this.props.getUserSearch(this.state.search)
    }
    render() {
        const { search } = this.state;
        return (
            <form onSubmit={this.SearchUsers}>
                <div className="row r d-flex justify-content-between mt-2">
                    <div className="col-10">
                        <input onChange={this.handlerFrom} value={search} type="text" className="form-control" placeholder="Search ....." />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-danger btn-block ">
                            Search
                        </button>
                    </div>
                </div>
            </form>


        )
    }
}

export default SearchUsers