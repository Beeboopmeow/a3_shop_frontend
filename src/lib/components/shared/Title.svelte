<script lang="ts">
	interface Props {
		children: () => any;
		classes?: string;
	}

	let { children, classes }: Props = $props();
</script>

<h1 class="text-4xl font-bold {classes}">{@render children()}</h1>
