import { Facebook, Github, Linkedin, Mail, Phone } from 'lucide-react'


function SocialMedia() {
  return (
    <>
        <div className='flex flex-col gap-4 justify-center h-screen px-5 border-l-2 border-r-2 border-dotted pb-14'>
          <a href="#" className='p-2 border rounded-md hover:bg-accent'><Facebook /></a>
          <a href="#" className='p-2 border rounded-md hover:bg-accent'><Github /></a>
          <a href="#" className='p-2 border rounded-md hover:bg-accent'><Linkedin /></a>
          <a href="#" className='p-2 border rounded-md hover:bg-accent'><Mail /></a>
          <a href="#" className='p-2 border rounded-md hover:bg-accent'><Phone /></a>
        </div>
    </>
  )
}

export default SocialMedia;