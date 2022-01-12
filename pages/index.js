import styles from '@styles/Home.module.css'
import HeroSlide from '@components/Hero_component/HeroSlide'
import PageMeta from '@components/Meta/meta'

const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <PageMeta />
      <HeroSlide />
    </div>
  )
}

export default Home