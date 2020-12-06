import React, { Component } from 'react';
import organizationPosts from './organizationPosts';

class Forum extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }

    }

    componentDidMount() {
        organizationPosts.getPosts("402881d0763a18a901763a19c70e0000").then(res => {
            this.setState({ posts: res.data })
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.posts.map(post =>
                        <div class="Comment">
                            <div class="comment-grid">
                                <div class="comment-left">
                                    <div class="UserInfo">
                                        <img class="Avatar"
                                            src={this.props.avatarUrl}
                                            alt={this.props.name}
                                        />
                                    </div>
                                </div>
                                <div class="comment-right">
                                    <div class="UserInfo-name">
                                        <p>{post.title}</p>
                                    </div>
                                    <div class="Comment-text">
                                        {post.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Forum;