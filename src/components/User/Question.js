import _ from 'lodash'

const Question = props => {
  const { data, currIndex } = props
  if (_.isEmpty(data)) {
    return <>Don't have data</>
  }
  console.log('data from question', data.answers)
  let answers = data?.answers
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
          answers.map(ans => {
            return (
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  defaultValue=''
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
