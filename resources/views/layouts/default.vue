<template>
	<div class="flex flex-col min-h-screen h-full">
		<site-header
			v-bind="$data.global"
		/>

		<main class="relative mt-12 flex-auto z-site-content">
			<div class="x-container">
				<div class="grid grid-cols-12 gap-5">
					<div class="col-span-12 md:col-span-10 md:col-start-2">
						<Nuxt />
					</div>
				</div>
			</div>
		</main>

		<site-footer
			v-bind="$data.global"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			global: require('../../content/global.json'),
		};
	},
};
</script>
