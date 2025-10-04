<script lang="ts">
	import { page } from '$app/stores';
	let pageData: any;
	page.subscribe(p => pageData = p);
	const id = Number(pageData.params.id || 0);
</script>
<div class="max-w-md mx-auto p-6 bg-white border rounded">
	<h2 class="text-xl font-semibold mb-4">Edit Category #{id}</h2>
	<form method="post" action="/admin/categories" class="space-y-3">
		<input type="hidden" name="updateCategory" value="1" />
		<input type="hidden" name="categoryId" value={id} />
		<div>
			<label for="category-name" class="block text-sm mb-1">Name</label>
			<input id="category-name" name="name" class="w-full border rounded px-3 py-2" />
		</div>
		<div>
			<label for="category-slug" class="block text-sm mb-1">Slug</label>
			<input id="category-slug" name="slug" class="w-full border rounded px-3 py-2" />
		</div>
		<div class="flex gap-2">
			<button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
			<a href="/admin/categories" class="px-4 py-2 border rounded">Back</a>
		</div>
	</form>
</div>
