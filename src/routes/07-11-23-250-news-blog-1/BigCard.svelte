<script>

	import Bookmark from "../../lib/icons/Bookmark.svelte";
	import ViewMoreLink from "./ViewMoreLink.svelte";

</script>
<div class="relative flex h-96 w-80 flex-col gap-4 bg-white px-5 py-6">
    <hr class="absolute inset-0 h-1 bg-gradient-to-r from-blue-500 to-fuchsia-400" />
    <div class="flex items-start justify-between gap-4">
        <h1 class="text-xl font-bold">Always Look On The Bright Side Of Life</h1>
        <button class="-mt-0.5 rounded-sm p-1 transition-all hover:bg-gray-100 active:scale-90"
            ><Bookmark class="w-6" /></button
        >
    </div>
    <div>
        <div class="text-sm font-bold">Daniel A. Schmaltz</div>
        <div class="text-sm text-gray-500">2 hours ago</div>
    </div>
    <div>
        <p class="mb-4 leading-relaxed">
            I was always somebody who felt quite sorry for myself, what I had not got compared to
            my friends, how much of a struggle my life seemed to be compared to others. I was
            caught up in a web of negativity and needed...
        </p>
        <ViewMoreLink>Read More</ViewMoreLink>
    </div>
</div>