import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Quizscreen() {
    const questions = [
        {
            question: 'Html Stands For____________________________',
            options: [
                'Hyper Text Makeup Language',
                'html',
                'Case Cading Style Sheet',
                'Hypertext markup language',
            ],
            correctAns: 'Hypertext markup language',
        },
        {
            question: 'Css Stands For _______________________',
            options: [
                'Casecading Style Sheet',
                'Java',
                'Ram',
                'Hypertext markup language',
            ],
            correctAns: 'Casecading Style Sheet',
        },
        {
            question: 'Js Stands For _______________________',
            options: ['Java Style', 'Java Script', 'Script', 'Script Src'],
            correctAns: 'Java Script',
        },
        {
            question: 'Dom Stands For _______________________',
            options: ['Document Object Model', 'html', 'Css', 'Java'],
            correctAns: 'Document Object Model',
        },
        {
            question: 'Ram Stands For _______________________',
            options: ['Read Only Memory', 'Dom', 'Random Acccess Memory', 'For Pc'],
            correctAns: 'Random Acccess Memory',
        },
        {
            question: 'Rom Stands For _______________________',
            options: [
                'Hyper Text Markup Language',
                'html',
                'HTml',
                'Read Only Memory',
            ],
            correctAns: 'Read Only Memory',
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);

    const checkQues: any = (selectedOption: any, correctAnswer: any) => {
        if (selectedOption == correctAnswer) {
            setScore(score + 1)
            console.log(setScore)
            setCurrentIndex(currentIndex + 1)
        }
        else {
            setCurrentIndex(currentIndex + 1)
        }
    }
    if (currentIndex < questions.length) {
        return (
            <>
                <div className="main">
                    <div className="navbar text-center">
                        <h1 className='text-center'>Quiz Application</h1>
                    </div>
                    <div className="question-parent">
                        <h3>
                            Question:{currentIndex + 1}/ {questions.length}
                        </h3>
                        <h2 id="question">{questions[currentIndex].question}</h2>
                    </div>
                    <div id="answer-parent">
                        {questions[currentIndex].options.map((option, i) => (
                            <div key={i} className="answer">
                                <button
                                    onClick={() => {
                                        checkQues(option, questions[currentIndex].correctAns);
                                    }
                                    }

                                >
                                    {option}
                                </button>
                            </div>
                        ))}
                    </div>
                </div >
            </>
        );
    } else {
        return (
            <>
                <div className="main text-center mt-5 ">
                    <h1 className='text-info fw-bold'>Quiz Completed!</h1>
                    <p className='fs-3 mt-4 '>Your score is {score} out of {questions.length}</p>
                </div>
            </>
        );
    }


}
