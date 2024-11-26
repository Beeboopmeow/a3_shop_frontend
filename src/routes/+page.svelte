<script lang="ts">
	import Button from '$lib/components/shared/Button.svelte';
	import Card from '$lib/components/shared/Card.svelte';
	import CartItem from '$lib/components/shared/CartItem.svelte';
	import LinkButton from '$lib/components/shared/LinkButton.svelte';
	import Title from '$lib/components/shared/Title.svelte';
	import type { CartProduct, Product } from '$lib/types';
	import getData from '$lib/getData';
	import { onMount } from 'svelte';
	import postData from '$lib/postData';

	let items = $state<Product[]>([]);

	onMount(async () => {
		items = await getData('products');
	});

	let cartOpen = $state(false);
	let cartProducts = $state<CartProduct[]>([]);

	const cartStats = $derived.by(() => {
		let quantity = 0;
		let totalPrice = 0;
		for (const product of cartProducts) {
			quantity += product.quantity;
			totalPrice +=
				parseFloat((product.product.price - (product.product.discount || 0)).toFixed(2)) *
				product.quantity;
		}
		return { quantity, totalPrice };
	});

	function removeFromCart(id: number) {
		cartProducts = cartProducts.filter((product) => product.id !== id);
	}
</script>

<nav class="waves flex w-full items-center py-20">
	<Title classes="ml-16 text-center w-1/3">Mercado Tutti-Frutti</Title>
	<div class="w-2/3"></div>
	<ul class="flex w-1/4 items-center justify-end">
		<Button
			classes="mr-10 items-center hover:text-laranja text-xl"
			onclick={() => (cartOpen = !cartOpen)}
			>Carrinho {cartStats.quantity ? `(${cartStats.quantity})` : ''}</Button
		>
		{#if cartOpen}
			<div class="absolute right-2 top-32 z-10 mt-2 w-80 rounded-lg bg-white shadow-xl">
				<div class="relative p-4">
					<h2 class="mb-4 text-lg font-semibold">Carrinho</h2>
					<Button
						classes="absolute right-4 top-4 rounded-full p-1 hover:bg-gray-100"
						onclick={() => (cartOpen = false)}
					>
						X
					</Button>
					{#each cartProducts as _, i}
						<CartItem bind:cartProduct={cartProducts[i]} removeItem={removeFromCart} />
					{/each}
					<div class="mt-4 flex items-center justify-between border-gray-200 pt-4">
						<p class="text-lg font-semibold">Total: R${cartStats.totalPrice.toFixed(2)}</p>
						<Button
							classes="ml-5 bg-gradient-to-r from-pastelvermelho to-yellow-300 hover:text-white"
							onclick={() => {
								postData('orders', {
									orderAmount: cartStats.quantity,
									total: cartStats.totalPrice.toFixed(2)
								});
							}}>Comprar</Button
						>
					</div>
				</div>
			</div>
		{/if}
		<LinkButton href="/login" classes="items-center mr-20 hover:text-laranja text-xl"
			>Login</LinkButton
		>
	</ul>
</nav>
<div class="m-5 flex flex-wrap items-center justify-center gap-10">
	{#each items as item (item)}
		<Card>
			<img src={item.image} alt={item.name} />
			<div class="mt-5">{item.name}</div>
			<div>R${(item.price - (item.discount || 0)).toFixed(2)}</div>
			<Button
				classes="m-5 bg-gradient-to-r from-pastelvermelho to-yellow-300 hover:text-white"
				onclick={() => {
					if (cartProducts.find((product) => product.id === item.id)) {
						cartProducts = cartProducts.map((product) =>
							product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product
						);
					} else {
						cartProducts = [...cartProducts, { id: item.id, product: item, quantity: 1 }];
					}
				}}
			>
				Carrinho +
			</Button>
		</Card>
	{/each}
</div>

<style>
	.waves {
		background-image: url('/images/waves.png');
		max-width: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 35% 100%;
	}
</style>
