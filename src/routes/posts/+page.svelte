<script lang="ts">
	import type { PageData } from './$types';
	
	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Latest Posts - ConceptualMe</title>
</svelte:head>

<div class="space-y-8">
	<section class="text-center">
		<h1 class="text-4xl font-bold mb-4">Latest Posts</h1>
		<p class="text-xl text-gray-600">Explore our collection of articles and tutorials</p>
	</section>

	<section class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each data.posts as post}
			<article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
				<img src={post.image} alt={post.title} class="w-full h-48 object-cover" />
				<div class="p-6">
					<div class="flex items-center text-gray-600 text-sm mb-3">
						<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
						</svg>
						{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
					</div>
					<h2 class="text-2xl font-bold mb-3 text-gray-900">{post.title}</h2>
					<p class="text-gray-700 mb-4">{post.excerpt}</p>
					<a 
						href="/posts/{post.slug}" 
						class="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
					>
						Read More
						<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
						</svg>
					</a>
				</div>
			</article>
		{/each}
	</section>

	{#if data.posts.length === 0}
		<section class="text-center py-12">
			<p class="text-xl text-gray-600">No posts available yet. Check back soon!</p>
		</section>
	{/if}
</div>
