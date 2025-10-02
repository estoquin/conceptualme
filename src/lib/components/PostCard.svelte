<script context="module" lang="ts">
	export interface Post {
		image: string;
		title: string;
		date: string;
		excerpt: string;
		slug: string;
	}
</script>
<script lang="ts">
	export let post: Post;
	export let headingLevel: 'h2' | 'h3' = 'h3';
	export let listMode: boolean = false;
</script>
<article class={listMode ? "flex bg-white shadow-md overflow-hidden hover:shadow-xl transition items-center gap-8 md:gap-12" : "bg-white  shadow-md overflow-hidden hover:shadow-xl transition"}>
	<img src={post.image} alt={post.title} class={listMode ? "w-32 h-32 md:w-48 md:h-48 object-cover flex-shrink-0" : "w-full h-48 object-cover"} />
	<div class={listMode ? "flex-1 py-6 pr-6 flex flex-col justify-center min-w-0" : "p-6"}>
		{#if headingLevel === 'h2'}
			<h2 class="text-2xl font-bold mb-2 text-gray-900 truncate">{post.title}</h2>
		{:else}
			<h3 class="text-xl font-bold mb-2 truncate">{post.title}</h3>
		{/if}
		<p class="text-gray-600 text-sm mb-2">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
		<p class="text-gray-700 mb-3 truncate">{post.excerpt}</p>
		<slot>
			<a href="/posts/{post.slug}" class="text-blue-600 hover:underline font-semibold">
				Read More →
			</a>
		</slot>
	</div>
</article>
