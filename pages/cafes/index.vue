<template>
	<div>



		<Title>
			<h1
				class="secondary--text main-title display-4"
				style="text-align: center;"
			>The best cafes in {{$store.state.city}}</h1>
					

		</Title>

		<v-container grid-list-lg class="mt-7">
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg3 v-for="(item, index) in bars_google" :key="index">
					<CardCafe :props="item" :link="'/bars/google/'" :index="index"></CardCafe>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	middleware: "cafes",
	data() {
		return {
			bars_google: this.$store.state.pageData,
			type: "bars",
			title: "bars in " + this.$store.state.city,
			preview:
				"See all the best " + this.type + " in " + this.$store.state.city,
			placeholder2: Math.floor(Math.random() * 2)
		};
	},

	components: {
		CardCafe: () => import("@/components/cards/CardCafe"),
		Title: () => import("@/components/transitions/Title")
	},
	methods: {
		placeholder(index) {
			return index % 2;
		}
	},

	head() {
		return {
			title: this.title,
			meta: [
				{
					hid: this.preview,
					name: this.title,
					content: this.preview
				}
			]
		};
	},
	jsonld() {
		return {
			"@context": "http://schema.org",
			"@type": "Article",
			name: this.title,
			description: this.preview,
			keywords: "bars"
		};
	}
};
</script>