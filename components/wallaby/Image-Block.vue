<template>
	<div>
		<v-container fluid fill-height class="ma-0 pa-0">
			<v-layout row wrap>
				<!--IMAGE LEFT-->
				<v-flex lg6>
					<v-img height="100%" :src="asset + props.image3.path"></v-img>
				</v-flex>
				<!--END-->
				<!--BLOCK RIGHT WIHT TEXT-->
				<v-flex lg6>
					<div style="background-color: #000000; height: 100%;">
						<v-container>
							<v-container fill-height>
								<v-layout align-center justify-center row fill-height>
									<v-layout column cols="12" tag="h1" pl-2>
										<div class="text">
											<p :class="this.resize.headline + ' font-weight-bold'">{{props.block2_title}}</p>
											<div v-html="props.block2_text" :class="this.resize.bigText  + ' font-weight-bold'"></div>
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
	</div>
</template>

<script>
import { Mixin } from "~/mixins/windowSize.js";

export default {
	mixins: [Mixin],
	props: ["props"]
};
</script>