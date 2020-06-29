<template>
	<div>
		<v-dialog v-model="footerBook" max-width="250" transition="dialog-transition">
				<v-card>
					<v-card-title primary-title>
						<p>Your Booking:</p>
					</v-card-title>
					<v-card-text>
						<p>
							Arrival Date:
							<span class="secondary--text text--lighten-1 font-weight-bold">{{footerDate}}</span>
						</p>
						<p>
							Number of nights:
							<span class="secondary--text text--lighten-1 font-weight-bold">{{footerNights}}</span>
						</p>
					</v-card-text>
					<v-card-actions>
						<v-layout justify-center>
							<v-btn color="secondary lighten-1">Book Now</v-btn>
						</v-layout>
					</v-card-actions>
					<br />
				</v-card>
			</v-dialog>
		<footer class="v-footer v-sheet v-sheet--tile theme--dark v-footer--padless" data-booted="true">
			<v-container grid-list-lg>
				<v-layout row wrap justify-center>
					<v-flex lg3 xs10>
						<div align="center">
							<v-btn outlined color="white" width="100%" @click="footerDatepicker = !footerDatepicker">Arrival date</v-btn>
						</div>
						<v-menu close-on-click="false" bottom v-model="footerDatepicker">
							<template v-slot:activator="{ on }">
								<div v-on="on"></div>
							</template>
							<v-date-picker color="secondary lighten-1" v-model="footerDate" light :reactive="true"></v-date-picker>
						</v-menu>
					</v-flex>
					<v-flex lg3 xs10>
						<div align="center">
							<v-btn outlined color="white" width="100%" @click="footerDaypicker = !footerDaypicker">No of nights</v-btn>
						</div>
						<v-menu close-on-click="false" bottom v-model="footerDaypicker">
							<template v-slot:activator="{ on }">
								<div v-on="on"></div>
							</template>
							<v-list>
								<v-list-item v-for="(item, index) in 7" :key="index">
									<v-list-item-title>
										<v-btn color="white" width="100%" @click="footerNights = index+1" text>{{ index+1 }}</v-btn>
									</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>
					</v-flex>
					<v-flex lg3 xs10>
						<div align="center">
							<v-btn color="#dfd269" width="100%" @click="footerBook = true">
								<span class="black--text font-weight-bold">Book now</span>
							</v-btn>
						</div>
					</v-flex>
				</v-layout>
			</v-container>
			<v-layout row wrap>
				<v-flex lg6>
					<div style="background-color: #000000;">
						<v-container
							:style="'height:'+[$vuetify.breakpoint.smAndDown ? ' auto;' : (this.windowSize.y)*2/3]+'px;'"
						>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height mx-5 px-5>
									<div class="text" style="text-align: center;">
										<p
											:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']"
										>{{footer.name}}Wallaby Hostel</p>
										<p
											:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']"
										>Rruga Pandeli Bocari 9701, Albania</p>
										<p :class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']">+012 345 6789</p>
									</div>
								</v-layout>
							</v-container>
						</v-container>
					</div>
				</v-flex>
				<v-flex lg6>
					<div style="background-color: #b7b181;">
						<v-container
							:style="'height:'+[$vuetify.breakpoint.smAndDown ? ' auto;' : (this.windowSize.y)*2/3]+'px;'"
						>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height mx-5 px-5>
									<div class="text" style="text-align: center;">
										<nuxt-link to="contact">
											<v-hover>
												<div
													style="text-decoration: none;"
													slot-scope="{ hover }"
													@click="menu= false"
													:class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-2']+[hover ? ' black--text' : ' white--text'] + ' text--lighten-3'"
												>Contact us</div>
											</v-hover>
										</nuxt-link>
										<!-- <nuxt-link to="">
										<v-hover>
											<div
												style="text-decoration: none;"
												slot-scope="{ hover }"
												@click="menu= false"
												:class="[$vuetify.breakpoint.mdAndDown ? 'headline' : 'display-2']+[hover ? ' black--text' : ' white--text'] + ' text--lighten-3'"
											>Terms & Conditions</div>
										</v-hover>
										</nuxt-link>-->
										<nuxt-link to>
											<v-hover>
												<div
													style="text-decoration: none;"
													slot-scope="{ hover }"
													@click="menu= false"
													:class="[$vuetify.breakpoint.mdAndDown ? 'headline' : 'display-2']+[hover ? ' black--text' : ' white--text'] + ' text--lighten-3'"
												>info@wallabyhostel.com</div>
											</v-hover>
										</nuxt-link>
									</div>
								</v-layout>
							</v-container>
						</v-container>
					</div>
				</v-flex>
			</v-layout>
			<div class="text-center pa-3 col col-12">
				© 2020 {{$store.state.name}} —
				<a
					class="ex2"
					href="https://goborshi.netlify.app/team"
					target="_blank"
				>Developers</a>
			</div>
		</footer>
	</div>
</template>
<style lang="css">
a.ex1 {
	color: black;
}
a.ex1:hover,
a.ex1:active {
	color: white;
}

a.ex2 {
	color: white;
}
a.ex2:hover,
a.ex2:active {
	color: #b7b181;
}
</style>
<script>
import { Mixin } from "~/mixins/navigation.js";

export default {
	data() {
		return {
			windowSize: {
				x: 0,
				y: 0
			},
			footer: this.$store.state.footerData,
			footerDatepicker: false,
			footerDaypicker: false,
			footerDate: "",
			footerNights: "",
			footerBook: false
		};
	},
	middleware: "businessDetails",

	mixins: [Mixin],

	components: {
		SocialMedia: () => import("@/components/SocialMedia")
	},

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
