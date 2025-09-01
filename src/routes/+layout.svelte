<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import '@fontsource/pacifico';
	import {Spring} from "svelte/motion"
	let cursor_coords = new Spring({x:50, y:50}, {
		stiffness: .1,
		damping:.5 })
	let size = new Spring(15)
	let color = $state(180)
	function scrollHandler() {
		color = ( (window.scrollY - 10) % 180)
	}
	let { children } = $props();
</script>
<style>
	svg {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}
</style>
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="mb-20 mt-8 px-8 flex-col" 
	onmousemove="{(e) => {
			cursor_coords.target = {
				x: e.clientX,
				y: e.clientY
			}
		}}"
	role="presentation"
	onmouseover="{(e) => {
		if (e.target.closest("a")) {
			size.target = 23
		}
	}}"
	onmouseout="{(e) => {
		if (e.target.closest("a")) {
			size.target = 15
		}
	}}"
	onfocus="{(e) => {
		if (e.target.closest("a")) {
			size.target = 23
		}
	}}"
	onblur="{(e) => {
		if (e.target.closest("a")) {
			size.target = 15
		}
	}}"
	>
	<nav class=" m-auto mb-8 py-4 flex flex-wrap  gap-x-32 gap-y-2 text-gray-500 text-2xl justify-center">
		<a href="/" class="hover:text-blue-100 italic border-b-2 border-black py-0.5">Home</a> 
		<a href="/projects" class="hover:text-blue-100 italic border-b-2 border-black">Projects</a> 
		<a href="/cv" class="hover:text-blue-100 italic border-b-2 border-black">CV</a> 
	</nav>
	

	{@render children()}
	<svg 
		
		pointer-events= none
	>
		<circle
			cx={cursor_coords.current.x}
			cy={cursor_coords.current.y}
			r= {size.current}
			pointer-events= none
			opacity = .75
			style="fill: hsl({color}, 46%, 60%); transition: fill 0.2s ease;"
		>
		</circle>
	</svg>
</div>
<svelte:window on:scroll={scrollHandler} />
