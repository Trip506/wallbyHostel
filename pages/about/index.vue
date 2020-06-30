<template>
	<div>

		<Splash :props="about"></Splash>
		<BlockImage :props="about"> </BlockImage>
		<ImageBlock :props="about"> </ImageBlock>
		<youtube :props="videos"> </youtube>
		<bars :props="bars"> </bars>
		<cafes :props="cafes"> </cafes>
		<beach :props="beaches"> </beach>
		<attractions :props="attractions"></attractions>

d

	
	
	</div>
</template>
<script>
import { Mixin } from "~/mixins/windowSize.js";

export default {
	mixins: [Mixin],
		components: {
		Splash: () => import("@/components/wallaby/Splash"),
			BlockImage: () => import("@/components/wallaby/Block-Image"),
			ImageBlock: () => import("@/components/wallaby/Image-Block"),
			youtube: () => import("@/components/wallaby/youtube"),
			bars: () => import("@/components/wallaby/bars"),
			cafes: () => import("@/components/wallaby/cafes"),
			beach: () => import("@/components/wallaby/beach"),
			attractions: () => import("@/components/wallaby/attractions"),
	},
	data() {
		return {
		
			about: this.$store.state.pageData[0],
			map: this.$store.state.pageData[1],
			saranda: this.$store.state.pageData[2],
			videos: this.$store.state.pageData[2].cl_youtube,
			bars: this.$store.state.pageData[2].cl_saranda_bars,
			cafes: this.$store.state.pageData[2].cl_cafes,
			beaches: this.$store.state.pageData[2].cl_saranda_beaches,
			attractions: this.$store.state.pageData[2]. cl_attractions,
			asset: this.$store.state.assetRoot2
		};
	},
	middleware: "about",


};
</script>
