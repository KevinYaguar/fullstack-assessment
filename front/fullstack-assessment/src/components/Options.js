import React from 'react';

const SelectOption = ({option, type}) => {
    return (
        <div className="flex items-center gap-x-2">
            <input type={type} />
            <label>{option}</label><br />
        </div>
    )
}

export const Options = (props) => {

    const optionType = props.optionTypes.find(e => e.id === props.type).type

    if(props.type !== 3){
        return (
            <div className="mt-2">
                {
                    props.options.map((e, i)=> {
                        return (
                            <SelectOption option={e.option} type={optionType} key={i}/>
                        )
                    })
                }
                {props.isNewQuestion && !props.optionsCompleted && (<SelectOption option={props.option} type={optionType} key={0}/>)}
            </div>
        )
    } else {
        return (
            <div className="mt-2">
                <textarea
                    className="w-full rounded-[8px] resize-none p-2.5"
                    rows="5"
                />
            </div>
        )
    }
}