<script lang="ts">
	import PageContainer from '$lib/components/PageContainer.svelte';
	import { Code, Server, Settings, Palette } from '@lucide/svelte';
	const categories = [
		{ name: 'Frontend', slug: 'frontend', icon: Code },
		{ name: 'Backend', slug: 'backend', icon: Server },
		{ name: 'DevOps', slug: 'devops', icon: Settings },
		{ name: 'Design', slug: 'design', icon: Palette }
	];
</script>

<svelte:head>
	<title>Categories - ConceptualMe</title>
</svelte:head>

<PageContainer>
    <h1 class="text-4xl font-bold mb-8 text-center">Categories</h1>
	<ul class="grid grid-cols-1 sm:grid-cols-2 gap-6">
		{#each categories as category}
			<li>
				<a href={`/categories/${category.slug}`} class="flex items-center gap-4 px-6 py-5 bg-white shadow hover:bg-green-50 transition group" style="border-radius:0;">
					<svelte:component this={category.icon} class="w-8 h-8 text-gray-600 group-hover:text-gray-800 transition" />
					<span class="text-2xl font-semibold text-gray-900 group-hover:text-blue-800 transition">{category.name}</span>
				</a>
			</li>
		{/each}
	</ul>
</PageContainer>
