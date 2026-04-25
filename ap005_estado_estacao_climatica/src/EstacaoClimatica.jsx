function EstacaoClimatica({
  icone,
  estacao,
  latitude,
  longitude,
  obterLocalizacao,
}) {
  return (
    <div className="card">
      <div className="card-body">
        <div
          className="d-flex align-items-center border rounded mb-2"
          style={{ height: '6rem' }}
        >
          <i className={'fas fa-5x ${icone}'}></i>
          <p className="w-75 ms-3 text-center fs-1">{estacao}</p>
        </div>

        <div>
          <p className="text-center">
            {latitude
              ? 'Coordenadas: ${latitude}, ${longitude}'
              : 'Clique no botao para saber a sua estacao'}
          </p>
        </div>

        <button
          onClick={obterLocalizacao}
          className="btn btn-outline-primary w-100 mt-2"
        >
          Qual a minha estacao?
        </button>
      </div>
    </div>
  )
}

export default EstacaoClimatica
