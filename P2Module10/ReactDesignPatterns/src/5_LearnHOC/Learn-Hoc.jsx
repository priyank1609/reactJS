import { useState } from "react";
import Input from "../2_LearnControlProps/Input";
import withLogging from "./withLogging";
import withFetchData from "./with-fetch-data";
import Todos from "./todos";

const LearnHOC = () => {
    const [name, setName] = useState("");
    const InputWithLogging = withLogging(Input);
    const TodosWithData = withFetchData(Todos, 'https://jsonplaceholder.typicode.com/todos')

    return (
        <div>
            <label>
                Name:
                <InputWithLogging
                    name={"name"}
                    value={name}
                    placeholder={"Your Name here"}
                    className={"border-2"}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <TodosWithData />
        </div>
    );
};

export default LearnHOC;
