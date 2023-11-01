<script>
	import Notification from './Notification.svelte';
</script>

<!-- https://i.imgur.com/UwGFu8S.png -->
<!-- https://9elements.github.io/fancy-border-radius/ -->

<div
	class="relative z-0 grid min-h-screen place-items-center overflow-hidden bg-[#202b47] text-white"
>
	<div
		class="absolute -bottom-[20vw] right-[20vw] -z-50 h-[50vw] w-[50vw] rounded-[79%_21%_55%_45%_/_39%_63%_37%_61%] bg-[#f6a725]"
	/>
	<div
		class="h-[28rem] w-[24rem] rounded-lg bg-[#2f395d] px-6 py-6 shadow-[10px_13px_16px_-1px_rgba(0,0,0,.35)]"
	>
		<h3 class="text-lg tracking-wider">2 Announcements</h3>
		<div class="h-4/5 overflow-y-auto">
			<div class="mt-6 flex h-full w-full flex-col items-center gap-2">
				<Notification
					message="Ms. Phillips is away this week. I am going to replace her."
					name="Hettie Marshall"
					postedAt={new Date('Mon, 18 Jun 2023 08:30:25 GMT')}
					profilePicUrl="https://placekitten.com/100"
				/><Notification
					message="Bring your books! We will read the next 2 chapters."
					name="Hettie Marshall"
					postedAt={new Date('Mon, 19 Jun 2023 05:30:25 GMT')}
					profilePicUrl="https://placekitten.com/100"
				/>
			</div>
		</div>
		<div class="mt-4 h-20 w-full text-center">
			<button
				class="mt-auto rounded-sm bg-blue-500 px-8 py-2 text-xs font-bold hover:bg-blue-600 active:shadow-[inset_0_0_10px_0_rgb(0,0,0,0.3)]"
				>Dismiss All</button
			>
		</div>
	</div>
</div>
