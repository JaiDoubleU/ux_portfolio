
export const myInfo = {
    name: "Jason Shannon",
    firstName: "Jason",
    aboutPageTitle: "About Me",
    aboutIntroText: "I'm a full stack User Experience Designer with over two decades of hands-on experience helping companies, from Fortune 500 to small start-ups, design amazing products that their customers love.",
    portfolioPageTitle: "Portfolio",
    portfolioIntroText: "My UX design journey has featured a diverse range of projects that highlight my expertise in crafting intuitive, user-centered experiences across various platforms. Below are a few examples of projects that I've particularly enjoyed."
}

export const principles = [
    {
        text: "People are Your Biggest Asset",
        subtext: "Harnessing the talent, dedication, and teamwork of individuals is the cornerstone of an anyone's success. ",
        icon: "images/collaboration.svg"
    },
    {
        text: "Seek First to Understand",
        subtext: "Empathize with and comprehending others' perspectives before offering solutions or opinions",
        icon: "images/understanding.svg"
    },
    {
        text: "Over Deliver",
        subtext: " Set realistic expectations in everything you do, and then exceed them.",
        icon: "images/over-deliver.svg"
    },
    {
        text: "Accessibility is a Requirement",
        subtext: "Ensure accessibility is a key component in every design.",
        icon: "images/accessibilityFirst.svg"
    },
    {
        text: "Flexibility is Your Superpower",
        subtext: "Consider different ideas as opportunities for innovation",
        icon: "images/superpower.svg"
    }
]
export const portfolios = [
    {
        id: "Enverus Design System",
        image: "images/EnverusDesignSystemScreens.png",
        name: "Enverus Design System",
        tagline: "Some Tagline",
        duration: "Ongoing",
        desc: "A cohesive set of guidelines, components, and tools to ensure consistency, efficiency, and scalability across all of Enverus' digital products and services.",
        color: "#271C64",
    },
    {
        id: "RFX Application",
        image: "images/RFXProjectScreens.png",
        name: "RFX Document Management",
        tagline: "Some Tagline",
        duration: "4 months",
        link:"https://design.enverus.com",
        desc: "A design for an application focused on creating, distributing and tracking RFX documents",
        color: "#271C64",
    },
    {
        id: "Solar Sites",
        image: "images/SolarSitesScreens.png",
        name: "Solar Sites Application",
        desc: "A design for an application that leverages real-time satellite imagery to track progress, provide change detection, and offer geospatial analytics for solar site projects.",
        tagline: "Some Tagline",
        duration: "3 months",
        color: "#271C64",
    },
    {
        id: "Enterprise App Redesign",
        image: "images/case-enterpriseApp-main.png",
        name: "Enterprise App Redesign",
        desc: "A design for a navigation system that enables seamless transitions between various existing applications, ultimately enhancing the overall user experience.",
        tagline: "Some Tagline",
        duration: "2 months",
        color: "#271C64",
        shadow: "0px 0px 20px 0px rgba(39,28,100,0.5)",
    }
]
export const works = [

    {
        id: "Curtain Menu Navigation",
        image: "images/works-curtainMenu.png",
        name: "Application Menu Redesign",
        desc: "Design a comprehensive mega menu, ensuring compatibility with both desktop and mobile platforms, while accommodating numerous links for improved accessibility and user experience.",
        tagline: "Curtain Menu Prototype",
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

export const currentWork = [
    {
        arr: [
            "I'm currently crafting eye-catching, user-loved things for the energy industry at Enverus.",
        ]

    }
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
        name: "Enverus Design System",
        company: "Enverus",
        duration: "Ongoing",
        topics: [            
            {
                name: "The Challenge",
            },
            {
                name: "Goals",
            },
            {
                name: "Deliverables",
            },
            {
                name: "Process",
            },
            {
                name: "Results & Takeaways",
            },
        ],
        contents: [
            {
                topic: "The Challenge",
                texts: [
                   "Due to a series of acquisitions in recent years, Enverus was faced with a fragmented user experience throughout its product range. This lack of uniformity in UI components, fonts, and color palettes contributed to an inconsistent brand presentation and a challenging onboarding process for new users. Additionally, development teams were unclear about what standards to follow when creating/updating UI elements, resulting in inefficiencies and prolonged timelines for product development."
                ],
            },
            {
                topic: "Goals",
                texts: [
                   "Unify the experience across all of Enverus’ products to improve user friendliness, maintain a cohesive brand identity, and enhance accessibility."
                ],
            },
            {
                topic: "Deliverables",
                texts: [
                   "To accomplish our goals, the following deliverables were identified:"
                ],
                 requirements: [
                    { texts:  "Create a unified and scalable design system in Figma to assist designers in maintaining consistency across all product designs.", },
                    { texts: "Create and document reusable components and templates to cut down on design time and speed up the rollout of new features and products.", },
                    {  texts: "Establish a publicly available website to serve as a reference for designers, developers, and product managers for all visual components of Enverus' applications.",   }
                ],
            },
            {
                topic: "Process",
                heading: "User Research",
                texts: [
                    "Numerous meetings were held to understand who our users are, to understand their needs, to identify brand requirements, and technical constraints.  Existing products were also evaluated to understand their unique requirements, and determine any inconsistencies and areas of improvement.",
                ],
            },
            {
                topic: "Process",
                heading: "Design Principles",
                texts: [
                    "Established a set of design principles to guide the development of the design system. These principles focused on clarity, consistency, and responsiveness, ensuring that the design choices made would serve both the users and the business effectively.",
                ]
            },
            {
                topic: "Process",
                heading: "Color Palette",
                texts: [
                    "Established a versatile color scheme that supports accessibility standards and reflects the brand's personality.",
                ]
            },
            {
                topic: "Process",
                heading: "Documentation & Guidelines",
                texts: [
                    "Authored comprehensive documentation that outlined the usage of UI components, color schemes, and typography. This documentation also included best practices for accessibility and responsive design.",
                ]
            },
             {
                topic: "Process",
                heading: "Implementation & Adoption",
                texts: [
                    "Worked closely with development teams across multiple products to implement the design system in various applications. Also conducted training sessions for designers and developers to ensure smooth adoption of the design system",
                ]
            },
             {
                topic: "Results & Takeaways",
                texts: [
                    "The Enverus Design System was a collaborative effort that required input and feedback from individuals across the organization, including marketing, product owners, designers, QA and Developers. One of the key lessons learned was the importance of maintaining the design system, requiring regular updates and revisions to meet evolving needs of Enverus' applications.",
                    "View the Enverus Design System and Figma library using the links below:"
                 ],
                 links: [
                    {
                         href: "https://design.enverus.com",
                         text: "https://design.enverus.com",
                     },
                     {
                         href: "https://www.figma.com/file/xifUV3zBPcr8EVGabEedwY/Enverus-Design-System?type=design&node-id=0%3A1&mode=design&t=veHu81IJz03dllyW-1",
                         text: "Enverus Figma Design System",
                     }
                ],
            },
        ],
        img: "/images/EnverusDesignSystemScreens.png",
        table: "/images/table 3.png",
        id: "Enverus Design System",
        linkName: "https://design.enverus.com",
        linkUrl:"https://design.enverus.com",
        role: "Lead Product Designer",
        tagline: " A scalable, efficient, and cohesive design system that enhances user experience, promotes brand consistency, and streamlines the design and development processes across all Enverus' products", 
    },
    {
        name: "RFX Document Management",
        company: "Enverus",        
        duration: "3 Months",
        img: "/images/case-rfx-main.png",
        table: "/images/table 3.png",
        id: "RFX Application",
        linkName: "View Figma Mockup",
        linkUrl: "https://www.figma.com/proto/zCpzOBk7fc8bQOCZlDLW6B/Mind-Care?node-id=0%3A1",
        role: "Lead Product Designer",
        tagline: "An interactive design created in Figma for presentation at an annual user conference.",
        topics: [
            {
                name: "Overview",
                isHalf: true,
            },
            {
                name: "Problem",
            },
            {
                name: "Research",
            },
            {
                name: "Ideation",
            },
            {
                name: "Style",
            },
            {
                name: "Design",
            },
            {
                name: "Results and Takeaways",
            },
        ],
        contents: [
            {
                topic: "Overview",
                heading: "The Problem",
                texts: [
                    "The process for creating, distributing and tracking RFX Documents requires a significant amount of effort.  This is especially true when multiple projects require multiple requests, each having their own deadlines. ",
                    "Moreover, after RFx submissions are received, they are often numerous and inconsistent making them difficult to compare.  The process is outlined in the diagram below."                    
                ],
                img: "/images/rfxCase-process.png",
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
        prototype: {
            img: "/images/c1 p8.png",
            link: "https://www.figma.com/proto/zCpzOBk7fc8bQOCZlDLW6B/Mind-Care?node-id=0%3A1"
        }
    },
    {        
        table: "/images/table1.png",
        company: "Enverus",
        duration: "2 months",
        img: "/images/solarSitesMacbook.png",
        id: "Solar Sites",
        linkName: "View the Mockup",
        linkUrl: "https://codepen.io/jwshannon/pen/GRwjmBW",
        name: "Solar Sites", 
        role: "Lead Product Designer",
        tagline: "Utilize satellite imagery to monitor the advancement of construction projects, identify changes, and facilitate comprehensive management of solar construction sites.",
        topics: [
            {
                name: "Overview",
                isHalf: true,
            },
            {
                name: "Problem",
            },
            {
                name: "Research",
            },
            {
                name: "Ideation",
            },
            {
                name: "Solution",
            },
            {
                name: "Features",
            },
            {
                name: "Results & Takeaways",
            },

        ],
        contents: [
            {
                topic: "Overview",
                heading: "The Problem",
                texts: [
                      "The current state of affairs in solar project implementation reveals a critical deficiency in the area of monitoring the diverse construction phases of solar sites.",
                    "Stakeholders engaged in these initiatives lack a centralized and accessible platform that utilizes live satellite imagery for monitoring and tracking the diverse construction phases of solar sites. This gap hampers efficient decision-making, timely interventions, and comprehensive project management, leading to potential delays, cost overruns, and suboptimal outcomes in the execution of solar initiatives."
                ],
                img: "/images/project-manager.png",
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
            },
             {
                topic: "Solution",
                heading: "Task and Resource Monitoring",                                       
                texts: [
                    "Each project features a common header area where specific details of the project are captured and displayed",
                ],
                img: "/images/solarSitesMac&IPad.png",
            },
            {
                topic: "Solution",
                heading: "Real-Time Tracking of all phases of construction",                                       
                texts: [
                    "By providing larger, highly detailed imagery, users can easily detect changes to the project as they navigate between the satellite images",
                ],
                img: "/images/case-solarSites-mockup3.png",
            },
             
                {
                topic: "Solution",
                heading: "User Access Control",                                       
                texts: [
                    "By requiring users to sign in to the application, administrators can control which imagery is displayed to which users.  Users are only allowed to access projects they have permission to see",
                ],
                img: "/images/case-solarSites-mockup3.png",
            }
        ],
        prototype: {
            img: "/images/c1 p8.png",
            link: "https://www.figma.com/proto/zCpzOBk7fc8bQOCZlDLW6B/Mind-Care?node-id=0%3A1"
        }
    },
    {
        name: "Enterprise Application Redesign",
        img: "/images/case-enterpriseApp-main.png",
        table: "/images/table2.png",
        id: "Enterprise App Redesign",
        tagline: "When one company acquires another, the task of harmonizing the user experience each of the company's applications often presents a significant challenge.",
        company: "Oildex",        
        duration: "1.5 Months",
        linkName: "View Live Prototype",
        linkUrl: "https://codepen.io/EnverusUX/project/live/9df4201774e04e3925ab009652910bac",
        role: "Lead Product Designer",
        topics: [
            {
                name: "The Challenge",
            },
            {
                name: "The Goal",
            },
            {
                name: "Deliverables",
            },
            {
                name: "Process",
            },
            {
                name: "Results & Takeaways",
            },
        ],
        contents: [
            {
                topic: "The Challenge",
                texts: [
                    "The task of harmonizing the experience across multiple applications is more than just a superficial makeover.  ",
                    "Sometimes, it requires a deeper integration involving a mix of design philosophies, user interface elements, and brand identities across diverse platforms and products. The task is made more daunting by differences in technology stacks, design systems, and user demographics. ",
                ],
            },
            {
                topic: "The Goal",
                texts: [
                    "A navigation system capable of handling a vast array of items across several levels."
                ],
            },
            {
                topic: "Deliverables",
                texts: [
                    "Since the true indicator of a navigation system's intuitiveness lies in its ease of use, the project demanded the creation of an interactive prototype to facilitate user testing.",
                    "The prototype was developed using Bootstrap and JQuery, reflecting the most frequently used technology across the applications."
                ],
            },
            {
                topic: "Process",
                heading: "Design & User Testing",
                texts: [
                    "At a usability lab that was held during our yearly user conference, one of the studies performed involved a card sort where people were asked to group navigation items according to any grouping that made sense to them.  The results of the card sort were compiled and we arrived at two sets of groupings which we used as our A/B test.",
                    "User testing entailed presenting the interactive prototype to users, who were tasked with navigating to various parts of the application. The results were recorded on a scale ranging from 1 to 5, where 1 signified minimal difficulty in task completion and 5 denoted significant difficulty. "
                ],
            },
            {
                topic: "Results & Takeaways",
                heading: "The Paradox Of Choice",
                texts: [
                    "Users preferred the option with fewer top level navigational categories, and more sub navigation items.  Our test subjects frequently mentioned they preferred not to be presented with with too many options."
                ]
            },
            {
                topic: "Results & Takeaways",
                heading: "Implementation Details",
                texts: [
                    "When it came to Implementing the new navigation, we implemented a mechanism which allowed users to try out the new navigation and give feedback directly to the UX team.  The mechanism also allowed the option of returning to the old navigation if they chose to.  This immediately gave us two cohorts of users to solicit further feedback from.  The first were those who tried the new navigation and reverted back to the old.  The second were those who tried the new navigation and did NOT revert.",
                ],
            },
        ],
       
    } 
]
