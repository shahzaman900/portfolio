import Introduction from '@/components/intro';
import Header from '@/components/header';
import SocialMedia from '@/components/socialMedia';

function Home() {
  return (
    <>
      <div className='flex flex-row px-24'>
        <SocialMedia></SocialMedia>
        <div className='flex flex-1 items-center justify-center'>
          <Introduction />
        </div>
      </div>
    </>
  )
}

export default Home;