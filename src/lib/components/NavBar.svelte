<script lang="ts">
    export let navLinks: { href: string; label: string }[] = [];
</script>

<nav class="bg-gray-900 text-white shadow-lg">
    <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
            <a href="/" class="text-2xl font-bold">Conceptual me</a>
            <div class="flex gap-6">
                {#each navLinks as link}
                    <a href={link.href} class="hover:text-blue-400 font-semibold transition">{link.label}</a>
                {/each}
            </div>
        </div>
    </div>
</nav>
