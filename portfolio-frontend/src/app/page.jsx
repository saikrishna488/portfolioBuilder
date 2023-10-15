"use client"
import Main from '../components/Main'
import Portfolio from '../components/Portfolio'
import Resume from '../components/Resume'
import Score from '../components/Score';
import Copyright from '../components/Copyright';
import Render from '../components/Render';



export default function Home() {
  return (
    <>
      <Render />
      <Main />
      <Portfolio />
      <Resume />
      <Score />
      <Copyright />
    </>
  )
}
