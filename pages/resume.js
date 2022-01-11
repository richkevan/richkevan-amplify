import { useState } from 'react';
import MyResume from '@components/Resume/myresume.js';
import style from '@styles/Resume.module.css';


const Resume_Page = () => {
const [selectVal, setSelectVal] = useState('1')
    return (
        <div className={style.container}>
        <h1>Resume</h1>
        <select onChange={(event) => {
            setSelectVal(event.target.value)}}>
            <option value='1'>Frontend</option>
            <option value='2'>Backend</option>
        </select>
        <MyResume resume={selectVal}/>
        </div>
    )
}

export default Resume_Page