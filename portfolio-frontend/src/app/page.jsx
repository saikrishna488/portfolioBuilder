/*

Copyright 2022 Google LLC 
  
Licensed under the Apache License, Version 2.0 (the "License"); 
you may not use this file except in compliance with the License. 
You may obtain a copy of the License at     https://www.apache.org/licenses/LICENSE-2.0 
Unless required by applicable law or agreed to in writing, software 
distributed under the License is distributed on an "AS IS" BASIS, 
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
See the License for the specific language governing permissions and 
limitations under the License.*/
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
