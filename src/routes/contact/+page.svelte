<script lang="ts">
	let name = $state('');
	let email = $state('');
	let message = $state('');
	let submitted = $state(false);

	function handleSubmit(event: Event) {
		event.preventDefault();
		// In a real application, you would send this data to a server
		console.log('Form submitted:', { name, email, message });
		submitted = true;
		
		// Reset form after 3 seconds
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

<div class="max-w-4xl mx-auto">
	<section class="text-center mb-12">
		<h1 class="text-4xl font-bold mb-4">Get in Touch</h1>
		<p class="text-xl text-gray-600">We'd love to hear from you!</p>
	</section>

	<div class="grid md:grid-cols-2 gap-8">
		<!-- Contact Form -->
		<section class="bg-white rounded-lg shadow-md p-8">
			<h2 class="text-2xl font-bold mb-6">Send us a Message</h2>
			
			{#if submitted}
				<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
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
						class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
						class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
						class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Your message..."
					></textarea>
				</div>

				<button
					type="submit"
					class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
				>
					Send Message
				</button>
			</form>
		</section>

		<!-- Contact Information -->
		<section class="space-y-6">
			<div class="bg-white rounded-lg shadow-md p-8">
				<h2 class="text-2xl font-bold mb-6">Contact Information</h2>
				
				<div class="space-y-4">
					<div class="flex items-start">
						<div class="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Email</h3>
							<p class="text-gray-600">hello@conceptualme.com</p>
						</div>
					</div>

					<div class="flex items-start">
						<div class="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Location</h3>
							<p class="text-gray-600">Online - Anywhere in the World</p>
						</div>
					</div>

					<div class="flex items-start">
						<div class="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Response Time</h3>
							<p class="text-gray-600">Within 24-48 hours</p>
						</div>
					</div>
				</div>
			</div>

			<div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
				<h3 class="text-xl font-bold mb-3">Follow Us</h3>
				<p class="mb-4">Stay connected and never miss an update!</p>
				<div class="flex gap-4">
					<a href="https://twitter.com" aria-label="Follow us on Twitter" class="bg-white text-blue-600 p-2 rounded-lg hover:bg-gray-100 transition">
						<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
						</svg>
					</a>
					<a href="https://github.com" aria-label="Follow us on GitHub" class="bg-white text-blue-600 p-2 rounded-lg hover:bg-gray-100 transition">
						<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	</div>
</div>
