'use client'
import User, { UserProps } from '@/app/components/User'
import { useEffect, useState } from 'react'
import axios from 'axios';
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from '../../firebase'
import Navbar from '../components/Navbar';
import LoadingSpin from "react-loading-spin";


export default function Users() {
  const [data, setData] = useState<UserProps | undefined>([]) 
  const [docs, setDocs] = useState([])
  useEffect(() => {
    const q = query(collection(db, 'users'))
    onSnapshot(q, (querySnapshot) => {
      setDocs(querySnapshot.docs.map((doc ) => ({
        name: doc.id,
        data: doc.data()
      })))
    
    })
    console.log(docs)
  },[])

  return (
    <main className="flex min-h-screen flex-col items-center   bg-zinc-100">
    <Navbar/>
    <h1 className='font-semibold text-3xl  mb-12'>Lista de funcionarios</h1>
      <div className='grid md:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8'>
      {
      docs.length == 0 ? <div className=' w-screen flex justify-center my-20'>

      <LoadingSpin primaryColor='rgb(96 165 250'/>
      </div> :
      docs.map((doc) => (
        <User
          
          key={doc.id}
          name={doc.data.name}
          position={doc.data.position}
          age={doc.data.age}
          language={doc.data.language}
        />
))}


      </div>
    </main>
  )
}
