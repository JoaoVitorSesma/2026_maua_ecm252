import React from 'react'

const Imagem = ({ pic, imgStyle, alt }) => {
  return (
    <div className={`${imgStyle} flex justify-content-center`}>
      <img className="imagem__foto border-round" src={pic} alt={alt} />
    </div>
  )
}

export default Imagem
