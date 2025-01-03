import { useEffect } from "react"
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCryptoStore } from "./Stores/store"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"
import Spinner from "./components/Spinner"

function App() {

  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)
  const loading = useCryptoStore((state) => state.loading)

  useEffect(() => {
    fetchCryptos()
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="app-tittle">Cotizador de <span>Criptomonedas</span></h1>

        <div className="content">
          <CriptoSearchForm />
          { loading ?
            (<Spinner />)
            :
            ( <CryptoPriceDisplay />) 
            }
          
        </div>
      </div>
    </>
  )
}

export default App
