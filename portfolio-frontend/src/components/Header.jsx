"use client";
import React, { useContext } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { globalContext } from '@/contextApi/GlobalContext';

const Header = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { user, setUserdata } = useContext(globalContext);

    const home = () => {
        router.push('/');
    }
    const portfolio = () => {
        document.getElementsByClassName('portfolio')[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    const resume = () => {
        document.getElementsByClassName('resume')[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    const logout = ()=>{
        document.cookie = "token='';";
        setUserdata({});

    }
    if (pathname == '/register' || pathname == '/login' || pathname == '/userdata') {
        return (
            <div className='header'>
                <ul className='nav'>
                    <li className='button' onClick={() => router.push('/login')}>Login</li>
                    <li className='button' onClick={() => router.push('/register')}>Signup</li>
                    <li className='templates' id='port' onClick={home}>Home</li>
                    <img src="https://w7.pngwing.com/pngs/1003/487/png-transparent-github-pages-random-icons-white-logo-monochrome.png" alt="loading" />
                </ul>
            </div>
        )
    }
    else {
        return (
            <div className='header'>
                <ul className='nav'>
                    {
                        user.name ? (
                            <>
                            <div className='user-box'>
                                <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="" />
                                <span>{user.name}</span>
                            </div>
                            <div className='user-2'>
                                <span> <b>Name : </b>{ user.name}</span>
                                <span> <b>Username : </b>{ user.username}</span>
                                <span> <b>Email : </b>{ user.email}</span>
                                <button className='button' onClick={()=>{router.push('/userdata')}}>User Data</button>
                                <button className='button' onClick={logout}>Logout</button>
                            </div>
                            </>
                            
                            
                        ) : (<>
                            <li className='button' onClick={() => router.push('/login')}>Login</li>
                            <li className='button' onClick={() => router.push('/register')}>Signup</li>
                        </>)
                    }
                    <li className='templates' id='port' onClick={portfolio}>Portfolio</li>
                    <li className='templates' onClick={resume}>Resume</li>
                    <img src="https://w7.pngwing.com/pngs/1003/487/png-transparent-github-pages-random-icons-white-logo-monochrome.png" alt="loading" />
                </ul>
            </div>
        )
    }

}

export default Header;
