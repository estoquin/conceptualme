<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/posts', label: 'Posts' },
		{ href: '/categories', label: 'Categories' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];
</script>
<div class="h-full w-full flex flex-col">
	<NavBar {navLinks} />
	<main class="flex-grow">
		{@render children?.()}
	</main>
	<Footer />
</div>
