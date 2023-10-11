
export const portfolios = [
    {
        id: "RFX Application",
        image: "images/case-rfx-main.png",
        name: "RFX Document Management",
        tagline: "Some Tagline",
        desc: "A design for an application focused on creating, distributing and tracking RFX documents",
        background: "#EBE8FF",
        color: "#001898",
        shadow: "0px 0px 20px 0px rgba(0,24,152,0.5)",
    },
    {
        id: "Solar Sites",
        image: "images/case-solarSites-main.png",
        name: "Solar Sites Application",
        desc: "A design for an application that leverages real-time satellite imagery to track progress, provide change detection, and offer geospatial analytics for solar site projects.",
        tagline: "Some Tagline",
        background: "#FDF0F2",
        color: "#811324",
        shadow: "0px 0px 20px 0px rgba(129,19,36,0.5)",
    },
    {
        id: "Enterprise App Redesign",
        image: "images/case-enterpriseApp-main.png",
        name: "Enterprise App Redesign",
        desc: "A design for a navigation system that enables seamless transitions between various existing applications, ultimately enhancing the overall user experience.",
        tagline: "Some Tagline",
        background: "#F8F7FF",
        color: "#271C64",
        shadow: "0px 0px 20px 0px rgba(39,28,100,0.5)",
    }
]
export const works = [

    {
        id: "Curtain Menu Navigation",
        image: "images/works-curtainMenu.png",
        background: "#EBE8FF",
        name: "Mega Menu Redesign",
        tagline: "Curtain Menu Prototype",
        desc: "Design a comprehensive mega menu, ensuring compatibility with both desktop and mobile platforms, while accommodating numerous links for improved accessibility and user experience.",
        shadow: "rgba(0, 24, 152, 0.5) 0px 0px 20px 0px",
        details: "This project was created with collaboration with my friend. Since we were a team of two I had to take many roles but majorly I worked as developer, brand and content marketing manager.",
        completed: true,
        asset: <img className="img-fluid hover_img" src={process.env.PUBLIC_URL + "/images/arrePage.png"} alt="work_img" />,
        redirect: "https://codepen.io/jwshannon/pen/ygeJqE"
    },
    {
        id: "Data Element Lengths",
        image: "images/works-DataElementLengths.png",
        background: "#FDF0F2",
        name: "Data Driven Decision Making Tool",
        tagline: "A tool for designers to use in data driven decision making",
        desc: "Streamline the utilization of real data to drive UI decision-making when dealing with unpredictable data element lengths across all screen sizes.",
        details: "Some applications, by nature of the business area they target, are more data heavy than others.  For applications at the extreme end of this spectrum, every pixel counts when designing responsive forms and tables that optimize use of space. ",
        shadow: "rgba(129, 19, 36, 0.5) 0px 0px 20px 0px",
        completed: true,
        asset: <iframe height="400px" width="600px" title="Bell Curve for Data Element Lengths" src="https://codepen.io/jwshannon/embed/eYQzRBp?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">See the Pen <a href="https://codepen.io/jwshannon/pen/eYQzRBp"> Bell Curve for Data Element Lengths</a> by Jason Shannon (<a href="https://codepen.io/jwshannon">@jwshannon</a>)  on <a href="https://codepen.io">CodePen</a>.</iframe>,
        redirect: "https://codepen.io/jwshannon/pen/eYQzRBp"
    },
    
]

export const skills = [

    {
        category: "General",
        arr: [
            "Enterprise UX", "Design Systems", "Frontend Dev", "User Research", "User Testing", "Agile/Scrum", "Responsive Design", "UX Analytics", "User Centered Design"
        ]

    },
    {
        category: "Tools",
        arr: [
            "Adobe Creative Suite", "Figma", "Sketch", "Invison", "Pendo", "AppCues"
        ]
    },
    {
        category: "Technical",
        arr: [
            "JavaScript", "HTML/CSS", "CSS Frameworks", "React", "Angular"
        ]
    }


]

export const caseContent = [

    {
        topics: [

            {
                name: "Overview",
                isHalf: true,
                bg: "#F0F5FD"
            },
            {
                name: "Problem",
            },
            {
                name: "Research",
                bg: "#F0F5FD"
            },
            {
                name: "Ideation",
            },
            {
                name: "Style",
                bg: "#F0F5FD"
            },
            {
                name: "Design",
            },
            {
                name: "Results and takeaways",
                bg: "#F0F5FD"
            },
        ],
        bg: "#FFEDBD",
        img: "/images/case-rfx-main.png",
        table: "/images/table 3.png",
        id: "RFX Application",
        name: "RFX Document Management",
        tagline: "An interactive design created in Figma for presentation at an annual user conference.",
        contents: [
            {
                topic: "Overview",
                heading: "The Goal",
                texts: [
                    "Optimize the process of generating, distributing, and tracking RFX documents to create a more efficient and user-friendly experience, ultimately facilitating an easier selection process.",
                ],
                img: "/images/c3 p2.png",

            },
            {
                topic: "Problem",
                heading: "Pain Points",
                texts: [
                    "The process for creating, distributing and tracking RFX Documents requires a significant amount of effort.  This is especially true when multiple projects require multiple requests, each having their own deadlines. ",
                    "Moreover, after RFx submissions are received, they are often numerous and inconsistent making them difficult to compare.  The process is outlined in the diagram below."                    
                ],
                img: "/images/rfxCase-process.png",

            },
            {
                topic: "Research",
                heading: "Understanding Our Users",
                texts: [
                    "In the foundational research phase, we relied on subject matter experts to gain insights about the industry and targeted user demography. We then worked with potential users to validate our understanding of the problem domain."
                ],
            },
            {
                topic: "Research",
                heading: "Problem Identification",
                texts: [
                    "Users were able to identify three main pain points in the RFX process. The first was their inability to easily monitor the status of outstanding requests.  The second had to do with their inability to easily evaluate competing responses. The third area was their difficulties determining which customers to include in RFX requests",
                ],
            },
            {
                topic: "Ideation",
                heading: "Brainstorming",
                texts: [
                    "Content here.",
                ],
            },
            {
                topic: "Design",
                heading: "RFX Dashboard",
                texts: [
                    "Upon login, users are greeted with the dashboard screen where they can get a quick overview of the status of their outstanding RFX documents. They are also provided with a risk and performance overview of their supplier base as well as a central communications center.",
                ],
                img: "/images/case-rfx-dashboard.png",
            },
            {
                topic: "Design",
                heading: "Outstanding Request Management",
                texts: [
                    "Clients can enter their requirements through these input screens. These screens are designed, keeping in mind that users don't have the exact idea of what they need but they are sure about their preferences and needs. ",
                ],
                img: "/images/case-rfx-requestManagement.png",
            },
            {
                topic: "Design",
                heading: "Evaluation Scorecard",
                texts: [
                    "For submitting proposals we created different types of input fields as compared to the client-side. This helped us get the exact data required for proposals. Users are input all the information required through these screens.",
                ],
                img: "/images/case-rfx-evaluation-scorecard.png",
            },
            {
                topic: "Design",
                heading: "Finding Customers",
                texts: [
                    "By entering a few parameters, users are able to quickly identify customers who are able to fulfill the requirements of their RFX requests.",
                ],
                img: "/images/case-rfx-supplier-discovery.png",
            },
            {
                topic: "Results and takeaways",
                heading: "Interactivity was Key",
                texts: [
                    "The conference was a big success and the response to the RFX Mockups was a big part of that.  Screenshots of the mockup even made it into the slide deck for the conference's closing remarks given by the company's CEO.",
                    "We had lots of comments from attendees who stated they appreciated having a mockup they could interact with hands-on, stating it felt more real.  Many also expressed a desire to be involved in the project to give feedback as it's being developed.",
                ],
            },
        ],
       
    },
    {
        topics: [
            {
                name: "Overview",
                isHalf: true,
                bg: "#F0FDF0"

            },
            {
                name: "Problem",
                isHalf:true
            },

            {
                name: "Research",
                bg: "#F3F0FD",
            },
            {
                name: "Ideation",
                bg: "#F0FDF0",
            },
            {
                name: "Solution",
                bg: "#FDFDF0"

            },
            {
                name: "Features",
                bg: "#F0FDF0"
            },
            {
                name: "Results and takeaways",
                bg: "#FDF0F2"

            },

        ],
        table: "/images/table1.png",
        bg: "#FDF0F2",
        img: "/images/cover case 1.png",
        id: "Solar Sites",
        name: "Solar Sites", 
        tagline: "A design for an application, that utilizes live satellite imagery to monitor the advancement of construction projects, identify changes, and facilitate comprehensive management of solar construction sites.",
        contents: [
            {
                topic: "Overview",
                heading: "The Goal",
                texts: [
                    "An interactive mockup created using AlpineJS and Tailwind CSS used to garner feedback from stakeholders on the application's feasibility.",
                ],

                img: "/images/c1 p18.png",

            },
            {
                topic: "Problem",
                heading: "Solar Project Management",
                texts: [
                    "The current state of affairs in solar project implementation reveals a critical deficiency in the area of monitoring the diverse construction phases of solar sites.",
                    "Stakeholders engaged in these initiatives lack a centralized and accessible platform that utilizes live satellite imagery for monitoring and tracking the diverse construction phases of solar sites. This gap hampers efficient decision-making, timely interventions, and comprehensive project management, leading to potential delays, cost overruns, and suboptimal outcomes in the execution of solar initiatives."
                ],
                img: "/images/c1 p1.png",
            },

            {
                topic: "Research",
                heading: "Empathizing With Users",
                texts: [
                    "We interviewed several professionals currently involved with solar project implementation.  The typically had comments similar to the following:"
                ],
                researches: [
                    {
                        texts: "Coordinating solar projects is sometimes like trying to navigate a maze blindfolded. Without real-time imagery and a unified platform, it's nearly impossible to stay on top of construction progress.",
                        source: "Alex, Project Manager"
                    },
                    {
                        texts: "Every day counts in solar projects, and the lack of a unified platform for satellite imagery is a significant hurdle. We need a solution to streamline project management and ensure success.",
                        source: "Sarah, Construction Supervisor"
                    },
                    {
                        texts: "Time is money in solar projects. Without a reliable tool to monitor construction stages, we're left in the dark about potential delays and cost overruns.",
                        source: "John, Solar Project Developer"
                    },
                    {
                        texts: "It's astounding that in this era of technology, we're still struggling with disjointed systems in solar project management. Real-time imagery is a game-changer we desperately need.",
                        source: "Lisa, Environmental Consultant"
                    }

                ]
            },            
            {
                topic: "Ideation",
                heading: "Group Design Sessions",
                texts: [
                    "With the help of subject matter experts, we held three design sessions aimed at bringing ideas to light about what the interface needs to do",
                ],
                img: "/images/c1 p19.png",

            },
            {
                topic: "Ideation",
                heading: "Why these features?",
                texts: [
                    "We prioritize these four features based on Effort vs. Matrix. We made sure not to rate our ideas to remove the bias. ",
                    "Since we need to minimize the effort as we have limited resources this method helped us in the evaluation  complexity vs value.",
                    " ",
                ],
                img: "/images/c1 p15.png",

            },
            {
                topic: "Solution",
                heading: "Exploration and wireframes",
                texts: [
                    "We aim to close the treatment gap by surpassing social stigmas and promoting mental care in your day-to-day life.",
                ],
                img: "/images/c1 p16.png",
            },
            {
                topic: "Solution",
                texts: [
                    "Solution here",
                ],
                img: "/images/c1 p17.png",


            },
            {
                topic: "Features",
                heading: "Self Care",
                texts: [
                    "The App Will Present With Various Methods To Maintain Or Improve Your Mental Health Based On the user’s Choices. Users will also be able To Track Their Journey Through Our App",
                ],
                img: "/images/c1 p4.png",
                bg: "linear-gradient(89.03deg, rgba(201, 216, 255, 0.56) -7.98%, rgba(255, 209, 167, 0.35) 133.27%)"
            },
            {
                topic: "Features",
                heading: "Healers",
                texts: [
                    "Users can chat with professional doctors and schedule appointments with them, and track their progress through our app. It will allow the users to get that much needed help and get through tough times. Users also have the option to chat anonymously with the doctors.",
                ],
                img: "/images/c1 p5.png",
                bg: "linear-gradient(89.03deg, rgba(255, 250, 201, 0.56) -7.98%, rgba(255, 167, 167, 0.35) 133.27%)"
            },
            {
                topic: "Features",
                heading: "Anonymous",
                texts: [
                    "Our Investigation reflected that people have fear sharing their feelings with friends, family, or even doctors. Being anonymous gives the user a way through which they can start being a little more open.",
                ],
                img: "/images/c1 p6.png",

                bg: "linear-gradient(89.03deg, rgba(201, 206, 255, 0.56) -7.98%, rgba(179, 255, 167, 0.35) 133.27%)"

            },
            {
                topic: "Features",
                heading: "Community & Facts",
                texts: [
                    "Users will learn about mental health and other life problems by sharing their stories. There will be no likes or other social incentives, which could create competition and anxiety among users. Users will be able to tackle misinformation through our Burst the Myth section.",
                ],
                img: "/images/c1 p7.png",

                bg: "linear-gradient(89.03deg, rgba(201, 255, 252, 0.56) -7.98%, rgba(255, 167, 167, 0.35) 133.27%)"

            },
            {
                topic: "Results and takeaways",
                heading: "Paying attention to detail",
                texts: [
                    "Forming a personality for a product is not only fun but it engages the users more.",
                    "Initially, I didn’t put a lot of effort into illustrations which resulted in a low retention rate.",
                    "After a few iterations, I added a few more illustrations and the retention rate increased significantly.",
                ],
            },
        ],

        prototype: {
            img: "/images/c1 p8.png",
            link: "https://www.figma.com/proto/zCpzOBk7fc8bQOCZlDLW6B/Mind-Care?node-id=0%3A1"
        }
    },
    {
        topics: [

            {
                name: "Overview",
                isHalf: true,

            },
            {
                name: "Research",
                bg: "#F3F0FD"
            },
            {
                name: "Problem",
                isHalf: true,
            },
            {
                name: "Solution",
            },
            {
                name: "Results and takeaways",
                bg: "#FDF0F2"

            },
        ],

        bg: "#BDD8FF",
        img: "/images/case-enterpriseApp-main.png",
        table: "/images/table2.png",
        id: "Enterprise App Redesign",
        name: "Enterprise Application Redesign",
        tagline: "Disney+ Hotstar is an Ott platform with over 34 million subscribers and provides the user with a variety of content ranging from live Cricket matches to exclusive movies and tv series.",
        contents: [
            {
                topic: "Overview",
                heading: "Fix what’s wrong",
                texts: [
                    "Disclaimer: I am not associated with Disney+ Hotstar. I  took on this project because I experienced trouble using the platform. This project only deals with the redesign of the website of the Ott platform.",
                    "I took this project because I always used to get frustrated using the platform and many of my friends felt the same.",
                ],
                img: "/images/c2 p2.png",
            },
            {
                topic: "Research",
                heading: "Survey and Interviews",
                texts: [
                    "Based on secondary research, my assumption, and experiences of using the platform, I created a survey."
                ],
                img: "/images/c2 p3.png",
            },
            {
                topic: "Research",
                texts: [
                    "After the survey and multiple ones on one interviews, I was able to create user groups and empathy maps which gave me a much better insight into the problem and helped me understand the user&apos;s perspective of the platform."
                ],
                img: "/images/c2 p11.png",
            },
            {
                topic: "Research",
                heading: "User testing",
                texts: [
                    "I did a user testing session with five participants using the current version of the platform. One of the tasks for the users was to reach the page which contains the list of all the tv channels available. 90% of the users failed to navigate to the channel list."
                ],
            },
            {
                topic: "Problem",
                heading: "Navigation, The Paradox of Choice, Layout are the core issues",
                texts: [
                    "The platform has multiple intricate issues of navigation, recommendation system, and layout of content. Users were also experiencing a lot of confusion while choosing the content to watch.",
                ],
                img: "/images/c2 p4.png",
            },
            {
                topic: "Solution",
                heading: "Navigation Bar",
                texts: [
                    "The majority of users were able to separate the content on basis of channel, language, or genre. The sandwich menu seemed too hidden for the user to interact with. The new design made it much simpler and clear as all the options were right in front of them.",
                ],
                img: "/images/c2 p5.png",
                bg: " linear-gradient(89.03deg, rgba(208, 255, 201, 0.56) -7.98%, rgba(255, 167, 246, 0.35) 133.27%)"
            },
            {
                topic: "Solution",
                heading: "The Paradox Of Choice",
                texts: [
                    "I found that most of the users were viewing the content based on their mood. I appended a mood section where people can find the content according to their mood. This will help them solve their problem.",
                ],
                img: "/images/c2 p6.png",
                bg: "linear-gradient(89.03deg, rgba(255, 250, 201, 0.56) -7.98%, rgba(255, 167, 167, 0.35) 133.27%)"
            },
            {
                topic: "Solution",
                heading: "Navigate through 100+ episodes",
                texts: [
                    "Some Indian tv series have over 250+ episodes and to go through them by sliding the episodes is not practical. A dropdown menu increases the efficiency of navigating to a particular episode.",
                ],
                img: "/images/c2 p7.png",
                bg: "linear-gradient(89.03deg, rgba(201, 206, 255, 0.56) -7.98%, rgba(179, 255, 167, 0.35) 133.27%)"
            },
            {
                topic: "Solution",
                heading: "Intimated by the Quantity",
                texts: [
                    "According to research, users were intimidated by the quantity of the content shown on a single screen. It results in user anxiety which would ultimately harm their experience.",
                    "Decreased the number of content shown at once.",
                ],
                img: "/images/c2 p8.png",
                bg: "linear-gradient(89.03deg, rgba(201, 255, 252, 0.56) -7.98%, rgba(255, 167, 167, 0.35) 133.27%)"
            },
            {
                topic: "Solution",
                heading: "Recommendation",
                texts: [
                    "Recommendation works on two sets of data: implicit and explicit.  To improve the recommendation a direct feedback button was added. This will enhance the recommendation system.",
                ],
                img: "/images/c2 p9.png",
                bg: "linear-gradient(89.03deg, rgba(201, 255, 252, 0.56) -7.98%, rgba(255, 167, 167, 0.35) 133.27%)"
            },
            {
                topic: "Results and takeaways",
                heading: "Don’t fear trying out new tools",
                texts: [
                    "Implementing new tools during a live project can overwhelm you, but you don’t always have the time to try them out beforehand.",
                    "Before this, I used to design on Adobe XD but I used Figma for this project and quite liked using it."
                ],
            },
        ],
        prototype: {
            img: "/images/c2 p10.png",
            bg: "linear-gradient(89.03deg, rgba(255, 250, 201, 0.56) -7.98%, rgba(206, 167, 255, 0.35) 133.27%)"
        }
    } 
]
