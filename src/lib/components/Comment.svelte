<script context="module" lang="ts">
	export type Comment = {
		id?: number;
		postId?: number;
		author?: string | null;
		email?: string | null;
		content: string;
		createdAt: string;
	};
</script>

<script lang="ts">
	export let comment: Comment;
</script>

<li class="border p-3">
	<div class="flex items-baseline justify-between mb-2">
		<div class="text-sm font-semibold text-gray-800">{comment.author ?? 'Anonymous'}</div>
		<time class="text-xs text-gray-500">{new Date(comment.createdAt).toLocaleString()}</time>
	</div>
	<div class="text-gray-700">{comment.content}</div>
</li>
