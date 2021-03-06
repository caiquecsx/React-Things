import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  constructor(){
    //when we put a constructor we need to call super
    super();
    this.state = {
      projects : []
    }
  }

  componentWillMount(){
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business WebSite',
          category: 'Web Deisgn'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping',
          category: 'Web Development'
        }
      ]
    })
  }

    handleAddProject(project){
      let projects = this.state.projects;
      projects.push(project);
      this.setState({projects: projects})
    }

  render() {
    return (
      <div className='App'>
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
