import {User as UserIcon} from 'phosphor-react'

export interface UserProps{
   name: string;
   age: string;
   position: string;
   language: string;
}

export default function User(props : UserProps) {
  return (
    <div className="flex bg-white rounded-lg shadow-lg  p-4 items-center w-80">
      <div className="bg-blue-400 flex items-center justify-center rounded-full w-20 h-20">
         <UserIcon size={48} color="white"/>
      </div>
      <div className='text-sm pl-4 flex flex-col text-zinc-700 capitalize'>
         <h2 className='font-semibold text-lg pb-1 capitalize text-black'>{props.name}</h2>
         <p  >{props.position}</p>
         <p>{props.age} anos</p>
         <p>{props.language}</p>
      </div>
    </div>
  )
}
