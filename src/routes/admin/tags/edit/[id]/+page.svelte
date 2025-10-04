<script lang="ts">
	import { page } from '$app/stores';
	let pageData: any;
	page.subscribe(p => pageData = p);
	const id = Number(pageData.params.id || 0);
</script>
<div class="max-w-md mx-auto p-6 bg-white border rounded">
	<h2 class="text-xl font-semibold mb-4">Edit Tag #{id}</h2>
	<form method="post" action="/admin/tags" class="space-y-3">
		<input type="hidden" name="updateTag" value="1" />
		<input type="hidden" name="tagId" value={id} />
		<div>
			<label for="name" class="block text-sm mb-1">Name</label>
			<input id="name" name="name" class="w-full border rounded px-3 py-2" />
		</div>
		<div>
			<label for="slug" class="block text-sm mb-1">Slug</label>
			<input id="slug" name="slug" class="w-full border rounded px-3 py-2" />
		</div>
		<div class="flex gap-2">
			<button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
			<a href="/admin/tags" class="px-4 py-2 border rounded">Back</a>
		</div>
	</form>
</div>
