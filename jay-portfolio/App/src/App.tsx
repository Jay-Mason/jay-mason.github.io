import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Portfolio from './components/Portfolio'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Container fluid className="g-0">
       <Menu />
       <Portfolio />
       <Footer />
       <ScrollToTop />
    </Container>
  )
}

export default App
