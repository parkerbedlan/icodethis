<script lang="ts">
	import ChevronDown from '../../lib/icons/ChevronDown.svelte';
	import MagnifyingGlass from '../../lib/icons/MagnifyingGlass.svelte';
	import DropdownItem from './DropdownItem.svelte';
	import NavButton from './NavButton.svelte';

	import type { ComponentProps } from 'svelte';

	const labels = ['Home', 'Apps', 'Account'] as const;
	let selectedLabel: (typeof labels)[number] = 'Apps';

	let categories = ['Category 1', 'Category 2', 'Category 3'] as const;
	let selectedCategory: (typeof categories)[number] | null = null;
</script>

<nav class="absolute inset-0 flex h-14 w-full justify-between bg-gray-900 px-20">
	<div class="flex items-center gap-10">
		{#each labels as navButtonLabel}
			<NavButton
				label={navButtonLabel}
				isSelected={selectedLabel === navButtonLabel}
				on:click={() => (selectedLabel = navButtonLabel)}
			/>
		{/each}
		<NavButton isDropdown>
			<div slot="label">Categories</div>
			<div slot="dropdown" let:class_ class={class_}>
				{#each categories as category}
					<DropdownItem
						label={category}
						isSelected={selectedCategory === category}
						onClick={() => (selectedCategory = category)}
					/>
				{/each}
			</div>
		</NavButton>
	</div>
	<NavButton isDropdown>
		<MagnifyingGlass slot="label" strokeWidth="3" />
		<div slot="dropdown" let:class_ class={class_}>hi</div>
	</NavButton>
</nav>
