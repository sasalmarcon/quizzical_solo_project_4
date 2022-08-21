import React from 'react';
import Answers from './Answers';

const Question = (props) => {
    const questionData = props.questionData;//for Easier destructuring
    const answers = questionData.answers.map(ansObj => {
        return (
            <Answers 
            key ={ansObj.id}
            answer = {ansObj}
            questionId = {questionData.id}
            selectAnswer = {props.selectAnswer}
            isShowAnswer = {props.isShowAnswer} />
        )
    })
    return (
        <div className=''>
            <p className='text-center'>{questionData.question}</p>
            <div className=' grid grid-cols-2 grid-rows-2 mx-1 my-1 md:grid-cols-4'>
            {answers}
            </div>
         <hr/>
        </div>
    )
}

export default Question;