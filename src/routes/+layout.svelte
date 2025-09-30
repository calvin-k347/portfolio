<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	import { page } from "$app/state"

	import '@fontsource/pacifico';
	import '@fontsource-variable/roboto-slab';
	
	import {Spring} from "svelte/motion"

	let { children } = $props();
</script>
<style>
</style>

<svelte:head>
	<title>Calvin Clark</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="mb-20 mt-8 px-8 flex-col mx-auto max-w-3xl font-serif">
	<nav class="m-auto mb-8 py-4 flex flex-wrap justify-around gap-y-2 text-2xl">
		{#snippet link(name, href, strict)}
			{@const isActive = strict ? page.route.id === href : page.route.id.startsWith(href)}
			<a
				{href}
				class="transition italic border-b-2 py-0.5 hover:text-blue-500
					{isActive ? "text-black" : "text-gray-500"}"
			>{name}</a> 
		{/snippet}

		{@render link("Home", "/", true)}
		{@render link("Projects", "/projects")}
		{@render link("Resume", "/resume")}
	</nav>

	{@render children()}</div>
