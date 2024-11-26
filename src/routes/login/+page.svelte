<script lang="ts">
	import { beforeNavigate, goto } from '$app/navigation';
	import Button from '$lib/components/shared/Button.svelte';
	import Title from '$lib/components/shared/Title.svelte';
	import getData from '$lib/getData';
	import type { Employee } from '$lib/types';
	import { onMount } from 'svelte';

	let data: Employee[] = [];

	let valueName: string = $state('');
	let valuePassword: string = $state('');
	let permission: Boolean = $state(false);
	let showError: Boolean = $state(false);

	onMount(async () => {
		data = await getData('employees');
	});

	function authenticateUser(e: Event) {
		e.preventDefault();
		const user = data.find(
			(employee) =>
				employee.name === valueName &&
				employee.password === valuePassword &&
				employee.permission === 'A'
		);

		if (user) {
			permission = true;
			showError = false;
			goto('/sales');
		} else {
			permission = false;
			showError = true;
		}
	}

	beforeNavigate((navigation) => {
		if (navigation.to?.url.href === 'http://localhost:5173/sales' && permission === false) {
			navigation.cancel();
		}
	});
</script>

<!-- Div principal -->
<div class="flex h-screen w-screen items-center justify-center">
	<div class="flex flex-col rounded-2xl p-20">
		<!-- Título -->
		<div class="mb-10 flex justify-center">
			<Title
				classes="bg-gradient-to-r from-pastelvermelho to-yellow-300 bg-clip-text inline-block text-transparent"
			>
				Login</Title
			>
		</div>
		<!-- Inputs -->
		<form onsubmit={authenticateUser}>
			<div class="flex flex-col">
				<input
					type="text"
					placeholder="Nome"
					class="form-input my-3 rounded-lg px-4 py-3"
					bind:value={valueName}
				/>

				<input
					type="password"
					placeholder="Senha"
					class="form-input my-3 rounded-lg px-4 py-3"
					bind:value={valuePassword}
				/>

				{#if showError}
					<p class="text-center text-red-500">Usuário ou senha inválidos</p>
				{/if}
			</div>

			<!-- Botão -->

			<div class="mt-6 flex justify-center">
				<Button
					type="submit"
					classes="items-center bg-gradient-to-r from-pastelvermelho to-yellow-300 hover:text-white rounded-md transition w-40 p-3"
					onclick={() => {
						if (permission === false) {
						}
					}}
				>
					Entrar
				</Button>
			</div>
		</form>
	</div>
</div>
