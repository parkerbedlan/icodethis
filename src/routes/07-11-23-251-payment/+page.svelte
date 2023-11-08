<script lang="ts">
	import Check from '../../lib/icons/Check.svelte';
	import CreditCard from '../../lib/icons/CreditCard.svelte';

	const paymentMethods = ['Credit Card', 'PayPal'];
	let selectedPaymentMethod = paymentMethods[0];

	let cardNumber = '';
	const formatCardNumber = (rawCardNumber: string): string =>
		rawCardNumber
			.replace(/[^0-9]/gi, '')
			.replace(/(.{4})/g, '$1 ')
			.trim()
			.slice(0, 19);
	$: cardNumber = formatCardNumber(cardNumber);

	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];
	let expirationMonth = '';
	let expirationYear = '';
</script>

<div class="absolute inset-0 grid place-items-center bg-gray-50 py-12 sm:px-12">
	<form
		on:submit|preventDefault={() =>
			alert(
				`submitted ${JSON.stringify({
					selectedPaymentMethod,
					cardNumber,
					expirationMonth,
					expirationYear
				})}`
			)}
		class="w-full grid-cols-6 bg-gray-50 px-8 py-24 text-sky-800 shadow-[0_0_10px_2px_rgb(0,0,0,.1)] lg:grid"
	>
		<div class="col-span-2 flex justify-center px-12 lg:justify-end">
			<div>
				<img alt="" src="https://i.imgur.com/hkOelNQ.png" width="200" height="200" />
			</div>
		</div>
		<div class="col-span-4 max-w-4xl">
			<div>
				<span class="text-gray-400">4/4</span>
				<h2 class="text-xl font-bold text-sky-800">Last step!</h2>
				<h3>Enter your payment info below.</h3>
			</div>
			<div class="my-6 grid gap-6 sm:grid-cols-2">
				<label
					class="relative col-span-1 flex h-16 cursor-pointer items-center justify-between rounded-sm border bg-white px-6 outline-2 focus-within:outline hover:bg-gray-100"
				>
					<input
						type="radio"
						id="credit-card"
						name="payment-method"
						aria-label="Credit Card"
						class="peer absolute -z-10 opacity-0"
						value="Credit Card"
						bind:group={selectedPaymentMethod}
						tabindex="0"
					/>
					<span><CreditCard class="w-12" /></span>
					<span class="text-lg font-semibold text-sky-800">Credit Card</span>
					<span
						class="grid h-6 w-6 place-items-center rounded-full border border-gray-500 bg-white peer-checked:border-2 peer-checked:border-green-600 peer-checked:[&_*]:block"
					>
						<Check class="hidden w-4 text-green-600" strokeWidth="3" />
					</span>
					<span
						class="absolute inset-0 hidden rounded-sm border border-sky-300 shadow-lg peer-checked:block"
					/>
				</label>
				<label
					class="relative col-span-1 flex h-16 cursor-pointer items-center justify-between rounded-sm border bg-white px-6 outline-2 focus-within:outline hover:bg-gray-100"
				>
					<input
						type="radio"
						id="paypal"
						name="payment-method"
						aria-label="PayPal"
						class="peer absolute -z-10 opacity-0"
						value="PayPal"
						bind:group={selectedPaymentMethod}
						tabindex="0"
					/>
					<img
						alt="PayPal"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
						class="h-6"
					/>
					<span
						class="grid h-6 w-6 place-items-center rounded-full border border-gray-500 bg-white peer-checked:border-2 peer-checked:border-green-600 peer-checked:[&_*]:block"
					>
						<Check class="hidden w-4 text-green-600" strokeWidth="3" />
					</span>
					<span
						class="absolute inset-0 hidden rounded-sm border border-sky-300 shadow-lg peer-checked:block"
					/>
				</label>
			</div>
			<div class="flex flex-col gap-2">
				<label
					><span class="text-sm">Card Number</span>
					<input
						type="text"
						class="block w-full rounded-sm border border-gray-300 bg-white px-3 py-3 outline-2 [appearance:textfield] focus-visible:outline [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
						id="card-number"
						placeholder="1234 5678 9012 3456"
						bind:value={cardNumber}
					/></label
				>
				<div class="flex gap-6">
					<label
						><div class="text-sm">Expiration Date</div>
						<div class="flex gap-3">
							<select
								placeholder="Month"
								id="exp-month"
								class={`w-24 rounded-sm border border-gray-300 bg-white px-3 py-3 outline-2 focus-visible:outline ${
									!expirationMonth ? 'text-gray-400' : ''
								}`}
								required
								bind:value={expirationMonth}
								on:change={(e) => {
									expirationMonth = e.currentTarget.value;
								}}
							>
								<option value="">Month</option>
								{#each months as month, index}
									<option value={`${index + 1}`}>{month}</option>
								{/each}
							</select>
							<select
								placeholder="Year"
								id="exp-year"
								class={`w-24 rounded-sm border border-gray-300 bg-white px-3 py-3 outline-2 focus-visible:outline ${
									!expirationYear ? 'text-gray-400' : ''
								}`}
								required
								bind:value={expirationYear}
							>
								<option value="">Year</option>
								{#each [...Array(8)].map((_, i) => new Date().getFullYear() + i) as year}
									<option value={`${year}`}>{year}</option>
								{/each}
							</select>
						</div></label
					>
					<label for="cvc"
						><div class="text-sm">CVC</div>
						<input
							type="number"
							class="block w-24 rounded-sm border border-gray-300 bg-white px-3 py-3 outline-2 [appearance:textfield] focus-visible:outline [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
							id="card-number"
							placeholder="123"
							bind:value={cardNumber}
						/></label
					>
				</div>
				<p>
					By creating an account, you agree to Study.com's <a
						href="#top"
						class="font-semibold hover:underline">Terms of Use</a
					>
					and
					<a href="#top" class="font-semibold hover:underline">Privacy Policy</a>.
				</p>

				<button type="submit" class="group w-fit"
					><div
						class="w-fit rounded-md bg-blue-900 px-24 py-3 text-white transition-all group-hover:bg-blue-800 group-active:scale-90"
					>
						Join Now
					</div></button
				>
			</div>
		</div>
	</form>
</div>
