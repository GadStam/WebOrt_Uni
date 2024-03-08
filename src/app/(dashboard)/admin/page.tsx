import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'

const page = async () => {
    const session = await getServerSession(authOptions);
  if(session?.user){
    return (
      <div>welcome back to admin {session?.user.name}</div>
    )

  }
  return <div>please log in</div>
   
}

export default page