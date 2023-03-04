import React, {useState} from 'react'
import Select from 'react-select'

import './MySelect.scss'

const MySelect = ({options}) => {
    const [currentChoice, setCurrentChoice] = useState('');

    const getValue = () => {
        return currentChoice ? options.find(c => c.value === currentChoice) : '';
    }

    const onChange = (newValue) => {
        setCurrentChoice(newValue.value)
    }

    return (
        <Select
            className="customSelectContainer"
            classNamePrefix="customSelect"
            onChange={onChange}
            options={options}
            value={getValue()}
            placeholder="My PlayStation"
        />
    )
}

export default MySelect