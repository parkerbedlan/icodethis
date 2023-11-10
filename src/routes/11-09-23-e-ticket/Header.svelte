<script>
	import PaperAirplane from '../../lib/icons/PaperAirplane.svelte';
</script>

<div class="flex items-center justify-center">
	<div class="flex basis-2/5 flex-col items-center">
		<div class=" text-5xl font-bold text-teal-400">BUD</div>
		<div class="">Budapest</div>
	</div>
	<div class="relative z-0 mb-5 ml-2 flex flex-auto justify-center">
		<PaperAirplane class="w-7 border border-white bg-white" />
		<div class="absolute -inset-96 -z-10 mx-auto my-auto h-0.5 w-[125%] bg-slate-400" />
	</div>
	<div class="flex basis-2/5 flex-col items-center">
		<div class="text-5xl font-bold text-teal-400">HEL</div>
		<div class="">Helsinki</div>
	</div>
</div>
