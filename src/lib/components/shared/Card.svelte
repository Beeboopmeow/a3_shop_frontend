<script>
	let { children } = $props();
</script>

<div class="my-10 flex w-1/6 flex-col items-center justify-center rounded-xl mix-blend-darken">
	{@render children()}
</div>
