import ContactForm from '@/components/form';
import SocialMedia from '@/components/socialMedia';

function Contact() {
  return (
    <>
      <div className='flex flex-row md:pl-24 '>
        <SocialMedia></SocialMedia>
        <div className='flex flex-col flex-1 items-center justify-center p-4 pb-24'>
          <div className='flex flex-col justify-center gap-4'>
            <h1>Contact</h1>
            <p className='text-foreground/60'>I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;