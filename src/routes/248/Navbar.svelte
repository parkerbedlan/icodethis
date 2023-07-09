<script lang="ts">
	import ChevronDown from '../../lib/icons/ChevronDown.svelte';
	import MagnifyingGlass from '../../lib/icons/MagnifyingGlass.svelte';
	import NavButton from './NavButton.svelte';

	import type { ComponentProps } from 'svelte';

	const labels = ['Home', 'Apps', 'Account'] as const;
	let selectedLabel: (typeof labels)[number] = 'Home';

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
		<NavButton
			label="Categories"
			dropdownList={categories.map((category) => ({
				label: category,
				isSelected: category === selectedCategory,
				onClick: () => {
					selectedCategory = category;
				}
			}))}
		/>
		<!-- <NavButton>
			<span slot="label">Categories</span>

		</NavButton> -->
	</div>
	<NavButton let:dropdownClass={dropdownClass}>
		<MagnifyingGlass slot="label" strokeWidth="3" class="w-6 h-6 mx-3" />
		<!-- <div slot="dropdown" class={dropdownClass}>
			hi
		</div> -->
	</NavButton>
</nav>
