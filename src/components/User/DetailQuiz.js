import { useEffect } from 'react'
import { getQuestionByQuizId } from '../../services/apiServices'
import { useLocation, useParams } from 'react-router-dom'
import { useState } from 'react'
import _ from 'lodash'
import './DetailQuiz.scss'
import Question from './Question'
const DetailQuiz = props => {
  const [dataQuiz, setDataQuiz] = useState([])
  const params = useParams()
  const quizId = params.id
  const { state } = useLocation()
  const { quizTitle } = state // Read values passed on state
  const [currIndex, setCurrIndex] = useState(0)

  const fetchQuestion = async () => {
    const res = await getQuestionByQuizId(quizId)
    if (res && res.EC === 0) {
      let rawData = res.DT
      //excute data raw use lodas
      let data = _.chain(rawData)
        .groupBy('id')
        .map((value, key) => {
          let answers = []
          let questionDesciption,
            image = null
          value.forEach(item => {
            questionDesciption = item.description
            image = item.image
            item.answers.isSelected = false
            answers.push(item.answers)
          })

          return {
            questionId: key,
            answers,
            questionDesciption,
            image
          }
        })
        .value()
      setDataQuiz(data)
    }
  }
  useEffect(() => {
    fetchQuestion()
  }, [quizId])
  const handlePrev = () => {
    if (currIndex - 1 < 0) {
      return
    }
    setCurrIndex(currIndex - 1)
  }
  const handleNext = () => {
    if (dataQuiz && dataQuiz.length > currIndex + 1) {
      setCurrIndex(currIndex + 1)
    }
    }
    
    const handleCheckboxFromDad = (quesId, ansId) => {
        let dataQuizClone = _.cloneDeep(dataQuiz)
        let question = dataQuizClone.find(item => +item.questionId === +quesId)
        if (question && question.answers) {
            console.log('question', question)
           let updateQuestion =  question.answers.map((item) => {
                if (+item.id === +ansId) {
                    item.isSelected = !item.isSelected
                }
                return item
           })
            question.answers = updateQuestion
            let index = dataQuizClone.findIndex(item => +item.questionId === +quesId)
            if (index > -1) {
                dataQuizClone[index] = question
                setDataQuiz(dataQuizClone)
            }
        }
    }
  return (
    <div className='detail-quiz-container'>
      <div className='left-content'>
        <div className='title'>
          Quiz {quizId} : {quizTitle}
        </div>
        <hr />
        <div className='q-body'>
          <Question
            data={dataQuiz && dataQuiz.length > 0 && dataQuiz[currIndex]}
                      currIndex={currIndex}
                      handleCheckboxFromDad={handleCheckboxFromDad}
          />
        </div>

        <div className='footer'>
          <button className='btn btn-secondary' onClick={() => handlePrev()}>
            Prev
          </button>
          <button className='btn btn-primary' onClick={() => handleNext()}>
            Next
          </button>
          <button className='btn btn-warning' onClick={() => handleNext()}>
            Fisnish
          </button>
        </div>
      </div>
      <div className='right-content'>right content</div>
    </div>
  )
}

export default DetailQuiz
