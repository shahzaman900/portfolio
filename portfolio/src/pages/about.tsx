import SocialMedia from '@/components/socialMedia';

function About() {
  return (
    <>
      <div className='flex flex-row px-24'>
        <SocialMedia></SocialMedia>
        <div className='flex flex-1 items-center justify-center'>
          <h1>about</h1>
        </div>
      </div>
    </>
  )
}

export default About;