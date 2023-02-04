import React from 'react'
import Image from './Image'
export default function List() {
  return (
  <ol>
    <Image linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" lebar="500"/>
    <li>Nasi Goreng</li>
    <Image linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" lebar="400"/>
    <li>Rendang</li>
    <Image linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" lebar="300"/>
    <li>Siomay</li>
    <Image linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"lebar="200"/>
    <Image/>
  </ol>
  
  )
}
