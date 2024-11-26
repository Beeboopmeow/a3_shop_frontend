<script lang="ts">
	import Button from '$lib/components/shared/Button.svelte';
	import Title from '$lib/components/shared/Title.svelte';
	import postData from '$lib/postData';

	let cpfValue = $state('');
	let nameValue = $state('');
	let passwordValue = $state('');
	let permissionValue: 'A' | 'B' | undefined = $state();
	let salaryValue: number | undefined = $state();
	let hoursValue: number | undefined = $state();

	let isFilled = $derived(() => {
		return (
			cpfValue != '' &&
			nameValue != '' &&
			passwordValue != '' &&
			permissionValue != undefined &&
			salaryValue != undefined &&
			hoursValue != undefined
		);
	});
</script>

<div class="m-10 flex flex-col items-center">
	<Title classes="text-center">Cadastro de funcionários</Title>

	<div class="mt-24 items-center justify-center">
		<form>
			<div class="flex flex-col">
				<input
					class="form-input my-3 rounded-lg px-4 py-3"
					type="text"
					placeholder="CPF"
					bind:value={cpfValue}
				/>
				<input
					class="form-input my-3 rounded-lg px-4 py-3"
					type="text"
					placeholder="Nome"
					bind:value={nameValue}
				/>
				<input
					class="form-input my-3 rounded-lg px-4 py-3"
					type="password"
					placeholder="Senha"
					bind:value={passwordValue}
				/>
				<input
					class="form-input my-3 rounded-lg px-4 py-3"
					type="text"
					placeholder="Permissão (A/B)"
					bind:value={permissionValue}
				/>
				<input
					class="form-input my-3 rounded-lg px-4 py-3"
					type="number"
					placeholder="Salário"
					bind:value={salaryValue}
				/>
				<input
					class="form-input my-3 rounded-lg px-4 py-3"
					type="number"
					placeholder="Horas trabalhadas"
					bind:value={hoursValue}
				/>
			</div>
		</form>
	</div>

	<div class="mt-14">
		<Button
			classes={`bg-pastelvermelho transition ${!isFilled() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-laranja hover:text-white'}`}
			disabled={!isFilled()}
			onclick={() => {
				postData('employees', {
					cpf: cpfValue,
					name: nameValue,
					password: passwordValue,
					permission: permissionValue,
					salary: salaryValue,
					workedHours: hoursValue
				});
			}}>Cadastrar funcionário</Button
		>
	</div>
</div>
