import {z} from 'zod';

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
});

export const CryptoCurrencyResponseSchema = z.object({
    CoinInfo: z.object({
        Name: z.string(),
        FullName: z.string()
    })
});

export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema);

export const pairSchema = z.object({
    currency: z.string(),
    criptocurrency: z.string()
});


export const ResponsePriceSchema = z.object({
    LASTUPDATE: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LOWDAY: z.string(),
    IMAGEURL: z.string()
});
