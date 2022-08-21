import React from 'react';
import { BeatLoader } from 'react-spinners';
const LoadScreen = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <BeatLoader/>
        </div>
    )
}

export default LoadScreen;