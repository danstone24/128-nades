<template>
	<div>
		<div class="flex flex-col">
			<h1
				class="x-h3"
				v-text="home.title"
			/>

			<p
				class="mt-2 max-w-lg"
				v-text="home.content"
			/>
		</div>

		<div
			:class="[
				'grid grid-cols-1 gap-10 col-span-12 mt-12',
				'md:grid-cols-2 md:col-span-10 md:col-start-2 md:gap-5',
				'lg:grid-cols-3 lg:gap-y-10',
			]"
		>
			<map-card
				v-for="(map, index) in maps"
				:key="index"
				v-bind="map"
			/>
		</div>
	</div>
</template>

<script>
	import head from '../../assets/js/mixins/head';

	export default {
		mixins: [head],

		async asyncData ({ $content }) {
			const maps = await $content('maps').fetch();
			const home = await $content('index').fetch();

			return { maps, home };
		},
	};
</script>
