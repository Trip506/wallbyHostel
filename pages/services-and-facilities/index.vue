<template>
	<div>
		<!--ROW 1-->
		<!--IMAGE WITH LOGO AND TEXT-->
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap fill-height>

								<v-img
					:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*2/3 : (this.windowSize.y)]"
					:src="asset + services.image1.path"
				>
					<v-container fill-height>
						<v-layout align-center justify-center row fill-height>
							<v-layout column class="white--text text-center">
							
									<v-img
										style="margin: auto;"
										:width="[$vuetify.breakpoint.smAndDown ? '40%' : '30%']"
										:src="asset + services.image1_logo.path"
									></v-img>
									<v-card>
									<p
										:class="this.resize.headline + ' font-weight-bold'"
										:style="[$vuetify.breakpoint.smAndDown ? 'line-height: 40px;' : 'line-height: 80px;']  +'text-align:center;' "
									>{{services.title}}</p>
										
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
		<!--END ROW 1-->
		<!--ROW 2-->
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<!--BLOCK LEFT WITH TEXT-->
				<v-flex lg6 sm12>
					<div style=" height: 100%;" class='success lighten-2'>
						<v-container>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column cols="12" tag="h1" pl-2>
										<div class="text black--text">
											<p :class="this.resize.headline  + ' font-weight-bold'">{{services.block1_title}}</p>
											<div v-html="services.block1_text" :class="this.resize.bigText + ' font-weight-bold'"></div>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>
				</v-flex>
				<!--END-->
				<!--IMAGE RIGHT-->
				<v-flex lg6 sm12>
					<v-img height="100%" :src="asset + services.image2.path"></v-img>
				</v-flex>
				<!--END-->
			</v-layout>
		</v-container>
		<!--ROW 2 END-->
		<!--ROW 3-->
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<!--IMAGE LEFT-->
				<v-flex lg6 sm12>
					<v-img height="100%" :src="asset + services.image3.path"></v-img>
				</v-flex>
				<!--END-->
				<!--BLOCK RIGHT WITH TEXT-->
				<v-flex lg6 sm12>
					<div  style=" height: 100%;" class='warning lighten-2'>
						<v-container>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column cols="12" tag="h1" pl-2>
										<div class="text black--text">
											<p :class="this.resize.headline  + ' font-weight-bold'">{{services.block2_title}}</p>
											<div v-html="services.block2_text" :class="this.resize.bigText + ' font-weight-bold'"></div>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>
				</v-flex>
				<!--END-->
			</v-layout>
		</v-container>
		<!--ROW 3 END-->
		<!--ROW 4-->
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<!--BLOCK LEFT WITH TEXT-->
				<v-flex lg6 sm12>
					<div  style=" height: 100%;" class='accent lighten-2'>
						<v-container>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column cols="12" tag="h1" pl-2>
										<div class="text black--text">
											<p :class="this.resize.headline  + ' font-weight-bold'">{{services.block3_title}}</p>
											<div v-html="services.block3_text" :class="this.resize.bigText + ' font-weight-bold'"></div>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>
				</v-flex>
				<!--END-->
				<!--IMAGE RIGHT-->
				<v-flex lg6 sm12>
					<v-img height="100%" :src="asset + services.image4.path"></v-img>
				</v-flex>
				<!--END-->
			</v-layout>
		</v-container>
		<!--ROW 4 END-->
		<!--ROW 5-->
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<!--IMAGE LEFT-->
				<v-flex lg6 sm12>
					<v-img height="100%" :src="asset + services.image5.path"></v-img>
				</v-flex>
				<!--END-->
				<!--BLOCK RIGHT WITH TEXT-->
				<v-flex lg6 sm12>
					<div  style=" height: 100%;" class='primary lighen-2'>
						<v-container>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column cols="12" tag="h1" pl-2>
										<div class="text">
											<p :class="this.resize.headline  + ' font-weight-bold'">{{services.block4_title}}</p>
											<div v-html="services.block4_text" :class="this.resize.bigText + ' font-weight-bold'"></div>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>
				</v-flex>
				<!--END-->
			</v-layout>
		</v-container>
		<!--ROW 5 END-->
		<!--ROW 6-->
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<v-flex lg6 sm12>
					<!--BLOCK LEFT WITH TEXT-->
					<div  style=" height: 100%;" class='secondary lighten-2'>
						<v-container>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column cols="12" tag="h1" pl-2>
										<div class="text black--text">
											<p :class="this.resize.headline  + ' font-weight-bold'">{{services.block5_title}}</p>
											<div v-html="services.block5_text" :class="this.resize.bigText + ' font-weight-bold'"></div>
										</div>
									</v-layout>
								</v-layout>
							</v-container>
						</v-container>
					</div>
				</v-flex>
				<!--END-->
				<!--IMAGE RIGHT-->
				<v-flex lg6 sm12>
					<v-img height="100%" :src="asset + services.image6.path"></v-img>
				</v-flex>
				<!--END-->
			</v-layout>
		</v-container>
		<!--ROW 6 END-->
	</div>
</template>
<script>
import { Mixin } from "~/mixins/windowSize.js";
export default {
	mixins: [Mixin],
	data() {
		return {
			windowSize: {
				x: 0,
				y: 0
			},
			services: this.$store.state.pageData[0],
			map: this.$store.state.pageData[1],
			asset: this.$store.state.assetRoot2
		};
	},
	middleware: "services_and_facilities",

	methods: {
		onResize() {
			this.windowSize = { x: window.innerWidth, y: window.innerHeight };
		}
	},
	mounted() {
		this.onResize();
	}
};
</script>
