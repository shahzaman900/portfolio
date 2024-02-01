import ContactForm from '@/components/form';
import SocialMedia from '@/components/socialMedia';

function Contact() {
  return (
    <>
      <div className='flex flex-row px-24'>
        <SocialMedia></SocialMedia>
        <div className='flex flex-1 items-center justify-center'>
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default Contact;