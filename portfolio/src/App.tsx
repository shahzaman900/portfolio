import './App.css'
import Header from './components/header'
import { ThemeProvider } from './components/theme-provider'
import { Button } from './components/ui/button'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Header></Header>
      </div>
    </ThemeProvider>
  )
}

export default App
