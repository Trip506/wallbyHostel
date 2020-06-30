<template>
	<div>
		<v-container>
		
			<v-form v-model="valid" ref="form" lazy-validation>
					<div class='display-2 primary--text'> 
				Send us a message
			</div>
			<div class="display-1 accent--text mb-5"> We'll get back to you as soon as we can</div>
				<v-text-field
				
					label="Your Name"
					v-model="name"
					:rules="nameRules"
					:counter="20"
					value
					light
					outlined
					required
				></v-text-field>
				<v-text-field
					label="Your Email"
					v-model="email"
					:rules="emailRules"
					value
					light
					outlined
					required
				></v-text-field>
				<!-- <v-text-field type="password" label="" v-model="password" :rules="emailRules" required></v-text-field> -->
				<v-select
					light
					outlined
					label="Dorm Type"
					v-model="select"
					:items="items"
					:rules="[v => !!v || 'Item is required']"
					required
				></v-select>

				<v-textarea
					label="Your message to us"
					v-model="message"
					auto-grow
					value
					light
					outlined
					required
				></v-textarea>

				<v-checkbox
					light
					label="I agree for my personal information given here to be store on the site database"
					v-model="checkbox"
					:rules="[v => !!v || 'You must agree to continue!']"
					required
				></v-checkbox>

				<v-btn
					x-large
					color="secondary "
					class="white--text"
					@click="submit_post"
					:disabled="!valid"
				>Send</v-btn>
				<!-- <v-btn @click="clear">clear</v-btn> -->
			</v-form>
		</v-container>
		<v-dialog v-model="dialog" max-width="300" transition="dialog-transition">
			<v-card>
				<div v-if="this.valid==true">
					<v-card-title primary-title>
						<p>
							Thanks for contacting us!
							<br />You will hear from us soon.
						</p>
					</v-card-title>
					<v-card-actions>
						<v-layout justify-center>
							<nuxt-link to="/">
								<v-btn color="secondary lighten-1" @click="clear">Return to home</v-btn>
							</nuxt-link>
						</v-layout>
					</v-card-actions>
					<br />
				</div>
				<div v-else>
					<v-card-title primary-title>
						<p>
							Semething went wrong!
							<br />Please try again.
						</p>
					</v-card-title>
				</div>
			</v-card>
		</v-dialog>
	</div>
</template>
		
        <script>
import axios from "axios";

import { Mixin } from "~/mixins/windowSize.js";

export default {
	mixins: [Mixin],
	data: () => ({
		valid: false,
		name: "",
		nameRules: [
			v => !!v || "Name is required",
			v => (v && v.length <= 20) || "Name must be less than 10 characters"
		],
		email: "",
		emailRules: [
			v => !!v || "E-mail is required",
			v =>
				/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
				"E-mail must be valid"
		],
		select: null,
		items: ["8 Bed Mixed", "4 Bed Mixed", "5 Bed Female", "Private"],
		checkbox: false,
		message: "",
		error: 0,
		dialog: false
	}),

	methods: {
		async submit_post() {
			if (this.valid == true) {
				// Native form submission is not yet supported
				this.error = 0;
				let form = "contact";
				const ip = await this.$axios.$post(
					this.$store.state.webRoot2 +
						"/api/forms/submit/" +
						form +
						"?token=" +
						this.$store.state.contactToken,
					{
						form: {
							name: this.name,
							email: this.email,
							select: this.select,
							messaage: this.message,
							checkbox: this.checkbox
						}
					},
					(this.dialog = true),
				);
			} else {
				(this.dialog = true),
				this.error = 1;
			}
		},
		clear() {
			this.$refs.form.reset();
		}
	}
};
</script>
	