<!-- https://i.imgur.com/tsip5QM.png -->

<script lang="ts">
	import Trophy from '../../lib/icons/Trophy.svelte';
	import OrderItem from './OrderItem.svelte';

	type OrderItemData = {
		product: string;
		size: 'Small' | 'Medium' | 'Large';
		quantity: number;
		priceDollars: number;
	};
	let cart: OrderItemData[] = [];
</script>

<div class="absolute inset-0 grid place-items-center bg-gradient-to-br from-[#fb8c5f] to-[#ffcd6d]">
	<div
		class="z-0 flex h-[28rem] w-80 flex-col rounded-md bg-white text-sm shadow-xl shadow-[rgb(0_0_0_/_0.2)]"
	>
		<header>
			<div class="h-20 rounded-t-md bg-[#ff694a]" />
			<div
				class="relative bottom-10 z-10 mx-auto grid w-fit place-items-center rounded-full bg-white p-1.5"
			>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/1/17/Pizza_Hut_international_logo_2014.svg"
					alt="company logo"
					class="w-16 rounded-full"
				/>
			</div>
			<h6 class="mx-auto -mt-10 max-w-[15ch] text-center">
				Your order from <strong>Pizza Hut</strong>
			</h6>
		</header>
		<main class="mb-4 mt-6 flex h-max flex-grow flex-col rounded-b-md px-4">
			<ul class="flex flex-col items-center gap-3">
				<OrderItem product="British Pizza" size="Medium" quantity={1} priceDollars={7.99} />
				<OrderItem product="Pizza Diavola" size="Medium" quantity={1} priceDollars={7.99} />
			</ul>
			<button
				class="my-3 flex w-fit items-center rounded-md border border-solid border-gray-300 px-5 py-1.5 text-xs font-semibold hover:bg-gray-100 active:scale-95"
			>
				<Trophy class="w-4" />
				<span class="ml-2">Add a beverage</span>
			</button>
			<ul class="flex flex-col gap-1 rounded-md bg-gray-100 px-3 py-3 text-xs">
				<li class="flex items-center justify-between">
					<span>Subtotal</span>
					<span class="font-semibold">$15.98</span>
				</li>
				<li class="flex items-center justify-between">
					<span>Shipping</span>
					<span class="font-semibold">$2</span>
				</li>
				<li class="flex items-center justify-between">
					<span>Total (TVA incl.)</span>
					<span class="font-semibold">$17.98</span>
				</li>
			</ul>
			<button
				class="mt-auto w-full rounded-md bg-[hsl(9,100%,64%)] hover:bg-[hsl(9,73%,53%)] py-2 text-xs font-semibold text-amber-50 active:scale-[97%]"
				>Checkout</button
			>
		</main>
	</div>
</div>
