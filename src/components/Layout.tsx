import Navbar from "./Navbar"
import styles from '../styles/components.module.scss'

export default function Layout({ children } : any) {
  return (
	<div className={`${styles.wrapper}`}>
		<Navbar/>
		<main className={`${styles.main}`}>{children}</main>
	</div>
  )
}
