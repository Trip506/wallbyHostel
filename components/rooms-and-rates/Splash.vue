<template>
    <div>
  <!--ROOMS AN RATES SPLASH WITH IMAGE LOGO AND TEXT-->
        		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap fill-height>
				<v-img
					:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*2/3 : (this.windowSize.y)]"
					:src="asset + props.image1.path"
				>
					<v-container fill-height>
						<v-layout align-center justify-center row fill-height>
							<v-layout column class="white--text text-center">
							
									<v-img
										style="margin: auto;"
										:width="[$vuetify.breakpoint.smAndDown ? '40%' : '30%']"
										:src="asset + props.image1_logo.path"
									></v-img>
									<v-card>
									<p
										:class="this.resize.headline + ' font-weight-bold'"
										:style="[$vuetify.breakpoint.smAndDown ? 'line-height: 40px;' : 'line-height: 80px;']  +'text-align:center;' "
									>{{props.title}}</p>
										
									</v-card>
								
								
							</v-layout>
						</v-layout>
								<v-card class='display-1'>
									
								
									</v-card>
					</v-container>
				</v-img>
			</v-layout>
		</v-container>
		<!--END-->
    </div>
</template>

<script>

import { Mixin } from "~/mixins/windowSize.js";

export default {
	mixins: [Mixin],
	props: ['props'],
		data() {
		return {
			
			asset: this.$store.state.assetRoot2
		};
	},
}
</script>