<!-- https://10015.io/tools/css-box-shadow-generator -->

<script>
	import ArrowRight from '../../lib/icons/ArrowRight.svelte';
</script>

<div
	class="flex min-h-screen flex-wrap items-center justify-center gap-14 bg-slate-200 px-4 py-8 text-slate-800"
>
	<div class="flex h-[38rem] w-80 flex-col rounded-lg bg-slate-50 px-8 py-16 text-center shadow-lg">
		<img src="https://i.imgur.com/AVbn7em.png" alt="" class="mb-8 h-44 px-6" />
		<h2 class="mx-auto w-40 pb-4 text-lg font-bold">Connect Multiple Accounts</h2>
		<p class="mx-auto w-52 text-sm">
			Stay connected to any platform you are used to. Starting from Twitter, Instagram, Slack, or
			whatever.
		</p>
		<button
			class="group mx-auto mt-auto flex h-10 w-full items-center justify-between rounded-br-lg text-base duration-75 active:scale-95"
		>
			<div
				class="flex h-full w-full items-center px-4 text-left text-slate-400 group-hover:bg-slate-100"
			>
				Skip
			</div>
			<div
				class="flex h-full items-center justify-center rounded-br-lg bg-orange-400 px-2 text-white shadow-[8px_8px_0_0_rgba(251,146,60,0.2)] group-hover:bg-orange-500"
			>
				<ArrowRight />
			</div>
		</button>
	</div>
	<div class="flex h-[38rem] w-80 flex-col rounded-lg bg-slate-50 px-8 py-16 text-center shadow-lg">
		<img src="https://i.imgur.com/vGtXZOH.png" alt="" class="mb-8 h-44 px-6" />
		<h2 class="mx-auto w-40 pb-4 text-lg font-bold">Start messaging system</h2>
		<p class="mx-auto w-52 text-sm">
			View your messages without leaving the video you currently watched.
		</p>
		<button
			class="group mx-auto mt-auto flex h-10 w-full items-center justify-between rounded-br-lg text-base duration-75 active:scale-95"
		>
			<div
				class="flex h-full w-full items-center px-4 text-left text-slate-400 group-hover:bg-slate-100"
			>
				Skip
			</div>
			<div
				class="flex h-full items-center justify-center rounded-br-lg bg-orange-400 px-2 text-white shadow-[8px_8px_0_0_rgba(251,146,60,0.2)] group-hover:bg-orange-500"
			>
				<ArrowRight />
			</div>
		</button>
	</div>
	<div class="flex h-[38rem] w-80 flex-col rounded-lg bg-slate-50 px-8 py-16 text-center shadow-lg">
		<img src="https://i.imgur.com/t2FdQ9w.png" alt="" class="mb-8 h-44 px-6" />
		<h2 class="mx-auto w-40 pb-4 text-lg font-bold">Instant data analysis</h2>
		<p class="mx-auto w-52 text-sm">
			View and analyze all your activities grouped systematically for you to get conclusions.
		</p>
		<button
			class="mx-auto mt-auto flex h-10 w-fit items-center gap-2 rounded-br-lg bg-orange-400 px-4 text-base font-semibold text-white shadow-[8px_8px_0_0_rgba(251,146,60,0.2)] duration-75 hover:bg-orange-500 active:scale-95"
			>Get Started
			<ArrowRight />
		</button>
	</div>
</div>
