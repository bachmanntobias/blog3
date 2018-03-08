import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NewPostButton from './NewPostButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const divstyle = {
  background = '#ffe9af',
  border-width = '3px',
  border-color = '#ffc93a'

};

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }




  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div style={divStyle}>
        <MuiThemeProvider>
     <NewPostButton />
   </MuiThemeProvider>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
