<script setup lang="ts">
	import { format } from '../utils';
	import { ref } from 'vue';

	const store = useMainStore();

	const refreshing = ref(false)
	let fetchedData = ref(null);

	async function getCryptoData() {
		const { data: cryptoData } = await useFetch(
			'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', 
		{
			method: 'GET',
			mode: 'no-cors',
			headers: {
				'X-CMC_PRO_API_KEY': `c3f841e7-0fff-4d8e-985f-248d29747571`,
				'Accept': 'application/json',
				'Accept-Encoding': 'deflate, gzip'
			},
			server: true,
    	watch: false,
		});
		fetchedData = cryptoData.value.data;
		store.cryptoCurrencies = fetchedData;
		store.bitcoinPrice = store.cryptoCurrencies[0].quote.USD.price;
		store.secondMarketCapCurName = store.cryptoCurrencies[1].name;
		store.secondMarketCapCurPrice = store.cryptoCurrencies[1].quote.USD.price;
	}

	await getCryptoData();
	console.log('fetchedData => ', fetchedData);

	async function refresh() {
		reloadNuxtApp();
	}
</script>
<style lang="scss">
	.btn {
		margin: 10px 0;
	}
	.loader {
		display: none;
	}
	.loader.active {
    width: 48px;
    height: 48px;
    border: 5px solid green;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
	}
	@keyframes rotation {
    0% {
			transform: rotate(0deg);
    }
    100% {
			transform: rotate(360deg);
    }
	} 
</style>
<template>
	<h1>Il valore di Bitcoin ${{ format(store.bitcoinPrice) }}</h1>
	<p>La cryptovaluta con maggior Market Cap dopo Bitcoin è {{ store.secondMarketCapCurName }} con valore ${{ format(store.secondMarketCapCurPrice) }}</p>
	<button class="btn" @click="refresh">refresh</button>
	<CustomTable></CustomTable>
</template>	