<template lang="">
    <div>
        <v-container fluid class='ma-0 pa-0'>
					<v-layout row wrap px-5 py-5>
				<v-flex xs12>
				<div class='display-2'>
				Wallaby Hostel, Rruga Pandeli Bocari 9701, Saranda, Albania
					 </div>

				</v-flex>
			</v-layout>
			<v-layout row wrap fill-height>
				<div style="width: 100%">
					<iframe
						width="100%"
						:height="(this.windowSize.y)*2/3"
						:src="'https://maps.google.com/maps?hl=en&amp;coord='+props.location+'&amp;q=wallaby%20hostel%20albania&amp;ie=UTF8&amp;t=&amp;z=19&amp;iwloc=B&amp;output=embed'"
						frameborder="0"
						scrolling="no"
						marginheight="0"
						marginwidth="0"
					></iframe>
				</div>
			</v-layout>
		
		
		</v-container>
    </div>
</template>
<script>
import { Mixin } from "~/mixins/windowSize.js";

export default {
	mixins: [Mixin],
	props: ["props"],
	data() {
		return {
			asset: this.$store.state.assetRoot2
		};
	},
};
</script>