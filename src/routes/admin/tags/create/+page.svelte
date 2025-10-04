<div class="max-w-md mx-auto p-6 bg-white border rounded">
	<h2 class="text-xl font-semibold mb-4">Create Tag</h2>
	<form method="post" action="/admin/tags" class="space-y-3">
		<input type="hidden" name="createTag" value="1" />
		<div>
			<label for="name" class="block text-sm mb-1">Name</label>
			<input id="name" name="name" class="w-full border rounded px-3 py-2" required />
		</div>
		<div>
			<label for="slug" class="block text-sm mb-1">Slug</label>
			<input id="slug" name="slug" class="w-full border rounded px-3 py-2" />
		</div>
		<div class="flex gap-2">
			<button type="submit" class="px-4 py-2 bg-green-600 text-white rounded">Create</button>
			<a href="/admin/tags" class="px-4 py-2 border rounded">Back</a>
		</div>
	</form>
</div>
