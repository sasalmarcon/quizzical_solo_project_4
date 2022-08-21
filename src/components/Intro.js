import React from 'react';

const Intro = (props) => {
    
  
    return (
        <div className='flex flex-col h-screen w-1/2 justify-center items-center'>
            <p className = 'text-5xl'>Quizzical</p>
            <p className = 'my-2 text-center'>Test Your Knowledge</p>
                <div className='w-full flex flex-col items-center justify-center'>
                <button onClick = {props.handleGameStart} 
                        className = 'py-1 px-4 w-full h-16 text-white bg-slate-600 rounded hover:bg-slate-900 hover:text-white'>
                Start Quiz
                </button>
                </div>
        </div>      
    )
}

export default Intro;