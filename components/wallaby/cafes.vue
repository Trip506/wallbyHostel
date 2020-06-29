		<template >
	<section id="Bar">
		<v-container grid-list-lg>
			<p :class="this.resize.headline">Our favourite Cafes in {{$store.state.city}}</p>
			<v-responsive class="mx-auto mb-12" width="56">
			</v-responsive>
			<v-layout row wrap mt-5>
				<v-container grid-list-lg>
					<v-layout row wrap>
						<v-flex xs12 sm6 md4 lg3 v-for="(item, index) in props.slice(0,4)" :key="index">
							<CardBar :props="item"></CardBar>
						</v-flex>
					</v-layout>
				</v-container>
			</v-layout>
			<br />
		</v-container>
	</section>
</template>

<script>
import { Mixin } from "~/mixins/windowSize.js";

export default {
	mixins: [Mixin],
	components: { CardBar: () => import("@/components/cards/CardBar") },
	props: ["props"],
	methods: {
		placeholder(index) {
			return index % 2;
		}
	}
};
</script>

<style lang="css" scoped>
h1,
h2,
h3,
h4,
h5,
p {
	text-align: center;
}
</style>