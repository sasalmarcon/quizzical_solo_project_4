import React from 'react';
import Question from './Question';

const Quiz = (props) => {
    const quizData = props.quiz;
    const questions = quizData.map(quizObj =>{
        return (
            <Question selectAnswer = {props.selectAnswer} key = {quizObj.id} questionData = {quizObj} isShowAnswer = {props.isShowAnswer}/>
        )
    })
    return (
        <div className='mt-5 w-4/5 flex flex-col justify-around items-center'>
            
            {questions}

            <div className='flex justify-around items-center gap-5'>
            <button 
            onClick = {props.handleShowAnswer}
            className = 'bg-indigo-900 text-white my-2 py-2 px-2 rounded'>
            {props.isShowAnswer ? "Play Again":"Check Answer"}
            </button>
            {props.isShowAnswer && <strong>You Scored {props.score}/{quizData.length}</strong>}
            </div>
          
        </div>
    )
}

export default Quiz;