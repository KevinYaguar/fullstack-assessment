import React from 'react';
import { Options } from './Options';

const Question = (props) => {

    if(!props.questionsCompleted) {
        return (
            <div className="flex flex-col">
                <span className="font-semibold text-black">{props.questionName}</span>
                <Options 
                    type={props.type} 
                    optionTypes={props.optionTypes} 
                    options={props.options}
                    option={props.option}
                    isNewQuestion={props.isNewQuestion}
                    optionsCompleted={props.optionsCompleted}
                />
            </div>
        )
    }
}

export const Survey = (props) => {

    return(
        <div className="w-1/2">
        <div
          className="text-center text-[30px] font-semibold text-white bg-purple-400 py-[50px] shadow"
        >
          {props.title}
        </div>
        <div
          className="bg-gray-300 flex flex-col items-center pt-[50px] pb-[23px] px-[15px]"
        >
          <div className="w-[90%] max-w-[502px] text-black flex flex-col text-left">
            <span className="mb-[25px] text-black">
                {props.description}
            </span>
            {props.questions.map((e, i)=> {

                return (
                    <Question
                        questionName={e.questionName}
                        type={e.type} 
                        optionTypes={props.optionTypes} 
                        options={e.options}
                        option={props.option}
                        isNewQuestion={false}
                        questionsCompleted={false}
                        key={i}
                    />
                )
            })}
            {!props.disabled && (<Question 
                questionName={props.questionName}
                type={props.optionType} 
                optionTypes={props.optionTypes} 
                options={props.options}
                option={props.option}
                isNewQuestion={true}
                optionsCompleted={props.optionsCompleted}
                questionsCompleted={props.questionsCompleted}
            />)}
            <div className="flex items-center gap-x-[12px] mt-4">
              <div className="flex flex-col w-full mb-4">
                <label>Tus encuestas</label>
                <select 
                    className="p-2.5 rounded-[4px]"
                    onClick={(e)=> {
                        props.setSurveyId(Number(e.target.value))
                    }}
                >
                    {props.surveys?.length > 0? 
                        props.surveys.map((e, i)=> {
                            return(
                                <option value={e.id} key={i}>{e.title}</option>
                            )
                        }) 
                    : 
                        <option value={0}>No se encontraron encuestas</option>
                    }
                </select>
              </div>
              <button
                className="bg-purple-400 text-white font-semibold py-2 px-4 mt-5 rounded-[8px] mb-[11px]"
                onClick={()=> {
                    props.setDisabled(false)
                }}
              >
                NUEVA ENCUESTA
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}