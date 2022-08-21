import React from 'react';

const Answers = (props) => {
    const answer = props.answer;
    const style = props.isShowAnswer ?
                                 (answer.isCorrect ? "bg-green-300 pointer-events-none":
                                    answer.isSelected ? "bg-red-300 pointer-events-none":"pointer-events-none"):
                                      (answer.isSelected ? "bg-slate-400":"");
    return (
            <button
            onClick = {(event)=>{props.selectAnswer(event,props.questionId)}}
             id = {answer.id}
             className={`mx-2 my-2 border-indigo-600 border-solid border-2 rounded px-2 ${style} hover:text-white hover:bg-slate-600`}>
                {answer.answer}
                </button>
    )
}

export default Answers;