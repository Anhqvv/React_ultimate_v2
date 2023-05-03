import { useEffect } from "react"
import { getQuestionByQuizId } from "../../services/apiServices"
import { useParams } from "react-router-dom"
import { useState } from "react"
const DetailQuiz = () => {
    const [detailQuiz,setDetailQuiz] = useState()
    const params = useParams()
    const quizId = params.id
    
    const fetchQuestion = async () => {
        const res = await getQuestionByQuizId(quizId)
        console.log('res',res.DT)
        if (res && res.EC === 0) {
            setDetailQuiz(res.DT)
        }
    }
    useEffect(() => {
        fetchQuestion()
    }, [quizId])
    console.log('detail quiz:',detailQuiz)
    return (
        <>
        DetailQuiz
        </>
    )
}

export default DetailQuiz