import React from 'react';
import { Options } from './Options';

const Question = (props) => {
    return (
        <div className="flex flex-col">
            <span className="font-semibold text-black">{props.questionName}</span>
            <Options 
                type={props.type} 
                optionTypes={props.optionTypes} 
                options={props.options}
                option={props.option}
            />
        </div>
    )
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
            <Question 
                questionName={props.questionName}
                type={props.optionType} 
                optionTypes={props.optionTypes} 
                options={props.options}
                option={props.option}
            />
            <div className="flex items-center gap-x-[12px] mt-4">
              <div className="flex flex-col w-full mb-4">
                <label>Tipo de pregunta</label>
                <select className="p-2.5 rounded-[4px]">
                  <option value="value1">Value 1</option>
                  <option value="value2" >Value 2</option>
                  <option value="value3">Value 3</option>
                </select>
              </div>
              <button
                className="bg-purple-400 text-white font-semibold py-2 px-4 mt-5 rounded-[8px] mb-[11px]"
              >
                NUEVA ENCUESTA
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}