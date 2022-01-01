import './index.css'

const FaqDetails = props => {
  const {faq} = props
  const {question, answer} = faq
  return (
    <li>
      <p className="question-paragraph">{question}</p>
      <p className="answer-paragraph">{answer}</p>
    </li>
  )
}

export default FaqDetails
