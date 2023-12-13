<!-- https://imgur.com/a/sGwvdW4 -->

<script>
	import XMark from 'lib/icons/XMark.svelte';
	import Rating from './Rating.svelte';

	let selectedRating = 'Amazing';
	let message = '';
</script>

<svelte:head>
	<title>Feedback Modal</title>
</svelte:head>

<div class="flex h-screen items-center justify-center bg-[#1a7592] px-12">
	<div class="relative w-[34rem] rounded-lg bg-white p-8 shadow-lg">
		<img
			src="https://cdn.pixabay.com/photo/2015/12/11/05/00/santa-hat-1087651_1280.png"
			alt="santa hat"
			width="150"
			class="absolute -left-24 -top-12 -rotate-45"
		/>
		<div class="absolute right-0 top-0 pr-4 pt-4">
			<button class="text-gray-400 hover:text-gray-600"><XMark class="w-5" /></button>
		</div>
		<div class="mb-4 text-center">
			<h3 class="text-2xl font-bold text-gray-900">We value your feedback!</h3>
			<p class="my-4 text-sm text-gray-600">
				Your feedback is invaluable in shaping a better shopping journey for you and others. Thank
				you for being a part of our commitment to excellence!
			</p>
		</div>
		<div class="mb-6">
			<div class="flex justify-between">
				<Rating name="Terrible" emoji="😡" bind:selectedRating />
				<Rating name="Bad" emoji="😞" bind:selectedRating />
				<Rating name="Okay" emoji="😐" bind:selectedRating />
				<Rating name="Good" emoji="😊" bind:selectedRating />
				<Rating name="Amazing" emoji="🤩" bind:selectedRating />
			</div>
		</div>
		<div class="mb-6">
			<label for="message" class="mb-2 block text-base font-bold text-gray-900"
				>Share your feedback</label
			>
			<textarea
				id="message"
				rows="3"
				placeholder="Message"
				bind:value={message}
				class="w-full resize-none border bg-gray-50 p-2 focus:border-blue-500 focus:ring-blue-500"
			/>
		</div>
		<div class="flex justify-center">
			<button
				class="focus:shadow-outline rounded-full bg-[hsl(196,62%,35%)] px-6 py-3 text-sm text-white duration-75 hover:bg-[hsl(196,62%,30%)] focus:outline-none active:scale-95"
			>
				Send feedback
			</button>
		</div>
	</div>
</div>
