<script lang="ts">
	import ChatBubbleOvalLeft from 'lib/icons/ChatBubbleOvalLeft.svelte';
	import Plus from 'lib/icons/Plus.svelte';

	export let last = false;
	export let name: string;
	export let job: string;
	export let accentColor: string = '#cf93f7';
	export let avatar: string;
</script>

<div class="flex gap-4 border-gray-600 py-4" class:border-b={!last}>
	<div class="relative z-0 aspect-square w-[100px] flex-shrink-0">
		<img src={avatar} alt="avatar" class="absolute inset-0 z-0 rounded-r-3xl rounded-bl-3xl" />
		<div
			class="absolute -left-1 -top-1 z-10 grid aspect-square w-3 place-items-center rounded-full bg-[#26282a]"
		>
			<div class="aspect-square w-1.5 rounded-full" style:background-color={accentColor} />
		</div>
	</div>
	<div class="flex flex-col">
		<div class="text-lg font-semibold">{name}</div>
		<div class="text-sm text-gray-500">{job}</div>
		<div class="mt-2 flex gap-1 text-xs">
			<button
				class="flex w-24 items-center justify-end rounded-l-full border border-[#f6705c] py-2 pr-4 text-white duration-75 hover:bg-gray-700 active:scale-95"
			>
				<ChatBubbleOvalLeft class="w-4" />
				<div>Message</div></button
			>
			<button
				class="flex w-24 items-center justify-start rounded-r-full border border-[hsl(8,90%,66%)] bg-[hsl(8,90%,66%)] py-2 pl-4 text-[#26282a] duration-75 hover:bg-[hsl(8,90%,50%)] active:scale-95"
			>
				<Plus class="w-4" />
				<div>Follow</div></button
			>
		</div>
	</div>
</div>
