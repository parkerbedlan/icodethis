<script lang="ts">
	import ArrowLeft from '../../lib/icons/ArrowLeft.svelte';
	import Button from './Button.svelte';

	const stages = ['drop', 'invalid', 'valid', 'translating', 'success'] as const;
	type Stage = (typeof stages)[number];

	let stage: Stage = 'drop';
</script>

<!-- https://i.imgur.com/pj4ivFk.png -->
<div
	class="relative grid min-h-screen place-items-center bg-slate-800 text-center font-sans text-gray-500"
>
	<button
		class="absolute left-0 top-0 rounded-sm px-5 py-3 text-slate-500 transition-transform duration-75 hover:bg-slate-900 active:scale-90"
		><ArrowLeft /></button
	>
	{#if stage === 'drop'}
		<div
			class="tex flex h-5/6 w-5/6 max-w-3xl flex-col items-center justify-center gap-8 border-4 border-dashed border-slate-900"
		>
			<p>Drag and Drop your <strong>.json</strong> file</p>
			<p class="font-bold">OR</p>
			<Button>Select files to Upload</Button>
		</div>
	{/if}
</div>
