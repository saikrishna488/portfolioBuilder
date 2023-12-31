

let port = (name, data) => {

        let port1 = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.name} - Portfolio</title>
    <!-- <link rel="stylesheet" href="styles.css"> -->
    <style>
        /* Reset some default styles */
        body,
        h1,
        h2,
        p,
        ul {
            margin: 0;
            padding: 0;
        }

        /* Basic styling */
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            color: #333;
        }

        header {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 20px 0;
        }

        header h1 {
            font-size: 36px;
        }

        header p {
            font-size: 18px;
        }

        .main-content {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .about-me,
        .skills,
        .certifications,
        .projects,
        .college {
            margin-bottom: 20px;
        }

        h2 {
            font-size: 24px;
            margin-bottom: 10px;
        }

        ul {
            list-style: none;
        }

        ul li {
            margin-bottom: 5px;
        }

        a {
            text-decoration: none;
            color: #0077cc;
        }

        a:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>
    <header>
        <h1>Your ${data.name}</h1>
        <p>Web Developer</p>
    </header>
    <section class="main-content">
        <div class="about-me">
            <h2>About Me</h2>
            <p>
            ${data.description}
            </p>
        </div>
        <div class="skills">
            <h2>Skills</h2>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>${data.skills}</li>
            </ul>
        </div>
        <div class="certifications">
            <h2>Certifications</h2>
            <ul>
                <li>Web Development Certification - XYZ Institute</li>
                <li>Front-End Development Certification - ABC Academy</li>
                <li> ${data.certifications} </li>
            </ul>
        </div>
        <div class="projects">
            <h2>Projects</h2>
            <ul>
                <li>
                    <a href="#">Project 1 - My Portfolio Website</a>
                </li>
                <li>
                    <a href="#">Project 2 - E-commerce Website</a>
                </li>
                <span> ${data.projects} </span>
            </ul>
        </div>
        <div class="college">
            <h2>College</h2>
            <p>${data.college}</p>
        </div>
    </section>
</body>

</html>
`
return port1;

}

module.exports = port;
