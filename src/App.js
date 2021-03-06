import React from 'react';
import RandomUser from './components/RandomUser'
import './App.css';


class App extends React.Component {
    state = {
      userData: [],
    }
  
  loadData = async () =>{
    const response = await fetch(`https://randomuser.me/api/?results=10`)
    const data = await response.json();
    console.log(data)
    return data
  }
  handleClick = async () => {
    const userData = await this.loadData()
    this.setState({
      userData: userData.results
    })
  }
  async componentDidMount(){
    // const userData = await this.loadData()
    // this.setState({
    //   userData: userData.results
    // })
  }
  render () {
    const {userData}= this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Random User</h1>
        </header>
        <button onClick={this.handleClick}>Load More Users</button>
        {this.state.userData.length >0 && <RandomUser userData={userData}/>}
        
      </div>
    );
  }
}

export default App;
