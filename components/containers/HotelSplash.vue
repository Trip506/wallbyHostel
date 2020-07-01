<template>
	<div>
		<v-dialog v-model="book" max-width="75%" transition="dialog-transition">
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
									<v-textarea label="Additional message (Optional)" v-model="message2" auto-grow value outlined></v-textarea>
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
		<v-container fluid class="ma-0 pa-0">
			<v-layout row wrap fill-height>
				<v-flex lg6>
					<div style="background-color:#fdb813;" class="black--text">
						<v-img :src="asset + props.logo.path" :height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*1/5 : (this.windowSize.y)/2]" contain></v-img>
					</div>

					<v-img
						:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*4/5 : (this.windowSize.y)/2]"
						:src="asset + props.image1.path"
					>
						<v-container fill-height>
							<v-layout mt-5 column align-end fill-height>
								<v-layout column class="white--text text-center">
									<div class="text">
										<v-card>
											<p
												:class="'display-3 text-uppercase font-weight-black secondary--text text--lighten-1'"
											>{{props.image1_text}}</p>
										</v-card>
									</div>
								</v-layout>
							</v-layout>
						</v-container>
					</v-img>
				</v-flex>
				<v-flex lg6>
					<div style="background-color:white;" class="black--text">
						<v-container
							class="fill-height"
							:style="'height:'+[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*2/3 : (this.windowSize.y)/2]+'px'"
						>
							<v-container grid-list-lg>
								<v-layout justify-center row mt-5>
									<v-flex xs12>
										<p
											style="text-align:center;"
											:class="this.resize.headline+' font-weight-bold'"
										>{{props.bookText}}</p>
									</v-flex>

									<br />
									<v-flex lg6 xs12>
										<div align="center">
											<v-btn
												x-large
												outlined
												color="black"
												width="100%"
												@click="datepicker = !datepicker"
											>{{props.button1}}</v-btn>
										</div>
										<v-menu close-on-click="true" bottom v-model="datepicker">
											<template v-slot:activator="{ on }">
												<div v-on="on"></div>
											</template>
											<v-date-picker
												color="secondary lighten-1"
												centered
												v-model="date"
												light
												:reactive="true"
											></v-date-picker>
										</v-menu>
									</v-flex>
									<v-flex lg6 xs12>
										<div align="center">
											<v-btn
												x-large
												outlined
												color="black"
												width="100%"
												@click="datepicker2 = !datepicker2"
											>{{props.button2}}</v-btn>
										</div>
										<v-menu close-on-click="true" bottom v-model="datepicker2" flat>
											<template v-slot:activator="{ on }">
												<div v-on="on"></div>
											</template>

											<v-date-picker color="secondary lighten-1" v-model="date2" light :reactive="true"></v-date-picker>
										</v-menu>
									</v-flex>

									<v-flex xs12>
										<div align="center">
											<v-btn color="secondary" x-large width="100%" @click="book = true">
												<span class="black--text font-weight-bold">{{props.button3}}</span>
											</v-btn>
										</div>
									</v-flex>
								</v-layout>
							</v-container>
						</v-container>
					</div>

					<v-img
						:height="[$vuetify.breakpoint.smAndDown ? (this.windowSize.y)*1/3 : (this.windowSize.y)/2]"
						:src="asset + props.image2.path"
					>
						<v-container fill-height>
							<v-layout align-center justify-center row fill-height>
								<v-layout column class="white--text text-center">
									<div class="text">
										<v-img v-if="props.svg" style="margin: auto;" width="40%" :src="asset + props.svg.path"></v-img>
									</div>
								</v-layout>
							</v-layout>
						</v-container>
					</v-img>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>


<script>
import { Mixin } from "~/mixins/windowSize.js";
//import mobilefriendly from "~/mixins/mobilefriendly.js";

export default {
	mixins: [Mixin],
	props: ["props"],
	data() {
		return {
			valid: false,
			form: false,
			asset: this.$store.state.assetRoot2,
			datepicker: false,
			datepicker2: false,
			date: "",
			date2: "",
			book: false,
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
	methods: {
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
		},
		clear() {
			this.$refs.form.reset();
		}
	}
};
</script>