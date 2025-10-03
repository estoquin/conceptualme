<script lang="ts">
	let { children } = $props();
	const items = [
		{ href: '/admin/posts', label: 'Posts' },
		{ href: '/admin/categories', label: 'Categories' }
	];
</script>
<div class="min-h-screen flex">
	<nav class="w-48 border-r">
		<ul>
			{#each items as item}
				<li>
                    <a href={item.href} class="block p-2 text-sm border border-gray-200 hover:bg-gray-200">{item.label}</a>
                </li>
			{/each}
		</ul>
	</nav>
	<main class="flex-1">
		{@render children?.()}
	</main>
</div>