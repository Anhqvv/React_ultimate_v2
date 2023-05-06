import _ from 'lodash'

const Question = props => {
  const { data, currIndex, handleCheckboxFromDad } = props
  if (_.isEmpty(data)) {
    return <>Don't have data</>
  }
  console.log('data from question', data)
    let answers = data?.answers
    
    const handleCheckbox = (e,quesId, ansId) => {
        console.log('check', quesId, ansId)
        handleCheckboxFromDad(quesId, ansId)
    }
  return (
    <div className='q-content'>
      {data.image !== null ? (
        <div className='q-image'>
          <img src={`data:image/png;base64, ${data.image}`} />
        </div>
      ) : (
        <div className='q-image'></div>
      )}

      <div className='question'>
        Question {currIndex + 1}: {data.questionDesciption}?
      </div>
      <div className='answers'>
        {answers &&
          answers.length > 0 &&
          answers.map((ans,index) => {
            return (
              <div className='form-check' key={index}>
                <input
                  className='form-check-input'
                        type='checkbox'
                        onChange={(e) => handleCheckbox(e, data.questionId, ans.id)}
                        checked={ans.isSelected}
                />
                <label className='form-check-label'>{ans.description}</label>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Question
