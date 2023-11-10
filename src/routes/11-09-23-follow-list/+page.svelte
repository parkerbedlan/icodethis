<script>
	import Profile from './Profile.svelte';
</script>

<div class="grid min-h-screen place-items-center bg-[#1f2123] text-white">
	<div
		class="flex w-96 flex-col rounded-lg bg-[#26282a] px-12 py-8 shadow-[0_10px_100px_-12px_rgb(0_0_0_/_0.6)]"
	>
		<Profile
			name="Michael K. Padilla"
			job="UX Designer"
			accentColor="#cf93f7"
			avatar="https://placekitten.com/200"
		/>
		<Profile
			name="Denice Havens"
			job="UI Designer"
			accentColor="#5fefc1"
			avatar="https://api.dicebear.com/7.x/identicon/svg?seed=Denice"
		/>
		<Profile
			last
			name="Douglas Davis"
			job="Web Developer"
			accentColor="#f5b366"
			avatar="https://pm1.aminoapps.com/6717/853fa0542c4a453c28da102ab8bcad61c416de9c_hq.jpg"
		/>
	</div>
</div>
