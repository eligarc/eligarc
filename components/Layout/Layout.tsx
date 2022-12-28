import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './layout.module.sass'

type Props = {
	children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div /*className={styles.container}*/ >
			<Navbar />
			{children}
			<footer>This is the footer</footer>
		</div>
	)
}

export default Layout
