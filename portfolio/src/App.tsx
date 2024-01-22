import './App.css'
import Header from './components/header'
import { ThemeProvider } from './components/theme-provider'

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
