import React from 'react'
import Navbar from '../Navbar/Navbar'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'

type Props = {
	children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div /*className={styles.container}*/ >
			<Navbar />
			<Menu />
			{children}
			<Footer />
		</div>
	)
}

export default Layout
