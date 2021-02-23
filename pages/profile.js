import { useEffect, useState } from 'react'
import { getUserProfile, authInitialProps } from '../lib/auth'
import Layout from '../components/Layout'
import Head from "next/head";

const Profile = (props) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getUserProfile().then(user => setUser(user))
  },[])

  return (
    <Layout title="Profile" {...props}>
      <Head>
        <title>Profile | NextAuth</title>
      </Head>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
      <style jsx>{`
        pre { 
          margin: 0;
          padding: 1em;
          background: rgba(255,255,255,0.5);
        }
      `}</style>
    </Layout>
  )
}

Profile.getInitialProps = authInitialProps(true);

export default Profile