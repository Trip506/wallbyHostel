<template>
	<v-hover class="text-capitalize">
		<v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
			<nuxt-link style="text-decoration:none; color: primary;" :to="'/towns/'+props.slug">
				<v-img v-if="props.imageUrls" max-height="100" :src="props.imageUrls[0]">
					<template v-slot:placeholder>
						<v-layout fill-height align-center justify-center ma-0>
							<v-progress-circular indeterminate color="primary"></v-progress-circular>
						</v-layout>
					</template>
				</v-img>

				<v-sheet v-else height="100" color="primary lighten-2">
					<v-layout row fill-height align-center justify-start>
						<v-flex>
							<v-card-title class="primary--text" style="word-break: normal;">{{props.title}}</v-card-title>
							<v-card-subtitle class="hidden-xs-only">{{props.categoryName}}</v-card-subtitle>
						</v-flex>
					</v-layout>
				</v-sheet>

				<v-card-title v-if="props.imageUrls" style="word-break: normal;">{{props.title}}</v-card-title>
				<v-card-text>
					<p>
						<v-icon small>mdi-image</v-icon>
						<span v-if="props.imageUrls">
							{{$t('view')}}
							{{props.imageUrls.length}} {{$t('images')}}
						</span>
						<span v-else>
							{{$t('no')}}
							{{$t('images')}}
						</span>
					</p>
					<!-- <v-icon small>mdi-map-marker</v-icon>

					{{props.address}}-->
				</v-card-text>
			</nuxt-link>
		</v-card>
	</v-hover>
</template>

<script>
export default {
	props: ["props", "link"],
	components: {
		Dialog: () => import("@/components/Dialog")
	},
	methods: {
		icon(c) {
			switch (c) {
				case "Restaurant":
					return "mdi-silverware-fork-knife";
				case "Mediterranean restaurant":
					return "mdi-food-variant";
				case "Ethnic restaurant":
					return "mdi-globe-model";
				case "Bar":
					return "mdi-bottle-soda-outline";
				case "Pub":
					return "mdi-glass-mug-variant";
				case "Seafood restaurant":
					return "mdi-fish";
				case "Cocktail bar":
					return "mdi-glass-cocktail";
				case "Cafe":
					return "mdi-coffee";
				case "":
					return "mdi-beer";
			}
		}
	}
};
</script>

<style lang="css">
a {
	text-decoration: none;
	color: none;
}
</style>