<script lang="ts">
    import { fade, slide } from 'svelte/transition';
    export let navLinks: { href: string; label: string }[] = [];
    let menuOpen = false;

    // add an admin link unless already present
    const adminLink = { href: '/admin', label: 'Admin' };
    $: menuLinks = navLinks.some(l => l.href === adminLink.href) ? navLinks : [...navLinks, adminLink];
</script>

<nav class="bg-gray-900 text-white shadow-lg">
    <div class="container mx-auto px-4 py-4">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">
            <div class="flex items-center justify-between w-full md:w-auto">
                <a href="/" class="text-2xl font-bold w-full text-center md:text-left mb-2 md:mb-0">Conceptual me</a>
                <button class="md:hidden ml-2 p-2 focus:outline-none" aria-label="Toggle menu" onclick={() => menuOpen = !menuOpen}>
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            {#if menuOpen}
                <div class="md:hidden">
                    <div class="fixed inset-0 z-40 bg-black bg-opacity-60" onclick={() => menuOpen = false} transition:fade></div>
                    <nav class="fixed top-0 left-0 right-0 z-50 bg-gray-900 flex flex-col gap-4 items-center py-8 shadow-lg" transition:slide={{ duration: 250 }}>
                        {#each menuLinks as link}
                            <a href={link.href} class="hover:text-green-400 font-semibold text-xl transition" onclick={() => menuOpen = false}>{link.label}</a>
                        {/each}
                    </nav>
                </div>
            {/if}
            <div class="hidden md:flex flex-row gap-6 items-center w-auto">
                {#each menuLinks as link}
                    <a href={link.href} class="hover:text-green-400 font-semibold transition">{link.label}</a>
                {/each}
            </div>
        </div>
    </div>
</nav>
