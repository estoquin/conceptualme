<script lang="ts">
	// minimal create form
</script>

<div class="max-w-2xl mx-auto p-6 bg-white border rounded">
	<h2 class="text-xl font-semibold mb-4">Create Post</h2>

	<form method="post" action="/admin/posts" class="space-y-3">
		<input type="hidden" name="createPost" value="1" />
		<div>
			<label for="title" class="block text-sm mb-1">Title</label>
			<input id="title" name="title" class="w-full border rounded px-3 py-2" required />
		</div>
		<div>
			<label for="excerpt" class="block text-sm mb-1">Excerpt</label>
			<input id="excerpt" name="excerpt" class="w-full border rounded px-3 py-2" />
		</div>
		<div>
			<label for="categoryId" class="block text-sm mb-1">Category ID</label>
			<input id="categoryId" name="categoryId" type="number" class="w-full border rounded px-3 py-2" value="1" />
		</div>
		<div class="flex gap-2">
			<button type="submit" class="px-4 py-2 bg-green-600 text-white rounded">Create</button>
			<a href="/admin/posts" class="px-4 py-2 border rounded">Back</a>
		</div>
	</form>
</div>
