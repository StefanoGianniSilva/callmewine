<script setup lang="ts">
	import { format, formatAlt, formatDateDay, formatHours } from '../utils';
	const store = useMainStore();
</script>
<style lang="scss">
	.custom-table {
		display: flex;
		flex-direction: column;
		width: 80%;
		.props-wrapper {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.prop {
				flex: 1 0 20%;
				padding: 5px;
			}
		}
		.props-wrapper:nth-child(even) {
				background: #eee;
			}
		.props-wrapper.header {
			background: #000;
			color: #fff;
			border-top-left-radius: 5px;
			border-top-right-radius: 5px;
		}
	}
</style>
<template>
	<div class="custom-table">
		<div class="props-wrapper header">
			<div class="prop">NAME</div>
			<div class="prop">SYMBOL</div>
			<div class="prop">PRICE</div>
			<div class="prop">CIRCULATING SUPPLY</div>
			<div class="prop">LAST UPDATED</div>
		</div>
		<div v-for="(item, index) in store.cryptoCurrencies" class="props-wrapper">
			<div class="prop">{{ item.name }}</div>
			<div class="prop">{{ item.symbol }}</div>
			<div class="prop">${{ format(item.quote.USD.price) }}</div>
			<div class="prop">{{ formatAlt(item.circulating_supply) }}</div>
			<div class="prop">{{ formatDateDay(item.last_updated) }}, {{ formatHours(item.last_updated) }}</div>
		</div>
	</div>
</template>