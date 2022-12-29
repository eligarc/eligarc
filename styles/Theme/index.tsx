import { createContext, ReactElement, useEffect, useState } from "react";

const MyThemeContext = createContext({
	isDarkTheme: true,
	toggleThemeHandler: () => { },
});

interface ThemePropsInterface {
	children?: JSX.Element | JSX.Element[];
}

export function MyThemeContextProvider(
	props: ThemePropsInterface
): ReactElement {
	const [isDarkTheme, setIsDarkTheme] = useState(true);
	useEffect(() => initialThemeHandler());

	function isLocalStorageEmpty(): boolean {
		return !localStorage.getItem("isDarkTheme");
	}

	function initialThemeHandler(): void {
		if (isLocalStorageEmpty()) {
			localStorage.setItem("isDarkTheme", `true`);
			document!.querySelector("body")!.classList.add("dark-mode");
			setIsDarkTheme(true);
		} else {
			const isDarkTheme: boolean = JSON.parse(
				localStorage.getItem("isDarkTheme")!
			);
			isDarkTheme && document!.querySelector("body")!.classList.add("dark-mode");
			setIsDarkTheme(() => {
				return isDarkTheme;
			});
		}
	}

	function toggleThemeHandler(): void {
		const isDarkTheme: boolean = JSON.parse(
			localStorage.getItem("isDarkTheme")!
		);
		setIsDarkTheme(!isDarkTheme);
		toggleDarkClassToBody();
		setValueToLocalStorage();
	}

	function toggleDarkClassToBody(): void {
		document!.querySelector("body")!.classList.toggle("dark-mode");
	}

	function setValueToLocalStorage(): void {
		localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
	}

	return (
		<MyThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
			{props.children}
		</MyThemeContext.Provider>
	);
}

export default MyThemeContext;
