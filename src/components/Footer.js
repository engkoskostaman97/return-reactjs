import React from 'react'

const Footer = (props) => {
  return(
    <div>
      <h3>halaman {props.name}</h3>
      <p>{props.tahun}</p>
    </div>
  );
}

export default Footer
