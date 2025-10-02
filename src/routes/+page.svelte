<script lang="ts">
    import type { PageData } from "./$types";
    import PostCard from "$lib/components/PostCard.svelte";
    import Hero from "$lib/sections/Hero.svelte";
    let { data }: { data: PageData } = $props();
</script>
<svelte:head>
    <title>Home - ConceptualMe</title>
</svelte:head>
<div class="space-y-12">
    <Hero textLayout="center"/>
    <div class="px-8 flex flex-col gap-12">
        <section class="prose max-w-none">
            <h2 class="text-3xl font-bold mb-4">Learn. Share. Grow.</h2>
            <p class="text-lg text-gray-700">
                ConceptualMe is not your typical blog or learning platform. It's a space where ideas come to life, where learning is an adventure, and where every post is designed to inspire and
                educate. Join us on this journey of continuous learning and discovery.
            </p>
        </section>
        <section>
            <h2 class="text-3xl font-bold mb-6">Recent Posts</h2>
            <div class="grid md:grid-cols-3 gap-6">
                {#each data.posts as post}
                    <PostCard {post} />
                {/each}
            </div>
        </section>
        <section class="p-8 text-center">
            <h2 class="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
            <p class="text-gray-700 mb-6">Explore our collection of articles, tutorials, and insights designed to help you grow.</p>
            <div class="flex gap-4 justify-center">
                <a href="/posts" class="bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700 transition">View All Posts</a>
                <a href="/about" class="bg-gray-800 text-white px-6 py-3 font-semibold hover:bg-gray-900 transition">Learn More About Us</a>
            </div>
        </section>
    </div>
</div>
