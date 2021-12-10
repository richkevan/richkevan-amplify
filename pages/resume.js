import { useState } from 'react';
import MyResume from '../components/Resume/myresume.js';

const Resume_Page = () => {
const [selectVal, setSelectVal] = useState('1')
    return (
        <div>
        <h1>Resume</h1>
        <select onChange={(event) => {
            console.log(event.target.value)
            setSelectVal(event.target.value)}}>
            <option value='1'>Frontend</option>
            <option value='2'>Backend</option>
        </select>
        <MyResume resume={selectVal}/>
        </div>
    )
}

export default Resume_Page