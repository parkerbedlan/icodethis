<script>
	import { Body } from 'svelte-body';
	import PriceCard from './PriceCard.svelte';
	import WindowDimensions from '../../lib/components/WindowDimensions.svelte';
</script>

<!-- https://i.imgur.com/XjIBvkM.png -->
<!-- https://9elements.github.io/fancy-border-radius/ -->

<Body class="relative z-0 grid min-h-screen place-items-center bg-[#ffd148] min-[450px]:p-12" />

<WindowDimensions />

<div class="mx-auto w-fit rounded-lg bg-gray-100 py-16 min-[390px]:px-16">
	<h2 class="mb-2 text-xl font-semibold tracking-wide">Website - Sponsorship</h2>
	<p class="mb-8 text-sm">
		In the event that we do not have a full 30 days, we extrapolate based on data we have.
	</p>
	<div class="mt flex flex-wrap items-center justify-center gap-8">
		<PriceCard
			title="Sidebar Block"
			priceDollarsPerMonth={250}
			isSoldOut={false}
			notes={['439,000 Est. Impressions', '180 x 150', 'Middle Right']}
		/>
		<PriceCard
			title="Sidebar Block"
			priceDollarsPerMonth={400}
			isSoldOut={false}
			notes={['439,000 Est. Impressions', '300 x 250', 'Middle Right']}
		/>
		<PriceCard
			title="Premium Sidebar"
			priceDollarsPerMonth={2600}
			isSoldOut={true}
			notes={['2,000,000 Est. Impressions', '300 x 250', 'Top Right']}
		/>
	</div>
</div>

<div
	class="absolute right-0 top-0 -z-50 h-[30rem] w-[30rem] rounded-[52%_48%_47%_53%_/_59%_39%_61%_41%] border-[16px] border-solid border-[#ffc848] bg-[#ffb14a]"
/>
<div
	class="absolute bottom-0 left-0 -z-40 h-96 w-96 rounded-[60%_40%_21%_79%_/_37%_63%_37%_63%] border-[16px] border-solid border-[#ffc848] bg-[#ffb14a]"
/>
