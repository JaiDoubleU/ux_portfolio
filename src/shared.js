
export const portfolios = [
    {
        id: 'Integra Realtech Solutions',
        image: 'images/case 3.png',

        name: 'Integra Realtech Solutions',
        desc: 'A Real estate platform for brokers and clients.',
        background: '#EBE8FF',
        color: '#001898',
        shadow: '0px 0px 50px 5px rgba(2, 44, 193, 0.35)',

    }

    ,

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
        asset: <img className='img-fluid' src={process.env.PUBLIC_URL + '/images/comingSoon.png'} alt="" />,
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
                bg: '#F0F5FD'

            },
            {
                name: 'Problem',
                
            },
            

            {
                name: 'Research',
                bg: '#FDF0F0'
            },
            {
                name: 'Ideation',

            },
            {
                name: 'Style',
                bg: '#FDFDF0'
            },
            {
                name: 'Design',


            },
            {
                name: 'Iterations',
                bg: '#F3F0FD'

            },

            {
                name: 'Results and takeaways',


            },

        ],

        bg: '#FFEDBD',
        img: '/images/c3 p1.png',
        table: '/images/table 3.png',
        id: 'Integra Realtech Solutions',
        name: 'Integra Houses',
        tagline: 'Integra realtech is a well established firm with clients like Biyjus, Dlf, Mcx just to name a few. The company wanted to create a platform to mediate clients and brokers.',
        contents: [
            {
                topic: 'Overview',
                heading: 'Real-estate Renting App',
                texts: [
                    'A real-estate renting app specially designed for ex-pats from different countries to find and rent properties in India according to their requirements. This platform was designed for a real-estate company Integra Resaltech Pvt. Ltd. ',
                    <p>This project is in the development phase and is estimated to have <span className="highlight_textint">7-10K</span> signups within the first month of launch</p>,
                ],
                img: '/images/c3 p2.png',

            },
            {
                topic: 'Problem',
                heading: 'What’s the problem?',
                texts: [
                    <p>
                    Expats from different countries require property in India for their stay here. They struggle to find real estate brokers, and even when they find they are not satisfied with the experience (observed by the company). This could be an opportunity for the organization to generate new revenue sources.</p>,
                    
                ],
               


            },
            
           

            {
                topic: 'Research',
                heading: 'Understanding our users',
                texts: [
                    <p>In the foundational research phase, we relied on <span className="highlight_textint">secondary research</span> to gather relevant information and insights about the industry and <span className="highlight_textint">targeted user</span> demography. We dived deep to understand <span className="highlight_textint">user behavior</span> and attitude.</p>,
                    <span>In our research we found out 4 different types of users:<br />
                        <ul>
                            <li> Tenant Side<ul>
                                <li>Potential tenant</li>
                                <li>Local Realestate agent of a potential tenant </li>
                            </ul></li>
                            <li>  Broker Side<ul>
                                <li>Individual brokers</li>
                                <li>Real-Estate agency </li>
                            </ul></li>

                           
                            
                            
                        </ul>

                        

                    </span>
                ],
               // img: '/images/c3 p12.png',


            },



            {
                topic: 'Research',
                heading: 'Defining Our Goals',
                texts: [
                    <span>To define our <span className="highlight_textint">design goals</span> and to better understand our <span className="highlight_textint">end users</span> we conducted interviews and surveys.<br />
                        <br />
                        A survey was conducted with a total of <span className="highlight_textint">38</span> participants. The participants were brokers  from individual firms and real estate agencies in New Delhi. <br />
                        Here are some key takeaways:<br />
                        • <span className="highlight_textint">81.57%</span> Brokers were supporting the idea of a platform where they can browse for client’s requirements and send proposals.<br />
                        • <span className="highlight_textint">31.5%</span> brokers were skeptical about submitting proposals as they were not clear how the platform would handle proposals for the same property.<br />
                        • Most of the users welcomed the idea of a contact representative who can mediate with clients and brokers.<br />
                        • <span className="highlight_textint">52%</span> of users wanted to have some kind of training or help to understand how the system would work as they represented an age group of over 45 years old and were not comfortable using the new platform.<br />
                        <br />
                        <br />
                        We also conducted <span className="highlight_textint">interviews</span> with potential <span className="highlight_textint">tenants</span>, their local <span className="highlight_textint">brokers</span> as well as users who were brokers in New Delhi. <br />
                        Interview Report in brief:<br />
                        • Most concerns were raised from the tenant side as they had a <span className="highlight_textint">bias</span> that real estate agents and brokers in India are not that professional and try to deceive them and make a skewed agreement of property leaning in favor of the landlord.<br />
                        • <span className="highlight_textint">85%</span> of the tenants' side users and their real estate agents also had a <span className="highlight_textint">preconceived notion</span> that the majority of brokers in India aren't properly trained and have poor public skills<br />
                        • They also had a common request that after signing an agreement for a property they wanted some additional services like help in setting up the place , household help, etc<br />
                    </span>,


                ],

                img: '/images/c3 p11.png',

            },
            {
                topic: 'Ideation',
                heading: 'Exploration',
                texts: [
                    <p>To give a satisfying experience to the clients we needed to create a platform where they can find vetted real estate brokers. It was also important to give them a personalized experience and find the property according to their specific needs.</p>,
                ],
                img: '/images/c3 p4.png',

            },
            {
                topic: 'Ideation',
                heading: 'Personalized yet Standardised',
                texts: [
                    <p>To give a satisfactory experience to the clients we needed to create a platform where they can find vetted realestate brokers.
                    It was also important to give them a personalized experience and find the property according to their specific needs. We also curated a list of recommended properties that commonly match the requirements of the clients. This also helps the retention time of the app. </p>,
                ],
                img: '/images/c3 p13.png',

            },
            {
                topic: 'Style',
                heading: 'Color Scheme',
                texts: [
                    'For the color scheme, we went with the blue accent color and used red and green with similar hues for supporting colors',
                ],
                img: '/images/c3 p5.png',

            },
            {
                topic: 'Style',
                heading: 'Typography',
                texts: [
                    'We used SF Pro Text as our body font and SF Pro Display for headings.   ',
                ],
                img: '/images/c3 p6.png',

            },

            /*{
                topic: 'Design',
                heading: 'Client Side Interface',
                texts: [
                    'Clients are greeted with the onboarding screens where they get a basic idea of the app. On the home screen, they can also see the recommended properties according to their location and needs.',
                ],
                img: '/images/c3 p7.png',

                bg: '#5C9281'

            },*/
            {
                topic: 'Design',
                heading: 'Recommended Properties',
                texts: [
                    "Clients can enter their requirements through these input screens. These screens are designed, keeping in mind that users don't have the exact idea of what they need but they are sure about their preferences and needs. ",
                ],
                img: '/images/c3 p8.png',

                bg: '#77925C'

            },
            {
                topic: 'Design',
                heading: 'Specific Property Requirement',
                texts: [
                    'For submitting proposals we created different types of input fields as compared to the client-side. This helped us get the exact data required for proposals. Users are input all the information required through these screens.',
                ],
                img: '/images/c3 p9.png',

                bg: '#665C92'

            },
            {
                topic: 'Design',
                heading: 'Broker Side Interface',
                texts: [
                    "Brokers can see the listing of client's requirements on their home page. Users can also save a particular requirement to submit the proposal later on. Users can also view their submitted proposals from the app.",
                ],
                img: '/images/c3 p10.png',

                bg: '#406976'

            },
            {
                topic: 'Iterations',
                heading: 'User Testing',
                texts: [
                    <p> The <span className="highlight_textint">goal</span>  of user testing was to test our assumption, find friction points, and identify bugs if any.</p>,
                    <p> We used <span className="highlight_textint">Think aloud</span> and <span className="highlight_textint">Restrosepective probing</span> methods with the participants as they worked through the given tasks. This helped us understand the <span className="highlight_textint">user's thoughts and actions</span> as they completed their task.</p>,
                    <p>Since we had to test two different sets of users (brokers and clients) we discern different testers for each set. Our participants represented the <span className="highlight_textint">target demography</span> of Integrarealtech. </p>,
                    <p>We categorized our findings into <span className="highlight_textint">quantitative</span> and <span className="highlight_textint">qualitative</span> data. We used metrics (success rate, error rate, satisfaction rating, and task time) to evaluate our testing. The Majority of users (brokers and clients) liked the overall design and were comfortable in using it.</p>

                ],



            },


            {
                topic: 'Results and takeaways',
                heading: 'Communication is the key',
                texts: [
                    <p>The Company was happy about how this project turned out to be. It is estimated to have <span className="highlight_textint">7-10K</span> signups in the first month of the launch. The product is still in the development phase, and I will update it as soon as it is available for use.</p>,
                    <p>This was the first time I worked for an organization. Although I was nervous at the beginning, I soon <span className="highlight_textint">learned to trust</span>  my teammates and follow the process. I also learned that <span className="highlight_textint">active communication</span> and short daily stand-up meetings were key to ensuring the project’s success.</p>,
                ],



            },
        ],

        // prototype: {
        //     img: '/images/c2 p10.png',
        //     /*bg: 'linear-gradient(89.03deg, rgba(255, 250, 201, 0.56) -7.98%, rgba(206, 167, 255, 0.35) 133.27%)'*/
        // }
    },

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
                    <span>We are in contact with multiple <span className="highlight_text">NGOs </span> to make this a reality. </span>
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
                heading: 'Empathizing With Users',
                texts: [
                    <span>I interviewed <span className="highlight_text">5</span>users who had a <span className="highlight_text">history of mental illness. </span></span>,

                    <span>How <span className="highlight_text">user behavior</span> impacting the treatment gap:<br />
                        • Cautious of opening up about their mental health due to social stigma and trust issues.<br />
                        • Too lazy or busy to learn about mental health<br />
                        • No care was given to their mental wellness in day to day life<br />
                        • Didn’t know that mental health requires attention just like physical health <br />
                        <br />
                        Main <span className="highlight_text">pain points</span> users are facing for getting the treatment:<br />
                        • No trusted information source were to contact a good psychologist<br />
                        • No structured or well written facts about mental health.<br />

                    </span>
                ],
                img: '/images/c1 p14.png',


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
                topic: 'Ideation',
                heading: 'Bridging the treatment gap',
                texts: [
                    'With the help of a Psychologist, we came up with various solutions which could trim down these problems. For MVP I chose these four features.',
                ],
                img: '/images/c1 p19.png',

            },
            {
                topic: 'Ideation',
                heading: 'Why these features?',
                texts: [
                    <p>We prioritize these four features based on <span className="highlight_text">Effort vs. Matrix</span>. We made sure not to rate our ideas to remove the bias. </p>,
                    <p>Since we need to minimize the effort as we have <span className="highlight_text">limited resources</span>  this method helped us in the evaluation <span className="highlight_text"> complexity vs value.
                        </span></p>,
                ],
                img: '/images/c1 p15.png',

            },
           


            
            {
                topic: 'Solution',
                heading: 'Exploration and wireframes',
                texts: [
                    'We aim to close the treatment gap by surpassing social stigmas and promoting mental care in your day-to-day life.',


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
                    'Users can chat with professional doctors and schedule appointments with them, and track their progress through our app. It will allow the users to get that much needed help and get through tough times. Users also have the option to chat anonymously with the doctors.',
                ],
                img: '/images/c1 p5.png',

                bg: 'linear-gradient(89.03deg, rgba(255, 250, 201, 0.56) -7.98%, rgba(255, 167, 167, 0.35) 133.27%)'

            },
            {
                topic: 'Features',
                heading: 'Anonymous',
                texts: [
                    'Our Investigation reflected that people have fear sharing their feelings with friends, family, or even doctors. Being anonymous gives the user a way through which they can start being a little more open.',
                ],
                img: '/images/c1 p6.png',

                bg: 'linear-gradient(89.03deg, rgba(201, 206, 255, 0.56) -7.98%, rgba(179, 255, 167, 0.35) 133.27%)'

            },
            {
                topic: 'Features',
                heading: 'Community & Facts',
                texts: [
                    'Users will learn about mental health and other life problems by sharing their stories. There will be no likes or other social incentives, which could create competition and anxiety among users. Users will be able to tackle misinformation through our Burst the Myth section.',
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
        ]

       /* prototype: {
            img: '/images/c1 p8.png',
            link: 'https://www.figma.com/proto/zCpzOBk7fc8bQOCZlDLW6B/Mind-Care?node-id=0%3A1'
        }*/

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
                    'I took this project because I always used to get frustrated using the platform and many of my friends felt the same.',
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
                    'According to research, users were intimidated by the quantity of the content shown on a single screen. It results in user anxiety which would ultimately harm their experience.',
                    'Decreased the number of content shown at once.',
                ],
                img: '/images/c2 p8.png',

                bg: 'linear-gradient(89.03deg, rgba(201, 255, 252, 0.56) -7.98%, rgba(255, 167, 167, 0.35) 133.27%)'

            },

            {
                topic: 'Solution',
                heading: 'Recommendation',
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
                    'Implementing new tools during a live project can overwhelm you, but you don’t always have the time to try them out beforehand.',
                    'Before this, I used to design on Adobe XD but I used Figma for this project and quite liked using it.'
                ],



            },
        ],

        /*prototype: {
            img: '/images/c2 p10.png',
            bg: 'linear-gradient(89.03deg, rgba(255, 250, 201, 0.56) -7.98%, rgba(206, 167, 255, 0.35) 133.27%)'
        }*/
    } 

]
