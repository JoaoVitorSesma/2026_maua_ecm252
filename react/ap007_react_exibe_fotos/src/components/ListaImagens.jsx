import React from 'react'
import Imagem from './Imagem.jsx'

const ListaImagens = ({ pics, imgStyle }) => {
  console.log(pics)

  return pics.map((pic, key) => (
    <Imagem
      alt={pic.alt}
      imgStyle={imgStyle}
      key={key}
      pic={pic.src.small}
    />
  ))
}

export default ListaImagens
