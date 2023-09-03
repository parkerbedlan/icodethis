<script lang="ts">
	import ChevronDown from 'lib/icons/ChevronDown.svelte';

	export let authorName: string;
	export let avatar: string;
	export let body: string;
	export let datePosted: string;
	export let numReplies: number;
</script>

<div class="flex gap-6">
	<div class="w-20 flex-shrink-0 rounded-full bg-[#0b1f3a] p-2">
		<img src={avatar} alt="avatar" class="rounded-full" />
	</div>
	<div>
		<div class="flex items-end gap-2">
			<span class="font-semibold">{authorName}</span>
			<span class="pb-[2px] text-xs text-[#5868b2]">{datePosted}</span>
		</div>
		<span class="text-sm">
			{body}
		</span>
		<button
			class="my-2 block cursor-pointer text-sm text-[#fe9a01] transition-transform hover:underline active:scale-90"
			>Reply</button
		>
		{#if numReplies > 0}
			<button class="-ml-2 flex cursor-pointer rounded-sm p-2 text-sm font-bold hover:bg-[#051221]"
				>View {numReplies} replies <ChevronDown class="ml-1 w-3.5 pt-1" strokeWidth="2" /></button
			>
		{/if}
	</div>
</div>
