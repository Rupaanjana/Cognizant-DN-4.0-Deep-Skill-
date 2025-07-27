import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Method to load posts from API
  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();

      const postList = data.map(p => new Post(p.userId, p.id, p.title, p.body));
      this.setState({ posts: postList });
    } catch (error) {
      this.setState({ hasError: true });
    }
  };

  // Lifecycle hook
  componentDidMount() {
    this.loadPosts();
  }

  // Error boundary
  componentDidCatch(error, info) {
    alert('An error occurred while loading posts!');
    console.error("Error caught by componentDidCatch:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading posts.</h2>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <div key={post.id} style={{ marginBottom: '20px' }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
