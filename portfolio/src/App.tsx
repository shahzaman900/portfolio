import './App.css'
import Header from './components/header'
import SocialMedia from './components/socialMedia'
import { ThemeProvider } from './components/theme-provider'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Header></Header>
        <div className='flex flex-row px-24'>
          <SocialMedia></SocialMedia>
          <div className='flex flex-1'>
            <h1>body</h1>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
