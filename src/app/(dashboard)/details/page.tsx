
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'
import { FaHandsHelping } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

import { TypeUser } from '@prisma/client';
import CardType from '@/components/card_type/CardType';
import UserForm from '@/components/user_details/UserForm';


const Page = async () => {
  const session = await getServerSession(authOptions);

  
  
  if(session?.user) {
    return (
      <div>
        <h1>{session?.user?.name!}</h1>
       <UserForm/>
      </div>
    );
  }

  return <div>please log in</div>;
}

export default Page;
