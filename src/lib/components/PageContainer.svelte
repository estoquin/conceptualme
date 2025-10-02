<script lang="ts">
	export let className: string = '';
</script>
<div class={`container mx-auto py-12 px-4 md:px-8 ${className}`}>
	<slot />
</div>