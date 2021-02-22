import { useEffect, useState } from 'react'
import { getUserProfile } from '../util/auth'
import { useRouter } from "next/router";
import Layout from '../components/Layout'

const Profile = () => {
  const [user, setUser] = useState(null)
  const router = useRouter();

  useEffect(() => {
    getUserProfile().then(user => setUser(user))
  },[])

  const handleClick = () => {
    router.push('/login')
  }

  return (
    <Layout>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={handleClick}>Logout</button>
    </Layout>
  )
}

export default Profile