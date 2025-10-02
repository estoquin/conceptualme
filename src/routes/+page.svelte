<script lang="ts">
	import type { PageData } from './$types';
	
	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Home - ConceptualMe</title>
</svelte:head>

<div class="space-y-12">
	<!-- Hero Section -->
	<section class="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-12 text-center">
		<h1 class="text-5xl font-bold mb-4">Welcome to ConceptualMe</h1>
		<p class="text-xl mb-6">A unique blend of blogging and learning - where knowledge meets creativity</p>
		<a href="/posts" class="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
			Explore Posts
		</a>
	</section>

	<!-- Introduction -->
	<section class="prose max-w-none">
		<h2 class="text-3xl font-bold mb-4">Learn. Share. Grow.</h2>
		<p class="text-lg text-gray-700">
			ConceptualMe is not your typical blog or learning platform. It's a space where ideas come to life,
			where learning is an adventure, and where every post is designed to inspire and educate.
			Join us on this journey of continuous learning and discovery.
		</p>
	</section>

	<!-- Recent Posts -->
	<section>
		<h2 class="text-3xl font-bold mb-6">Recent Posts</h2>
		<div class="grid md:grid-cols-3 gap-6">
			{#each data.posts as post}
				<article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
					<img src={post.image} alt={post.title} class="w-full h-48 object-cover" />
					<div class="p-6">
						<h3 class="text-xl font-bold mb-2">{post.title}</h3>
						<p class="text-gray-600 text-sm mb-3">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
						<p class="text-gray-700 mb-4">{post.excerpt}</p>
						<a href="/posts/{post.slug}" class="text-blue-600 hover:underline font-semibold">
							Read More →
						</a>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<!-- Call to Action -->
	<section class="bg-gray-100 rounded-lg p-8 text-center">
		<h2 class="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
		<p class="text-gray-700 mb-6">
			Explore our collection of articles, tutorials, and insights designed to help you grow.
		</p>
		<div class="flex gap-4 justify-center">
			<a href="/posts" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
				View All Posts
			</a>
			<a href="/about" class="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
				Learn More About Us
			</a>
		</div>
	</section>
</div>
