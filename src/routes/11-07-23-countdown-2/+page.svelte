<script lang="ts">
	import { onMount } from 'svelte';

	const event = {
		name: 'Christmas Day',
		date: new Date(1703480400000)
	};

	const formatDate = (unformattedDate: Date) => {
		const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(unformattedDate);
		const day = unformattedDate.getDate();
		const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(unformattedDate);
		const year = unformattedDate.getFullYear();

		const formattedDate = `${dayOfWeek}, ${day} ${month} ${year}`;

		return formattedDate;
	};

	const timeDifference = (startDate: Date, endDate: Date) => {
		if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
			throw new Error('Both inputs must be Date objects.');
		}

		const timeDifference = Number(endDate) - Number(startDate);
		if (timeDifference < 0) {
			throw new Error('End date must be greater than the start date.');
		}

		const MS_PER_SECOND = 1000;
		const MS_PER_MINUTE = MS_PER_SECOND * 60;
		const MS_PER_HOUR = MS_PER_MINUTE * 60;
		const MS_PER_DAY = MS_PER_HOUR * 24;

		const days = Math.floor(timeDifference / MS_PER_DAY);
		const hours = Math.floor((timeDifference % MS_PER_DAY) / MS_PER_HOUR);
		const minutes = Math.floor((timeDifference % MS_PER_HOUR) / MS_PER_MINUTE);
		const seconds = Math.floor((timeDifference % MS_PER_MINUTE) / MS_PER_SECOND);

		return {
			days,
			hours,
			minutes,
			seconds
		};
	};

	let currentTime = new Date();
	onMount(() => {
		const interval = setInterval(() => {
			currentTime = new Date();
		}, 1000);

		return () => clearInterval(interval);
	});

	$: countdown = timeDifference(currentTime, event.date);
</script>

<div
	class="relative z-0 flex min-h-screen overflow-x-hidden bg-[url(https://placekitten.com/2000)] bg-cover bg-fixed bg-center text-white"
>
	<div
		class="absolute inset-0 -z-10 bg-gradient-to-tr from-emerald-900 to-emerald-200 opacity-80"
	/>
	<div class="container mx-auto my-auto flex max-w-6xl flex-col gap-20 px-4">
		<section class="flex flex-col gap-6">
			<h1 class="break-words text-8xl">{event.name}</h1>
			<h2 class="text-2xl">{formatDate(event.date)}</h2>
		</section>
		<section>
			<div class="flex w-full gap-6">
				<div class="flex h-full w-full flex-col items-center">
					<div
						class="z-10 grid h-60 w-full place-items-center rounded-l-[3rem] bg-emerald-50 bg-opacity-10 pb-4 text-[calc(min(100vw/6,6rem))] font-bold shadow-2xl shadow-emerald-700"
					>
						{countdown.days.toString().padStart(2, '0')}
					</div>
					<div class="text-[calc(min(100vw/24,2.25rem))]">Days</div>
				</div>
				<div class="flex h-full w-full flex-col items-center">
					<div
						class="z-10 grid h-60 w-full place-items-center bg-emerald-50 bg-opacity-10 pb-4 text-[calc(min(100vw/6,6rem))] font-bold shadow-2xl shadow-emerald-700"
					>
						{countdown.hours.toString().padStart(2, '0')}
					</div>
					<div class="text-[calc(min(100vw/24,2.25rem))]">Hours</div>
				</div>
				<div class="flex h-full w-full flex-col items-center">
					<div
						class="z-10 grid h-60 w-full place-items-center bg-emerald-50 bg-opacity-10 pb-4 text-[calc(min(100vw/6,6rem))] font-bold shadow-2xl shadow-emerald-700"
					>
						{countdown.minutes.toString().padStart(2, '0')}
					</div>
					<div class="text-[calc(min(100vw/24,2.25rem))]">Minutes</div>
				</div>
				<div class="flex h-full w-full flex-col items-center">
					<div
						class="z-10 grid h-60 w-full place-items-center rounded-r-[3rem] bg-emerald-50 bg-opacity-10 pb-4 text-[calc(min(100vw/6,6rem))] font-bold shadow-2xl shadow-emerald-700"
					>
						{countdown.seconds.toString().padStart(2, '0')}
					</div>
					<div class="text-[calc(min(100vw/24,2.25rem))]">Seconds</div>
				</div>
			</div>
		</section>
		<section>
			<p class="text-lg">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum eius ratione ea
				mollitia optio placeat quo sequi cum amet non sint nisi culpa repellendus ad, eaque
				accusamus laboriosam adipisci, rerum ipsa. Labore, placeat harum sequi dicta explicabo animi
				iusto nam voluptatibus saepe ipsam sunt, quae, modi sapiente alias ab quisquam quos.
				Similique mollitia fugit error cum tempora distinctio nostrum?
			</p>
		</section>
	</div>
</div>
