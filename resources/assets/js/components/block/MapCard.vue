<template>
	<nuxt-link :to="$props.url">
		<div class="x-placeholder">
			<img v-bind="$props.img">
		</div>

		<h1
			class="x-h3 mt-5"
			v-text="$props.title"
		/>
	</nuxt-link>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true,
			},

			img: {
				type: Object,
				required: true,
			},

			url: {
				type: String,
				required: true,
			},
		},
	};
</script>
