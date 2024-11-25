<script lang="ts">
	import QuantityManager from '$lib/components/lists/QuantityManager.svelte';
	import TableData from '$lib/components/lists/TableData.svelte';
	import TableHead from '$lib/components/lists/TableHead.svelte';
	import TableLayout from '$lib/components/lists/TableLayout.svelte';
	import Title from '$lib/components/shared/Title.svelte';
	import type { Sale } from '$lib/types';
	import getData from '$lib/getData';
	import { onMount } from 'svelte';

	let sales = $state<Sale[]>([]);

	let totalPages = $state(0);

	onMount(async () => {
		sales = await getData('orders');
		totalPages = Math.ceil(sales.length / 10);
	});

	let page = $state(0);

	const setPage = (p: number) => {
		if (p >= 0 && p < totalPages) {
			page = p;
		}
	};
</script>

<div class="m-10">
	<Title classes="text-center">Vendas</Title>
	<TableLayout dataSource={sales}>
		<table class="min-w-full rounded text-center text-sm font-light text-white">
			<thead class="bg-blue-400 font-semibold">
				<tr>
					<TableHead>#</TableHead>
					<TableHead>Quantidade</TableHead>
					<TableHead>Data</TableHead>
					<TableHead>Valor</TableHead>
				</tr>
			</thead>
			<tbody>
				{#each sales.slice(page * 10, (page + 1) * 10) as sale (sale.id)}
					<tr class="border-b border-blue-200 bg-blue-100 text-neutral-800">
						<TableData>{sale.id}</TableData>
						<TableData>{sale.orderAmount}</TableData>
						<TableData>{sale.createdAt}</TableData>
						<TableData>R${sale.total}</TableData>
					</tr>
				{/each}
			</tbody>
		</table>
	</TableLayout>

	<nav class="m-8 justify-around">
		<QuantityManager
			quantity={page + 1}
			decrease={() => setPage(page - 1)}
			increase={() => setPage(page + 1)}
			decreaseButton="Voltar"
			increaseButton="Avançar"
		/>
	</nav>
</div>
