<script lang="ts">
	interface Props {
		children?: any;
	}

	let { children }: Props = $props();
</script>

<th scope="col" class="px-6 py-4">
	{@render children()}
</th>
