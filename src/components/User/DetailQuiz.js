import { useEffect } from 'react'
import { getQuestionByQuizId } from '../../services/apiServices'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import _ from 'lodash'
const DetailQuiz = () => {
  const [detailQuiz, setDetailQuiz] = useState()
  const params = useParams()
  const quizId = params.id

  const fetchQuestion = async () => {
      const res = await getQuestionByQuizId(quizId)
      console.log('res',res)
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
            answers.push(item.answers)
          })

          return { questionId: key, answers, questionDesciption, image }
        })
        .value()
          setDetailQuiz(data)
          console.log('data',data)
      }
      console.log('detailQuiz',detailQuiz)
      
  }
  useEffect(() => {
    fetchQuestion()
  }, [quizId])

  return <>DetailQuiz</>
}

export default DetailQuiz
