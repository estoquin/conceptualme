<script lang="ts">
    import EntityLayout from '$lib/components/admin/EntityLayout.svelte';
	export let data;
	const categories = data.categories as any[];

	let editingId: number | null = null;
	let newName = '';
	let newSlug = '';

	// edit buffers
	let editId: number | null = null;
	let editName = '';
	let editSlug = '';

	function startEditing(cat: any) {
		editingId = cat.id;
		editId = cat.id;
		editName = cat.name ?? '';
		editSlug = cat.slug ?? '';
	}

	function cancelEditing() {
		editingId = null;
		editId = null;
	}

	async function submitUpdate() {
		if (editId === null) return;
		const fd = new FormData();
		fd.set('updateCategory', '1');
		fd.set('categoryId', String(editId));
		fd.set('name', editName);
		fd.set('slug', editSlug ?? '');

		const res = await fetch('', { method: 'POST', body: fd });
		if (res.redirected) {
			window.location.href = res.url;
		} else {
			location.reload();
		}
	}

	async function submitDelete(id: number) {
		const fd = new FormData();
		fd.set('deleteCategory', String(id));
		const res = await fetch('', { method: 'POST', body: fd });
		if (res.redirected) {
			window.location.href = res.url;
		} else {
			location.reload();
		}
	}
</script>

<EntityLayout>
    <h1 class="text-2xl font-bold mb-4">Categories</h1>
    <table class="w-full border-collapse border border-gray-300">
    	<thead>
    		<tr>
    			<th class="text-left border px-3 py-1 bg-gray-50">ID</th>
    			<th class="text-left border px-3 py-1 bg-gray-50">Name</th>
    			<th class="text-left border px-3 py-1 bg-gray-50">Slug</th>
    			<th class="text-left border px-3 py-1 bg-gray-50">Actions</th>
    		</tr>
    	</thead>
    	<tbody>
    		{#each categories as cat}
    			<tr>
    				<td class="border px-3 py-1">{cat.id}</td>
    				<td class="border px-3 py-1">
    					{#if editingId === cat.id}
    						<input class="w-full" value={editName} on:input={(e) => (editName = (e.target as HTMLInputElement).value)} />
    					{:else}
    						{cat.name}
    					{/if}
    				</td>
    				<td class="border px-3 py-1">
    					{#if editingId === cat.id}
    						<input class="w-full" value={editSlug} on:input={(e) => (editSlug = (e.target as HTMLInputElement).value)} />
    					{:else}
    						{cat.slug}
    					{/if}
    				</td>
    				<td class="border px-3 py-1">
    					{#if editingId === cat.id}
    						<button class="mr-2" type="button" on:click={submitUpdate}>Save</button>
    						<button type="button" on:click={cancelEditing}>Cancel</button>
    					{:else}
    						<button class="mr-2" type="button" on:click={() => startEditing(cat)}>Edit</button>
    						<button type="button" on:click={() => submitDelete(cat.id)}>Delete</button>
    					{/if}
    				</td>
    			</tr>
    		{/each}
    	</tbody>
    </table>
</EntityLayout>