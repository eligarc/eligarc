import { useContext } from 'react'
import Link from 'next/link'
import MyThemeContext from '../../styles/Theme'

import styles from '../../styles/Menu.module.sass'

const Menu = () => {
	const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } = useContext(MyThemeContext)

	function toggleThemeHandler(): void {
		themeCtx.toggleThemeHandler();
	}

	return (
		<div className={`d-center ${styles.menu}`}>
			<nav className={styles['menu-links']}>
				<Link href='/' prefetch={false} className={styles.link}>
					<i className='fa-solid fa-house-chimney'></i>
				</Link>
				<Link href='/about' prefetch={false} className={styles.link}>
					Acerca
				</Link>
				<Link href='/about' prefetch={false} className={styles.link}>
					Logros
				</Link>
			</nav>
			<label onClick={toggleThemeHandler} className={styles['theme-switch']} />
		</div>
	)
}

export default Menu
