import React, { useState } from 'react';
// import { FILES } from '../util/constants';
import { WineDetails } from './WineDetails';

export const FILES = [
    {value: '11YVCHAR001', label: '11YVCHAR001'},
    {value: '11YVCHAR002', label: '11YVCHAR002'},
    {value: '15MPPN002-VK', label: '15MPPN002-VK'}
  ];

export const WineDetailsDisplay = () => {
    const [fileName, setFileName] = useState('');
    
    return (
        <>
            <h1>Select Filename: {fileName} </h1>
            <select value={fileName} onChange={e => setFileName(e.target.value)}>
                <option value="None">Select a file</option>
                {FILES.map(item => <option value={item.value} key={item.value}>{item.label}</option>)}
            </select>
            <section>
                {fileName !== 'None' ?
                    <WineDetails input={fileName}/> :
                    'Please select an input file'
                }
            </section>
        </>
    )
}