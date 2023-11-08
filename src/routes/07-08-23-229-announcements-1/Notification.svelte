<script lang="ts">
	import EllipsisHorizontal from '../../lib/icons/EllipsisHorizontal.svelte';

	export let message: string;
	export let name: string;
	export let profilePicUrl: string;
	export let postedAt: Date;

	$: hoursAgo = Math.floor(((new Date() as any) - (new Date(postedAt) as any)) / 1000 / 60 / 60);
</script>

<div class="grid h-24 w-full grid-cols-12 grid-rows-2 rounded-md bg-[#202b47] px-4 py-3">
	<p class="col-span-10 text-xs text-gray-200">
		{message}
	</p>
	<button
		class="col-span-2 -mr-2 -mt-2 ml-auto grid h-8 w-8 place-items-center hover:bg-slate-900 active:shadow-[inset_0_0_10px_0_rgb(255,255,255,0.15)]"
	>
		<EllipsisHorizontal class="h-7 w-7 text-gray-500" />
	</button>
	<div class="col-span-6 mt-auto flex items-center gap-2">
		<img src={profilePicUrl} alt="profile" class="h-7 w-7 rounded-full border-2 border-[#7a95e7]" />
		<p class="text-xs font-bold text-[#8a94b9]">{name}</p>
	</div>
	<p class="col-span-6 ml-auto mt-auto text-xs text-[#8a94b9]">
		{hoursAgo} hours ago
	</p>
</div>
