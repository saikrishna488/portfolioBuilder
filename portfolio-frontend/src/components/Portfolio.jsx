"use client";
import React, { useEffect, useState, useContext } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { globalContext } from '../contextApi/GlobalContext';
import { toast } from 'react-toastify';

const Portfolio = () => {

    const { data } = useContext(globalContext);
    const [portfolio, setPortfolio] = useState([]);
    useEffect(() => {
        const fetchAll = () => {
            fetch('http://localhost:5000/portfolio', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                return res.json();
            }).then((data) => {
                setPortfolio(data)
            });
        }

        fetchAll();
    })
    const leftArrow = () => {
        let left = document.getElementsByClassName('holder')[0];
        left.scrollBy(-360, 0);
    }

    const rightArrow = () => {
        let right = document.getElementsByClassName('holder')[0];
        right.scrollBy(360, 0);
    }

    const build = async () => {
        try {
            if (data.name) {
                let res = await fetch('https://backend-portfoliobuilder.onrender.com/portfolio',{
                    method : 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify(data)
                });

                let d = await res.json();
                if(d.message == true){
                    toast("success");
                    window.open("https://backend-portfoliobuilder.onrender.com/"+d.url, '_blank');
                }
            }
        }
        catch(err){
            console.log(err);
        }
        
    }

    return (
        <div className='portfolio'>
            <h4 style={{ color: 'white' }}>Portfolio (choose templates)</h4>
            <span className='left-arrow' onClick={leftArrow}><BsFillArrowLeftCircleFill size={40} /></span>
            <span className='right-arrow' onClick={rightArrow}><BsFillArrowRightCircleFill size={40} /></span>
            <div className='holder'>
                {
                    portfolio.map((item) => (
                        <div className="port-card" onClick={() => build(item)} key={item.name}>
                            <img src={"https://backend-portfoliobuilder.onrender.com/" + item.url} alt="" />
                        </div>
                    ))
                }
                <div className="port-card">
                    <img src="https://www.creative-tim.com/blog/content/images/size/w960/wordpress/2019/03/The-Future-Web-Design-Multipurpose-HTML5-Website-Template.png" alt="" />
                </div>
                <div className="port-card">
                    <img src="https://themewagon.com/wp-content/uploads/2022/12/Meyawo.png" alt="" />
                </div>
                <div className="port-card">
                    <img src="https://www.creative-tim.com/blog/content/images/size/w960/wordpress/2019/03/The-Future-Web-Design-Multipurpose-HTML5-Website-Template.png" alt="" />
                </div>
                <div className="port-card">
                    <img src="https://themewagon.com/wp-content/uploads/2022/12/Meyawo.png" alt="" />
                </div>
                <div className="port-card">
                    <img src="https://www.creative-tim.com/blog/content/images/size/w960/wordpress/2019/03/The-Future-Web-Design-Multipurpose-HTML5-Website-Template.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Portfolio
