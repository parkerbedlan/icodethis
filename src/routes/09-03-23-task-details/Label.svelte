<script lang="ts">
	import type { HTMLLabelAttributes } from 'svelte/elements';
	type $$Props = HTMLLabelAttributes;
	let x = 4;
</script>

<label
	class={`block text-xs font-semibold text-sky-950 ${$$props.class ? $$props.class : ''}`}
	{...$$props}
>
	<slot />
</label>
