import './App.css'
import ilustracion from './assets/img/ilustracion.svg'
import ilustracion1 from './assets/img/ilustracion1.svg'
import uno from './assets/img/uno.jpg'
import dos from './assets/img/dos.jpg'
import tres from './assets/img/tres.jpg'
import cuatro from './assets/img/cuatro.jpg'
import cinco from './assets/img/cinco.jpg'
import seis from './assets/img/seis.jpg'
import HeaderHero from './components/HeaderHero'

function App ({ saludo, nombre }) {
  return (
    <>
      <HeaderHero title='Bienvenidos G28' desc='Estamos haciendo un header que reciba Props' buttonText='Conoce más' buttonLink='https://devf.mx' />

      {/* <HeaderHero title='Se un Desarrollador Rockstar' desc='DevF es para ti' buttonText='Inscribirme al Master' buttonLink='https://devf.mx' /> */}
      <section className='wave-contenedor website'>
        <img src={ilustracion1} alt='' />
        <div className='contenedor-textos-main'>
          <h2 className='titulo left'>Title of section</h2>
          <p className='parrafo'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt enim
            reiciendis molestias nam tempore. Ullam hic accusantium eligendi ipsam
            corrupti!
          </p>
          <a href='' className='cta'>
            Learn more
          </a>
        </div>
      </section>
      <section className='info'>
        <div className='contenedor'>
          <h2 className='titulo left'>Juntos podemos apoyar</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </section>
      <section className='cards contenedor'>
        <h2 className='titulo'>Our services</h2>
        <div className='content-cards'>
          <article className='card'>
            <i className='far fa-clone' />
            <h3>Title Card</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <a href='' className='cta'>
              Learn more
            </a>
          </article>
          <article className='card'>
            <i className='fas fa-database' />
            <h3>Title Card</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <a href='' className='cta'>
              Learn more
            </a>
          </article>
          <article className='card'>
            <i className='far fa-object-group' />
            <h3>Title Card</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <a href='' className='cta'>
              Learn more
            </a>
          </article>
        </div>
      </section>
      <section className='galeria'>
        <div className='contenedor'>
          <h2 className='titulo'>Our work</h2>
          <article className='galeria-cont'>
            <img src={uno} alt='' />
            <img src={dos} alt='' />
            <img src={tres} alt='' />
            <img src={cuatro} alt='' />
            <img src={cinco} alt='' />
            <img src={seis} alt='' />
          </article>
        </div>
      </section>
      <section className='info-last'>
        <div className='contenedor last-section'>
          <div className='contenedor-textos-main'>
            <h2 className='titulo left'>Title of section</h2>
            <p className='parrafo'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              reprehenderit nostrum expedita quasi odio architecto laudantium sunt
              nemo dicta atque?
            </p>
            <a href='' className='cta'>
              Learn more
            </a>
          </div>
          <img src={ilustracion} alt='' />
        </div>
        <div className='svg-wave' style={{ height: 150, overflow: 'hidden' }}>
          <svg
            viewBox='0 0 500 150'
            preserveAspectRatio='none'
            style={{ height: '100%', width: '100%' }}
          >
            <path
              d='M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z'
              style={{ stroke: 'none', fill: '#f5576c' }}
            />
          </svg>
        </div>
      </section>
      <footer id='contacto'>
        <div className='contenedor'>
          <h2 className='titulo'>Contact us</h2>
          <form action='' className='form'>
            <input
              className='input'
              type='text'
              name=''
              id=''
              placeholder='Nombre'
            />
            <input
              className='input'
              type='email'
              name=''
              id=''
              placeholder='Email'
            />
            <textarea
              className='input'
              name=''
              id=''
              cols={30}
              rows={10}
              placeholder='Mensaje'
              defaultValue=''
            />
            <input className='input' type='submit' defaultValue='Enviar' />
          </form>
        </div>
      </footer>
    </>

  )
}

export default App
