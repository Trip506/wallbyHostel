<template>
	<div>
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 sm12 md6 lg3 v-for="(item, index) in videos" :key="index">
					<v-hover>
						<v-card
							flat
							@click.native="dialog = true; arrNumber = index"
							slot-scope="{ hover }"
							:class="`elevation-${hover ? 12 : 0}`"
						>
							<nuxt-link to style="text-decoration:none;">
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
	</div>
</template>