<div class="max-w-lg mx-auto p-6 bg-white border rounded">
	<h2 class="text-xl font-semibold mb-4">Create Comment</h2>

	<form method="post" action="/admin/comments" class="space-y-3">
		<input type="hidden" name="createComment" value="1" />
		<div>
			<label for="postId" class="block text-sm mb-1">Post ID</label>
			<input id="postId" name="postId" type="number" class="w-full border rounded px-3 py-2" required />
		</div>

		<div>
			<label for="author" class="block text-sm mb-1">Author</label>
			<input id="author" name="author" class="w-full border rounded px-3 py-2" />
		</div>

		<div>
			<label for="email" class="block text-sm mb-1">Email</label>
			<input id="email" name="email" type="email" class="w-full border rounded px-3 py-2" />
		</div>

		<div>
			<label for="content" class="block text-sm mb-1">Content</label>
			<textarea id="content" name="content" class="w-full border rounded px-3 py-2 h-28" required></textarea>
		</div>

		<div class="flex gap-2">
			<button type="submit" class="px-4 py-2 bg-green-600 text-white rounded">Create</button>
			<a href="/admin/comments" class="px-4 py-2 border rounded">Back</a>
		</div>
	</form>
</div>
