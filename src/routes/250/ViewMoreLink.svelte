<script>
	import ChevronDoubleRight from '../../lib/icons/ChevronDoubleRight.svelte';
</script>

<a
	href="#top"
	class="flex w-fit items-center gap-1 text-sm font-bold uppercase text-indigo-500 transition-all hover:underline focus:underline active:scale-90"
	><span><slot /></span> <ChevronDoubleRight class="w-4" /></a
>
