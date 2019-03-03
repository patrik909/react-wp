import React, { Component } from 'react';

class Single extends Component {

  state = {
    post: []
  }

  componentDidMount() {
    fetch(`http://localhost:8888/wp-api/wp-json/wp/v2/posts/?filter[p]=${parseInt(this.props.match.params.id, 10)}`)
    .then((res) => res.json())
    .then((post) => {
      this.setState({post});
      console.log(post)
    });
  }

  render() {
    return (
      <main className="Single-Page">
          { 
            this.state.post.length !== 0 ? 
             this.state.post.map(post => {
              return (
                <div key={post.id}>
                  <h1>{post.title.rendered}</h1>
                  <div className="img-holder">
                    <img src={post.featured_image_url} alt={post.featured_image_url} />
                  </div>
                  <h3>{post.excerpt.rendered}</h3>
                  <p>{post.acf.a_field}</p>
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

export default Single;
