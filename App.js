import { StatusBar } from 'expo-status-bar';
import Navigation from "./src/Share/Navigation";

export default function App() {
  return (
    <>
      <StatusBar style="auto" translucent={false} backgroundColor="transparent" />
      <Navigation />
    </>
  );
}
