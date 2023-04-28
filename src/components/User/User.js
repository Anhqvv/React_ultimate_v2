import { useEffect } from 'react'
import { getQuizByParticipant } from '../../services/apiServices'
import { useState } from 'react'
import './User.scss'

const User = () => {
  const [listQuiz, setListQuiz] = useState([])
  const getQuizData = async () => {
    let res = await getQuizByParticipant()
    if (res && res.EC === 0) {
      setListQuiz(res.DT)
    }
  }
  useEffect(() => {
    getQuizData()
  }, [])
  console.log('listQuiz', listQuiz)
  return (
    <div className='listQuiz-container'>
      {listQuiz &&
        listQuiz.length > 0 &&
        listQuiz.map((quiz, index) => {
          return (
            <div
              className='card'
              style={{ width: '18rem' }}
              key={`quiz-${index}`}
            >
              <img className='card-img-top' src={`data:image/png;base64, ${quiz.image}`} alt='Card image cap' />
              <div className='card-body'>
                <h5 className='card-title'>{`Quiz-${index + 1}`}</h5>
                <p className='card-text'>{quiz.description}</p>
                <a href='#' className='btn btn-primary'>
                  Start Quiz
                </a>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default User
