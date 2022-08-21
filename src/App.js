import React,{ useEffect, useState } from 'react';
import Quiz from './components/Quiz';
import Intro from './components/Intro';
import apiCall from './services/apiCall';
import LoadScreen from './components/LoadScreen';

const App = () => {
  const [isGameStart,setIsGameStart] = useState(false);
  const [quiz,setQuiz] = useState(null);
  const [isShowAnswer,setIsShowAnswer] = useState(false);
  const [score,setScore] = useState(0);
 
 
  //START GAME
  function startGame()
  {
    setScore(0);
    setIsShowAnswer(false);
    setQuiz(null);
    setIsGameStart(true);
  }
  //select an answer
  function selectAnswer(event,questionId)
  {
    setQuiz(prevQuiz => prevQuiz.map(quizObj =>{
        const selectedSection = prevQuiz.find(quizObj => quizObj.id === questionId);
        const select = selectedSection.answers.map(ansObj => ansObj.id === event.target.id ? { ...ansObj, isSelected:!ansObj.isSelected } : {...ansObj,isSelected:false})
        return quizObj.id === questionId ? {...selectedSection,answers:select}: quizObj
      })
    )

   
  }
  //check answer and update score
 function showAnswer()
 {
  if(isShowAnswer === true)
    {
     
      setScore(0);
      setIsShowAnswer(false);
      setQuiz(null);
      setIsGameStart(false);
    }
    else{
      setIsShowAnswer(true);
      //check Answers
      quiz.forEach(quizObj => quizObj.answers
            .forEach(ansObj=>ansObj.isSelected && ansObj.isCorrect ?
                                         setScore(prev => prev + 1): setScore(prev => prev)))
      //
        }
 }
  //API CALL
  useEffect(()=>{
    const API = "https://the-trivia-api.com/api/questions?limit=5";
    apiCall(API).then(data =>setTimeout(setQuiz(data),1000))
  },[isGameStart]);

  return (
    <div className = 'flex justify-center items-center'>
      {
        isGameStart ?
        (quiz === null ?
        <LoadScreen/>
        :
        <Quiz  quiz = {quiz}
               isShowAnswer = {isShowAnswer}
               handleShowAnswer = {showAnswer}
               selectAnswer = {selectAnswer}
               score = {score}/>)
        :
        <Intro handleGameStart = {startGame}/>
      }
    </div>
  )
}

export default App;