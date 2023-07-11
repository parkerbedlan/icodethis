<div class="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-50">
	<form>
		<div
			class="relative grid h-14 w-96 grid-cols-6 rounded-sm bg-gray-100 shadow-[0px_0px_10px_2px] shadow-gray-300"
		>
			<div class="grid place-items-center">
				<button
					class="grid h-4/5 w-4/5 place-items-center rounded-sm text-gray-800 hover:bg-gray-200 active:shadow-inner"
					type="button"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-5 w-5"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
					</svg></button
				>
			</div>
			<div class="col-span-4 grid place-items-center p-1.5">
				<!-- svelte-ignore a11y-autofocus -->
				<input
					type="text"
					class="h-full w-full rounded-sm bg-white px-4 text-blue-900 outline-cyan-400 focus:outline focus:outline-1"
					placeholder="Search"
					autofocus
				/>
			</div>
			<button
				class="grid place-items-center rounded-r-sm bg-gradient-to-br from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-500 active:shadow-inner active:shadow-gray-600"
				type="submit"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/></svg
				></button
			>
		</div>
	</form>

	<form>
		<div
			class="relative grid h-14 w-96 grid-cols-6 rounded-sm bg-gray-100 shadow-[0px_0px_10px_2px] shadow-gray-300"
		>
			<div class="grid place-items-center">
				<button
					class="grid h-4/5 w-4/5 place-items-center rounded-sm text-gray-800 hover:bg-gray-200 active:shadow-inner"
					type="button"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-5 w-5"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M4.5 15.75l7.5-7.5 7.5 7.5"
						/></svg
					></button
				>
			</div>
			<div class="col-span-4 grid place-items-center p-1.5">
				<!-- svelte-ignore a11y-autofocus -->
				<input
					type="text"
					class="h-full w-full rounded-sm bg-white px-4 text-blue-900 outline-cyan-400 focus:outline focus:outline-1"
					placeholder="Search"
					autofocus
				/>
			</div>
			<button
				class="grid place-items-center rounded-r-sm bg-gradient-to-br from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-500 active:shadow-inner active:shadow-gray-600"
				type="submit"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/></svg
				></button
			>
		</div>
		<menu
			class="-z-10 flex w-1/2 select-none flex-col gap-4 rounded-sm bg-gray-100 px-6 py-3 shadow-[0px_0px_10px_2px] shadow-gray-300"
			><div>
				<input type="checkbox" id="Articles" />
				<label for="Articles" class="ml-4 text-sm text-slate-600">Articles</label>
			</div>
			<div>
				<input type="checkbox" id="Products" />
				<label for="Products" class="ml-4 text-sm text-slate-600">Products</label>
			</div>
			<div>
				<input type="checkbox" id="Services" />
				<label for="Services" class="ml-4 text-sm text-slate-600">Services</label>
			</div></menu
		>
	</form>
</div>
