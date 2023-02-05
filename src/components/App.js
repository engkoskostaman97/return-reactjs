import React,{Component} from 'react'
import Header from './Header';
import Footer from './Footer';
import List from './List';
import Top from './Top';

class App extends Component {
  render(){
    return (
     <div>
      <Header list="3 terbaik" />
      <Top/>
      <List/>
     <Footer name="makanan nusantara" tahun ="2023"/>
     </div>
    );
  }
}

export default App;
