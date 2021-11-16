import { DataStore } from '@aws-amplify/datastore';
import { Project, Projectcategory } from '../models';
import { useState, useEffect } from 'react';

const Portfolio_Page = () => {
    const [projects, setProjects] = useState([]);
    const [projCat, setProjCat] = useState([]);

    useEffect(() => {
        fetchProjects();
        async function fetchProjects() {
            const models = await await (await DataStore.query(Project)).filter(proj => proj.projectcategoryID === "46f370c5-cd27-4bda-876b-efb2f6f77544");
            console.log(models);
            setProjects(models);
        }
        fetchProjCat();
        async function fetchProjCat() {
            const models = await DataStore.query(Projectcategory);
            console.log(models);
            setProjCat(models);
        }
    }, []);

    return (
        <div>
        <h1>Portfolio</h1>
        {projects.map(project => {
            return (
            <div key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.github}</p>
            <p>{project.info}</p>
            <p>{project.link}</p>
            <p>{project.projectcategoryId}</p>
            </div>
        )})}
        </div>
    )
}

export default Portfolio_Page