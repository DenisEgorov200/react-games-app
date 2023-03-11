import React, {useMemo, useState} from 'react'
import Select from 'react-select'

import './MySelect.scss'

export const MySelect = ({options}) => {
    const [currentChoice, setCurrentChoice] = useState('');

    const value = useMemo(() => currentChoice ? options.find(c => c.value === currentChoice) : '', [currentChoice])

    const onChange = ({value}) => {
        setCurrentChoice(value)
    }

    return (
        <Select
            className="customSelectContainer"
            classNamePrefix="customSelect"
            onChange={onChange}
            options={options}
            value={value}
            placeholder="My PlayStation"
        />
    )
}