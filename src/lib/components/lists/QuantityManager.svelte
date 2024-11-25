<script lang="ts">
	let { quantity, decrease, increase, decreaseButton, increaseButton } = $props();
</script>

<ul class="flex flex-row items-center justify-around">
	<li>
		<button class="rounded p-1 hover:bg-gray-200" type="button" onclick={decrease}
			>{decreaseButton}</button
		>
	</li>

	<li>
		<span class="mx-2">
			{quantity}
		</span>
	</li>

	<li>
		<button class="rounded p-1 hover:bg-gray-200" type="button" onclick={increase}
			>{increaseButton}</button
		>
	</li>
</ul>
