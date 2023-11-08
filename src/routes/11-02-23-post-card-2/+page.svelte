<script>
	import ChatBubbleOvalLeft from '../../lib/icons/ChatBubbleOvalLeft.svelte';
	import Heart from '../../lib/icons/Heart.svelte';
	import Share from '../../lib/icons/Share.svelte';
</script>

<div class="grid min-h-screen place-items-center bg-zinc-400 px-4 py-8">
	<div
		class="flex h-auto max-w-[24rem] flex-col gap-3 bg-slate-700 px-7 py-6 text-white shadow-lg shadow-slate-600"
	>
		<img src="https://placekitten.com/800" alt="" class="aspect-[4/3] object-cover object-center" />
		<div>
			<h1 class="text-lg font-bold uppercase">3 Myths Everyone Gets Wrong About Yoga</h1>
			<div class="flex items-center justify-between">
				<div class="text-slate-400">By Adrienne Brien</div>
				<div class="scale-90 rounded-full bg-slate-800 px-2 py-1 text-center">16 April 2017</div>
			</div>
		</div>
		<p class="pb-6 leading-snug">
			As an avid yoga lover and teacher, I get really bummed out when people say they don't like
			yoga or that they don't want to try it. Of course everyone is entitled to their own opinion,
			but usually they feel this way because of what they've heard or because they had a bad
			experience.
		</p>
		<div
			class="-mx-7 -mb-6 mt-auto flex h-20 flex-wrap items-center justify-between bg-slate-600 px-6 text-sm"
		>
			<div class="flex items-center">
				<button
					class="flex items-center gap-1 rounded-full px-2 py-1 duration-75 hover:bg-slate-700 active:scale-95"
				>
					<Heart isFilled class="w-6 text-red-500" />
					<div class="mb-[2px]">75 Likes</div>
				</button>
				<button
					class="flex items-center gap-1 rounded-full px-2 py-1 duration-75 hover:bg-slate-700 active:scale-95"
				>
					<ChatBubbleOvalLeft isFilled class="w-6 text-slate-300" />
					<div class="mb-[2px]">31 Comments</div>
				</button>
			</div>
			<button
				class="flex items-center gap-1 rounded-full px-2 py-1 duration-75 hover:bg-slate-700 active:scale-95"
			>
				<Share isFilled class="w-6 text-slate-300" />
				<div class="mb-[2px] text-slate-300">SHARE</div>
			</button>
		</div>
	</div>
</div>
