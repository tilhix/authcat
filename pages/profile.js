import { useEffect, useState } from 'react'
import { getUserProfile } from '../util/auth'
import Layout from '../components/Layout'
import Head from "next/head";

const Profile = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getUserProfile().then(user => setUser(user))
  },[])

  return (
    <Layout title="Profile">
      <Head>
        <title>Profile | NextAuth</title>
      </Head>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  )
}

export default Profile