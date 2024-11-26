<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Tutti-Fruti</title>
</svelte:head>

{@render children()}
