<template>
	<div>
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap fill-height>
				<v-img
					:height="[$vuetify.breakpoint.smAndDown ? 'auto' : (this.windowSize.y)]"
					:src="asset + props.image5.path"
				>
					<v-container fill-height>
						<v-layout align-center justify-center row fill-height>
							<v-layout column class="white--text text-center">
								<div class="text">
									<p
										:class="this.resize.subtitle"
										:style="[$vuetify.breakpoint.smAndDown ? 'line-height: 40px;' : 'line-height: 80px;']"
									>{{props.image5_title}}</p>
									<v-img
										v-if="props.image5_logo"
										style="margin: auto;"
										:width="this.resize.svgSize"
										:src="asset + props.image5_logo.path"
									></v-img>
									<p :class="this.resize.subtitle">{{props.image5_text}}</p>
								</div>
								<attractions :props="cards"></attractions>
							</v-layout>
						</v-layout>
					</v-container>
				</v-img>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
import { Mixin } from "~/mixins/windowSize.js";

export default {
	mixins: [Mixin],
	props: ["props", "cards"],
	data() {
		return {
			asset: this.$store.state.assetRoot2
		};
	},
	components: {
		attractions: () => import("@/components/wallaby/attractions")
	}
};
</script>