export default function Produtos() {
  return (
  
    <main>
      <h1>Produtos</h1>
      {ListaProdutos.map(prod => (
        <div key={prod.id}>
          <Link to={`/produtos/editar/${prod.id}`}>
            Editar o produto: {prod.nome}
          </Link>
        </div>
      ))}
    </main>
  
    )
}
