export default {
	head() {
		return {
			title: "128 Nades",
			link: [
				{
					hid: 'canonical',
					rel: 'canonical',
					href: this.$route.path,
				},
			],
		};
	},
};
