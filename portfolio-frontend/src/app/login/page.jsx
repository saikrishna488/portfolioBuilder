"use client";
import { useContext, useState } from 'react';
import { globalContext } from '../../contextApi/GlobalContext';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const page = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { user, setUserdata } = useContext(globalContext);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const submit = async (e) => {
        e.preventDefault();
        if (username.length > 5) {
            if (password.length > 5) {
                let obj = {
                    username: username,
                    password: password
                };
                try {
                    let res = await fetch('https://backend-portfoliobuilder.onrender.com/login', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(obj)
                    });
                    let data = await res.json();
                    if (data.login == true) {
                        setUserdata(data);
                        document.cookie = `token=${data.token}`;
                        toast("login successful");
                        router.push('/');
                    }
                    else {
                        toast("login failed");
                    }
                }
                catch (err) {
                    toast("login failed");
                }
            }
            else {
                toast("password should be atleast of 5 chars length")
            }
        }
        else {
            toast("username should be atleast of 5 chars length")
        }
    }

    return (
        <div className='register'>
            <form onSubmit={submit} className='form-register'>
                <h4>Login</h4>
                <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder='username' id="" />
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='password' id="" />
                <input type="submit" className='login-button' value="Login" />
            </form>
        </div>
    )
}

export default page;
