import React, { useEffect, useState } from 'react';
import './App.css';
import { Survey } from './components/Survey';
import { SurveyMaker } from './components/SurveyMaker';
import { getAllSurveys, getOneSurvey } from './service/service';

const optionTypesMock = [
  {
    id: 1,
    type: 'radio',
    name: 'Opción Simple'
  },
  {
    id: 2,
    type: 'checkbox',
    name: 'Opción Múltiple'
  },
  {
    id: 3,
    type: 'text',
    name: 'Texto'
  },
]

function App() {

  const [title, setTitle] = useState('Título de la encuesta')
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam aperiam, alias assumenda reiciendis labore fugiat amet vel facilis esse rerum aliquam similique praesentium suscipit quae dignissimos')
  
  const [optionType, setOptionType] = useState(1)
  const [options, setOptions] = useState([])
  const [option, setOption] = useState('Opcion 1')
  const [questionName, setQuestionName] = useState('Nueva Pregunta')
  
  const [questions, setQuestions] = useState([])

  const [optionsCompleted, setOptionsCompleted] = useState(false)
  const [questionsCompleted, setQuestionCompleted] = useState(false)

  const [newSurvey, setNewSurvey] = useState()

  const [surveys, setSurveys] = useState()

  const [surveyId, setSurveyId] = useState(surveys?.[0]?.id)

  const [disabled, setDisabled] = useState(false)

  useEffect(()=> {
    const getSurveys = async() => {
      try {
        const response = await getAllSurveys()
        setSurveys(response)
      } catch (error) {
        setSurveys([])
      }
    }
    getSurveys()
  }, [])

  useEffect(()=> {
    const getSurvey = async() => {
      try {
        const response = await getOneSurvey(surveyId)
        if(disabled) {
          setTitle(response.title)
          setDescription(response.description)
          setQuestions(response.question)
        } else {
          setTitle('Título de la encuesta')
          setDescription('Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam aperiam, alias assumenda reiciendis labore fugiat amet vel facilis esse rerum aliquam similique praesentium suscipit quae dignissimos')
          setQuestions([])
        }
      } catch (error) {
        setTitle('Encuesta no encontrada')
        setDescription('Encuesta no encontrada')
        setQuestions([])
      }
    }
    getSurvey()
  }, [disabled, surveyId])

  return (
    <>
      <div className="mx-auto flex w-3/4 gap-x-3 py-[100px]">
        <SurveyMaker 
          title={title}
          description={description}
          setTitle={setTitle} 
          setDescription={setDescription}
          optionType={optionType}
          setOptionType={setOptionType}
          optionTypes={optionTypesMock}
          setQuestionName={setQuestionName}
          questionName={questionName}
          options={options}
          setOptions={setOptions}
          option={option}
          setOption={setOption}
          setQuestions={setQuestions}
          questions={questions}
          setOptionsCompleted={setOptionsCompleted}
          optionsCompleted={optionsCompleted}
          setQuestionCompleted={setQuestionCompleted}
          questionsCompleted={questionsCompleted}
          setNewSurvey={setNewSurvey}
          newSurvey={newSurvey}
          disabled={disabled}
          setDisabled={setDisabled}
        />
        <Survey 
          optionTypes={optionTypesMock}
          optionType={optionType}
          questionName={questionName}
          description={description}
          title={title}
          options={options}
          option={option}
          questions={questions}
          optionsCompleted={optionsCompleted}
          questionsCompleted={questionsCompleted}
          surveys={surveys}
          setDisabled={setDisabled}
          setSurveyId={setSurveyId}
          disabled={disabled}
        />
      </div>
    </>
  );
}

export default App;
