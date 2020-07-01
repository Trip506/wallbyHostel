<template>
	<div>
		<v-dialog v-model="footerBook" max-width="75%" transition="dialog-transition">
			<v-card>
				<v-card-title primary-title>
					<p>Your Booking:</p>
				</v-card-title>
				<v-card-text>
					<v-form ref="form" v-model="form">
						<v-container grid-list-md>
							<v-layout row wrap>
								<v-flex xs12>
									<v-text-field
										label="Your Name"
										v-model="name"
										:rules="nameRules"
										:counter="20"
										value
										outlined
										required
									></v-text-field>
								</v-flex>

								<v-flex lg6>
									<v-text-field
										label="Your Email"
										v-model="email"
										:rules="emailRules"
										value
										outlined
										required
									></v-text-field>
								</v-flex>
								<v-flex lg6>
									<v-text-field
										label="Your Phone number (Optional)"
										type="phone"
										v-model="phone"
										required
										outlined
									></v-text-field>
								</v-flex>
								<v-flex xs12>
									<v-select
										outlined
										label="Dorm Type"
										v-model="select"
										:items="items"
										:rules="[v => !!v || 'Item is required']"
										required
									></v-select>
								</v-flex>
								<v-flex xs12>
									<v-textarea
										:value="'This is a reservation message by '+this.name+' for a '+this.select+' room. The checkin date is '+this.date+' and the checkout date is '+this.date2+'. For feedback please contact '+ this.email+ [this.phone ? ' or ' + this.phone : ''] +'.'"
										label="Your Booking"
										auto-grow
										outlined
										readonly
									></v-textarea>
								</v-flex>
								<v-flex xs12>
									<v-textarea
										label="Additional message (Optional)"
										v-model="message2"
										auto-grow
										value
										outlined
									></v-textarea>
								</v-flex>
								<v-flex xs12>
									<v-checkbox
										label="I agree for my personal information given here to be store on the site database"
										v-model="checkbox"
										:rules="[v => !!v || 'You must agree to continue!']"
										required
									></v-checkbox>
								</v-flex>
							</v-layout>
						</v-container>
					</v-form>
					{{message1}}
				</v-card-text>
				<v-card-actions>
					<v-layout justify-center>
						<v-btn
							x-large
							color="secondary "
							class="white--text"
							@click="submit_post"
							:disabled="!form"
						>Book Now</v-btn>
					</v-layout>
				</v-card-actions>
				<br />
			</v-card>
		</v-dialog>
		<footer class="v-footer v-sheet primary">
			<v-container grid-list-lg>
				<v-layout row wrap justify-center my-5>
					<v-flex lg3 xs10>
						<div align="center">
							<v-btn
								x-large
								outlined
								color="white"
								width="100%"
								@click="footerDatepicker = !footerDatepicker"
							>Arrival date</v-btn>
						</div>
						<v-menu close-on-click="false" bottom v-model="footerDatepicker">
							<template v-slot:activator="{ on }">
								<div v-on="on"></div>
							</template>
							<v-date-picker color="secondary lighten-1" v-model="date" light :reactive="true"></v-date-picker>
						</v-menu>
					</v-flex>
					<v-flex lg3 xs10>
						<div align="center">
							<v-btn
								x-large
								outlined
								color="white"
								width="100%"
								@click="footerDatepicker2 = !footerDatepicker2"
							>Checkout date</v-btn>
						</div>
						<v-menu close-on-click="true" bottom v-model="footerDatepicker2">
							<template v-slot:activator="{ on }">
								<div v-on="on"></div>
							</template>

							<v-date-picker color="secondary lighten-1" v-model="date2" light :reactive="true"></v-date-picker>
						</v-menu>
					</v-flex>
					<v-flex lg3 xs10>
						<div align="center">
							<v-btn x-large color="#dfd269" width="100%" @click="footerBook = true">
								<span class="black--text font-weight-bold">Book now</span>
							</v-btn>
						</div>
					</v-flex>
				</v-layout>
			</v-container>
			<v-layout row wrap>
				<v-flex lg6>
					<div class="accent">
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
					<div class="info">
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
			valid: false,
			form: false,
			footer: this.$store.state.footerData,
			footerDatepicker: false,
			footerDatepicker2: false,
			date: "",
			date2: "",
			footerBook: false,
			name: "",
			nameRules: [
				v => !!v || "Name is required",
				v => (v && v.length <= 20) || "Name must be less than 20 characters"
			],
			email: "",
			emailRules: [
				v => !!v || "E-mail is required",
				v =>
					/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
					"E-mail must be valid"
			],
			phone: "",
			phoneRules: [
				v =>
					/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
					"Phone number must be valid"
			],
			select: "",
			items: ["8 Bed Mixed", "4 Bed Mixed", "5 Bed Female", "Private"],
			message1: "",
			message2: "",
			checkbox: ""
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
		},
		async submit_post() {
			if (this.form == true) {
				// Native form submission is not yet supported
				let form = "book";
				const ip = await this.$axios.$post(
					this.$store.state.webRoot2 +
						"/api/forms/submit/" +
						form +
						"?token=" +
						this.$store.state.bookToken,
					{
						form: {
							name: this.name,
							email: this.email,
							phone: this.phone,
							bookingMessage:
								"This is a reservation message by " +
								this.name +
								" for a " +
								this.select +
								" room. The checkin date is " +
								this.date +
								" and the checkout date is " +
								this.date2 +
								". For feedback please contact " +
								this.email +
								[this.phone ? " or " + this.phone : ""] +
								".",
							message2: this.message2,

						}
					}
				);
			} else {
			}
		}
	},
	mounted() {
		this.onResize();
	}
};
</script>
