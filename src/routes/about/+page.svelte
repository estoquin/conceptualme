<svelte:head>
	<title>About - ConceptualMe</title>
</svelte:head>

<script lang="ts">
	import PageContainer from '$lib/components/PageContainer.svelte';
</script>
<PageContainer>
<div class="max-w-4xl mx-auto space-y-8">
	<section class="text-center">
		<h1 class="text-4xl font-bold mb-4">About Conceptual me</h1>
		<p class="text-xl text-gray-600">Where Learning Meets Inspiration</p>
	</section>

	<section class="bg-white shadow-md p-8" style="border-radius:0;">
	<img src="https://picsum.photos/seed/about/1200/400" alt="About Us" class="w-full h-64 object-cover mb-6" style="border-radius:0;" />
		
		<div class="space-y-6 text-gray-700">
			<p class="text-lg">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</p>

			<h2 class="text-2xl font-bold text-gray-900 mt-8">Our Mission</h2>
			<p>
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>

			<h2 class="text-2xl font-bold text-gray-900 mt-8">What We Offer</h2>
			<ul class="list-disc list-inside space-y-2">
				<li>Comprehensive tutorials on web development and programming</li>
				<li>In-depth articles exploring modern technologies and frameworks</li>
				<li>Practical examples and hands-on learning experiences</li>
				<li>A community-driven approach to knowledge sharing</li>
			</ul>

			<h2 class="text-2xl font-bold text-gray-900 mt-8">Our Philosophy</h2>
			<p>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
				eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
				Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
			</p>

			<div class="bg-green-50 border-l-4 border-green-600 p-6 mt-8" style="border-radius:0;">
				<p class="text-lg italic">
					"Learning is not about memorizing facts, it's about understanding concepts and applying them creatively."
				</p>
			</div>

			<h2 class="text-2xl font-bold text-gray-900 mt-8">Join Our Journey</h2>
			<p>
				At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
				quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia 
				deserunt mollitia animi, id est laborum et dolorum fuga.
			</p>
		</div>
	</section>

	<section class="text-center bg-gradient-to-r from-green-600 to-green-400 text-white p-8" style="border-radius:0;">
		<h2 class="text-2xl font-bold mb-4">Ready to Learn?</h2>
		<p class="mb-6">Check out our latest posts and start your learning journey today.</p>
	<a href="/posts" class="inline-block bg-white text-green-600 px-6 py-3 font-semibold hover:bg-green-50 transition" style="border-radius:0;">
			View All Posts
		</a>
	</section>
</div>
</PageContainer>
