import React,{Component} from 'react'

class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      daftar : "daftar makanan nasional",
      daftarlist: this.props.list
    }
    this.handleMessage=this.handleMessage.bind(this);
  }
  handleMessage(){
    // alert("halaman header");
    alert(this.state.daftar);
  }
  render(){
    return (
     <div>
      <h1> Elements</h1>
      <h2>{this.state.daftar}</h2>
      <p>{this.state.daftarlist}</p>
      <a href="/" onClick={this.handleMessage}>halaman header</a>
     </div>
    );
  }
}
export default Header;