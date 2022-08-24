import React, { useEffect, useState } from 'react';
import './App.css';
import { Survey } from './components/Survey';
import { SurveyMaker } from './components/SurveyMaker';
import { getAllSurveys, getOneSurvey, getAllOptionTypes } from './service/service';

function App() {

  const [title, setTitle] = useState('Título de la encuesta')
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam aperiam, alias assumenda reiciendis labore fugiat amet vel facilis esse rerum aliquam similique praesentium suscipit quae dignissimos')
  
  const [questionType, setOptionType] = useState(1)
  const [options, setOptions] = useState([])
  const [option, setOption] = useState('Opcion 1')
  const [question, setQuestionName] = useState('Nueva Pregunta')
  
  const [questions, setQuestions] = useState([])

  const [optionsCompleted, setOptionsCompleted] = useState(false)
  const [questionsCompleted, setQuestionCompleted] = useState(false)

  const [newSurvey, setNewSurvey] = useState()

  const [surveys, setSurveys] = useState()

  const [optionTypes, setOptionTypes] = useState([])

  const [surveyId, setSurveyId] = useState(surveys?.[0]?.id)

  const [disabled, setDisabled] = useState(false)

  useEffect(()=> {
    const getOptionTypes = async() => {
      try {
        const response = await getAllOptionTypes()

        setOptionTypes(response)
        setOptionType(response[0].id)
      } catch (error) {
        setOptionTypes([])
      }
    }
    getOptionTypes()
  }, [])

  useEffect(()=> {
    const getSurveys = async() => {
      try {
        const response = await getAllSurveys()

        setSurveys(response)
        setSurveyId(response[0].id)
      } catch (error) {
        setSurveys([])
      }
    }
    getSurveys()
  }, [disabled])

  useEffect(()=> {
    const getSurvey = async() => {
      try {
        if(surveyId){
          const response = await getOneSurvey(surveyId)

        if(disabled) {
          setTitle(response.survey.title)
          setDescription(response.survey.description)
          setQuestions(response.questions)
        } else {
          setTitle('Título de la encuesta')
          setDescription('Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam aperiam, alias assumenda reiciendis labore fugiat amet vel facilis esse rerum aliquam similique praesentium suscipit quae dignissimos')
          setQuestions([])
        }
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
          questionType={questionType}
          setOptionType={setOptionType}
          optionTypes={optionTypes}
          setQuestionName={setQuestionName}
          question={question}
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
          optionTypes={optionTypes}
          questionType={questionType}
          question={question}
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
