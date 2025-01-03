import { useMemo } from "react"
import { useCryptoStore } from "../Stores/store"


export default function CryptoPriceDisplay() {
    const result = useCryptoStore((state) => state.result)

    const hasResult = useMemo(() => !Object.values(result).includes(''), [result])

    return (
        <div className="result-wrapper">
            {hasResult && (
                <>
                    <h2>Resultado</h2>

                    <div className="result">
                        <img src={`https://www.cryptocompare.com${result.IMAGEURL}`} alt="logo" />
                        <div>
                            <p>Precio: <span>{result.PRICE}</span></p>
                            <p>Precio mas alto del dia: <span>{result.HIGHDAY}</span></p>
                            <p>Precio mas bajo del dia: <span>{result.LOWDAY}</span></p>
                            <p>Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>Última actualización: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}
