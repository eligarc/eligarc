import Link from 'next/link'
import styles from '../../styles/Footer.module.sass'

const Footer = () => {
	return (
		<footer className={`${styles.footer}`}>
			<ul className={styles['social-networks']}>
				<li>
					<Link href='https://github.com/eligarc' target='_blank' rel='noopener noreferrer'>Github</Link>
				</li>
				<li>
					<Link href='https://www.linkedin.com/in/eligarc/' target='_blank' rel='noopener noreferrer'>linkedin</Link>
				</li>
				<li>
					<Link href='https://twitter.com/_eligarc' target='_blank' rel='noopener noreferrer'>twitter</Link>
				</li>
			</ul>
			<span>Hecho por eligarc con <i className={`fa-solid fa-heart ${styles.heart}`}></i></span>
		</footer>
	)
}

export default Footer
