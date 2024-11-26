<script lang="ts">
	import Button from '$lib/components/shared/Button.svelte';
	import Title from '$lib/components/shared/Title.svelte';
	import postData from '$lib/postData';

	let nameValue = $state('');
	let priceValue: number | undefined = $state();
	let dateValue = $state('');
	let measureValue = $state('');
	let discountValue: number | undefined = $state();
	let stockValue: number | undefined = $state();
	let imageValue = $state('');

	let isFilled = $derived(() => {
		return (
			nameValue != '' &&
			priceValue != undefined &&
			dateValue != '' &&
			measureValue != '' &&
			discountValue != undefined &&
			stockValue != undefined &&
			imageValue != ''
		);
	});
</script>

<div class="m-8 flex flex-col items-center">
	<Title classes="text-center">Cadastro de produtos</Title>

	<div class="mt-14 items-center justify-center">
		<div class="flex flex-col">
			<input
				class="form-input my-3 rounded-lg px-4 py-3"
				type="text"
				placeholder="Nome"
				bind:value={nameValue}
			/>
			<input
				class="form-input my-3 rounded-lg px-4 py-3"
				type="number"
				placeholder="Preço"
				bind:value={priceValue}
			/>
			<input
				class="form-input my-3 rounded-lg px-4 py-3"
				type="date"
				placeholder="Validade"
				bind:value={dateValue}
			/>
			<input
				class="form-input my-3 rounded-lg px-4 py-3"
				type="text"
				placeholder="Unidade de medida"
				bind:value={measureValue}
			/>
			<input
				class="form-input my-3 rounded-lg px-4 py-3"
				type="number"
				placeholder="Desconto"
				bind:value={discountValue}
			/>
			<input
				class="form-input my-3 rounded-lg px-4 py-3"
				type="number"
				placeholder="Quantidade"
				bind:value={stockValue}
			/>
			<input
				class="form-input my-3 rounded-lg px-4 py-3"
				type="text"
				placeholder="Endereço de imagem"
				bind:value={imageValue}
			/>
		</div>
	</div>

	<div class="mt-8">
		<Button
			classes={`bg-pastelvermelho transition ${!isFilled() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-laranja hover:text-white'}`}
			disabled={!isFilled()}
			onclick={() => {
				postData('products', {
					name: nameValue,
					price: priceValue,
					expirationDate: dateValue,
					measure: measureValue,
					discount: discountValue,
					stock: stockValue,
					image: imageValue
				});
			}}>Cadastrar produto</Button
		>
	</div>
</div>
