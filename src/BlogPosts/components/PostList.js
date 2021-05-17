import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import UserHeader from './UserHeader'

class PostList extends Component
{
    componentDidMount = () => { this.props.fetchPosts() }

    renderList = () => (this.props.posts.map(post => (
        <div className="item" key={post.id}>
            <i className="large middle aligned icon user" />
            <div className="content">
                <div className="description">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
                <UserHeader userid={post.userId} />
            </div>
        </div>
    )))

    render = () => (
        <div className="ui relaxed divided list">
            {this.renderList()}
        </div >
    )
}

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps, { fetchPosts })(PostList);