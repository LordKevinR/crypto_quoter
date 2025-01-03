import axios from "axios"
import { CryptoCurrenciesResponseSchema, ResponsePriceSchema } from "../schema/crypto-schema"
import { Pair } from "../types"

export async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: {Data}} = await axios(url)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)

    if(result.success) {
        return result.data
    } 
}

export async function fetchCurrencyCryptoPrice(pair: Pair) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`
    const {data: {DISPLAY}} = await axios(url)
    const dataPrices = DISPLAY[pair.criptocurrency][pair.currency]
    const result = ResponsePriceSchema.safeParse(dataPrices)
    if(result.success) {
        return result.data
    } 
}

