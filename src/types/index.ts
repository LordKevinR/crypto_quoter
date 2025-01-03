import {CurrencySchema, CryptoCurrencyResponseSchema, pairSchema, ResponsePriceSchema} from '../schema/crypto-schema'
import {z} from 'zod';

export type Currency = z.infer<typeof CurrencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>;
export type Pair = z.infer<typeof pairSchema>;
export type ResponsePrice = z.infer<typeof ResponsePriceSchema>;