const portfolioData = {
    navLinks: [
        { id: "home", text: "Home" },
        { id: "about", text: "About" },
        { id: "skills", text: "Skills" },
        { id: "projects", text: "Projects" },
        { id: "awards-certifications", text: "Certificates" },
        { id: "education", text: "Education" },
        { id: "contact", text: "Contact" }
    ],
    home: {
        welcomeMessage: {
            en: "Hi! I am Umair\nWelcome to my portfolio",
            ar: "مرحبًا! أنا عمير\nأهلاً بكم في محفظتي",
            fr: "Salut ! Je suis Umair\nBienvenue sur mon portfolio"
        },
        profilePic: "pp2.jpeg", 
        socialMedia: [
            { name: "GitHub", url: "https://github.com/MUmairTahir", icon: "fa-github" },
            { name: "Instagram", url: "https://www.instagram.com/m_umairtahir", icon: "fa-instagram" },
            { name: "Facebook", url: "https://www.facebook.com/mumair.tahir9101", icon: "fa-facebook" }
        ]
    },
    about: {
        aboutMe: `I am a 7th-semester computer science student with a passion for technology and problem-solving. My academic journey has provided me with a solid foundation in computer science and practical experience through various projects.
        \nI thrive on challenges and enjoy learning new technologies.Alongside my technical knowledge, I have developed strong communication, teamwork, and critical thinking skills.
        \nExplore my portfolio to learn more about my journey and projects. Let's connect and collaborate on exciting opportunities!`
    },
    skills: {
        hardSkills: [
            "Programming Languages: C++, Python, JavaScript, HTML, CSS",
            "Database: SQL"
        ],
        softSkills: [
            "Communication",
            "Teamwork",
            "Problem Solving",
            "Event Management"
        ]
    },
    projects: [
        { name: "Snake Game (C++)", description: "Developed a classic Snake game using C++. The game features smooth graphics, responsive controls, and increasing difficulty levels, offering an engaging and nostalgic experience.", date: "2022-05-12" },
        { name: "Chess Game (C++)", description: "Developed a Chess game in C++ that includes all standard chess rules and mechanics. This project demonstrates my proficiency in handling intricate game logic and user input within a console application.", date: "2022-07-15" },
        { name: "Shogi Game (C++)", description: "Created a Shogi game in C++ with full implementation of Shogi rules and mechanics. This project highlights my ability to manage complex game logic and user interactions in a console-based environment.", date: "2023-01-05" },
        { name: "Hotel Management System (C++)", description: "Designed and implemented a Hotel Management System in C++. This system manages room bookings, customer details, and billing, showcasing my skills in developing comprehensive software solutions for real-world applications.", date: "2023-05-10" },
        { name: "Shopify Store Design (adornly.com)", description: "Designed and developed a Shopify store of jewellery for Adornly, focusing on creating an appealing and user-friendly online shopping experience.", date: "2023-06-15" },
        { name: "Shopify Store Design (Zenat Boutique)", description: "Designed and developed a Shopify store for Zenat Boutique, focusing on creating an attractive and user-friendly online shopping experience. The design features a modern aesthetic, intuitive navigation, and a responsive layout.", date: "2024-01-15" }

    ],
    awardsCertifications: [
        { title: "Code Rush", date: "2023-10-20" },
        { title: "Cloud Computing Course", date: "2023-12-10" }
    ],
    education: [
        { degree: "Bachelor of Computer Science", institution: "Information Technology University", date: "Expected 2025" },
        { degree: "Intermediate", institution: "Punjab Group Of Colleges", date: "2018-2020" },
        { degree: "Matriculation", institution: "Dar-e-Arqam", date: "2016-2018" }
    ],
    contact: {
        contactInfo: "Email: mumairtahir3366@gmail.com\nPhone: 0318-0449194"
    },

};

document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav");
    const scrollThreshold = 100;

    function updateNavVisibility() {
        const scrollTop = window.scrollY;
        if (nav) {
            if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
                nav.classList.add("hidden");
                nav.classList.remove("visible");
            } else {
                nav.classList.add("visible");
                nav.classList.remove("hidden");
            }
            lastScrollTop = Math.max(scrollTop, 0);
        }
    }

    function populateElement(containerId, dataArray, createElementFn) {
        const container = document.getElementById(containerId);
        if (container && Array.isArray(dataArray)) {
            dataArray.forEach(createElementFn);
        }
    }

    let lastScrollTop = 0;
    window.addEventListener("scroll", updateNavVisibility);

    populateElement("navLinks", portfolioData.navLinks, link => {
        const listItem = document.createElement("li");
        const button = document.createElement("button");
        button.innerText = link.text;
        button.addEventListener("click", () => document.getElementById(link.id).scrollIntoView());
        listItem.appendChild(button);
        document.getElementById("navLinks").appendChild(listItem);
    });

    const welcomeMessageElement = document.getElementById("welcomeMessage");
    if (welcomeMessageElement) {
        welcomeMessageElement.innerText = portfolioData.home.welcomeMessage.en;
    }

    const profilePicElement = document.getElementById('profilePic');
    if (profilePicElement) profilePicElement.src = portfolioData.home.profilePic;

    const socialMediaFeedContainer = document.getElementById("socialMediaFeed");
    if (socialMediaFeedContainer) {
        portfolioData.home.socialMedia.forEach(link => {
            const anchor = document.createElement("a");
            anchor.href = link.url;
            anchor.target = "_blank";
            anchor.title = link.name;

            const icon = document.createElement("i");
            icon.className = `fab ${link.icon}`;
            anchor.appendChild(icon);
            socialMediaFeedContainer.appendChild(anchor);
        });
    }

    const aboutMeElement = document.getElementById("aboutMe");
    if (aboutMeElement) aboutMeElement.innerText = portfolioData.about.aboutMe;

    const hardSkillsContainer = document.getElementById("hardSkills");
    const softSkillsContainer = document.getElementById("softSkills");

    if (hardSkillsContainer) {
        hardSkillsContainer.innerHTML = "<h3>Hard Skills</h3>";
        portfolioData.skills.hardSkills.forEach(skill => {
            const skillElement = document.createElement("p");
            skillElement.innerText = skill;
            hardSkillsContainer.appendChild(skillElement);
        });
    }

    if (softSkillsContainer) {
        softSkillsContainer.innerHTML = "<h3>Soft Skills</h3>";
        portfolioData.skills.softSkills.forEach(skill => {
            const skillElement = document.createElement("p");
            skillElement.innerText = skill;
            softSkillsContainer.appendChild(skillElement);
        });
    }

    const projectsListContainer = document.getElementById("projectsList");
    if (projectsListContainer) {
        portfolioData.projects.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");
            projectCard.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p><p>${project.date || ''}</p>`;
            projectsListContainer.appendChild(projectCard);
        });

        const prevBtn = document.querySelector(".prev");
        const nextBtn = document.querySelector(".next");
        const slideContainer = document.querySelector(".slide-container");
        let slideIndex = 0;

        function updateSlidePosition() {
            const slides = document.querySelectorAll(".project-card");
            if (slides.length > 0) {
                const slideWidth = slides[0].offsetWidth;
                slideContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
            }
        }

        prevBtn.addEventListener("click", () => {
            const slides = document.querySelectorAll(".project-card");
            if (slides.length > 0) {
                slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
                updateSlidePosition();
            }
        });

        nextBtn.addEventListener("click", () => {
            const slides = document.querySelectorAll(".project-card");
            if (slides.length > 0) {
                slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
                updateSlidePosition();
            }
        });
    }

    populateElement("awardsList", portfolioData.awardsCertifications, item => {
        const itemCard = document.createElement("div");
        itemCard.classList.add("award-card");
        itemCard.innerHTML = `<h3>${item.title}</h3><p>${item.date}</p>`;
        document.getElementById("awardsList").appendChild(itemCard);
    });

    populateElement("educationList", portfolioData.education, edu => {
        const eduCard = document.createElement("div");
        eduCard.classList.add("edu-card");
        eduCard.innerHTML = `<h3>${edu.degree}</h3><p>${edu.institution}</p><p>${edu.date}</p>`;
        document.getElementById("educationList").appendChild(eduCard);
    });

    const contactInfoElement = document.getElementById("contactInfo");
    if (contactInfoElement) contactInfoElement.innerText = portfolioData.contact.contactInfo;

    function updateWelcomeMessage(language) {
        const welcomeMessageElement = document.getElementById("welcomeMessage");
        if (welcomeMessageElement && portfolioData.home.welcomeMessage[language]) {
            welcomeMessageElement.innerText = portfolioData.home.welcomeMessage[language];
        }
    }

    const enBtn = document.getElementById("lang-en");
    const arBtn = document.getElementById("lang-ar");
    const frBtn = document.getElementById("lang-fr");

    if (enBtn) enBtn.addEventListener("click", () => updateWelcomeMessage("en"));
    if (arBtn) arBtn.addEventListener("click", () => updateWelcomeMessage("ar"));
    if (frBtn) frBtn.addEventListener("click", () => updateWelcomeMessage("fr"));
});

