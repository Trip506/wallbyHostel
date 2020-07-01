<template>
	<div>
		<iframe
			:src="'https://www.youtube.com/embed/'+props[0].id"
			frameborder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			:height="this.windowSize.y"
			width="100%"
			id="player"
		></iframe>
		<v-container grid-list-lg>
			<p :class="this.resize.headline" style="text-align: center;">More Youtube Videos</p>
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg3 v-for="(item, index) in props.slice(2)" :key="index">
					<v-hover>
						<v-card
							flat
							@click.native="dialog = true; arrNumber = index"
							slot-scope="{ hover }"
							:class="`elevation-${hover ? 12 : 0}`"
						>
							<nuxt-link to style="text-decoration:none;" class="white--text">
								<v-img :src="'https://i.ytimg.com/vi/'+item.id+'/maxresdefault.jpg'" height="200px"></v-img>
								<p
									class="font-weight-bold"
									style="height: 2.8rem; line-height: 1.5rem; overflow: hidden;"
								>{{item.name}}</p>
								{{item.viewCount}} Views &#183; {{item.likes}} likes
							</nuxt-link>
						</v-card>
					</v-hover>
				</v-flex>
			</v-layout>
		</v-container>
		<v-dialog
			v-model="dialog"
			scrollable
			fullscreen
			hide-overlay
			transition="dialog-bottom-transition"
		>
			<v-card>
				<v-layout justify-space-between>
					<div>
						<v-btn icon @click="dialog=false;" color="red">
							<v-icon>mdi-close</v-icon>
						</v-btn>
					</div>
					<v-tooltip top>
						<template v-slot:activator="{ on }">
							<a target="_blank" :href="props[arrNumber].url" v-on="on">
								<v-img height="32" width="32" src="/img/link.png"></v-img>
							</a>
						</template>
						<span>Watch on Youtube</span>
					</v-tooltip>
				</v-layout>

				<iframe
					v-if="dialog"
					:src="'https://www.youtube.com/embed/'+props[this.arrNumber].id"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					height="100%"
					id="player"
				></iframe>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import { Mixin } from "~/mixins/windowSize.js";

export default {
	mixins: [Mixin],
	props: ["props"],
	data() {
		return {
			type: "Youtube",
			placeholder2: Math.floor(Math.random() * 2),
			dialog: false,
			arrNumber: "0"
		};
	}
};
</script>