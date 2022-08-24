import React from 'react';
import { postSurvey } from '../service/service';

const OptionInput = (props) => {

    const {option, setOption, setter, options, optionId, setOptions, optionsCompleted, setOptionsCompleted, questionType, disabled} = props;

    if(!optionsCompleted && questionType !== 3){
        return (
            <div className="flex flex-col w-full mb-4 relative">
                <label>{`${optionId? 'Opción ' + optionId : 'Nueva opción'}`}</label>
                <input
                    disabled={props.disabled}
                    value={option}
                    className="p-2.5 rounded-[4px]"
                    type="text"
                    placeholder='Escriba aquí...'
                    onChange={((e)=> {
                        if(setter) setOption(e.target.value)
                    })}
                />
                <button 
                    disabled={disabled}
                    className="absolute top-[30px] right-[-20px]"
                    onClick={()=> {
                        if(!optionId) {
                            setOptionsCompleted(true)
                        } else {
                            const newOptions = options.filter(e => e.id !== optionId)
                            setOptions(newOptions)
                        }
                    }}
                >
                    <i className="fa-solid fa-ban text-[#F52C2C]"></i>
                </button>
                <span className="text-[10px] mt-1">Help Text</span>
            </div>
        )
    } 
}

export const SurveyMaker = (props) => {

    const handleCreateSurvey = async(values) => {
        try {
            await postSurvey(values);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="w-1/2 flex flex-col shadow">
            <div className="text-center text-[30px] font-semibold text-white bg-purple-400 py-[50px]">
                Creación de encuesta
            </div>
            <div className="bg-gray-300 flex flex-col items-center pt-[50px] pb-[23px] px-[15px]" >
                <div className="w-[90%] max-w-[502px] flex flex-col items-center">
                    <div className="flex flex-col w-full mb-4">
                        <label>Título</label>
                        <input
                            disabled={props.disabled}
                            className="p-2.5 rounded-[4px]"
                            type="text"
                            placeholder="Título"
                            onChange={(e)=> {
                                props.setTitle(e.target.value)
                            }}
                        />
                        <span className="text-[10px] mt-1">Help Text</span>
                    </div>
                    <div className="flex flex-col w-full">
                        <label>Descripción</label>
                        <input
                            disabled={props.disabled}
                            className="p-2.5 rounded-[4px]"
                            type="text"
                            placeholder="Descripción"
                            onChange={(e)=> {
                                props.setDescription(e.target.value)
                            }}
                        />
                        <span className="text-[10px] mt-1">Descripción</span>
                    </div>
                    {!props.questionsCompleted && (<div className="relative w-full border-2 border-[#AAA4A4] rounded-[8px] py-4 px-8 mt-[45px]">
                        <button 
                            disabled={props.disabled}
                            className="absolute right-[-26px] top-[50%] translate-y-[-50%]"
                            onClick={()=> {
                                props.setQuestionCompleted(true)
                            }}
                        >
                            <i className="fa-solid fa-trash text-[#F52C2C]"></i>
                        </button>
                        <div className="flex flex-col w-full mb-4">
                            <label>Tipo de pregunta</label>
                            <select 
                                className="p-2.5 rounded-[4px]" 
                                value={props.questionType}
                                onChange={(e)=> {
                                    props.setOptionType(Number(e.target.value))
                                }}
                            >
                                {props.optionTypes.map((e)=> {
                                    return (
                                        <option 
                                        key={e.id}
                                        value={e.id}
                                        >
                                        {e.name}
                                        </option>
                                    )
                                })}
                            </select>
                            <span className="text-[10px] mt-1">Help Text</span>
                        </div>
                        <div className="flex flex-col w-full mb-4">
                            <label>Pregunta</label>
                            <input
                                disabled={props.disabled}
                                className="p-2.5 rounded-[4px]"
                                type="text"
                                placeholder={`${props.question}`}
                                onChange={((e)=> {
                                    props.setQuestionName(e.target.value)
                                })}
                            />
                            <span className="text-[10px] mt-1">Help Text</span>
                        </div>
                        {
                            props.options.map((e, i)=> {
                                return (
                                    <OptionInput 
                                        option={e.options} 
                                        setOption={props.setOption}
                                        options={props.options}
                                        key={i}
                                        optionId={e.id}
                                        setOptions={props.setOptions}
                                        questionType={props.questionType}
                                        disabled={props.disabled}
                                    />
                                )
                            })
                        }
                        <OptionInput 
                            option={props.option} 
                            setOption={props.setOption}
                            setter={true}
                            setOptionsCompleted={props.setOptionsCompleted}
                            optionsCompleted={props.optionsCompleted}
                            questionType={props.questionType}
                            key={0}
                            disabled={props.disabled}
                        />
                        <button 
                            disabled={props.disabled}
                            className="p-[8px] bg-[#E8E8E8] rounded-[8px] flex items-center" 
                            onClick={()=> {
                                const ids = props.options.map((e)=> e.id)
                                const newId = ids.length > 0? Math.max(...ids) + 1 : 1;

                                props.setOptions([
                                    ...props.options,
                                    {
                                        id: newId,
                                        options: props.option
                                    }
                                ])
                                props.setOptionsCompleted(false)
                                props.setOption('Nueva opción')
                            }}
                        >
                            <i className="fa-solid fa-circle-plus text-4 text-purple-400 bg-white rounded-[50%]" />
                            <span className="ml-3 text-[#A8AAAF] text-[10px] font-semibold font-['Poppins'] ">
                                Agregar opción
                            </span>
                        </button>
                    </div>)}
                    <button 
                        disabled={props.disabled}
                        className="p-[8px] bg-[#E8E8E8] mt-[20px] mr-auto rounded-[8px] flex items-center" 
                        onClick={()=>{
                            const ids = props.questions.map((e)=> e.id)
                            const newId = ids.length > 0? Math.max(...ids) + 1 : 1;

                            props.setQuestions([
                                ...props.questions,
                                {
                                    id: newId,
                                    question: props.question,
                                    questionType: props.questionType,
                                    options: props.options
                                }
                            ])
                            props.setOptions([])
                            props.setQuestionName('Nueva Pregunta')
                            props.setOptionsCompleted(false)
                            props.setQuestionCompleted(false)
                        }}
                    >
                        <i className="fa-solid fa-circle-plus text-4 text-purple-400 bg-white rounded-[50%]" />
                        <span className="ml-3 text-[#A8AAAF] text-[10px] font-semibold font-['Poppins']" >
                            Agregar pregunta
                        </span>
                    </button>
                    <button 
                        disabled={props.disabled}
                        className="bg-purple-400 text-white font-semibold py-2 px-3 mt-5 rounded-[8px]" 
                        onClick={()=> {
                            const newSurvey = {
                                title: props.title,
                                description: props.description,
                                questions: props.questions
                            }
                            props.setNewSurvey(newSurvey)
                            handleCreateSurvey(newSurvey)
                            props.setDisabled(true)
                            props.setQuestions([])
                            props.setOptions([])
                        }}
                    >
                        Crear encuesta
                    </button>
                </div>
            </div>
        </div>
    )
}