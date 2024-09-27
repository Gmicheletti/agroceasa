
import './App.css'
import { Login } from './login/Login'
import { Analytics } from '@vercel/analytics/react';

export default function App() {

  return (
    <section id='app'>
      <Login />
      <Analytics />
    </section>
  )
}


