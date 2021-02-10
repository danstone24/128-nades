<template>
	<div>
		<div
			:class="[
				'flex flex-col',
				'md:flex-row md:items-end md:justify-between',
			]"
		>
			<h1
				class="x-h1"
				v-text="title"
			/>

			<div class="mt-4 md:mt-0">
				<label for="area">Filter by area:</label>

				<select
					class="text-black"
					name="area"
					id="area"
					v-model="filter"
				>
					<option
						v-for="(option, index) in options"
						:value="option.value"
						v-text="option.text"
					/>
				</select>
			</div>
		</div>

		<div
			v-if="cItems.length"
			:class="[
				'grid grid-cols-1 gap-10 col-span-12 mt-12',
				'md:grid-cols-2 md:col-span-10 md:col-start-2 md:gap-5',
				'lg:grid-cols-3 lg:gap-y-10',
			]"
		>
			<nade-card
				v-for="(nade, index) in cItems"
				:key="index"
				v-bind="nade"
			/>
		</div>

		<div
			v-else
			class="mt-12"
		>
			<p>Nothing here just yet…</p>
		</div>
	</div>
</template>

<script>
	import head from '../../../assets/js/mixins/head';

	export default {
		mixins: [head],

		async asyncData ({ $content, params }) {
			return await $content(`maps/${params.index}`).fetch();
		},

		data() {
			return {
				filter: 'All',
				options: [
					{ text: 'All', value: "All" },
					{ text: 'Bombsite A', value: 'A' },
					{ text: 'Bombsite B', value: 'B' },
					{ text: 'Middle', value: 'Mid' },
				],
			};
		},

		computed: {
			cItems() {
				const { items, filter } = this.$data;

				if (filter === 'All') return items;

				return items.filter(item => item.location.area === filter);
			},
		},
	};
</script>
