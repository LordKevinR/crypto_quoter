import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { CryptoCurrency, Pair, ResponsePrice } from "../types"
import { getCryptos, fetchCurrencyCryptoPrice } from "../services/CryptoService"

type CryptoStore = {
    cryptocurrenties: CryptoCurrency[],
    result: ResponsePrice,
    loading: boolean,
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrenties: [],
    result: {
        LASTUPDATE: '',
        PRICE: '',
        HIGHDAY: '',
        CHANGEPCT24HOUR: '',
        LOWDAY: '',
        IMAGEURL: ''
    },
    loading: false,
    fetchCryptos: async () => {
        const cryptoCurrencies = await getCryptos()
        set({ cryptocurrenties: cryptoCurrencies })
    },
    fetchData: async (pair: Pair) => {
        set({ loading: true })

        const result = await fetchCurrencyCryptoPrice(pair)
        set({ result, loading: false })
    }
})))