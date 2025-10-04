<script lang="ts">
	import { page } from '$app/stores';
	let pageData: any;
	page.subscribe(p => pageData = p);
	const id = Number(pageData.params.id || 0);
</script>

<div class="max-w-2xl mx-auto p-6 bg-white border rounded">
	<h2 class="text-xl font-semibold mb-4">Edit Post #{id}</h2>

	<form method="post" action="/admin/posts" class="space-y-3">
		<input type="hidden" name="updatePost" value="1" />
		<div>
			<label for="postId" class="block text-sm mb-1">Post ID</label>
			<input id="postId" name="postId" class="w-full border rounded px-3 py-2" value={id} readonly />
		</div>
		<div>
			<label for="title" class="block text-sm mb-1">Title</label>
			<input id="title" name="title" class="w-full border rounded px-3 py-2" />
		</div>
		<div>
			<label for="excerpt" class="block text-sm mb-1">Excerpt</label>
			<input id="excerpt" name="excerpt" class="w-full border rounded px-3 py-2" />
		</div>
		<div>
			<label for="categoryId" class="block text-sm mb-1">Category ID</label>
			<input id="categoryId" name="categoryId" type="number" class="w-full border rounded px-3 py-2" />
		</div>
		<div class="flex gap-2">
			<button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
			<a href="/admin/posts" class="px-4 py-2 border rounded">Back</a>
		</div>
	</form>
</div>
