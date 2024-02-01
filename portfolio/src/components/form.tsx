// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm, ValidationError } from '@formspree/react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
function ContactForm() {
  const [state, handleSubmit] = useForm("mknalvyr");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className='flex flex-col gap-4 p-8 border rounded-md w-2/5'>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="text">Full Name</Label>
        <Input type="text" id="text" placeholder="Enter Name" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Your message</Label>
        <Textarea placeholder="Type your message here." id="message" />
      </div>
      <Button> Submit </Button>
    </div>
    // <form onSubmit={handleSubmit}>
    //   <label htmlFor="email">
    //     Email Address
    //   </label>
    //   <input
    //     id="email"
    //     type="email"
    //     name="email"
    //   />
    //   <ValidationError
    //     prefix="Email"
    //     field="email"
    //     errors={state.errors}
    //   />
    //   <textarea
    //     id="message"
    //     name="message"
    //   />
    //   <ValidationError
    //     prefix="Message"
    //     field="message"
    //     errors={state.errors}
    //   />
    //   <button type="submit" disabled={state.submitting}>
    //     Submit
    //   </button>
    // </form>
  );
}

export default ContactForm;