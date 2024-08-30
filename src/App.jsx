
import './App.css'

export default function App() {

  return (
    <section className='bg-black'>
      <img src="./img/logotransparent.svg" className='logo'/>
    
      <video id="heroVideo" autoPlay loop muted>
            <source src="./video/verde.mp4" type="video/mp4" />
      </video>
    </section>
  )
}


