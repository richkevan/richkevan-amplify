import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeroSlide from '../components/Hero_component/HeroSlide'

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroSlide />
    </div>
  )
}
