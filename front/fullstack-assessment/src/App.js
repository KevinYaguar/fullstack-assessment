import React, { useState } from 'react';
import './App.css';
import { Survey } from './components/Survey';
import { SurveyMaker } from './components/SurveyMaker';

const optionTypes = [
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

const questionsMock = [
  {
    id: 1,
    question: 'Pregunta 1?',
    type: 1, 
    options: [
      {
        id: 1,
        option: 'Opcion unouno'
      },
      {
        id: 2,
        option: 'Opcion dosdos'
      }
    ]
  }
]

function App() {

  const [title, setTitle] = useState('Título de la encuesta')
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam aperiam, alias assumenda reiciendis labore fugiat amet vel facilis esse rerum aliquam similique praesentium suscipit quae dignissimos')
  
  const [optionType, setOptionType] = useState(1)
  const [options, setOptions] = useState([])
  const [option, setOption] = useState('Opcion 1')
  const [questionName, setQuestionName] = useState('¿Doloremque tempore aut modi?')

  return (
    <>
      <div className="mx-auto flex w-3/4 gap-x-3 py-[100px]">
        <SurveyMaker 
          setTitle={setTitle} 
          setDescription={setDescription}
          optionType={optionType}
          setOptionType={setOptionType}
          optionTypes={optionTypes}
          setQuestionName={setQuestionName}
          questionName={questionName}
          options={options}
          setOptions={setOptions}
          option={option}
          setOption={setOption}
        />
        <Survey 
          optionTypes={optionTypes}
          optionType={optionType}
          questionName={questionName}
          description={description}
          title={title}
          options={options}
          option={option}
        />
      </div>
    </>
  );
}

export default App;
