<template>
	<div>
		{{ $props.error.statusCode }} - {{ $props.error.message }}
	</div>
</template>

<script>
export default {
	layout: 'simple',

	props: {
		error: {
			type: Object,
			default: null,
		},
	},

	head () {
		return {
			title: this.$props.error.statusCode,
		};
	},
};
</script>
