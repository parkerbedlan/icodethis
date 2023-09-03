<!-- https://imgur.com/a/4js0yqx -->

<script>
	import XMark from 'lib/icons/XMark.svelte';
	import Label from './Label.svelte';
	import Plus from 'lib/icons/Plus.svelte';

	let progress = 59;
</script>

<div class="flex min-h-screen items-center justify-center bg-sky-600">
	<div class="w-[40rem] max-w-[100vw] bg-white shadow-lg">
		<div class="flex justify-between bg-sky-900 px-5 py-3 text-white">
			<div>Task Name</div>
			<button><XMark /></button>
		</div>
		<form class="px-6 py-4">
			<div class="-mx-6 -my-4 bg-slate-50 px-6 py-4">
				<div class="flex justify-between gap-5">
					<div>
						<Label for="start-date">Start Date</Label>
						<input type="date" id="start-date" class="border-2" />
						<input type="time" id="start-time" class="border-2" />
					</div>
					<div>
						<Label for="end-date">End Date</Label>
						<input type="date" id="end-date" class="border-2" />
						<input type="time" id="end-time" class="border-2" />
					</div>
					<div>
						<Label for="type">Type</Label>
						<select id="type" class="border-2 bg-white px-2 py-0.5">
							<option disabled selected>Task</option>
							<option>Type A</option>
							<option>Type B</option>
						</select>
					</div>
				</div>
				<div class="my-3">
					<Label for="progress">Progress</Label>
					<div class="flex items-center gap-3">
						<div class="h-3 w-10/12 flex-shrink-0 rounded-full bg-sky-200 opacity-80">
							<div class="h-3 rounded-full bg-sky-500" style={`width:${progress}%`} />
						</div>
						<input
							id="progress"
							type="number"
							class="w-1/12 border-2"
							bind:value={progress}
							min="0"
							max="100"
						/>
						<div>%</div>
					</div>
				</div>
			</div>
			<div class="flex flex-wrap justify-between gap-[4%]">
				<div class="w-[48%] flex-shrink">
					<div>
						<Label for="task-name">Task Name</Label>
						<input id="task-name" type="text" class="w-full border-2" />
					</div>
					<div class="my-3">
						<Label for="task-description">Task Description</Label>
						<textarea
							id="task-description"
							class="w-full border-2 text-xs"
							placeholder="Add task description"
						/>
					</div>
				</div>
				<div class="w-[48%] flex-shrink">
					<div>
						<Label>Working on this</Label>
						<div class="flex gap-2">
							<img src="https://placekitten.com/100" alt="" class="w-8 rounded-full" />
							<img src="https://placekitten.com/100" alt="" class="w-8 rounded-full" />
							<button class="flex h-8 w-8 items-center justify-center rounded-full border-2"
								><Plus class="w-4 text-blue-500" strokeWidth="2.5" /></button
							>
						</div>
					</div>
					<div>
						<Label>Attachments</Label>
						<div class="grid grid-cols-4 gap-3">
							<img src="https://placekitten.com/100" alt="" class="w-14" />
							<img src="https://placekitten.com/100" alt="" class="w-14" />
							<img src="https://placekitten.com/100" alt="" class="w-14" />
							<img src="https://placekitten.com/100" alt="" class="w-14" />
							<img src="https://placekitten.com/100" alt="" class="w-14" />
							<button class="flex h-14 w-14 items-center justify-center border-2"
								><Plus class="w-4 text-blue-500" strokeWidth="2.5" /></button
							>
						</div>
					</div>
					<button
						disabled
						class="float-right rounded-md bg-sky-400 px-10 py-2 text-sm uppercase text-white shadow-sm disabled:cursor-not-allowed disabled:opacity-50"
						>Save</button
					>
				</div>
			</div>
		</form>
	</div>
</div>
