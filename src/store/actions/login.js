const endpoint = 'https://gojob-api-review-foc-api-li-4ylolh.gojob.tech/foc/login';


export const SET_ERROR_STATE = 'SET_ERROR_STATE'
const setErrorState = (value) => ({
  type: SET_ERROR_STATE,
  payload: { value }
})

export const submitLogin = (email, password) => (dispatch, getState) =>
  fetch(
    endpoint,
    {
      method: 'post',
      body: JSON.stringify({ email, password })
    }
  )
    .then(response => {
      localStorage.setItem('token', response.auth.token)
      dispatch(setErrorState(false))
    })
    .catch(({ message }) => dispatch(setErrorState(true)))
