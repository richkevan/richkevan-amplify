import { useState } from 'react'
import Projects from '@components/Portfolio/projects'
import styles from '@styles/Portfolio.module.css'

const Portfolio_Page = () => {
    const [projectsObj, setProjectsObj] = useState({
        backend: {
            category: 'Backend',
            projects: [
                {title: 'URL Shortener', 
                description: 'URL Shortener is a simple URL shortener that allows you to shorten your long URLs. It uses a database to store the URLs and a simple algorithm to generate the short URL.',
                slug: 'url-shortener'
            },
            ]
        },
        frontend: {
            category: 'Frontend',
            projects: [
                {
                    title: 'Meals App',
                    description: 'Users can search for recipes by name, category, or alphabetically.',
                    slug: 'todo-app'
                },
                {
                    title: 'Weather App',
                    description: 'Users can search for weather by city name using the google geocoding api then the openweather api is used to get the weather data for the city.',
                    slug: 'weather-app'
                }
            ]
        },
        API: {
            category: 'API',
            projects: [
                {
                    title: 'Timestamp API',
                    description: 'Restful API that takes a UNIX time or date in YYYY-MM-DD format and returns the date in UNIX and Month DD, YYYY formats.',
                    slug: 'timestamp-api'
                },
                {
                    title: 'Header Parser',
                    description: 'Restful API that takes a JSON object and returns the header values in a JSON object.',
                    slug: 'header-parser'
                }
            ]
        }
    })

    return (
        <div className={styles.pageContainer}>
        <h1>Portfolio</h1>
        <Projects projects={projectsObj} />
        </div>
    )
}

export default Portfolio_Page