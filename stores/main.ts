export const useMainStore = defineStore('useMainStore', {
    state: () => ({
      cryptoCurrencies: [],
			bitcoinPrice: 0,
			secondMarketCapCurName: '',
			secondMarketCapCurPrice: 0
    }),
    actions: {
      // async fetch() {
      //   const data = await useFetch(
			// 		'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', 
			// 	{
			// 		method: 'GET',
			// 		mode: 'no-cors',
			// 		headers: {
			// 			'X-CMC_PRO_API_KEY': `c3f841e7-0fff-4d8e-985f-248d29747571`,
			// 			'Accept': 'application/json',
			// 			'Accept-Encoding': 'deflate, gzip'
			// 		},
			// 		server: true,
			// 		watch: false,
			// 	})
			// 	console.log('store data => ', data.value);
			// 	// fetchedData = cryptoData.value.data;
  
      //   // this.name = infos.name
      //   // this.description = infos.description
      // }
    }
  })