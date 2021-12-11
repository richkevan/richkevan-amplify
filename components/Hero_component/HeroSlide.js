import Image from 'next/image';
import styles from './Hero.module.css';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import SlideObject from '../../public/slides';
import { motion } from 'framer-motion';
let cx = classNames.bind(styles);

const HeroSlide = () => {
    const [headline, setHeadline] = useState('Hey, I\'m a full-stack developer.\n Welcome to my portfolio.');
    const [subHeadline, setSubHeadline] = useState('Here you can find my projects and learn more about me.');
    const [slide, setSlide] = useState(SlideObject);

    useEffect(() => {
        const interval = setInterval(() => {
            let newSlide = {...slide};
            let slideKeys = Object.keys(newSlide);
            for (let i=0; i < slideKeys.length; i++) {
                if (newSlide[slideKeys[i]].display && i+1 < slideKeys.length) {
                    newSlide[slideKeys[i]].display = false;
                    newSlide[slideKeys[i+1]].display = true;
                    break;
                }
                else if (newSlide[slideKeys[i]].display && i+1 == slideKeys.length) {
                    newSlide[slideKeys[i]].display = false;
                    newSlide[slideKeys[0]].display = true;
                    break;
                }
            }
                
            setSlide(newSlide);
        }, 5500);
        return () => clearInterval(interval);
}, [slide]);
      
    return (
    // Page Container
        <div className={styles.container}>
    {/*Hero Section*/}
            <div className={styles.heroSlide}>
    {/* Hero Heading */}
                <div className={styles.headings}>
                    <h3>{headline}</h3>
                    <h5>{subHeadline}</h5>
                </div>
    {/* Hero Slide Titles */}
                
                {Object.keys(slide).map(obj => {
                    if (slide[obj].display) {
                        return (
                            <div className={styles.title} key={slide[obj].title}>
                            <h5>Some Hobbies and Passions</h5>
                            <motion.div  
                            animate={{
                                transform: ['translateX(-100%)','translateX(5%)', 'translateX(5%)', 'translateX(-100%)'],
                                opacity: [.3, .9, .7, 0]
                            }}
                            transition={{
                                duration: 5.5,
                                times: [0, .1,.9, 1],
                            }}
                            >
                            <h1>{slide[obj].title}</h1>
                            </motion.div>
                            </div>
                        )
                    }
                })}
                
    {/* Hero Slide Images */}
                {Object.keys(slide).map(obj => {
                    if (slide[obj].display) {
                        return (
                            <motion.div className={styles.slideContainer} key={slide[obj].title} 
                            animate={{
                                transform: ['translateX(200%)','translateX(80%)', 'translateX(80rk%)', 'translateX(200%)'],
                                opacity: [.3, .9, .7, 0]
                            }}
                            transition={{
                                duration: 5.5,
                                times: [0, .1,.9, 1],
                            }}
                            >
                                <Image src={slide[obj].image} alt={slide[obj].title} layout='fill' objectFit='cover'/>
                            </motion.div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default HeroSlide;