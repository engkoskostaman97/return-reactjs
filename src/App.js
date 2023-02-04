import React,{Component} from 'react'
import Header from './Header';

const Footer = () => {
  return(
    <div>
      <h3>halaman 3</h3>
      <p>2023</p>
    </div>
  );
}
class App extends Component {
  render(){
    return (
     <div>
      <Header/>
      <h1>Rendering Elements</h1>
     <Footer/>
     </div>
    );
  }
}

export default App;
