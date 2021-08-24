
export const portfolios = [
    {
        id: 'mindguard',
        image: 'images/case 1.png',

        name: 'Mindguard', 
        desc: 'A solution to bridge the treatment gap in mental illness.',
        background: '#FDF0F2',
        color: '#811324',
        shadow: '0px 0px 50px 5px rgba(206, 153, 161, 0.35)',

    }
    ,
    {
        id: 'disney-hotstar',
        image: 'images/case 2.png',

        name: 'Disney+ Hotstar Redesign',
        desc: 'Redesign of an OTT platform.',
        background: '#F8F7FF',
        color: '#271C64',
        shadow: '0px 0px 50px 5px rgba(160, 153, 206, 0.35)',

    }
]
export const works = [

    {
        id: 'arre-bro',
        image: "images/arrebro.gif",
        name: 'Arre! Bro',
        tagline: 'A Top Destination For Trending And Asthetic Apparels.',
        desc: "An E-commerce store for asthetic and trendy apparels.",
        shadow: '0px 0px 50px 5px rgba(255, 22, 80, 0.35)',
        details: <p>This project was created with collaboration with my friend {<a className="detail__link" href="https://www.rappershaz.com" target="_blank" rel="noreferrer">Shaz</a>}. Since we were a team of two I had to take many roles but majorly I worked as developer, brand and content marketing manager.</p>,
        completed: true,
        asset: <img className="img-fluid hover_img" src={process.env.PUBLIC_URL + '/images/arrePage.png'} alt="work_img" />,
        redirect: 'https://www.arrebro.com'
    },
    /*{
        id: 'revo-ex',
        image: "images/Snap.png",
        name: 'Revo-Ex',
        tagline: 'Revolusinising Hotel Stay Experiences.',
        desc: "A explaionatry video for clients.",
        details: 'They needed an explanatory video to give a better understanding of their product to their clients.',
        shadow: '0px 0px 50px 5px rgba(129, 211, 195, 0.35)',
        completed: true,
        asset: <iframe width="100%" height="100%" style={{ borderRadius: '8px' }} src="https://www.youtube.com/embed/_8MDZ58pxMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        redirect: 'https://www.youtube.com/watch?v=_8MDZ58pxMc'
    },*/
    {
        id: 'covid-point',
        image: "images/covidcover.png",
        name: 'Covid Point',
        desc: "From vaccine appointment to latest updates all at one place.",
        shadow: '0px 0px 50px 5px rgba(16, 85, 207, 0.35)',
        asset:<img className='img-fluid' src={process.env.PUBLIC_URL + '/images/comingSoon.png'} alt="" />,
        completed: false
    }
]

export const skills = [

    {
        category: 'General',
        arr: [
            'UX/UI', 'Branding', 'Frontend Dev', 'Video Editing', 'Film Making', 'Motion Graphics', 'Animation', 'Graphic Design', 'Socila Media Marketing', 'SEO'
        ]

    },
    {
        category: 'Tools',
        arr: [
            'Adobe Creative Suite', 'Figma', 'Invison', 'Facebook Ads', 'Google Ads', 'Google Analytics'
        ]
    },
    {
        category: 'Technical',
        arr: [
            'C/C++', 'HTML', 'CSS', 'Python'
        ]
    }


]

export const caseContent = [

    {
        topics: [
            {
                name: 'Overview',
                isHalf: true,
                bg: '#F0FDF0'

            },
            {
                name: 'Problem',
                isHalf: true,

            },

            {
                name: 'Research',
                bg: '#F3F0FD'
            },
            {
                name: 'Ideation'
            },
            {
                name: 'Solution',
                bg: '#FDFDF0'

            },
            {
                name: 'Features'
            },
            {
                name: 'Results and takeaways',
                bg: '#FDF0F2'

            },

        ],
        table: '/images/table1.png',
        bg: '#FDF0F2',
        img: '/images/cover case 1.png',
        id: 'mindguard',
        name: 'Mind Guard',
        tagline: 'A solution to bridge the treatment gap in mental health by surpassing social stigma',
        contents: [
            {
                topic: 'Overview',
                heading: 'A Mental Wellness App',
                texts: [
                    'A solution to bridge the treatment gap in mental health is by surpassing social stigma.',
                    'This project was inspired by another mental wellness solution for college students in the USA. I and my friends were also interested in solving similar problems in our own country.',
                    <span>We are in contact with multiple <span className="highlight_text">NGOs </span> to make this a reality.. </span>
                ],

                img: '/images/c1 p18.png',

            },
           
            {
                topic: 'Problem',
                heading: 'Misinformation and Social stigma increase the Treatment Gap.',
                texts: [
                    <p>Mental health is surrounded by social stigmas and misinformation. The number of people with active mental disease who are not on treatment peaks at over <span className="highlight_no">120 </span>million.</p>,
                ],
                researches: [
                    {
                        texts: <p><span className="highlight_no">7.5 </span> percent of the country’s population of  <span className="highlight_no">1.3 </span> billion, suffer from some form of mental disorder</p>,
                        /*source: 'World health Organization (WHO)',
                        link: 'https://www.google.com',*/
                        img: '/images/c1 p10.png'
                    },
                    {
                        texts: <p><span className="highlight_no">21%</span>  perceived the role of faith healers  in the treatment of mental illness.</p>,
                       /* source: 'Data on additude regarding mental health',
                        link: 'https://www.google.com',*/

                        img: '/images/c1 p11.png'

                    },
                    {
                        texts: <p>India  accounts for <span className="highlight_no">36.6</span> of suicides globally</p>,
                       /* source: 'World health Organization (WHO)',
                        link: 'https://www.google.com',*/

                        img: '/images/c1 p12.png'
                    },
                    {
                        texts: <p>Teenagers in the age group <span className="highlight_no">13-17</span> years suffer depression and other mental health disorders and are “in need of active intervention”.</p>,
                        /*source: 'NIMHANS',
                        link: 'https://www.google.com',*/

                        img: '/images/c1 p13.png'
                    }
                    
                ],
                img: '/images/c1 p1.png',
            },


            {
                topic: 'Research',
                heading: 'Discovering Available Solutions',
                texts: [
                    <p>There are few apps available in the market regarding mental wellness with good UX/UI but <span className="highlight_text">none of them solves the problem of Social stigma.</span> People are really shy about talking about mental health to professionals also let alone friends and family.</p>,
                    'All the sets of features are not present in a single app or a platform.'
                ],
                img: '/images/c1 p2.png',

            },
            {
                topic: 'Research',
                heading: 'Empathizing With Users',
                texts: [
                    <span>I interviewed <span className="highlight_text">15</span>users who had a <span className="highlight_text">history of mental illness. </span></span>,

                    <span>How <span className="highlight_text">user behavior</span> impacting the treatment gap:<br />
                         • Cautious of opening up about their mental health due to social stigma and trust issues.<br />
                         • Too lazy or busy to learn about mental health<br />
                         • No care was given to their mental wellness in day to day life<br />
                         • Didn’t know that mental health requires attention just like physical health <br />
                         <br />                       
                         Main <span className="highlight_text">pain points</span> users are facing for getting the treatment:<br />
                           • No trusted information source where to contact a good psychologist<br />
                           • No structured or well written facts about mental health.<br />

                        </span>
                ],
                img: '/images/c1 p14.png',


            },
            {
                topic: 'Ideation',
                heading: 'Bridging the treatment gap',
                texts: [
                    'The treatment gap is defined as the number of people with active disease who are not on treatment or inadequate treatment and is expressed as a percentage of the total number of people with active disease. The treatment gap is a useful indicator for accessibility, utilization, and quality of health care.',
                ],
                img: '/images/c1 p9.png',

            },
            {
                topic: 'Ideation',
                heading: 'How we got here?',
                texts: [
                    <p>We prioritize these four features based on <span className="highlight_text">Effort vs. Matrix</span>. We made sure not to rate our ideas to remove the bias. </p>,
                ],
                img: '/images/c1 p15.png',

            },
            {
                topic: 'Ideation',
                heading: 'Why this method?',
                texts: [
                    <p>Since we need to minimize the effort as we have <span className="highlight_text">limited resources</span>  this method helped us in the evaluation <span className="highlight_text"> complexity vs value.
                    .</span></p>,
                ],
                

            },
            {
                topic: 'Solution',
                heading: 'Exploration and wireframes',
                texts: [
                    'We aim to close the treatment gap by surpassing social stigmas and promoting mental care in your day to day life.',
                    

                ],
                img: '/images/c1 p16.png',
                

            },
            {
                topic: 'Solution',
                                texts: [
                    
                    

                ],
                img: '/images/c1 p17.png',
                

            },
            {
                topic: 'Features',
                heading: 'Self Care',
                texts: [
                    'The App Will Present With Various Methods To Maintain Or Improve Your Mental Health Based On the user’s Choices. Users will also be able To Track Their Journey Through Our App',
                ],
                img: '/images/c1 p4.png',

                bg: 'linear-gradient(89.03deg, rgba(201, 216, 255, 0.56) -7.98%, rgba(255, 209, 167, 0.35) 133.27%)'

            },
            {
                topic: 'Features',
                heading: 'Healers',
                texts: [
                    'User Can easily Get In Touch with Professionals And Talk To Them Anonymously About Their State Without Any Fear Or Worries. Users will also be able To Track Their Appointments Through Our App',
                ],
                img: '/images/c1 p5.png',

                bg: 'linear-gradient(89.03deg, rgba(255, 250, 201, 0.56) -7.98%, rgba(255, 167, 167, 0.35) 133.27%)'

            },
            {
                topic: 'Features',
                heading: 'Burst The Myths',
                texts: [
                    'To tackle misinformation we provide users with facts and educate them about mental health.',
                ],
                img: '/images/c1 p6.png',

                bg: 'linear-gradient(89.03deg, rgba(201, 206, 255, 0.56) -7.98%, rgba(179, 255, 167, 0.35) 133.27%)'

            },
            {
                topic: 'Features',
                heading: 'Connect',
                texts: [
                    'Based on their choices we will pair them with other users and they can schedule a meet or chat digitally.',
                ],
                img: '/images/c1 p7.png',

                bg: 'linear-gradient(89.03deg, rgba(201, 255, 252, 0.56) -7.98%, rgba(255, 167, 167, 0.35) 133.27%)'

            },
            {
                topic: 'Results and takeaways', 
                heading: 'Paying attention to detail',
                texts: [
                    'Forming a personality for a product is not only fun but it engages the users more.',
                    'Initially, I didn’t put a lot of effort into illustrations which resulted in a low retention rate.',
                    'After a few iterations, I added a few more illustrations and the retention rate increased significantly.',
                    ],



            },
        ],

        prototype: {
            img: '/images/c1 p8.png',
            link: 'https://www.figma.com/proto/zCpzOBk7fc8bQOCZlDLW6B/Mind-Care?node-id=0%3A1'
        }

    },



    {
        topics: [
            
            {
                name: 'Overview',
                isHalf: true,

            },

            {
                name: 'Research',
                bg: '#F3F0FD'
            },
            {
                name: 'Problem',
                isHalf: true,
            },
            {
                name: 'Solution',


            },

            {
                name: 'Results and takeaways',
                bg: '#FDF0F2'

            },

        ],

        bg: '#BDD8FF',
        img: '/images/c2 p1.png',
        table: '/images/table2.png',
        id: 'disney-hotstar',
        name: 'Disney+ Hotstar Redesign',
        tagline: 'Disney+ Hotstar is an Ott platform with over 34 million subscribers and provides the user with a variety of content ranging from live Cricket matches to exclusive movies and tv series.',
        contents: [
            {
                topic: 'Overview',
                heading: 'Fix what’s wrong',
                texts: [
                    'Disclaimer: I am not associated with Disney+ Hotstar. I  took on this project because I experienced trouble using the platform. This project only deals with the redesign of the website of the Ott platform.',
                    'I took this project because I always used to get frusted using the platform and many of my friends felt same.',
                ],

                img: '/images/c2 p2.png',

            },


            {
                topic: 'Research',
                heading: 'Survey and Interviews',
                texts: [
                    'Based on secondary research, my assumption, and experiences of using the platform, I created a survey.'
                ],
                img: '/images/c2 p3.png',

            },

            {
                topic: 'Research',

                texts: [
                    "After the survey and multiple ones on one interviews, I was able to create user groups and empathy maps which gave me a much better insight into the problem and helped me understand the user's perspective of the platform."
                ],
                img: '/images/c2 p11.png',

            },

            {
                topic: 'Research',
                heading: 'User testing',
                texts: [
                    <span>I did a user testing session with five participants using the current version of the platform. One of the tasks for the users was to reach the page which contains the list of all the tv channels available. <span id='bold' id=''> 90% </span>of the users failed to navigate to the channel list.</span>,


                ],
               

            },
            {
                topic: 'Problem',
                heading: 'Navigation, The Paradox of Choice, Layout are the core issues',
                texts: [
                    'The platform has multiple intricate issues of navigation, recommendation system, and layout of content. Users were also experiencing a lot of confusion while choosing the content to watch.',
                ],
                img: '/images/c2 p4.png',

            },

            {
                topic: 'Solution',
                heading: 'Navigation Bar',
                texts: [
                    'The majority of users were able to separate the content on basis of channel, language, or genre. The sandwich menu seemed too hidden for the user to interact with. The new design made it much simpler and clear as all the options were right in front of them.',
                ],
                img: '/images/c2 p5.png',

                bg: ' linear-gradient(89.03deg, rgba(208, 255, 201, 0.56) -7.98%, rgba(255, 167, 246, 0.35) 133.27%)'

            },
            {
                topic: 'Solution',
                heading: 'The Paradox Of Choice',
                texts: [
                    'I found that most of the users were viewing the content based on their mood. I appended a mood section where people can find the content according to their mood. This will help them solve their problem.',
                ],
                img: '/images/c2 p6.png',

                bg: 'linear-gradient(89.03deg, rgba(255, 250, 201, 0.56) -7.98%, rgba(255, 167, 167, 0.35) 133.27%)'

            },
            {
                topic: 'Solution',
                heading: 'Navigate through 100+ episodes',
                texts: [
                    'Some Indian tv series have over 250+ episodes and to go through them by sliding the episodes is not practical. A dropdown menu increases the efficiency of navigating to a particular episode.',
                ],
                img: '/images/c2 p7.png',

                bg: 'linear-gradient(89.03deg, rgba(201, 206, 255, 0.56) -7.98%, rgba(179, 255, 167, 0.35) 133.27%)'

            },
            {
                topic: 'Solution',
                heading: 'Intimated by the Quantity',
                texts: [
                    'According to research, users were intimidated by the quantity of the content shown on a single screen.It results in user anxiety which would ultimately harm their experience.',
                    'Decreased the number of content shown at once.',
                ],
                img: '/images/c2 p8.png',

                bg: 'linear-gradient(89.03deg, rgba(201, 255, 252, 0.56) -7.98%, rgba(255, 167, 167, 0.35) 133.27%)'

            },

            {
                topic: 'Solution',
                heading: 'Reccomendation',
                texts: [
                    'Recommendation works on two sets of data: implicit and explicit.  To improve the recommendation a direct feedback button was added. This will enhance the recommendation system.',
                ],
                img: '/images/c2 p9.png',

                bg: 'linear-gradient(89.03deg, rgba(201, 255, 252, 0.56) -7.98%, rgba(255, 167, 167, 0.35) 133.27%)'

            },
            {
                topic: 'Results and takeaways',
                heading: 'Don’t fear trying out new tools',
                texts: [
                    'Implementing new tools during a live project can overwhelm, but you don’t always have the timme to try them out beforehand.',
                    'Before this, I used to design on Adobe XD but I used Figma for this project and quite liked using it.'
                ],



            },
        ],

        prototype: {
            img: '/images/c2 p10.png',
            bg: 'linear-gradient(89.03deg, rgba(255, 250, 201, 0.56) -7.98%, rgba(206, 167, 255, 0.35) 133.27%)'
        }
    },

]
