import { useState, useEffect } from 'react'

function App() { 
  const [texto, setTexto] = useState('') 
  const [contador, setContador] = useState(0) 

  // Use o comando Ctrl+Shift+I para abrir o chrome dev tools e observar os logs do console ao interagir com o componente
  // Caso 1: useEffect sem array de dependências
  // useEffect(() => { 
  //   console.log('Efeito executou (sem vetor)') 
  // })

  // Caso 2: useEffect com array vazio
  // useEffect(() => { 
  //   console.log('Efeito executou (com vetor vazio)') 
  // }, []) // executa apenas na montagem do componente

  // Caso 3.0: useEffect com dependência específica
  // useEffect(() => { 
  //   console.log('Efeito executou (dep: contador)'  
  //   ) 
  // }, [contador]) // executa quando o contador mudar

  // Caso 3.1: useEffect com dependência específica
  // useEffect(() => { 
  //   console.log('Efeito executou (dep: texto)'  
  //   ) 
  // }, [texto]) // executa quando o texto mudar

  // Caso 4: A função de limpeza
  // useEffect(() => { 
  //   console.log('Efeito executou (sem vetor)') // executa primeiro 

  //   return () => {
  //     console.log('Função de limpeza executou') // executa depois
  //   }
  // })

  useEffect(() => { 
    document.title = 
      `Contador: ${contador}` 
    console.log( 
      'Titulo atualizado (dep: contador):', 
      contador 
    ) 
    
    return () => { 
      document.title = 'React App' 
      console.log( 
        'Limpeza: titulo restaurado' 
      ) 
    } 
  }, [contador])
  
  return ( 
    <div style={{ padding: '20px' }}> 
      <h2>Efeitos Colaterais</h2> 
      <div>
        <input
          type="text"
          placeholder="Digite algo"
          value={texto}
          onChange={(e) => 
            setTexto(e.target.value)}
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => 
          setContador(contador + 1)
        }>
          Contador: {contador}
        </button>
      </div>
    </div> 
  ) 
}

export default App