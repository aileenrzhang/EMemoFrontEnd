import React, { Component } from 'react';
import organizationPosts from './organizationPosts';
import './Forum.css';

class Forum extends Component {
    constructor(props) {
        super(props)

        this.state = {
            creating: false,
            posts: [],
            title: "",
            content: ""
        }

        this.createPost = this.createPost.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.submit = this.submit.bind(this);
        this.delete = this.delete.bind(this);
    }

    delete = e => {
        e.preventDefault();
        organizationPosts.delete("402881d0763a18a901763a19c70e0000", e.target.id).then(res => {
            organizationPosts.getPosts("402881d0763a18a901763a19c70e0000").then(res => {
                this.setState({ posts: res.data })
            })
        })

    }

    submit = e => {
        e.preventDefault();

        let post = {
            title: this.state.title,
            content: this.state.content,
            userID: "402881d0763a1c0601763a1c82bd0000"
        }

        let newPosts = this.state.posts;
        newPosts.push(post);

        this.setState({ posts: newPosts })

        organizationPosts.post("402881d0763a18a901763a19c70e0000", post).then(res => {
            organizationPosts.getPosts("402881d0763a18a901763a19c70e0000").then(res => {
                this.setState({ posts: res.data })
            })
        });
    }

    changeHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    createPost() {
        this.setState({ creating: !this.state.creating })
    }

    componentDidMount() {
        organizationPosts.getPosts("402881d0763a18a901763a19c70e0000").then(res => {
            this.setState({ posts: res.data })
        })
    }
    render() {
        return (
            <div>
                <button className="CreatePost" onClick={this.createPost}>Create Post</button>
                {(this.state.creating == true) &&
                    <form className="textform">
                        <div className="postButtonTitle">
                            <label>Title: </label>
                            <input placeholder="Title" name="title" value={this.state.title} onChange={this.changeHandler} required />
                        </div>

                        <div className="contentButtonTitle">
                            <label>Content: </label>
                            <div class="contentInput">
                                <input class="contentInputBox" placeholder="Content" name="content" value={this.state.content} onChange={this.changeHandler} required />
                            </div>
                        </div>
                        <button onClick={this.submit}>Post</button>
                    </form>
                }
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
                                <button id={post.id} onClick={this.delete}>Delete</button>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Forum;