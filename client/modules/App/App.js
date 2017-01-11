import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
//import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';


// Import Actions
import { toggleAddPost } from './AppActions';
import {getShowAddPost} from './AppReducer';
import { switchLanguage } from '../../modules/Intl/IntlActions';
import { browserHistory } from 'react-router';

 class App extends Component {
  constructor() {
    super();

  }

  addTodo = () => {
    const toDo = this.refs.todo;
    let todovalue = toDo.value;
    this.props.dispatch(toggleAddPost({ todovalue})).then(res => this.setdata(res));
  };

   setdata(res){
   if(res.status ){
       
        data = res.data.map((doc)=> <li key={item.id}>{item.text}</li>)
      
    }else{
      browserHistory.push('/');
    }
   //browserHistory.push('/');
  }

  render() {
    console.log(this.props.getShowAddPost);
   // alert('hi')

    /*if(this.state.getShowAddPost.length > 0){
      let docs = this.props.getShowAddPost;
      let count = 10;
      mails = docs.map((doc) => 
                    <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
          ); 
    }*/
    return (
      <div>
        <h3>My ToDo List</h3>
           
        <form onSubmit={this.handleSubmit}>
          <input id="todo" placeholder="Write your todo here.." ref ="todo"  />
          <button onClick={this.addTodo}>Add ToDo</button>
        </form>
      </div>
    );
  }
}

App.propTypes = {
  getShowAddPost: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  addTodo: PropTypes.func,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    getShowAddPost :getShowAddPost(store),

  };
}

export default connect(mapStateToProps)(App);
