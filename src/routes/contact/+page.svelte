<script lang="ts">
    import PageContainer from '$lib/components/PageContainer.svelte';
    let name = $state('');
    let email = $state('');
    let message = $state('');
    let submitted = $state(false);

    function handleSubmit(event: Event) {
        event.preventDefault();
        console.log('Form submitted:', { name, email, message });
        submitted = true;
        setTimeout(() => {
            name = '';
            email = '';
            message = '';
            submitted = false;
        }, 3000);
    }
</script>

<svelte:head>
    <title>Contact - ConceptualMe</title>
</svelte:head>

<PageContainer>
    <section class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">Get in Touch</h1>
        <p class="text-xl text-gray-600">We'd love to hear from you!</p>
    </section>
    <section class="bg-gray-100 shadow-md p-8">
        <h2 class="text-2xl font-bold mb-6">Send us a Message</h2>
        {#if submitted}
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-4">
                <p class="font-semibold">Thank you for your message!</p>
                <p>We'll get back to you soon.</p>
            </div>
        {/if}
        <form onsubmit={handleSubmit} class="space-y-4">
            <div>
                <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    bind:value={name}
                    required
                    class="w-full px-4 py-2 border border-gray-300 -lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                />
            </div>
            <div>
                <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                    type="email"
                    id="email"
                    bind:value={email}
                    required
                    class="w-full px-4 py-2 border border-gray-300 -lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                />
            </div>
            <div>
                <label for="message" class="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                    id="message"
                    bind:value={message}
                    required
                    rows="6"
                    class="w-full px-4 py-2 border border-gray-300 -lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message..."
                ></textarea>
            </div>
            <button type="submit" class="w-full bg-green-600 text-white py-3 font-semibold hover:bg-green-800 transition" style="border-radius:0;">Send Message</button>
        </form>
    </section>
</PageContainer>
