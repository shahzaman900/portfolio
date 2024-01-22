import profile from '../assets/profile.svg'
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';

function Header() {
  return (
    <div className='flex justify-between pl-16 pr-16 pt-3 pb-3 '>
      <div>
        <img src={profile} alt="profile" />
      </div>
      <div></div>
      <ModeToggle></ModeToggle>
    </div>
  )
}

export default Header;