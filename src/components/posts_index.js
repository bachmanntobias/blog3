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
import divStyles from '../../style/divStyles';



const divStyle2 = {

};

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }





  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id} style={{'margin' : '0em 1em 1em 0em', 'background' :  divStyles.farben.orange , 'color':divStyles.farben.gelb}}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div style={divStyles.home}>
        <MuiThemeProvider>
     <NewPostButton

     />
   </MuiThemeProvider>

        <div style={{'padding'  : '2em 2em 2em 0em'}}>
        <h3>Posts</h3>
      </div>
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
