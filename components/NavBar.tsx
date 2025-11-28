import Image from "next/image"
import Switch from "./Switch"

const NavBar = () => {
  return (
    <div className='w-full h-16 flex justify-between items-center px-4'>
      <div className='flex items-center gap-2'>
        <span className='flex items-center justify-center p-2 rounded-full bg-primary'>
          <Image src='/logo.webp' alt='Next.js Logo' width={30} height={30} />
        </span>
        <h1 className='text-2xl font-bold'>Flashcard App</h1>
      </div>
      <Switch/>
    </div>
  )
}

export default NavBar
