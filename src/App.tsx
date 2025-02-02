import './App.css'
import AppRouter from './routes/AppRouter'
import { analytics } from './auth/firebaseConfig';
import { logEvent } from 'firebase/analytics';
import LoadingIndicator from './components/LoadingIndicator';
import { LoadingProvider } from './context/LoadingContext';

function App() {
  // Log a custom Analytics event (optional)
  logEvent(analytics, 'app_opened', { platform: 'web' });

  return (
    <>
    {/* add loading indicator throughout app */}
      <LoadingProvider>
        <LoadingIndicator />
        <AppRouter />
      </LoadingProvider>
    </>

  )
}

export default App
