import { useEffect } from 'react'
import { getQuizByParticipant } from '../../services/apiServices'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ListQuiz.scss'


const ListQuiz = () => {
  const navigate = useNavigate()
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
    <div className='list-quiz-container'>
      {listQuiz &&
        listQuiz.length > 0 &&
        listQuiz.map((quiz, index) => {
          return (
            <div
              className='card'
              style={{ width: '18rem' }}
              key={`quiz-${quiz.id}`}
            >
              <img className='card-img-top' src={`data:image/png;base64, ${quiz.image}`} alt='Card image cap' />
              <div className='card-body'>
                <h5 className='card-title'>{`Quiz-${quiz.id}`}</h5>
                <p className='card-text'>{quiz.description}</p>
                <button className='btn btn-primary' onClick={() => navigate(`/quiz/${quiz.id}`)}>
                  Start Quiz
                </button>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default ListQuiz
