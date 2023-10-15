const express = require('express');
const router = express.Router();
const pdfParser = require('pdf-parse');
const fs = require('fs');
const User = require('../models/User');
const UserDetails = require('../models/UserDetails');
const jwt = require('jsonwebtoken');
const Template = require('../models/templates');
const portfolios = require('../skeletons/portfolios');

router.post('/add', async (req, res) => {
    const keywords = [
        "LEADERSHIP", "TEAMWORK", "COMMUNICATION", "PROBLEM-SOLVING", "CRITICAL THINKING", "ADAPTABILITY",
        "TIME MANAGEMENT", "PROJECT MANAGEMENT", "DECISION MAKING", "ANALYTICAL SKILLS", "CREATIVITY",
        "ATTENTION TO DETAIL", "MULTITASKING", "RESEARCH", "NEGOTIATION", "CONFLICT RESOLUTION",
        "CUSTOMER SERVICE", "SALES", "MARKETING", "DATA ANALYSIS", "STRATEGIC PLANNING", "BUDGET MANAGEMENT",
        "PUBLIC SPEAKING", "PRESENTATION SKILLS", "RISK MANAGEMENT", "QUALITY CONTROL", "INTERPERSONAL SKILLS",
        "LEADERSHIP DEVELOPMENT", "ORGANIZATIONAL SKILLS", "PROBLEM IDENTIFICATION", "SALES STRATEGY",
        "MARKET RESEARCH", "CLIENT RELATIONS", "TEAM LEADERSHIP", "CROSS-FUNCTIONAL COLLABORATION",
        "VENDOR MANAGEMENT", "CLIENT ACQUISITION", "MARKET ANALYSIS", "CUSTOMER RELATIONSHIP MANAGEMENT (CRM)",
        "BUSINESS DEVELOPMENT", "JAVASCRIPT", "PYTHON", "JAVA", "C++", "RUBY", "PHP", "SWIFT", "C#", "SQL", "HTML/CSS",
        "TYPESCRIPT", "GO", "KOTLIN", "RUST", "MATLAB", "PERL", "SHELL SCRIPTING", "R", "SCALA", "VB.NET",
        "OBJECTIVE-C", "ASSEMBLY", "DART", "COBOL", "LUA", "VBA", "GROOVY", "PL/SQL", "ABAP",
        "MICROSOFT OFFICE SUITE", "ADOBE CREATIVE SUITE", "SALESFORCE", "SAP", "TABLEAU", "GOOGLE ANALYTICS",
        "AUTOCAD", "MATLAB", "HADOOP", "DOCKER", "KUBERNETES", "AWS", "AZURE", "GIT/GITHUB", "JENKINS", "JIRA",
        "SLACK", "TRELLO", "WORDPRESS", "DRUPAL", "JOOMLA", "SHAREPOINT", "CRM SOFTWARE", "ERP SYSTEMS",
        "VIRTUALIZATION", "NETWORK ADMINISTRATION", "DEVOPS", "AGILE METHODOLOGY", "SCRUM", "BIG DATA",
        "HEALTHCARE", "FINANCE", "EDUCATION", "INFORMATION TECHNOLOGY (IT)", "RETAIL", "MANUFACTURING", "REAL ESTATE",
        "HOSPITALITY", "CONSTRUCTION", "NONPROFIT", "PHARMACEUTICALS", "MARKETING", "E-COMMERCE", "TELECOMMUNICATIONS",
        "AEROSPACE", "ENERGY", "ENTERTAINMENT", "AUTOMOTIVE", "GOVERNMENT", "ENVIRONMENTAL",
        "PMP (PROJECT MANAGEMENT PROFESSIONAL)", "CPA (CERTIFIED PUBLIC ACCOUNTANT)", "CFA (CHARTERED FINANCIAL ANALYST)",
        "PHR (PROFESSIONAL IN HUMAN RESOURCES)", "SHRM-CP (SHRM CERTIFIED PROFESSIONAL)",
        "CISSP (CERTIFIED INFORMATION SYSTEMS SECURITY PROFESSIONAL)",
        "CCNA (CISCO CERTIFIED NETWORK ASSOCIATE)", "COMPTIA A+",
        "AWS CERTIFIED SOLUTIONS ARCHITECT", "GOOGLE CLOUD PROFESSIONAL CLOUD ARCHITECT"
    ];

    let data = "";
    let score = 40;
    console.log('Received a POST request to /add');
    console.log(req.body); // This will contain any text fields from your form
    console.log(req.file); // This will contain information about the uploaded file
    if (!req.file) {
        res.json({
            score: "No file uploaded"
        });
        return;
    }
    // Process the uploaded file using pdfParser or any other method
    let result = await pdfParser(req.file.path)

    data = await result.text;
    data = data.toUpperCase();

    for (const keyword of keywords) {
        if (data.includes(keyword)) {
            score++;
        }
    }

    // Delete the uploaded file after processing 
    await fs.unlinkSync(req.file.path);

    res.json({
        score
    });
});

router.post('/register', async (req, res) => {
    if (req.body.name) {
        let { username, name, email, password } = { ...req.body };
        try {
            let user = await User.findOne({ username });
            console.log(user);
            if (!user) {
                let user = await User.create({
                    username,
                    name,
                    email,
                    password
                });

                user.save();
                console.log(name + " user logged in")
                res.json({
                    login: true,
                    username,
                    name,
                    email
                })
            }
            else {
                res.json({
                    login: false
                });
            }
        }
        catch (err) {
            console.log(err);
            res.json({
                login: false
            });
        }


    }
    else {
        res.json({
            login: false
        });
    }
});

router.post('/login', async (req, res) => {
    if (req.body.username) {
        let { username, password } = { ...req.body };
        let user = await User.findOne({
            username
        });
        if (user) {
            if (user.password == password) {
                console.log(username + "user logged in");
                req.user = user;

                let token = jwt.sign({ id: user._id }, process.env.JWT_KEY, {
                    expiresIn: '30d'
                });
                res.json({
                    login: true,
                    username,
                    name: user.name,
                    email: user.email,
                    token
                });
            }
            else {
                res.json({
                    login: false
                });
            }
        }
        else {
            res.json({
                login: false
            });
        }
    }
    else {
        res.json({
            login: false,
        })
    }
});

router.post('/jwt', async (req, res) => {
    if (req.body.token) {
        let token = req.body.token;
        try {
            let decode = jwt.verify(token, process.env.JWT_KEY);
            req.user = await User.findById(decode.id).select('-password');
            if (req.user) {
                res.json({
                    login: true,
                    name: req.user.name,
                    username: req.user.username,
                    email: req.user.email
                });
            }
            else {
                throw new Error("fail");
            }

        }
        catch (err) {
            res.json({
                login: false
            })
        }

    }
    else {
        res.json({
            login: false
        })
    }
});

router.post('/userdata', async (req, res) => {
    if (req.body.id) {
        let { name, description, field,role, skills, certifications, projects, college, id } = req.body;
        try {
            // check user exists or not
            let check = await User.findOne({ username: id });
            if (check) {
                //updating to db

                let check2 = await UserDetails.findOne({ id });
                if (check2) {
                    let user2 = await UserDetails.findOneAndUpdate({ id }, {
                        name,
                        description,
                        field,
                        role,
                        skills,
                        certifications,
                        projects,
                        college,
                        id
                    });

                    req.userDetails = user2;
                }
                else {
                    let user = await UserDetails.create({
                        name,
                        description,
                        field,
                        role,
                        skills,
                        certifications,
                        projects,
                        college,
                        id
                    });
                    user.save();
                    req.userDetails = user;
                }

                //returning json data
                res.json({
                    name,
                    description,
                    field,
                    role,
                    skills,
                    certifications,
                    projects,
                    college,
                    id,
                    successful: true
                });

            }
            else {
                console.log("user not found");
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    else {
        res.json({
            login: false
        })
    }
});

router.get('/userdata/:id', async (req, res) => {
    let id = req.params.id;

    try {
        if (id) {
            let user = await UserDetails.findOne({ id });
            if (user) {
                res.json(user);
            }
            else {
                res.json({
                    message: "user data not found"
                })
            }
        }
        else {
            res.json({
                message: "user data not found"
            })
        }
    }
    catch (err) {
        console.log(err);
        res.json({
            message: "user data not found"
        })
    }
});

router.get('/portfolio', async (req, res) => {
    try {
        let temp = await Template.find({});
        res.json(temp);
    }
    catch (err) {
        console.log(err);
        res.json({
            message: false
        })
    }
});

router.post('/portfolio', async (req, res) => {
    try {
        if (req.body.name) {
            let { id , tem} = req.body;
            id = id.toLowerCase();
            if (fs.existsSync('public/' + id)) {
                console.log("already exists");
            }
            else {
                fs.mkdirSync('public/' + id);
            }
            let data = portfolios(tem,req.body);
            fs.writeFileSync('public/' + id + "/index.html", data);
            res.json({
                message: true,
                url: id
            })
            console.log("site created");
        }
        else {
            res.json({
                message: false
            })
            console.log("failed");
        }
    }
    catch (err) {
        res.json({
            message: false
        })
        console.log(err);
    }
});

module.exports = router;