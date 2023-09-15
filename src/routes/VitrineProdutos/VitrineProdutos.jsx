import {useParams, useNavigate } from "react-router-dom"
import { ListaProdutos } from "../../components/ListaProdutos"

export default function VitrineProdutos() {

  const lista = ListaProdutos
  const navegacao = useNavigate()
  const {id} = useParams()

  const proc = lista.filter(prod => prod.id == id)
  const produto = proc[0]
  
  const salvar = () => {
    alert(`Produto: ${produto.nome} editado com sucesso!`)
    return navegacao('/produtos')
  }
  
  return (
    <main>
      <div className="style-product">
        <h1>DADOS DO PRODUTO</h1>
        <h2>{produto.nome}</h2>
        <h2>R${produto.preco}</h2>
        <p><img src={`${produto.img}`} alt={`${produto.nome}`} /></p>
        <p>Detalhes do aparelho: </p>
        <p>Memória RAM: {produto.ram}, Peso: {produto.peso}, Câmera Frontal: {produto.camera_frontal}, Câmera Traseira: {produto.camera_traseira}</p>
      </div>   
    </main>
  )
}
