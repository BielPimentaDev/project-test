
'use client'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {Cake, Desktop, SuitcaseSimple, User as UserIcon} from 'phosphor-react'
import { UserProps } from './components/User'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import {db} from '../firebase'
import Navbar from './components/Navbar'
export default function Home() {


  const [data, setData] = useState<UserProps[]>([])
  useEffect(()=>{
    axios.post('http://localhost:3000/create').then((res)=> setData( [...data, res.data])).catch((err)=> console.log('erro'))
  }, []);
  

  const sendData =  (props : UserProps)=>{
    
    axios.post( 'http://localhost:3000/create', props).then((ev)=>console.log('ev')).catch((err)=>console.log('erro'))
  }
  const [name, setName] = useState('')
  
  const [age, setAge] = useState('')
  const [position, setPosition] = useState('')
  const [language, setLanguage] = useState('')
  const handleSubmit = async (props : UserProps)=>{
    try {
      await addDoc(collection(db, 'users'), props)
    }
    catch(err){
      alert(err)
    }
    setName('')
    setPosition('')
    setLanguage('')
    setAge('')
  }
  return (
    <main className="flex min-h-screen flex-col items-center  bg-zinc-100">
    <Navbar/>
    <h1 className='font-semibold text-3xl  mb-12'>Cadastro funcionarios</h1>
    
      <div className='bg-white p-16 shadow-lg rounded-lg '>
      <div className='relative p-4'>
        <UserIcon size={32} className="absolute top-1/2 -translate-y-1/2 left-6" color="gray" />
        <input value={name} placeholder='Nome' className='p-4 text-sm pl-12 border-b border-zinc-500' onChange={(ev)=> setName(ev.target.value)}/>
      </div>

      <div className='relative p-4'>
        <Cake  size={32} className="absolute top-1/2 -translate-y-1/2 left-6" color="gray" />
         <input value={age} placeholder='Idade' className='p-4 text-sm pl-12 border-b border-zinc-500' onChange={(ev)=> setAge(ev.target.value)}/> 
      </div>

      <div className='relative p-4'>
        <SuitcaseSimple  size={32} className="absolute top-1/2 -translate-y-1/2 left-6 " color="gray" />
        <input value={position} placeholder='Função' className='p-4 text-sm pl-12 border-b border-zinc-500' onChange={(ev)=> setPosition(ev.target.value)}/>
      </div>

        <div className='relative p-4'>
        <Desktop  size={32} className="absolute top-1/2 -translate-y-1/2 left-6" color="gray" />
        <input value={language} placeholder='Linguagem' className='p-4 text-sm pl-12 border-b border-zinc-500' onChange={(ev)=> setLanguage(ev.target.value)}/>
      </div>
      <button className='bg-blue-400 p-4 w-full mt-12 rounded-xl text-white font-semibold' onClick={()=> handleSubmit({name, age, position, language})}>
        <p className='text-white'>CADASTRAR </p></button>
      </div>
    </main>
  )
}
