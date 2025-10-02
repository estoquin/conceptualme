<script>
    import PostCard from "$lib/components/PostCard.svelte";
    export let data;
</script>
<section>
    <h2 class="text-3xl font-bold mb-6">Recent Posts</h2>
    <div class="flex gap-6 overflow-x-auto md:grid md:grid-cols-3 md:gap-6 scrollbar-none" style="scroll-snap-type: x mandatory;">
        {#each data.posts as post}
            <div class="flex-shrink-0 w-80 md:w-auto scroll-snap-align-start">
                <PostCard {post} colorFilter="green"/>
            </div>
        {/each}
    </div>
</section>
<style>
.scrollbar-none::-webkit-scrollbar {
    display: none;
}
.scrollbar-none {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>