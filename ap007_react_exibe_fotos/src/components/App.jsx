import React from 'react'
import Busca from './Busca.jsx'
import ListaImagens from './ListaImagens.jsx'
import PexelsLogo from './PexelsLogo.jsx'
import pexelsClient from '../utils/pexelsClient.js'

export default class App extends React.Component {
  state = {
    pics: [],
  }

  onBuscaRealizada = (termo) => {
    pexelsClient
      .get('/search', {
        params: { query: termo },
      })
      .then((result) => {
        console.log(result)
        this.setState({ pics: result.data.photos })
      })
  }

  render() {
    return (
      <div className="grid justify-content-center m-auto w-9 border-round border-1 border-400">
        <div className="col-12">
          <PexelsLogo />
        </div>
        <div className="col-12">
          <h1 className="text-center">Exibir uma lista de...</h1>
        </div>
        <div className="col-12">
          <Busca onBuscaRealizada={this.onBuscaRealizada} />
        </div>
        <div className="col-12">
          <div className="grid">
            <ListaImagens
              imgStyle="col-12 md:col-6 lg:col-4 xl:col-3"
              pics={this.state.pics}
            />
          </div>
        </div>
      </div>
    )
  }
}
