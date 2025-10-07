<script>
    const {
        caption,
        image,
        link,
        children
    } = $props();
</script>

<div class="mx-auto flex-1 grid grid-cols-1 gap-2 rounded-lg sm:grid-cols-3">
	<svelte:element
		this={link ? 'a' : 'div'}
		href={link}
		class="rounded-lg border-2 border-blue-300 bg-white shadow-lg transition-all  hover:shadow-blue-300"
	>
		<img class="min-h-32 rounded-t-lg" src={image} alt="welcome to cordele sign" />
		<p class="justify-center p-3 font-bold">{caption}</p>
	</svelte:element>
	<div class="col-span-2 rounded-xl bg-white border-blue-300 border-2 space-y-4 p-4">
		{@render children()}
	</div>
</div>
