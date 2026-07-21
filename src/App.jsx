import './App.css'
import Extra from './components/extra'
import ProductList from './components/product-list'
import ProductsList from './components/product-list/data-list'

function App() {

  return (
    <>
      <ProductList ProductsList={ProductsList} />

      <Extra title="Extra Component">
        <h2>Hello world!</h2>
      </Extra>
    </>
  )
}

export default App
