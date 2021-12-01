import Image from 'next/image';
import styles from './Hero.module.css';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Gaming from '../../public/gaming.png';
import Arduino from '../../public/arduino.png';
import Outdoors from '../../public/outdoors.png';
import Robotics from '../../public/robotics.png';
import { motion } from 'framer-motion';

let cx = classNames.bind(styles);

const HeroSlide = () => {
    const [headline, setHeadline] = useState('Hey, I\'m a full-stack developer.' +`\n` +'Welcome to my portfolio.');
    const [subHeadline, setSubHeadline] = useState('Here you can find my projects and learn more about me.');
    const [slide, setSlide] = useState({
        slide1: {
            title: 'Gaming',
            image: Gaming,
            display: true
        },
        slide2: {
            title: 'Raspberry Pi/Arduino',
            image: Arduino,
            display: false
        },
        slide3:{
            title: 'Outdoors',
            image: Outdoors,
            display: false
        },
        slide4: {
            title: 'Robotics',
            image: Robotics,
            display: false
        }
    });

    useEffect(() => {
        const interval = setInterval(() => {
            let newSlide = {...slide};
            for (let i=1; i <= Object.keys(slide).length; i++) {
                console.log(i)
                if (newSlide[`slide${i}`].display && i != 4) {
                    newSlide[`slide${i}`].display = false;
                    newSlide[`slide${i+1}`].display = true;
                    break;
                }
                else if (newSlide[`slide${i}`].display && i == 4) {
                    newSlide[`slide${i}`].display = false;
                    newSlide[`slide1`].display = true;
                    break;
                }
            }
                
            setSlide(newSlide);
        }, 5000);
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
                            <motion.div className={styles.title} 
                            animate={{
                                left: ['0%', '40%', '40%', '0%'], 
                                transform: ['translateX(-100%)','translateX(-70%)', 'translateX(-70%)', 'translateX(-100%)'],
                                opacity: [.3, .9, 1, 0]
                            }}
                            transition={{
                                duration: 8,
                                times: [0, .1,.9, 1],
                            }}
                            >
                            <h1 key={slide[obj].title}>{slide[obj].title}</h1>
                            </motion.div>
                        )
                    }
                })}
                
    {/* Hero Slide Images */}
                {Object.keys(slide).map(obj => {
                    if (slide[obj].display) {
                        return (
                            <motion.div className={styles.slideContainer}
                            animate={{
                                right: ['0%', '0%', '0%', '0%'],
                                transform: ['translateX(100%)','translateX(2%)', 'translateX(2%)', 'translateX(100%)'],
                                opacity: [.3, .9, 1, 0]
                                
                            }}
                            transition={{
                                duration: 8,
                                times: [0, .1,.9, 1],
                            }}
                            >
                                <Image key={slide[obj].title} src={slide[obj].image} alt={slide[obj].title} layout='fill' objectFit='cover'/>
                            </motion.div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default HeroSlide;