<script lang="ts">
	interface Props {
		children: () => any;
		href: string;
		classes?: string;
		center?: boolean;
	}

	let { children, href, classes, center }: Props = $props();
</script>

<a {href} class="flex h-10 {center ? 'items-center justify-center' : ''} {classes}">
	{@render children()}
</a>
