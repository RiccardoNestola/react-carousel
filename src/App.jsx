
import Carousel from './Components/Carousel/Carousel'
import images from './data/images'
import {Header} from './Components/Header/Header'
import CardList from './Components/Cards/CardList'
import Footer from './Components/Footer/Footer'
function App() {


  return (
    <>
      <Header />
      

      <main>
        <Carousel images={images} />
        <CardList />
      </main>

      <footer className='text-gray-600 body-font'>
        <Footer />
      </footer>
    </>
  )
}

export default App
