<script lang="ts">
    import { goto } from '$app/navigation';
    import EntityLayout from '$lib/components/admin/EntityLayout.svelte';
	export let data;
	const posts = data.posts as any[];
	const categories = data.categories as any[];
</script>

<EntityLayout>
    <div class="flex gap-4 items-center mb-4 border-b border-gray-300 pb-2 justify-between">
        <h1 class="text-2xl font-bold">Posts</h1>
        <button class="hover:bg-green-500 py-0 px-10 bg-green-700 text-white" type="button" on:click={() => goto('/admin/posts/create')}>Crear</button>
    </div>
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
    				<td class="border px-3 py-1">{post.title}</td>
    				<td class="border px-3 py-1">{post.excerpt}</td>
    				<td class="border px-3 py-1">
    					{#each categories as c}
    						{#if c.id === post.categoryId}{c.name}{/if}
    					{/each}
    				</td>
    				<td class="border flex">
                        <button class="py-0 w-full hover:bg-orange-500 bg-orange-300 text-white" type="button" on:click={() => alert('Editando')}>Edit</button>
                        <button class="py-0 w-full hover:bg-red-500 bg-red-300 text-white" type="button" on:click={() => alert('Eliminando')}>Delete</button>
                    </td>
    			</tr>
    		{/each}
    	</tbody>
    </table>
</EntityLayout>