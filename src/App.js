import React from 'react'
import './App.css'
import Sidebar from './components/sidebar'
import About from './components/about'
import Upper from './components/upper'
import Abouttwo from './Abouttwo'
import Skills from './components/skills'
import WorkOn from './components/workOn'
import Project from './components/project'
import Contact from './components/contact'

const App = () => {
  return (
    <div>
      {/*<Sidebar />*/}
      <Upper />
      <Abouttwo />
      <Skills />
      <WorkOn />
      <Project />
      <Contact />
    </div>
  );
}


export default App;
