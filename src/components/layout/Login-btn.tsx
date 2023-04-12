import { signIn, signOut, useSession } from "next-auth/react"
export default function LoginButton() {
  const { data: session, status} = useSession()
  if (status === 'authenticated') {
    return (
      <div className='flex flex-col'>
        Signed in as {session.user.email} <br />
        <button className='btn btn-primary' onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div className='flex flex-col'>
      Not signed in <br />
      <button className='btn btn-primary' onClick={() => signIn()}>Sign in</button>
    </div>
  )
}