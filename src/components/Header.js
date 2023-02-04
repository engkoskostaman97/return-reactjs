import React,{Component} from 'react'

class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      daftar : "daftar makanan nasional"
    }
  }
  render(){
    return (
     <div>
      <h1> Elements</h1>
      <h2>{this.state.daftar}</h2>
     </div>
    );
  }
}
export default Header;