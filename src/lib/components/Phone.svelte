<script>
	import LightBulb from '../../lib/icons/LightBulb.svelte';
</script>

<div class="mockup-phone flex-shrink-0">
	<div class="camera" />
	<div class="display">
		<div class="phone-1 artboard artboard-demo">
			<div class="h-full w-full">
				<slot />
			</div>
		</div>
	</div>
</div>
