export const portfolios = [
    {
        id: 'mindguard',
        image: 'images/case 1.png',
        
        name: 'Mindguard',
        desc: 'A solution to bridge the treatment gap in mental illness.',
        background: '#FDF0F2',
        color: '#811324',
        shadow: '0px 0px 50px 5px rgba(206, 153, 161, 1)',

    }
    ,
    {
        id: 'disney-hotstar',
        image: 'images/case 2.png',
        
        name: 'Disney+ Hotstar Redesign',
        desc: 'Redesign of an OTT platform.',
        background: '#F8F7FF',
        color: '#271C64',
        shadow: '0px 0px 50px 5px rgba(160, 153, 206, 1)',

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
    {
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
    },
    {
        id: 'covid-point',
        image: "images/Snap.png",
        name: 'Covid Point',
        desc: "From vaccine appointment to latest updates all at one place.",
        shadow: '0px 0px 50px 5px rgba(0, 0, 0, 0.35)',
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
                name: 'Problem',
                isHalf:true,

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
        
        bg: '#FDF0F2',
        img: '/images/cover case 1.png',
        id: 'mindguard',
        name: 'Mind Guard',
        tagline: 'A solution to bridge the treatment gap in mental health by surpassing social stigma',
        contents: [
            {
                topic: 'Problem',
                heading: 'Misinformation and Social stigma increases Treatment Gap.',
                texts: [
                    'Mental health is surrounded by social stigmas and misinformation. The number of people with active mental disease who are not on treatment  peaks over 120 million.',
                ],
                researches: [
                    {
                        texts: '7.5 percent of the country’s population of 1.3 billion, suffer from some form of mental disorder',
                        source: 'World health Organization (WHO)',
                        link: 'https://www.google.com',
                        img: '/images/Snap.png'
                    },
                    {
                        texts: '21%  perceived the role of faith healers (Tantrik, Ojha) in the treatment of mental illness.',
                        source: 'Data on additude regarding mental health',
                        link: 'https://www.google.com',

                        img: '/images/Snap.png'

                    },
                    {
                        texts: 'India  accounts for 36.6 per cent of suicides globally',
                        source: 'World health Organization (WHO)',
                        link: 'https://www.google.com',

                        img: '/images/Snap.png'
                    },
                    {
                        texts: 'Teenagers in the age group 13-17 years suffer depression and other mental health disorders and are “in need of active intervention”.',
                        source: 'NIMHANS',
                        link: 'https://www.google.com',

                        img: '/images/Snap.png'
                    },
                    {
                        texts: '7.5 percent of the country’s population of 1.3 billion, suffer from some form of mental disorder.',
                        source: 'World health Organization (WHO)',
                        link: 'https://www.google.com',

                        img: '/images/Snap.png'
                    }
                ],
                img: '/images/c1 p1.png',
            },
            

            {
                topic: 'Research',
                heading: 'Competetior analysis',
                texts: [
                    'There are few apps availblable in the market regarding mental wellnes with good UX/UI but none of them solves the problem of Social stigma. People are really shy talking about mental health to professionals also let alone freinds and family.   ',
                    'All features are distributed in different apps and there is no digital platform that address all the problem on a single platform'
                ],
                img: '/images/c1 p2.png',

            },
            {
                topic: 'Research',
                heading: 'Interview Analysis',
                texts: [
                    'I interviewed over 15 people who had a history of mental illness.',

                    <span>The most common argument on why it took time for them to start getting treatment and care:<br />
                        <span className='list'>1. Cautious of opening up about their mental health due to social stigma and trust issues.<br />
                            2. No trusted information source where to contact good psychologist.<br />
                            3. Too lazy or busy to learn about mental health.<br />
                            4. No care was given to their mental wellness in day to day life.<br />
                            5. Didn’t know that mental health requires attention just like physical health<br />
                        </span></span>
                ],
                

            },
            {
                topic: 'Ideation',
                heading: ' Bridging the treatment gap',
                texts: [
                    'Treatment gap is defined as the number of people with active disease who are not on treatment or on inadequate treatment and is expressed as a percentage of the total number of people with active disease. Treatment gap is a useful indicator for accessibility, utilisation and quality of health care',
                ],
                img: '/images/c1 p9.png',

            },
            {
                topic: 'Solution',
                heading: 'Heading Missing',
                texts: [
                    'We aim to close the treatment gap by surpassing social stigmas and promoting mental care in your day to day life.',
                ],
                img: '/images/c1 p3.png',

            },
            {
                topic: 'Features',
                heading: 'Self Care',
                texts: [
                    'The App Will Present With Various Methods To Maintain  Or Improve Your Mental Health Based On user’s Choices. User will  also be able To Track Their  Journey Through Our App',
                ],
                img: '/images/c1 p4.png',

                bg: 'linear-gradient(89.03deg, rgba(201, 216, 255, 0.56) -7.98%, rgba(255, 209, 167, 0.35) 133.27%)'
                
            },
            {
                topic: 'Features',
                heading: 'Healers',
                texts: [
                    'User Can easily Get In  Touch  with Professionals And Talk  To Them Anonymously  About Their State Without Any Fear Or Worries. User will  also be able To Track Their  Appointments  Through Our App',
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
                    'Based on their choices we will pair them with other user and they can schedule a meet or chat digitally.',
                ],
                img: '/images/c1 p7.png',

                bg: 'linear-gradient(89.03deg, rgba(201, 255, 252, 0.56) -7.98%, rgba(255, 167, 167, 0.35) 133.27%)'

            },
            {
                topic: 'Results and takeaways',
                heading: 'UI is as important as UX',
                texts: [
                    'The App Will Present With Various Methods To Maintain  Or Improve Your Mental Health Based On Your Choices',
                ],
              


            },
        ]
    },



    {
        topics: [
            {
                name: 'Overview',
                isHalf:true,

            },

            {
                name: 'Research',
                bg: '#F3F0FD'
            },
            {
                name: 'Problem',
                isHalf:true,
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

        id: 'disney-hotstar',
        name: 'Hotstar+Disney Redesign',
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
                img: '/images/Snap.png',

            },

            {
                topic: 'Research',
                heading: 'User testing',
                texts: [
                    <span>I did a user testing session with five participants using the current version of the platform. One of the tasks for the users was to reach the page which contains the list of all the tv channels available. <span id='bold'> 90% </span>of the users failed to navigate to the channel list.</span>,

                    
                ],
                img: '/images/Snap.png',

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
                heading: 'UI is as important as UX',
                texts: [
                    'The App Will Present With Various Methods To Maintain  Or Improve Your Mental Health Based On Your Choices',
                ],
                


            },
        ]
    },

]
