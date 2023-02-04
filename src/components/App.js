import React,{Component} from 'react'
import Header from './Header';
import Footer from './Footer';
import List from './List';

class App extends Component {
  render(){
    return (
     <div>
      <Header/>
      <List/>
     <Footer name="makanan nusantara" tahun ="2023"/>
     </div>
    );
  }
}

export default App;
