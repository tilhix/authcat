import axios from 'axios'
axios.defaults.withCredentials = true

const WINDOW_USER_VARIABLE = '__USER__';

export const getUserToken = req => {
  if (req !== undefined) {
    const { signedCookies = {} } = req;
    const { token = {} } = signedCookies;
    return { user: token }
  }
  return {}
}

export const getUserScript = user => {
  return `${WINDOW_USER_VARIABLE} = ${JSON.stringify(user)};`
}

export const loginUser = async (email, password) => {
  const { data } = await axios.post('/api/login', {email, password})
  if (typeof window !== 'undefined') {
    window[WINDOW_USER_VARIABLE] = data || {}
  }
}

export const getUserProfile = async () => {
  try {
    const { data } = await axios.get('/api/profile')
    return data
  } catch (error) {
    console.log(error)
  }
}