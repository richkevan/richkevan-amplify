import Link from 'next/link'
import style from '../../styles/Home.module.css'
import styles from '@styles/Resume.module.css'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

// Create Document Component
const MyResume = (props) => {


    return (
        <div className={styles.resume_container}>
            <div className={styles.resume}>
                <section className={styles.resumeHeader}>
                    <h5>Rich Kevan</h5>
                    <strong>
                        <div>Fairfield, CA</div>
                        <div>(707)770-6843</div>
                        <div>rskevan@me.com</div>
                        <div>www.richkevan.com</div>
                        <div>linkedin.com/in/richkevan</div>
                        <div>github.com/richkevan</div>
                    </strong>
                </section>
                <hr />
                <section className={cx({resumeSection: true}, {summary: true})}>
                    <h5>SUMMARY</h5>
                    <hr />
                    <strong>Cutting Edge Full Stack Engineer • React/Django Developer • Raspberry Pi/Arduino nerd • Robotics fan</strong><br />
                    <strong>Certifications</strong>
                    <ul>
                        <li>Back End Development and APIs | freeCodeCamp</li>
                        <li>Front End Development Libraries | freeCodeCamp</li>
                        <li>JavaScript Algorithms and Data Structures | freeCodeCamp</li>
                        <li>Responsive Web Design | freeCodeCamp</li>
                    </ul>
                    <strong>Skills</strong>
                    <section className={styles.columns}>
                    <ul>
                        <li>HTML/CSS (Advanced)</li>
                        <li>Javascript (Advanced)</li>
                        <li>React (Intermediate)</li>
                    </ul>
                    <ul>
                        <li>NodeJS (Intermediate)</li>
                        <li>Python/Django (Beginner)</li>
                        <li>SQL/NoSQL (Intermediate)</li>
                    </ul>
                    <ul>
                        <li>AWS (Beginner)</li>
                        <li>Azure (Beginner)</li>
                        <li>GIT (Intermediate)</li>
                    </ul>
                    <ul>
                        <li>Scrum/Agile (Intermediate)</li>
                        <li>Rest APIS (Intermediate)</li>
                        <li>Test Driven Development (Intermediate)</li>
                    </ul>
                    </section>
                </section>
                <section className={cx({resumeSection: true})}>
                    <h5>PROJECTS</h5>
                    <hr />
                    <div className={cx({columns: true})}>
                    {props.resume == '1' &&
                        <div className={cx({projects: true})}>
                            <ul>
                                <li>Pixel Artist</li>
                                <li><Link href='https://richkevan.github.io/Pixel-Art/'>Web</Link></li>
                                <li><Link href='https://github.com/richkevan/Pixel-Art'>Github</Link></li>
                            </ul>
                            <p>Pixel Artist is a web application that allows users to create pixel art and share it with others.</p>
                            <ul>
                                <li>Huckleberry</li>
                                <li><Link href='https://richkevan.github.io/huckleberry/'>Web</Link></li>
                                <li><Link href='https://github.com/richkevan/huckleberry'>Github</Link></li>
                            </ul>
                            <p>Huckleberry is a web application that allows users to create pixel art and share it with others.</p>
                            <ul>
                            <li>Character Generator</li>
                            <li><Link href='char-create.richkevan.io'>Web</Link></li>
                            <li><Link href='https://github.com/richkevan/css-character-creator'>Github</Link></li>
                            </ul>
                            <p>Character Generator is a web application that allows users to create pixel art and share it with others.</p>
                        </div>
                    }
                    {props.resume == '2' &&
                        <div className={cx({projects: true})}>
                            <ul>
                                <li>Timestamp API</li>
                                <li><Link href='https://timestamp.richkevan.io/'>Web</Link></li>
                                <li><Link href='https://github.com/richkevan/backend-timestamp'>Github</Link></li>
                            </ul>
                            <p>URL shortener built with NodeJS that will shorten a URL to a random string and provides a redirect to the
                            original URL based on that string.</p>
                            <ul>
                                <li>URL Shortener</li>
                                <li><Link href='https://short-url.richkevan.io/'>Web</Link></li>
                                <li><Link href='https://github.com/richkevan/backend-urlshortener'>Github</Link></li>
                            </ul>
                            <p>URL shortener built with NodeJS that will shorten a URL to a random string and provides a redirect to the
                            original URL based on that string.</p>
                            <ul>
                                <li>API Header Parser</li>
                                <li><Link href='https://header-parser.richkevan.io/'>Web</Link></li>
                                <li><Link href='https://github.com/richkevan/backend-headerparser'>Github</Link></li>
                            </ul>
                            <p>Backend Restful API service that reads the JSON header and returns an ip address, language, and software.</p>
                        </div>
                    }
                    </div>
                </section>
                <section className={cx({resumeSection: true})}>
                    <h5>EXPERIENCE</h5>
                    <hr />
                    <div>
                        <strong>Bayside Church | Sept 2017 - Dec 2021 | Tech Assistant/Junior Application Developer</strong>
                        <p>Assist in the development of company website and internal company software</p>
                        <ul>
                            <li>Ensured all technical issues were ticketed, responded to tier 1 and tier 2 tickets</li>
                            <li>Participated in code reviews with team, gaining feedback and experience writing custom scalable code</li>
                            <li>Turned designer visions to responsive web pages</li>
                            <li>Maintain, update, and improve existing webpages</li>
                        </ul>
                    </div>
                    <div>
                        <strong>Kenzie Academy | Apr 2020 - Apr 2021 | Project Based Training</strong>
                        <p>Operate in an Agile enviroment gather project requirments and create applications in a timely manner that meet requirements</p>
                        <ul>
                            <li>Built scalable applications in Javascript & Python utilizing frameworks, libraries, components</li>
                            <li>Utilized GIT repositories for versioning and code reviews</li>
                            <li>Utilize test driven development in an Agile Scrum enviroment to meet project requirements</li>
                            <li>Consistently exceeded progress metrics before target dates</li>
                        </ul>
                    </div>
                    <div>
                        <strong>US Army | May 2000 - Apr 2021 | Communication Manager</strong>
                        <p>Responsible for the overall management of communications and subordinates in the company</p>
                        <ul>
                            <li>Organize, train, advise and supervise in the installation, utilization, and operation of communication equipment</li>
                            <li>Establish and maintain operational and tactical communications, networks, and equipment</li>
                        </ul>
                    </div>
                </section>
                <section className={cx({resumeSection: true})}>
                    <h5>EDUCATION</h5>
                    <hr />
                    <div>
                        <strong>Western Governor&apos;s University | B.S. Computer Science concentration in Software Development | 2022</strong>
                    </div>
                    <div>
                        <strong>Kenzie Academy | Certificate in Full Stack Development | 2021</strong>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default MyResume;