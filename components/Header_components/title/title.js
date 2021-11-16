import { DataStore } from '@aws-amplify/datastore';
import { SiteTitle } from '../../../models';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../header.module.css'

const Title = () => {
    const [title, setTitle] = useState('');
    useEffect(() => {
    fetchTitle();
    async function fetchTitle() {
    const models = await DataStore.query(SiteTitle);
    setTitle(models[0].title);
    }},[]);
    return (
        <>
            <Link href='/'>
        <h1 className={styles.Header_title}>{title}</h1>
        </Link>
        </>
    )
}

export default Title;