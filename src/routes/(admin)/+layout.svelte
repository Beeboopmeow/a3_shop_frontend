<script lang="ts">
	import LinkButton from '$lib/components/shared/LinkButton.svelte';

	const tabs = [
		{ name: 'Vendas', href: '/sales' },
		{ name: 'Salários', href: '/salaries' },
		{ name: 'Funcionários', href: '/register-employees' },
		{ name: 'Produtos', href: '/products' }
	];

	const buttonClasses = 'hover:underline';

	let { children } = $props();
</script>

<nav class="waves flex py-8">
	<ul class="flex w-1/3 justify-around">
		{#each tabs as tab}
			<li>
				<LinkButton href={tab.href} center={true} classes={buttonClasses}>{tab.name}</LinkButton>
			</li>
		{/each}
	</ul>
	<div class="w-1/3"></div>
	<div class="w-1/3">
		<LinkButton href="/" classes="items-center justify-end mr-14 {buttonClasses}">Sair</LinkButton>
	</div>
</nav>

{@render children()}

<style>
	.waves {
		background-image: url('/images/waves.png');
		max-width: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 35% 100%;
	}
</style>
