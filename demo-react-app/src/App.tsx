
import './App.css'
import { ThemeProvider  } from '@yourorg/test-proivder'

function Consumer() {
 return (
    <div>
      <span data-testid="theme">theme</span>
     
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Consumer />
    </ThemeProvider>
  )
}

export default App
