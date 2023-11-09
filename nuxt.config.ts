// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	
	css: ["~/assets/style/main.scss"],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: "@use '~/assets/style/colors.scss' as *;",
				},
			},
		},
	},

	app: {
		head: {
			title: "Houses Test",

			htmlAttrs: {
				lang: "ru"
			}
		}
	},
	
});
