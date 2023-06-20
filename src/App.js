import './App.css';
import React, {Component} from 'react';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import LatestReleases from './components/LatestReleases';
import SingleBook from './components/SingleBook';

class App extends Component {
  render(){
    return (
      <React.StrictMode>
        <NavigationBar/>
        <Jumbotron/>
        <LatestReleases>
          <SingleBook/>
        </LatestReleases>
        <Footer/>
      </React.StrictMode>
    );
  }
  
}

export default App;
