<template>
	<div>
		<div class="x-placeholder">
			<no-ssr>
				<youtube
					player-width="100%"
					player-height="100%"
					:video-id="$props.video"
				/>
			</no-ssr>
		</div>

		<div class="flex flex-col mt-5 space-y-2 font-light">
			<p>from: <span class="font-bold text-brand-primary" v-text="location.from" /></p>

			<p>to:  <span class="font-bold text-brand-primary" v-text="location.to" /></p>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			type: {
				type: String,
				default: "smoke",
			},

			location: {
				type: Object,
				required: true,
			},

			video: {
				type: String,
				required: true,
			},
		},
	};
</script>
