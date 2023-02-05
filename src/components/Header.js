import React,{Component} from 'react'

class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      daftar : "daftar makanan nasional",
      daftarlist: this.props.list
    }
  }
  render(){
    return (
     <div>
      <h1> Elements</h1>
      <h2>{this.state.daftar}</h2>
      <p>{this.state.daftarlist}</p>
     </div>
    );
  }
}
export default Header;