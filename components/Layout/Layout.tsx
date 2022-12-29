import React from 'react'
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar'
// import styles from './layout.module.sass'

type Props = {
	children: React.ReactNode;
};

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
