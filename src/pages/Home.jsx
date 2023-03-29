import banner from '../assents/banner.png';
import { Header } from '../components/Header/Header';
import '../componentsCSS/home.css';

const Home = () => {
  return (
    <div>
      <Header autenticado={false} />
      <div className='container_home'>
        <section className='container_info'>
          <h1>Implemente</h1>
          <div>
            <h2>o seu futuro agora global agora!</h2>
          </div>
          <div>
            <p>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.</p>
          </div>
        </section>

        <section>
          <img src={banner} alt="banner" />
        </section>
      </div>

      <div className='button'>
        <button>Começar agora</button>
      </div>
    </div>
  )
}

export default Home;