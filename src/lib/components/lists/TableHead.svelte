<script lang="ts">
	let { children } = $props();
</script>

<th scope="col" class="px-6 py-4">
	{@render children()}
</th>
