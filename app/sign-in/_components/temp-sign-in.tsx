import Image from 'next/image'

import Form from 'next/form'
import Link from 'next/link'
import { submitData } from '../action'

function TempSignIn() {
  return (
    <section className='flex flex-col p-8 h-screen justify-center'>
        <nav className='fixed top-0 pb-8 rotate-180'>
            <Link href={"/"} className='w-full h-full'>
                <Image  
                src={"/icons/right-arrow.png"}
                alt="Arrow Icon"
                width={20}
                height={20}
                />
            </Link>
        </nav>
        <div className='text-black text-center'>
            <h1 className='text-3xl font-extrabold py-5'>
                Enter your name
            </h1>
            <p className='text-sm font-light opacity-60 pt-5'>
                Now Sign-in and Sign-up are under implement. Only anonymous Sign-in available.
            </p>
            <Form className='flex flex-col py-5' action={submitData}>
                <input name='name' className='bg-[#F2F3F7] text-[#3F414E] rounded-2xl p-4 my-5' placeholder='Name'></input>
                <button 
                className='bg-[#AAC4F5] text-white py-5 w-full rounded-full'
                type='submit'
                >
                    Next
                </button>
            </Form>
        </div>
    </section>
  )
}

export default TempSignIn