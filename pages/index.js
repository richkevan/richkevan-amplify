import styles from '../styles/Home.module.css'
import HeroSlide from '../components/Hero_component/HeroSlide'
import PageMeta from '../components/Meta/meta'

export default function Home() {
  return (
    <div className={styles.container}>
      <PageMeta />
      <HeroSlide />
    </div>
  )
}
