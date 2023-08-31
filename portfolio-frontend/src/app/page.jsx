"use client"
import { useContext } from 'react';
import Main from '../components/Main'
import Portfolio from '../components/Portfolio'
import Resume from '../components/Resume'
import Score from '../components/Score'
import { globalContext } from '../contextApi/GlobalContext';


export default function Home() {
  const { user, setUserdata,setData } = useContext(globalContext);

  if (user.name) {

  }
  else {
    try {
      if (document.cookie) {
        let decodedToken = document.cookie;
        let token = "";
        for (let i = 0; i < decodedToken.length; i++) {
          token = decodedToken.split(";");
          decodedToken = decodedToken.substring(token.length, decodedToken.length);
          if (token[0].includes("token=")) {
            break;
          }
        }
        token = token[0].split("=");
        try {
          //login
          fetch("http://localhost:5000/jwt", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token: token[1]
            })
          }).then((res) => {
            return res.json();
          }).then((data) => {

            if (data.login == true) {
              setUserdata(data);
            }

            //userdetails
            fetch('http://localhost:5000/userdata/' + data.username, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            }).then((res) => {
              return res.json();
            }).then((data) => {
              if(data.name){
                setData(data);
              }
            });
          });
        }
        catch (err) {

        }
      }
    }
    catch (err) {

    }
  }

  return (
    <>
      <Main />
      <Portfolio />
      <Resume />
      <Score />
    </>
  )
}
