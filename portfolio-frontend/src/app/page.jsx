"use client"
import { useContext, useEffect } from 'react';
import Main from '../components/Main'
import Portfolio from '../components/Portfolio'
import Resume from '../components/Resume'
import Score from '../components/Score';
import Copyright from '../components/Copyright'
import { globalContext } from '../contextApi/GlobalContext';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';


export default function Home() {
  const { user, setUser, setData , refresh , setRefresh} = useContext(globalContext);
  const router = useRouter();

  
  useEffect(() => {
    if(refresh){
      router.refresh();
      setRefresh(false);
    }
    const loadAll = async () => {
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
            //login
            //res
            let res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/jwt", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                token: token[1]
              })
            })
            //data
            let data = await res.json();

            //userdetails
            let res2 = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/userdata/' + data.username, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            })

            let data2 = await res2.json();


            if (data.login == true) {
              setUser(data);
              if (data2.name) {
                setData(data2);
              }
              else {
                toast("visit profile section and fill the user data");
              }
            }
            else {
              toast("Please login to get full access");
            }

          }
          else {
            toast("Please login to get full access");
          }
        }
        catch (err) {
          console.log(err);
        }
      }
    }
    loadAll();
  }, []);
  return (
    <>
      <Main />
      <Portfolio />
      <Resume />
      <Score />
      <Copyright />
    </>
  )
}
