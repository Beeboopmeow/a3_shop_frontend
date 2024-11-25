<script lang="ts">
	import type { CartProduct } from '$lib/types';
	import QuantityManager from '../lists/QuantityManager.svelte';

	interface Props {
		cartProduct: CartProduct;
		removeItem: (id: number) => void;
	}

	let { cartProduct = $bindable(), removeItem }: Props = $props();
</script>

{#if cartProduct.quantity > 0}
	<div class="flex items-center justify-between border-b border-gray-200 py-2">
		<div class="flex items-center">
			<img
				src={cartProduct.product.image}
				alt="Product"
				class="mr-4 size-12 rounded object-cover"
			/>
			<div>
				<p class="font-medium">{cartProduct.product.name}</p>
				<p class="text-sm">
					R${(cartProduct.product.price - cartProduct.product.discount).toFixed(2)} cada
				</p>
			</div>
		</div>
		<div class="flex items-center">
			<QuantityManager
				quantity={cartProduct.quantity}
				decrease={() => {
					cartProduct.quantity--;
				}}
				increase={() => {
					cartProduct.quantity++;
				}}
				decreaseButton="-"
				increaseButton="+"
			/>
			<button
				class="ml-4 rounded p-1 text-red-500 hover:bg-red-100"
				onclick={() => removeItem(cartProduct.id)}
			>
				X
			</button>
		</div>
	</div>
{/if}
