import styles from './myresume.module.css'

// Create Document Component
const MyResume = () => {


    return (
        <div>
            <header className={styles.resumeHeader}>
                <h5>Rich Kevan</h5>
                <strong>
                    <div>Fairfield, CA</div>
                    <div></div>
                    <div>(707)770-6843</div>
                    <div></div>
                    <div>rskevan@me.com</div>
                    <div></div>
                    <div>www.richkevan.com</div>
                    <div></div>
                    <div>linkedin.com/in/richkevan</div>
                    <div></div>
                    <div>github.com/richkevan</div>
                </strong>
            </header>
            <hr />
            <section>
                <h5>Summary</h5>
                <hr />
                <strong>Cutting Edge Full Stack Engineer • React/Django Developer • Raspberry Pi/Arduino nerd • Robotics fan</strong>
                <strong>Certificates</strong>
                <ul>
                    <li>Back End Development and APIs | freeCodeCamp | Oct 2021</li>
                    <li>JavaScript Algorithms and Data Structures | freeCodeCamp | Aug 2020</li>
                    <li>Responsive Web Design | freeCodeCamp | Jul 2020</li>
                </ul>
                <strong>Skills</strong>
                <section className={styles.skills}>
                <div>
                <ul>
                    <li>HTML (Advanced)</li>
                    <li>CSS (Advanced)</li>
                    <li>Javascript (Intermediate)</li>
                </ul>
                </div>
                <div>
                <ul>
                    <li>NodeJS (Intermediate)</li>
                    <li>Python (Beginner)</li>
                    <li>Django (Beginner)</li>
                </ul>
                </div>
                <div>
                <ul>
                    <li>AWS (Beginner)</li>
                    <li>Azure (Beginner)</li>
                    <li>GIT (Intermediate)</li>
                </ul>
                </div>
                </section>
            </section>
            <section>
                <h5>Projects</h5>
                <hr />
            </section>
            
        </div>
    )
}

export default MyResume;