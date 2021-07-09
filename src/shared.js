export const portfolios = [
    {
        id: 'mindguard',
        image: 'images/Snap.png',
        image_mobile: "images/Snap-mobile.png",
        name: 'Mindguard',
        desc: 'A solution to bridge the treatment gap in mental illness.',
        background: '#FDF0F2',
        color: '#811324',
        shadow: '0px 0px 50px 5px rgba(0, 0, 0, 0.35)',

    }
    ,
    {
        id: 'disney-hotstar',
        image: 'images/Snap.png',
        image_mobile: "images/Snap-mobile.png",
        name: 'Disney+ Hotstar Redesign',
        desc: 'Redesign of an OTT platform.',
        background: '#F8F7FF',
        color: '#271C64',
        shadow: '0px 0px 50px 5px rgba(0, 0, 0, 0.35)',

    }
]
export const works = [

    {
        id: 'arre-bro',
        image: "images/arrebro.gif",
        name: 'Arre! Bro',
        tagline: 'A Top Destination For Trending And Asthetic Apparels.',
        desc: "An E-commerce store for asthetic and trendy apparels.",
        shadow: '0px 0px 50px 5px rgba(0, 0, 0, 0.35)',
        details: <p>This project was created with collaboration with my friend {<a className="detail__link" href="https://rappershaz.com" target="_blank" rel="noreferrer">Shaz</a>}. Since we were a team of two I had to take many roles but majorly I worked as developer, brand and content marketing manager.</p>,
        completed: true,
        asset: <img className="img-fluid" src={process.env.PUBLIC_URL + '/' + 'images/arrePage.png'} alt="work_img" />,
        redirect: 'https://www.arrebro.com'
    },
    {
        id: 'revo-ex',
        image: "images/Snap.png",
        name: 'Revo-Ex',
        tagline: 'Revolusinising Hotel Stay Experiences.',
        desc: "A explaionatry video for clients.",
        details: 'They needed an explanatory video to give a better understanding of their product to their clients.',
        shadow: '0px 0px 50px 5px rgba(0, 0, 0, 0.35)',
        completed: true,
        asset: <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_8MDZ58pxMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
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