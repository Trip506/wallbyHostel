<template>
	<section id="stats">
		<v-parallax
			:height="$vuetify.breakpoint.smAndDown ? 700 : 500"
			src="https://albaniayachtservices.com/wp-content/uploads/2018/06/10-borsh-1030x682.jpg"
		>
			<v-container fill-height>
				<v-row class="mx-auto">
					<v-col v-for="[value, title, link] of stats" :key="title" cols="12" md="3">
						<div class="text-center">
							<div class="display-3 font-weight-black mb-4" v-text="value"></div>

							<div class="title font-weight-regular text-uppercase">
								<v-btn color="primary" @click="$vuetify.goTo('#'+link)">{{title}}</v-btn>
							</div>
						</div>
					</v-col>
				</v-row>
			</v-container>
		</v-parallax>
	</section>
</template>

<script>
export default {
	data() {
		return {
			stats: [
				["64", "Instagram posts", "instagram"],
				["45", "Hotels", "booking"],
				["20", "Airbnbs", "airbnb"],
				["35", "Cafes and bars", "Bar"]
				// ["20", "Videos", "youtube"]
			]
		};
	}
};
</script>