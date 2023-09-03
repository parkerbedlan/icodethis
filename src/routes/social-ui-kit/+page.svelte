<script>
	import Bell from 'lib/icons/Bell.svelte';
	import ChevronDown from 'lib/icons/ChevronDown.svelte';
	import DocumentText from 'lib/icons/DocumentText.svelte';
	import Photo from 'lib/icons/Photo.svelte';
	import Post from './Post.svelte';
	import Stat from './Stat.svelte';
</script>

<!-- https://imgur.com/a/zIdPnQE -->

<div class="relative z-0 flex min-h-screen items-center justify-center bg-[#061529] text-white">
	<div class="relative aspect-square w-[100vmin] max-w-4xl p-2">
		<div
			class="absolute -inset-96 -z-20 m-auto aspect-square w-[120%] rounded-full bg-[hsl(214,92%,10%)]"
		/>
		<div class="absolute inset-0 -z-10 m-auto aspect-square w-full rounded-full bg-[#3a4aab]" />
		<button
			class="relative ml-[44%] flex h-20 w-20 items-center justify-center rounded-lg bg-[#091e37] shadow-lg"
			><img src="https://i.imgur.com/RVonZoA.png" alt="LinkedIn" class="w-8" />
			<div
				class="absolute -right-1.5 -top-1.5 flex h-5 w-5 select-none items-center justify-center rounded-full bg-[#fb9f00] font-bold text-slate-800"
			>
				6
			</div></button
		>
		<div class="absolute right-12 top-0 w-2/5 rounded-lg bg-[#0b223f] py-12 text-center">
			<div class="mx-auto w-36 rounded-full bg-[#0b1f3a] p-5">
				<img
					src="https://avatars.dicebear.com/api/identicon/FrancesPTroia.svg"
					alt="avatar"
					class="rounded-full"
				/>
			</div>
			<h1 class="my-2 text-3xl font-extralight">Frances P. Troia</h1>
			<h4 class="text-[#5868b2]">Photographer</h4>
			<div class="my-12 grid grid-cols-3">
				<Stat amount={753} unit="Posts" />
				<Stat amount={1477} unit="Following" />
				<Stat amount={874} unit="Followers" />
			</div>
			<button
				class="rounded-sm bg-[hsl(36,100%,50%)] px-12 py-3 font-bold text-[#0b223f] transition-all hover:bg-[hsl(36,100%,45%)] active:scale-90"
				>Follow</button
			>
		</div>
		<div class="my-4 w-11/12 rounded-lg bg-[#091e37] px-12 py-8 text-white shadow-lg">
			<div class="mb-8 text-lg font-semibold">24 Comments</div>
			<div class="flex flex-col gap-8">
				<Post
					authorName="Frances P. Troia"
					avatar="https://avatars.dicebear.com/api/identicon/FrancesPTroia.svg"
					body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra libero sed sem
        interdum, eget mattis erat sollicitudin. Fusce luctus diam ut enim faucibus mollis. Aenean at
        eros bibendum, maximus lacus sed, tincidunt diam. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent a sapien malesuada, pharetra turpis nec, facilisis ex."
					datePosted="2 hours ago"
					numReplies={3}
				/>
				<Post
					authorName="David Saunders"
					avatar="https://avatars.dicebear.com/api/identicon/DavidSaunders.svg"
					body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula condimentum lectus eget ultrices. Etiam ornare, lectus eu rhoncus tempor, sem lorem efficitur dolor, sit amet ornare felis est placerat ligula."
					datePosted="3 hours ago"
					numReplies={0}
				/>
				<Post
					authorName="Manuel Hall"
					avatar="https://avatars.dicebear.com/api/identicon/ManuelHall.svg"
					body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis dui et mi condimentum varius. Donec lobortis tellus mauris, quis consectetur nunc varius vel. Aliquam consectetur feugiat metus sit amet feugiat. Mauris ac sem a purus consectetur aliquet sit amet non mauris. Aliquam id libero suscipit, fringilla ex non, luctus lectus. Nunc ornare nisi ex, ultrices malesuada sapien tincidunt a."
					datePosted="Yesterday"
					numReplies={6}
				/>
			</div>
		</div>
		<div
			class="flex h-24 w-full items-center justify-between rounded-lg bg-[#0f2848] px-4 text-[#5c6bca] shadow-lg"
		>
			<div class="flex gap-12 px-4">
				<button class="flex gap-2">
					<Photo />
					<span>Gallery</span>
				</button>
				<button class="flex gap-2 border-b-[1.5px] border-[#fc9e09] pb-1 text-[#fcfefe]">
					<DocumentText />
					<span>About</span>
				</button>
				<button class="flex gap-2">
					<Photo />
					<span>Gallery</span>
				</button>
			</div>
			<div class="flex items-center gap-4">
				<div
					class="flex aspect-square h-16 w-16 cursor-pointer items-center justify-center rounded-xl transition-transform hover:bg-[#0a1c32] active:scale-90"
				>
					<div class="relative flex aspect-square h-10 w-10 items-center justify-center">
						<Bell class="w-8" />
						<div
							class="absolute -top-1 right-0 flex h-5 w-5 select-none items-center justify-center rounded-full bg-[#fb9f00] font-bold text-slate-800"
						>
							4
						</div>
					</div>
				</div>
				<div class="w-20 rounded-full bg-[#0b1f3a] p-2">
					<img src="https://placekitten.com/100" alt="avatar" class="rounded-full" />
				</div>
			</div>
		</div>
	</div>
</div>
