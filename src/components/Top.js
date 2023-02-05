import React from 'react'

const Top = () => {
  const handlepesan = () =>{
    alert("ini halaman top ");
  };
  return (
    <a href ="/" onClick={handlepesan}>halaman top</a>
  )
}

export default Top
