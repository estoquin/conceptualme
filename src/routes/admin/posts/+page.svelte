<script lang="ts">
    import EntityLayout from '$lib/components/admin/EntityLayout.svelte';
	export let data;
	const posts = data.posts as any[];
	const categories = data.categories as any[];

	let editingId: number | null = null;
	let newTitle = '';
	let newExcerpt = '';
	let newCategoryId = categories.length ? categories[0].id : 1;

	// edit buffer
	let editId: number | null = null;
	let editTitle = '';
	let editExcerpt = '';
	let editCategoryId = 1;

	let updateForm: HTMLFormElement | null = null;
	let deleteForm: HTMLFormElement | null = null;
	let deleteId: number | null = null;

	function startEditing(post: any) {
		editingId = post.id;
		editId = post.id;
		editTitle = post.title ?? '';
		editExcerpt = post.excerpt ?? '';
		editCategoryId = post.categoryId ?? (categories.length ? categories[0].id : 1);
	}

	function cancelEditing() {
		editingId = null;
		editId = null;
	}

	function submitUpdate() {
		if (!updateForm) return;
		// ensure hidden inputs are up-to-date (they are bound)
		updateForm.requestSubmit();
	}

	function submitDelete(id: number) {
		deleteId = id;
		if (!deleteForm) return;
		deleteForm.requestSubmit();
	}
</script>

<EntityLayout>
    <h1 class="text-2xl font-bold mb-4">Posts</h1>
    <table class="w-full border-collapse border border-gray-300">
    	<thead>
    		<tr>
    			<th class="text-left border px-3 py-1 bg-gray-50">ID</th>
    			<th class="text-left border px-3 py-1 bg-gray-50">Title</th>
    			<th class="text-left border px-3 py-1 bg-gray-50">Excerpt</th>
    			<th class="text-left border px-3 py-1 bg-gray-50">Category</th>
    			<th class="text-left border px-3 py-1 bg-gray-50">Actions</th>
    		</tr>
    	</thead>
    	<tbody>
    		{#each posts as post}
    			<tr>
    				<td class="border px-3 py-1">{post.id}</td>
    				<td class="border px-3 py-1">
    					{#if editingId === post.id}
    						<input class="w-full" value={editTitle} on:input={(e) => (editTitle = (e.target as HTMLInputElement).value)} />
    					{:else}
    						{post.title}
    					{/if}
    				</td>
    				<td class="border px-3 py-1">
    					{#if editingId === post.id}
    						<input class="w-full" value={editExcerpt} on:input={(e) => (editExcerpt = (e.target as HTMLInputElement).value)} />
    					{:else}
    						{post.excerpt}
    					{/if}
    				</td>
    				<td class="border px-3 py-1">
    					{#if editingId === post.id}
    						<select class="w-full" bind:value={editCategoryId}>
    							{#each categories as c}
    								<option value={c.id}>{c.name}</option>
    							{/each}
    						</select>
    					{:else}
    						{#each categories as c}
    							{#if c.id === post.categoryId}{c.name}{/if}
    						{/each}
    					{/if}
    				</td>
    				<td class="border px-3 py-1">
    					{#if editingId === post.id}
    						<button class="mr-2" type="button" on:click={submitUpdate}>Save</button>
    						<button type="button" on:click={cancelEditing}>Cancel</button>
    					{:else}
    						<button class="mr-2" type="button" on:click={() => startEditing(post)}>Edit</button>
    						<button type="button" on:click={() => submitDelete(post.id)}>Delete</button>
    					{/if}
    				</td>
    			</tr>
    		{/each}
    	</tbody>
    </table>
</EntityLayout>