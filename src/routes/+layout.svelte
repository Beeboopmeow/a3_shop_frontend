<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Tutti-Frutti</title>
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

{@render children()}
