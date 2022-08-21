import { nanoid } from 'nanoid'
const apiCall = async(API) =>{
            const res = await fetch(API);
            const data = await res.json();
            const newData = await data
                .map(obj => {
                        const incorrectAnswers = obj.incorrectAnswers.map(item => ({id:nanoid(),answer:item,isSelected:false,isCorrect:false}));
                        const correctAnswer = {id:nanoid(),answer:obj.correctAnswer,isSelected:false,isCorrect:true}
                        const answers = [...incorrectAnswers,correctAnswer];
                        answers.sort(()=>Math.random()-0.5)
                        return {...obj,answers:answers}
                } );
            return newData;
        
       
}

export default apiCall;

