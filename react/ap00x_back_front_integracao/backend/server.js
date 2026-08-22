require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')

const app = express()

app.use(cors())
app.use(express.json())

let conexao

async function conectar() {
  conexao = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USUARIO || process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
  })

  console.log('Conectado ao MySQL!')
}

conectar().catch((erro) => {
  console.error('Erro ao conectar no MySQL:', erro.message)
})

app.get('/', (req, res) => {
  res.json({
    mensagem: 'Servidor funcionando!',
  })
})

app.get('/tarefas', async (req, res) => {
  try {
    const [linhas] = await conexao.query('SELECT * FROM tb_tarefa')
    res.json(linhas)
  } catch (erro) {
    console.error(erro)
    res.status(500).json({
      erro: 'Erro interno do servidor',
    })
  }
})

app.post('/tarefas', async (req, res) => {
  try {
    const { titulo, descricao } = req.body
    const sql = 'INSERT INTO tb_tarefa (titulo, descricao) VALUES (?, ?)'
    const [resultado] = await conexao.query(sql, [titulo, descricao])

    res.status(201).json({
      titulo,
      descricao,
      cod_tarefa: resultado.insertId,
    })
  } catch (erro) {
    console.error(erro)
    res.status(500).json({
      erro: 'Erro ao criar tarefa',
    })
  }
})

app.put('/tarefas/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { titulo, descricao } = req.body
    const sql = 'UPDATE tb_tarefa SET titulo = ?, descricao = ? WHERE cod_tarefa = ?'

    await conexao.query(sql, [titulo, descricao, id])

    res.json({
      cod_tarefa: id,
      titulo,
      descricao,
    })
  } catch (erro) {
    console.error(erro)
    res.status(500).json({
      erro: 'Erro ao atualizar tarefa',
    })
  }
})

app.delete('/tarefas/:id', async (req, res) => {
  try {
    const { id } = req.params

    await conexao.query('DELETE FROM tb_tarefa WHERE cod_tarefa = ?', [id])

    res.json({
      mensagem: 'Tarefa excluida',
    })
  } catch (erro) {
    console.error(erro)
    res.status(500).json({
      erro: 'Erro ao excluir tarefa',
    })
  }
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})
