import {Routes, Route, useNavigate} from 'react-router-dom';

export default function Error() {

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <>
        <h1>Erro 404 - Página não encontrada, verifique o caminho da página desejada</h1>
        <button onClick={navigateToHome}>RETORNAR PARA HOME</button>
    </>
  )
}
