"use client";
import React, { useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { globalContext } from '../../contextApi/GlobalContext';

const page = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("");
    const [certifications, setCertifications] = useState("");
    const [projects, setProjects] = useState("");
    const [college, setCollege] = useState("");
    const { user, data, setData } = useContext(globalContext);

    useEffect(() => {
        // if (data.name) {
        //     setName(data.name);
        //     setDescription(data.description);
        //     setSkills(data.skills);
        //     setCertifications(data.certifications);
        //     setProjects(data.projects);
        //     setCollege(data.college);
        // }
    })



    const submit = (e) => {
        e.preventDefault();
        if (name.length > 1 && description.length > 1 && skills.length > 1 && certifications.length > 1 && projects.length > 1) {
            let obj = {
                name,
                description,
                skills,
                certifications,
                projects,
                college,
                id: user.username
            }

            console.log(obj);
            try {
                if (!user.username) {
                    throw new Error("not logged in");
                }
                fetch('https://backend-portfoliobuilder.onrender.com/userdata', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(obj)
                }).then((res) => {
                    return res.json();
                }).then((data) => {
                    if (data.successful == true) {
                        setData(data);
                        toast("Data updated now you can create portfolio/resume");
                    }
                    else {
                        toast("Please login to continue");
                        throw new Error("err");
                    }
                })
            }
            catch (err) {
                toast("Please login to continue");
            }
        }
        else {
            toast("Please fill all the fields");
        }
    }

    return (
        <div className='userdata'>
            <form className='userdata-form' onSubmit={submit}>
                <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} id="" placeholder='name (eg:harry)' required={true} />

                <input type="text" name="description" value={description}  onChange={e => setDescription(e.target.value)} id="" placeholder='description' required={true} />

                <input type="text" name="skills" value={skills}  onChange={e => setSkills(e.target.value)} id="" placeholder='skills' required={true} />

                <input type="text" name="certifications" value={certifications}  onChange={e => setCertifications(e.target.value)} id="" placeholder='certifications' required={true} />

                <input type="text" name="projects" value={projects} onChange={e => setProjects(e.target.value)} id="" placeholder='projects' required={true} />

                <input type="text" name="college" value={college} onChange={e => setCollege(e.target.value)} id="" placeholder='college' required={true} />

                <button className='button'>Submit</button>
            </form>
        </div>
    )
}

export default page
