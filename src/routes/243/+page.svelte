<!-- https://i.imgur.com/3rL6bKU.png -->

<script lang="ts">
	import WindowDimensions from '../../lib/components/WindowDimensions.svelte';
	import Check from '../../lib/icons/Check.svelte';
	import XMark from '../../lib/icons/XMark.svelte';
</script>

<div class="absolute inset-0 z-0 grid place-items-center bg-fuchsia-50">
	<div class="flex flex-col gap-6">
		<div
			class="relative grid w-screen grid-cols-6 rounded-lg bg-white shadow-lg min-h-[8rem] [@media(min-width:28rem)]:h-32 [@media(min-width:28rem)]:w-[28rem]"
		>
			<button
				class="absolute right-3 top-3 rounded-full bg-gray-100 p-1 hover:bg-gray-200 active:scale-90"
				><XMark class="w-5" /></button
			>
			<div
				class="grid place-items-center rounded-[55%_100%_100%_55%_/_0%_70%_70%_0%] bg-[#e9f4f5] bg-opacity-50"
			>
				<div class="grid h-10 w-10 place-items-center rounded-lg bg-[#8fc643]">
					<Check class="h-6 w-6 text-white" strokeWidth="4" />
				</div>
			</div>
			<div class="col-span-5 flex flex-col justify-center gap-1 p-2">
				<h3 class="font-semibold">Thank you for subscribing!</h3>
				<h6 class="text-sm">You will receive an email to confirm your subscription.</h6>
			</div>
		</div>
		<div class="relative grid w-screen grid-cols-6 rounded-lg bg-white shadow-lg min-h-[8rem] [@media(min-width:28rem)]:h-32 [@media(min-width:28rem)]:w-[28rem]">
			<button
				class="absolute right-3 top-3 rounded-full bg-gray-100 p-1 hover:bg-gray-200 active:scale-90"
				><XMark class="w-5" /></button
			>
			<div
				class="grid place-items-center rounded-[55%_100%_100%_55%_/_0%_70%_70%_0%] bg-[#fbf0fb] bg-opacity-50"
			>
				<div class="grid h-10 w-10 place-items-center rounded-full bg-[#e34b4f]">
					<XMark class="w-[1.85rem] text-white" strokeWidth="3" />
				</div>
			</div>
			<div class="col-span-5 flex flex-col justify-center gap-1 p-2">
				<h3 class="font-semibold">Oops! An error occured.</h3>
				<h6 class="text-sm">Apologies for the inconvenience. Please try again.</h6>
			</div>
		</div>
	</div>
	<div
		class="absolute left-1/2 top-1/2 -z-50 h-[30rem] w-[30rem] -translate-x-[calc(50%+5rem)] -translate-y-1/2 rounded-[52%_48%_47%_53%_/_59%_39%_61%_41%] bg-fuchsia-300 opacity-20"
	/>
	<div
		class="absolute left-1/2 top-1/2 -z-50 h-96 w-96 -translate-x-[calc(50%-5rem)] -translate-y-[calc(50%+5rem)] rounded-[60%_40%_21%_79%_/_37%_63%_37%_63%] bg-fuchsia-300 opacity-20"
	/>
</div>
