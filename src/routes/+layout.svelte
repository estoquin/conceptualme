<script lang="ts">
	let { children } = $props();
	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/posts', label: 'Latest Posts' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<div class="min-h-screen flex flex-col">
	<nav class="bg-blue-600 text-white shadow-lg">
		<div class="container mx-auto px-4 py-4">
			<div class="flex items-center justify-between">
				<a href="/" class="text-2xl font-bold">ConceptualMe</a>
				<div class="flex gap-6">
					{#each navLinks as link}
						<a href={link.href} class="hover:text-blue-200 transition">{link.label}</a>
					{/each}
				</div>
			</div>
		</div>
	</nav>

	<!-- Main Content -->
	<main class="flex-grow container mx-auto px-4 py-8">
		{@render children?.()}
	</main>

	<!-- Footer -->
	<footer class="bg-gray-800 text-white py-6">
		<div class="container mx-auto px-4 text-center">
			<p>&copy; 2025 ConceptualMe. A Blog Learning Platform.</p>
		</div>
	</footer>
</div>
