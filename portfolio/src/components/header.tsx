import profile from '../assets/profile.svg'
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';

function Header() {
  return (
    <div className='flex items-center justify-between px-24 pt-3 pb-3 border-b-2 border-dotted '>
      <div>
        <img src={profile} alt="profile" />
      </div>
      <nav className='flex items-center gap-6 text-sm'>
        <a href="#" className='transition-colors hover:text-foreground/80 text-foreground/60'>
          <span>01.</span> About
        </a>
        <a href="#" className='transition-colors hover:text-foreground/80 text-foreground/60'>
          <span>02.</span> Projects
        </a>
        <a href="#" className='transition-colors hover:text-foreground/80 text-foreground/60'>
          <span>03.</span> Experience
        </a>
        <a href="#" className='transition-colors hover:text-foreground/80 text-foreground/60'>
          <span>04.</span> Contact
        </a>
      </nav>
      <ModeToggle></ModeToggle>
    </div>
  )
}

export default Header;