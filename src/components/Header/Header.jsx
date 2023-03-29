import logo from '../../assents/logo-dio.png';
import '../../componentsCSS/header.css'
import { NavLink } from 'react-router-dom'

const Header = ({ autenticado}) => {
  return (
    <div className='container_menu'>
      <header className='container_header'>
        <a href="/"><img src={logo} alt="Logo da dio" /></a>
        {autenticado  ? <input type='text' placeholder='Buscar...' /> : [] }
        <div className='container_input'>
          {autenticado  ? (
            <div>
              <ul>
                <li>Live Code</li>
                <li>Global</li>
              </ul>
            </div>
          ) : null}
        </div>
        <div>
          {autenticado  ? (
            <img src="https://avatars.githubusercontent.com/u/34719454?s=40&v=4" alt="" />
          ) : (
            <ul>
              <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/login" activeClassName="active">Entrar</NavLink></li>
              <li><NavLink to="/register" activeClassName="active">Cadastrar</NavLink></li>
            </ul>)}
        </div>
      </header>
    </div>
  )
}

export { Header }