import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import '../global.sass';

export function reportWebVitals(metric) {
	console.log(metric)
}

export default function MyApp({ Component, pageProps }: AppProps) {
	// Providers - Context/providers, Customs Themes, data
	// layout
	// props
	return (
	<Layout>
		<Component {...pageProps} title={"Hola"} />
	</Layout>
	)
}
