const Problems = ({question, answer, showAnswer}) => {
    return (
        <div>
            <h3>{question}</h3>
            {showAnswer && <p>{answer}</p>}
        </div>
    )
}

export default Problems
