import Home from './src/components/Home';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
    <Home />
    </PaperProvider>
  );
}