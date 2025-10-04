<script lang="ts">
    import { goto } from '$app/navigation';
    import EntityLayout from '$lib/components/admin/EntityLayout.svelte';
    export let data;
    const tags = data.tags as any[] ?? [];
</script>

<EntityLayout>
    <div class="flex gap-4 items-center mb-4 border-b border-gray-300 pb-2 justify-between">
        <h1 class="text-2xl font-bold">Tags</h1>
        <button class="hover:bg-green-500 py-0 px-10 bg-green-700 text-white" type="button" on:click={() => goto('/admin/tags/create')}>Crear</button>
    </div>
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
            {#if tags.length === 0}
                <tr>
                    <td class="border px-3 py-2" colspan="4">No tags found.</td>
                </tr>
            {:else}
                {#each tags as tag}
                    <tr>
                        <td class="border px-3 py-1">{tag.id}</td>
                        <td class="border px-3 py-1">{tag.name}</td>
                        <td class="border px-3 py-1">{tag.slug}</td>
                        <td class="border px-3 py-1 flex gap-2">
                            <a class="px-2 py-1 border rounded" href={`/admin/tags/edit/${tag.id}`}>Edit</a>
                            <a class="px-2 py-1 border rounded text-red-600" href={`/admin/tags/delete/${tag.id}`}>Delete</a>
                        </td>
                    </tr>
                {/each}
            {/if}
        </tbody>
    </table>
</EntityLayout>