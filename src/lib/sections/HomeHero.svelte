<script lang="ts">
    export let showOverlay: boolean = false;
    export let textLayout: "center" | "left" | "right" = "center";
</script>
<section class="relative w-screen min-h-[60vh] h-[60vh] md:h-[80vh] lg:h-screen flex items-center justify-center overflow-hidden" style="margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);">
    <picture>
        <img
            src="/hero.jpg"
            alt="Hero Background"
            class="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-500"
            style="pointer-events:none; min-width:100vw; min-height:100vh;"
        />
    </picture>
    {#if showOverlay}
        <div class="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
    {/if}
    <div
        class="relative z-20 flex flex-col gap-2 px-4 bg-gray-900 py-10 px-4 md:px-16 justify-center"
        class:text-center={textLayout === "center"}
        class:items-center={textLayout === "center"}
        class:text-left={textLayout === "left"}
        class:items-start={textLayout === "left"}
        class:text-right={textLayout === "right"}
        class:items-end={textLayout === "right"}
    >
        <h1 class="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">Welcome to Conceptual me</h1>
        <p class="text-xl md:text-2xl mb-6 text-white drop-shadow">A unique blend of blogging and learning - where knowledge meets creativity</p>
    <a href="/posts" class="inline-block bg-green-600 text-white px-16 py-3 font-bold hover:bg-green-800 transition mb-2" style="border-radius:0;">Explorar</a>
    </div>
</section>