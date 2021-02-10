<template>
	<footer class="relative z-site-footer text-center">
		<div class="x-container py-5 text-left">
			&copy; 128 Nades <span v-text="$data.year" />
		</div>
	</footer>
</template>

<script>
export default {
	inheritAttrs: false,

	data() {
		return {
			year: new Date().getFullYear(),
		};
	},
};
</script>
