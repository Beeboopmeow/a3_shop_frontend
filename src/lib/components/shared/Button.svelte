<script lang="ts">
	interface Props {
		children: () => any;
		classes?: string;
		onclick?: () => void;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
	}

	let { children, classes, onclick, type, disabled }: Props = $props();
</script>

<button class="rounded-3xl p-3 {classes}" {onclick} {type} {disabled}>
	{@render children()}
</button>
