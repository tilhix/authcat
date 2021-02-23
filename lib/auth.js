import axios from 'axios'
import Router from 'next/router'

axios.defaults.withCredentials = true
const WINDOW_USER_VARIABLE = '__USER__';

export const getServerSideToken = req => {
  if (req !== undefined) {
    const { signedCookies = {} } = req;
    const { token = {} } = signedCookies;
    return { user: token }
  }
  return { user: {} }
}

export const getClientSideToken = () => {
  if (typeof window !== 'undefined') {
    const user = window[WINDOW_USER_VARIABLE] || {}
    return { user }
  }
  return { user: {} }
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

export const logoutUser = async () => {
  if (typeof window !== 'undefined') {
    window[WINDOW_USER_VARIABLE] = {}
  }
  await axios.post('/api/logout')
  Router.push('/login')
}

export const getUserProfile = async () => {
  try {
    const { data } = await axios.get('/api/profile')
    return data
  } catch (error) {
    console.log(error)
  }
}

export const authInitialProps = (isProtectedRoute) => ({ req, res }) => {
  const auth = req ? getServerSideToken(req) : getClientSideToken();
  const currentPath = req ? req.url : window.location.pathname;
  const isGuest = !auth.user || auth.user.type !== process.env.NEXT_PUBLIC_TYPE

  if (isProtectedRoute && isGuest && currentPath !== '/login') {
    return redirectUser(res, '/login')
  }
  return { auth }
}

const redirectUser = (res, path) => {
  const auth = { user: {} }
  if (res) {
    res.redirect(302, path);
    res.finished = true;
    return { auth }
  }
  Router.replace(path)
  return { auth }
}