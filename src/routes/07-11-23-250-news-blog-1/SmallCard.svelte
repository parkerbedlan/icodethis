<script>

	import Bookmark from "../../lib/icons/Bookmark.svelte";

</script>
<div class="flex items-center h-28 gap-4 px-4 py-3 w-96 bg-white  max-w-[90vw]">
    <img alt="" src="https://placekitten.com/200" class="w-20 h-20" />
    <div class="w-full">
        <div class="flex items-start justify-between gap-4">
            <h1 class="text-xl font-bold line-clamp-2 leading-tight">A Brief History of Creation</h1>
            <button
                class="-mt-0.5 rounded-sm p-1 transition-all hover:bg-gray-100 active:scale-90"
                ><Bookmark class="w-6" /></button
            >
        </div>
        <div>
            <div class="text-sm font-bold">Eugene Franklin</div>
            <div class="text-sm text-gray-500">10:30 PM</div>
        </div>
    </div>
</div>