import Link from 'next/link'
import Image from 'next/image'

import Logo from '../../public/logo.png'
import IcoMenu from '../../public/icon_menu.svg'

import styles from '../../styles/Navbar.module.sass'

const Navbar = () => {
	return (
		<nav className={`d-center ${styles.navbar}`}>
			<Image src={IcoMenu} alt='menu' className={styles.menu} width={60} height={60} />
			<div className='navbar-left'>
				<Link href='/'>
					<Image src={Logo} alt='logo' priority className='logo' width={150} />
				</Link>
			</div>
			<div className={styles['navbar-right']}>
				<Link href='https://github.com/eligarc' className={styles['social-network']} rel='noopener noreferrer' target='_blank'>
					<i className={`fa-brands fa-github ${styles.icon} ${styles.github}`}></i>
				</Link>
				<Link href='https://www.linkedin.com/in/eligarc/' className={styles['social-network']} rel='noopener noreferrer' target='_blank'>
					<i className={`fa-brands fa-linkedin-in ${styles.icon} ${styles.linkedin}`}></i>
				</Link>
				<Link href='https://twitter.com/_eligarc' className={styles['social-network']} rel='noopener noreferrer' target='_blank'>
					<i className={`fa-brands fa-twitter ${styles.icon} ${styles.twitter}`}></i>
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
