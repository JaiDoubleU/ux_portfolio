
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
        name: "Application Menu Redesign",
        tagline: "Curtain Menu Prototype",
        desc: "Design a comprehensive mega menu, ensuring compatibility with both desktop and mobile platforms, while accommodating numerous links for improved accessibility and user experience.",
        shadow: "rgba(0, 24, 152, 0.5) 0px 0px 20px 0px",
        detailsTexts: [
            "How do you handle a situation where multiple legacy applications have been integrated within a single enterprise application and you're asked to design a mega menu that incorporates all of them?",
            "You take the menus from each of the existing applications and combine them borrowing a design from a menu seen on Playstation.com."
        ],
        completed: true,
        asset: <iframe height="600" width="100%;" scrolling="no" title="Curtain Menu Prototype" src="https://codepen.io/jwshannon/embed/ygeJqE?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"> See the Pen <a href="https://codepen.io/jwshannon/pen/ygeJqE">  Curtain Menu Prototype</a> by Jason Shannon (<a href="https://codepen.io/jwshannon">@jwshannon</a>)on <a href="https://codepen.io">CodePen</a>.</iframe>,
        redirect: "https://codepen.io/jwshannon/pen/ygeJqE"
    },
    {
        id: "Data Element Lengths",
        image: "images/works-DataElementLengths.png",
        background: "#FDF0F2",
        name: "Decision Making Tool",
        tagline: "A data driven decision making tool for designers ",
        desc: "Streamline the utilization of real data to drive UI decision-making when dealing with unpredictable data element lengths across all screen sizes.",
        details: "Some business domains naturally deal with significantly larger amounts of data compared to others. For those at the extreme end of this spectrum, designing screens with responsive forms and tables becomes a meticulous process to ensure optimal use of space where every pixel holds considerable importance.",
        detailsTexts: [
            "Some business domains naturally deal with significantly larger amounts of data compared to others. For those at the extreme end of this spectrum, designing screens with responsive forms and tables becomes a meticulous process to ensure optimal use of space where every pixel holds considerable importance.",
            "Designers in these domains need to be mindful of the volume of data their forms and tables must handle to ensure the design scales well.  The decision making tool below allows designers to know how much content their elements need to support",      
            "While it's not an exact science, it does give ballpark values to base design decisions on."
        ],
        shadow: "rgba(129, 19, 36, 0.5) 0px 0px 20px 0px",
        completed: true,
        asset: <iframe height="600px" width="100%" title="Bell Curve for Data Element Lengths" src="https://codepen.io/jwshannon/embed/eYQzRBp?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">See the Pen <a href="https://codepen.io/jwshannon/pen/eYQzRBp"> Bell Curve for Data Element Lengths</a> by Jason Shannon (<a href="https://codepen.io/jwshannon">@jwshannon</a>)  on <a href="https://codepen.io">CodePen</a>.</iframe>,

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
                bg: "#FDF0F2"
            },
            {
                name: "Problem",
            },
            {
                name: "Research",
                bg: "#FFFFFF"
            },
            {
                name: "Ideation",
                bg: "#f0fdf0"
            },
            {
                name: "Style",
                bg: "#F0F5FD"
            },
            {
                name: "Design",
            },
            {
                name: "Results and Takeaways",
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
                heading: "The Problem",
                texts: [
                    "The process for creating, distributing and tracking RFX Documents requires a significant amount of effort.  This is especially true when multiple projects require multiple requests, each having their own deadlines. ",
                    "Moreover, after RFx submissions are received, they are often numerous and inconsistent making them difficult to compare.  The process is outlined in the diagram below."                    
                ],
                img: "/images/rfxCase-process.png",
                bg: "#FDF0F2",
            },
            {
                topic: "The Goal",
                heading: "Pain Points",
                texts: [
                    "Optimize the process of generating, distributing, and tracking RFX documents to create a more efficient and user-friendly experience, ultimately facilitating an easier selection process.",
                ],
                img: "/images/c3 p2.png",
            },
            {
                topic: "Research",
                heading: "Understanding Our Users",
                texts: [
                    "In the foundational research phase, we relied on subject matter experts to gain insights about the industry and the target user demography. We then met with potential users to validate our understanding of the problem domain.",
                    "Through these meetings, we were able to jointly identify three primary pain points in the RFX process:",
                ],
                 requirements: [
                    {
                        texts: "Monitoring the status of outstanding requests. ",
                    },
                    {
                        texts: "Evaluation of competing responses to requests.",
                    },
                    {
                        texts: "Identifying which customers to include in RFX requests",
                    }
                ]
            },
            {
                topic: "Ideation",
                heading: "Wire Frames",
                texts: [
                    "We created some rough wire frames to present to stakeholders and initial test subjects to gauge whether we were on track or not.  Initial feedback suggested that tracking outstanding request documents needed greater visibility/emphasis in the design.",
                ],
                 img: "/images/case-rfx-dashboard-wireframe.png",
            },
            {
                topic: "Design",
                heading: "High-Res Designs",
                texts: [
                    "Because this was to be presented to users at our annual user conference, I was asked to create a high resolution clickable mockup allowing users to navigate through the different screens to get a feel for the application as a whole.",
                    "Upon login, users are greeted with the dashboard screen where they can get a quick overview of the status of their outstanding RFX documents. They are also provided with a risk and performance overview of their supplier base as well as a central communications center.",
                ],
                img: "/images/case-rfx-dashboard.png",
                bg: "#FDF0F2",
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
                topic: "Results and Takeaways",
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
                bg: "#FDF0F2",
            },
            {
                name: "Problem",
                bg: "#F3F0FD",
            },
            {
                name: "Research",
                bg: "#ffffff",
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
                name: "Results & Takeaways",
                bg: "#FDF0F2"

            },

        ],
        table: "/images/table1.png",
        bg: "#FDF0F2",
        img: "/images/solarSitesMacbook.png",
        id: "Solar Sites",
        name: "Solar Sites", 
        tagline: "Utilize satellite imagery to monitor the advancement of construction projects, identify changes, and facilitate comprehensive management of solar construction sites.",
        contents: [
            {
                topic: "Overview",
                heading: "The Problem",
                texts: [
                      "The current state of affairs in solar project implementation reveals a critical deficiency in the area of monitoring the diverse construction phases of solar sites.",
                    "Stakeholders engaged in these initiatives lack a centralized and accessible platform that utilizes live satellite imagery for monitoring and tracking the diverse construction phases of solar sites. This gap hampers efficient decision-making, timely interventions, and comprehensive project management, leading to potential delays, cost overruns, and suboptimal outcomes in the execution of solar initiatives."
                ],
                img: "/images/project-manager.png",
                bg: "#FDF0F2",
            },
            {
                topic: "The Goal",
                heading: "Pain Points",
                texts: [
                    "Gain acceptance from stakeholders on the feasibility of an application designed to monitor construction projects' advancement toward completion.",
                ],
                img: "/images/c1 p1.png",
            },

            {
                topic: "Research",
                heading: "Empathizing With Users",
                texts: [
                    "We interviewed several solar project implementation specialists.  Some of their comments are below:"
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
                topic: "Research",
                heading: "Group Sessions",
                texts: [
                    "Teaming up with some subject matter experts, I organized three sessions to shed light on what the main issues are. Three main problem areas emerged:",
                ],
                requirements: [
                    {
                        texts: "Real-Time Tracking of all phases of construction ",
                    },
                    {
                        texts: "Task and Resource Monitoring",
                    },
                    {
                        texts: "User Access Control",
                    }
                ]
            },
            {
                topic: "Ideation",
                heading: "Exploration ",
                texts: [
                    "To get our stakeholders actively involved in the design process, I created up some high-level wire-frames. Not only did they help confirm my understanding of the issues we hashed out in our initial meeting, but they also helped facilitate a design session where we brainstormed ideas for potential solutions.",
                ],
                img: "/images/case-solarSites-mockup1.svg",
            },
            {
                topic: "Ideation",
                heading: "Refinement",
                texts: [
                    "High level wire-frames were successful in bringing to light certain ideas that were not considered or discussed in the first set of meetings.  For example, it was brought to light that the solar imagery needed greater emphasis in the design to allow for easier identification of progress in the project.  As a result, the solar images were made larger to make comparisons easier.",

                ],
                 img: "/images/case-solarSites-mockup2.svg",
                bg: "linear-gradient(89.03deg, rgba(201, 216, 255, 0.56) -7.98%, rgba(255, 209, 167, 0.35) 133.27%)"
            },
             {
                topic: "Solution",
                heading: "Task and Resource Monitoring",                                       
                texts: [
                    "Each project features a common header area where specific details of the project are captured and displayed",
                ],
                img: "/images/case-solarSites-mockup3.png",
                bg: "linear-gradient(89.03deg, rgba(255, 250, 201, 0.56) -7.98%, rgba(255, 167, 167, 0.35) 133.27%)"
            },
            {
                topic: "Solution",
                heading: "Real-Time Tracking of all phases of construction",                                       
                texts: [
                    "By providing larger, highly detailed imagery, users can easily detect changes to the project as they navigate between the satellite images",
                ],
                img: "/images/case-solarSites-mockup3.png",
                bg: "linear-gradient(89.03deg, rgba(255, 250, 201, 0.56) -7.98%, rgba(255, 167, 167, 0.35) 133.27%)"
            },
             
                {
                topic: "Solution",
                heading: "User Access Control",                                       
                texts: [
                    "By requiring users to sign in to the application, administrators can control which imagery is displayed to which users.  Users are only allowed to access projects they have permission to see",
                ],
                img: "/images/case-solarSites-mockup3.png",
                bg: "linear-gradient(89.03deg, rgba(255, 250, 201, 0.56) -7.98%, rgba(255, 167, 167, 0.35) 133.27%)"
            }
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
                bg: "#FDF0F2"
            },
            {
                name: "Research",
                bg: "#FFFFFF"
            },
            {
                name: "Problem",
                isHalf: true,
            },
            {
                name: "Solution",
                bg: "#FdFdF0"
            },
            {
                name: "Results & Takeaways",
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
                bg: "#FDF0F2",
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
                topic: "Results and Takeaways",
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
