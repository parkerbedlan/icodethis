<script>
	import Card from './Card.svelte';
</script>

<!-- https://imgur.com/a/mBsOnJA -->
<div
	class="flex min-h-screen items-center justify-center overflow-hidden bg-[#26282a] text-gray-400"
>
	<Card
		monthlyPrice={9}
		planName="Freelancer"
		features={['1 GB of space', 'Unlimited traffic', 'Forum access', 'Support at $25/hour']}
	/>
	<div class="scale-105">
		<Card
			monthlyPrice={99}
			planName="Business"
			features={['5 GB of space', 'Unlimited traffic', 'Forum access', 'Support at $5/hour']}
			blueMode
		/>
	</div>
	<Card
		monthlyPrice={499}
		planName="Enterprise"
		features={['20 GB of space', 'Unlimited traffic', 'Forum access', 'Free support']}
	/>
</div>
