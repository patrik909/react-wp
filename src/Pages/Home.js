import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    
    fetch('http://localhost:8888/wp-api/wp-json/wp/v2/posts')
    .then((res) => res.json())
    .then((posts) => {
      this.setState({posts});
      console.log(posts)
    });

  }

  render() {
    return (
      <main className="Home-Page">
        This is the homepage
        { 
          this.state.posts.length !== 0 ? 
            this.state.posts.map(post => {
              return (
                <div key={post.id}>
                  <h1>{post.title.rendered}</h1>
                  <div className="img-holder">
                    <img src={post.featured_image_url} alt={post.featured_image_url} />
                  </div>
                  <h3>{post.excerpt.rendered}</h3>
                  <p>{post.acf.a_field}</p>
                  <Link to={'Single/' + post.id}>Read More</Link>
                </div>
              )
            })  
          : 
            <div>
              waiting...
            </div>
        }
      </main>
    );
  }
}

export default Home;
