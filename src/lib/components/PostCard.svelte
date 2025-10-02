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
	export let colorFilter: 'blue' | 'red' | 'green' | 'orange' | 'purple' | 'none' = 'none';
</script>
<article class={listMode ? "flex bg-white shadow-md overflow-hidden hover:shadow-xl transition items-center gap-8 md:gap-12 group" : "bg-white shadow-md overflow-hidden hover:shadow-xl transition group"}>
   <div class={listMode ? "relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0 overflow-hidden" : "relative w-full h-48 overflow-hidden"}>
	   <img src={post.image} alt={post.title} class={listMode ? "w-full h-full object-cover" : "w-full h-full object-cover"} style="border-radius:0;" />
	   {#if colorFilter !== 'none'}
		   <div class="absolute inset-0 opacity-60 pointer-events-none" style="border-radius:0;"
			   class:bg-blue-600={colorFilter === 'blue'}
			   class:bg-red-600={colorFilter === 'red'}
			   class:bg-green-600={colorFilter === 'green'}
			   class:bg-orange-500={colorFilter === 'orange'}
			   class:bg-purple-600={colorFilter === 'purple'}>
		   </div>
	   {/if}
   </div>
	<div class={listMode ? "flex-1 py-6 pr-6 flex flex-col justify-center min-w-0" : "p-6"} style="border-radius:0;">
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
