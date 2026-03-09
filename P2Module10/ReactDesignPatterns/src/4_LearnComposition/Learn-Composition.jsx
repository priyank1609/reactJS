import React, { useState } from 'react'
import Select from './select'

const LearnComposition = () => {
    const [selected, setSelected] = useState("");

    return (
        <div>
            <h1>This is select example</h1>
            <div>
                <label>
                    Choose your country
                    <Select selected={selected} setSelected={setSelected}>
                        <Select.Option value={"India"}>India</Select.Option>
                        <Select.Option value={"China"}>China</Select.Option>
                        <Select.Option value={"USA"}>USA</Select.Option>
                    </Select>
                </label>

                <p>Selected Value: {selected}</p>
            </div>
        </div>
    )
}

export default LearnComposition
