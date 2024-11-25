<script>
	let { children, dataSource } = $props();
</script>

<div class="mt-8 flex flex-col">
	<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
		<div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
			<div class="overflow-hidden rounded-3xl">
				{#if dataSource.length !== 0}
					{@render children()}
				{:else}
					<p class="text-center">Nenhum dado encontrado</p>
				{/if}
			</div>
		</div>
	</div>
</div>
