import { createContext, ReactElement, useEffect, useState } from 'react'

const MyThemeContext = createContext({
	isDarkTheme: false,
	toggleThemeHandler: () => { },
})

interface ThemePropsInterface {
	children?: JSX.Element | JSX.Element[]
}

export function MyThemeContextProvider(props: ThemePropsInterface): ReactElement {
	const [isDarkTheme, setIsDarkTheme] = useState(false)
	useEffect(() => initialThemeHandler(), [])

	function initialThemeHandler(): void {
		if (!sessionStorage.getItem('isDarkTheme')) {
			sessionStorage.setItem('isDarkTheme', 'false')
		} else {
			const isDarkTheme: boolean = JSON.parse(
				sessionStorage.getItem('isDarkTheme')!
			)
			isDarkTheme && document!.querySelector('body')!.classList.add('dark-mode')
			setIsDarkTheme(() => {
				return isDarkTheme
			})
		}
	}

	function toggleThemeHandler(): void {
		const isDarkTheme: boolean = JSON.parse(
			sessionStorage.getItem('isDarkTheme')!
		)
		setIsDarkTheme(!isDarkTheme)
		document!.querySelector('body')!.classList.toggle('dark-mode')
		sessionStorage.setItem('isDarkTheme', `${!isDarkTheme}`)
	}

	return (
		<MyThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
			{props.children}
		</MyThemeContext.Provider>
	)
}

export default MyThemeContext
