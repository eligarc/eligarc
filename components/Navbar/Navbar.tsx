import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../asset/logoEligarc.svg'
import style from './navbar.module.sass'
import LogoGithub from '../../asset/logo_github.svg'
const Navbar = () => {
	return (
		<nav className={style.navbar}>
		<Image src="./icons/icon_menu.svg" alt="menu" className={style.menu} width={60} height={60} />
		<div className="navbar-left">
			<Image src={Logo} alt="logo" className="logo" width={120} height={50} />
			{/* <ul>
				<li>
					<Link href="/">All</Link>
				</li>
				<li>
					<Link href="/">Clothes</Link>
				</li>
				<li>
					<Link href="/">Electronics</Link>
				</li>
				<li>
					<Link href="/">Furnitures</Link>
				</li>
				<li>
					<Link href="/">Toys</Link>
				</li>
				<li>
					<Link href="/">Others</Link>
				</li>
			</ul> */}
		</div>
		<div className={style['navbar-right']}>
			<button className={style.github}>
				<Image src={LogoGithub} alt="github" width={30} height={30} />
			</button>
		</div>
	</nav>
	)
}

export default Navbar
