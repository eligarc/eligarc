import type { AppProps } from 'next/app'

import Layout from '../components/Layout/Layout'
import { MyThemeContextProvider } from '../styles/Theme'

import '../styles/global.sass'
import '../styles/_variables.sass'

// export function reportWebVitals(metric) {
// 	console.log(metric)
// }

export default function MyApp({
	Component,
	pageProps
}: AppProps) {
	// Providers - Context/providers, Customs Themes, data
	// layout
	// props
	return (
		<MyThemeContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</MyThemeContextProvider>
	)
}
