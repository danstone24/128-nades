<template>
	<header class="relative z-site-header text-center">
		<div class="x-container flex items-center justify-between py-4">
			<div>
				<h1>128 Nades</h1>
			</div>

			<div class="flex items-center space-x-5">
				<nuxt-link
					v-for="(link, index) in $props.links"
					:key="index"
					:to="link.url"
					v-html="link.title"
				/>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	inheritAttrs: false,

	props: {
		links: {
			type: Array,
			default: null,
		},
	},
};
</script>
