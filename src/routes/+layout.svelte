<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import '@fontsource/pacifico';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="mb-20 mt-8 px-8 flex-col">
	<nav class=" m-auto mb-8 py-4 flex flex-wrap  gap-x-32 gap-y-2 text-gray-500 text-2xl justify-center">
		<a href="/" class="hover:text-blue-100 border-b-2 border-black py-0.5">Home</a> 
		<a href="/projects" class="hover:text-blue-100 border-b-2 border-black">Projects</a> 
		<a href="/cv" class="hover:text-blue-100 border-b-2 border-black">CV</a> 
	</nav>

	{@render children()}
</div>
