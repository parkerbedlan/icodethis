<script lang="ts">
	import WindowDimensions from '../../lib/components/WindowDimensions.svelte';
	import Testimonial from './Testimonial.svelte';
</script>

<!-- https://i.imgur.com/l7074iO.png -->

<div class="mx-auto w-fit bg-white px-12">
	<h1 class="py-10 text-4xl font-extrabold">Testimonials</h1>
	<div class="flex flex-wrap items-center justify-center gap-12">
		<Testimonial
			quote="Some days a motivational quote can providea quick pick-me-up for employees and even management. They can be a breath of fresh air when it comes to a drab afternoon."
			author="Patrick Bell CEO at Company"
		/>
		<Testimonial
			quote="If you find yourself doing the same routine day after day, never remembering what you did the day before, having nothing to look forward to, living your life &#8211; but never enjoying it or anything."
			author="Zachary Cooper Project Manager at Company"
		/>
		<Testimonial
			quote="Large businesses require a lot of IT infrastructure and a department to look after it. Small businesses often can't afford to have that sort of internal support in place, yet they need fully operational IT systems in order for."
			author="Caleb Swanson Managing Partner at Company"
		/>
	</div>
</div>
