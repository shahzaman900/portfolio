import './App.css'
import Header from './components/header'
import { ModeToggle } from './components/mode-toggle'
import { ThemeProvider } from './components/theme-provider'
import { Button } from './components/ui/button'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Button>click me</Button>
      <ModeToggle></ModeToggle>
      <div className='bg-primary'>
        <Header></Header>
      </div>
    </ThemeProvider>
  )
}

export default App
