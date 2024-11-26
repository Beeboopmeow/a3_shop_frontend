<script lang="ts">
	import QuantityManager from '$lib/components/lists/QuantityManager.svelte';
	import TableData from '$lib/components/lists/TableData.svelte';
	import TableHead from '$lib/components/lists/TableHead.svelte';
	import TableLayout from '$lib/components/lists/TableLayout.svelte';
	import Button from '$lib/components/shared/Button.svelte';
	import Title from '$lib/components/shared/Title.svelte';
	import getData from '$lib/getData';
	import deleteData from '$lib/deleteData';
	import type { Employee } from '$lib/types';
	import { onMount } from 'svelte';

	let employees = $state<Employee[]>([]);

	let totalPages = $state(0);

	onMount(async () => {
		employees = await getData('employees');
		totalPages = Math.ceil(employees.length / 10);
	});

	let page = $state(0);

	const setPage = (p: number) => {
		if (p >= 0 && p < totalPages) {
			page = p;
		}
	};
</script>

<div class="m-10">
	<Title classes="text-center">Salários</Title>
	<TableLayout dataSource={employees}>
		<table class="min-w-full rounded text-center text-sm font-light text-white">
			<thead class="bg-orange-300 font-semibold">
				<tr>
					<TableHead>CPF</TableHead>
					<TableHead>Nome</TableHead>
					<TableHead>Salário</TableHead>
					<TableHead><span></span></TableHead>
				</tr>
			</thead>
			<tbody>
				{#each employees.slice(page * 10, (page + 1) * 10) as employee (employee.cpf)}
					<tr class="border-b border-orange-50 bg-orange-100 text-neutral-800">
						<TableData>{employee.cpf}</TableData>
						<TableData>{employee.name}</TableData>
						<TableData>R${employee.salary}</TableData>
						<TableData>
							<Button
								classes="bg-red-400 hover:bg-red-500 hover:text-white"
								onclick={() => {
									deleteData(`employees/${employee.cpf}`);
									employees = employees.filter((e) => e.cpf !== employee.cpf);
								}}>Apagar</Button
							>
						</TableData>
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
