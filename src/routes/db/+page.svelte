<script lang="ts">
    export let data: any;
    let posts = data?.posts ?? [] as any[];
    let loading = false;
    let error: string | null = data?.error ?? null;
</script>

<svelte:head>
    <title>DB Posts (5 latest)</title>
</svelte:head>

<div class="page container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Latest 5 posts from DB</h1>
    {#if loading}
        <p>Loading…</p>
    {:else if error}
        <p class="text-red-600">Error: {error}</p>
    {:else if posts.length === 0}
        <p>No posts returned.</p>
    {:else}
        <ul class="space-y-6">
            {#each posts as post}
                <li class="p-4 border rounded-md">
                    <h2 class="text-xl font-semibold">{post.title}</h2>
                    <p class="text-sm text-gray-600">{post.date} — {post.category}</p>
                    <p class="mt-2">{post.excerpt}</p>
                    {#if post.image}
                        <img src={post.image} alt={post.title} class="mt-3 max-w-full h-auto" />
                    {/if}
                </li>
            {/each}
        </ul>
    {/if}
</div>