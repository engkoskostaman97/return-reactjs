import React from 'react'

const Top = () => {
  const handlepesan = (value) =>{
    alert("ini halaman top ");
    alert(value);
  };
  return (
    <a href ="/" onClick={()=>handlepesan("pesan top")}>halaman top</a>
  )
}

export default Top
