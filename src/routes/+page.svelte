<script lang="ts">
	const modules = import.meta.glob('./**/+page.svelte');

	$: links = !modules
		? ['Loading...']
		: Object.keys(modules).map((link) => link.replace(/^./, '').replace(/\/\+page.svelte$/, ''));
</script>

<div class="flex flex-col-reverse gap-2 px-4 py-8">
	{#each links as link}
		<a href={link} class="link w-fit">{link}</a>
	{/each}
</div>
