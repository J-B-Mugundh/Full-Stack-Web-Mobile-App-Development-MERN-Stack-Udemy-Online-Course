import React from 'react';
import { useSpring, animated } from 'react-spring';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const cardData = [
  {
    id: 1,
    imageUrl: 'https://image-prod.iol.co.za/16x9/800/Many-factors-are-considered-when-determining-the-cost-of-a-flight-ticket-including-the-date-and-time-the-passenger-books-Picture-Pexels?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/2bf80dfc-c99f-5e41-bc07-76a3154690cc&operation=CROP&offset=565x0&resize=4192x2369',
    title: 'Aerospace Engineering',
    link: 'https://mitindia.edu/en/aero-home',
  },
  {
    id: 1,
    imageUrl: 'https://image-prod.iol.co.za/16x9/800/Many-factors-are-considered-when-determining-the-cost-of-a-flight-ticket-including-the-date-and-time-the-passenger-books-Picture-Pexels?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/2bf80dfc-c99f-5e41-bc07-76a3154690cc&operation=CROP&offset=565x0&resize=4192x2369',
    title: 'Instrumentation Technology',
    link: 'https://mitindia.edu/en/aero-home',
  },
  {
    id: 1,
    imageUrl: 'https://image-prod.iol.co.za/16x9/800/Many-factors-are-considered-when-determining-the-cost-of-a-flight-ticket-including-the-date-and-time-the-passenger-books-Picture-Pexels?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/2bf80dfc-c99f-5e41-bc07-76a3154690cc&operation=CROP&offset=565x0&resize=4192x2369',
    title: 'Instrumentation Technology',
    link: 'https://mitindia.edu/en/aero-home',
  },
  {
    id: 1,
    imageUrl: 'https://image-prod.iol.co.za/16x9/800/Many-factors-are-considered-when-determining-the-cost-of-a-flight-ticket-including-the-date-and-time-the-passenger-books-Picture-Pexels?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/2bf80dfc-c99f-5e41-bc07-76a3154690cc&operation=CROP&offset=565x0&resize=4192x2369',
    title: 'Instrumentation Technology',
    link: 'https://mitindia.edu/en/aero-home',
  },
  {
    id: 1,
    imageUrl: 'https://image-prod.iol.co.za/16x9/800/Many-factors-are-considered-when-determining-the-cost-of-a-flight-ticket-including-the-date-and-time-the-passenger-books-Picture-Pexels?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/2bf80dfc-c99f-5e41-bc07-76a3154690cc&operation=CROP&offset=565x0&resize=4192x2369',
    title: 'Instrumentation Technology',
    link: 'https://mitindia.edu/en/aero-home',
  },
  {
    id: 1,
    imageUrl: 'https://image-prod.iol.co.za/16x9/800/Many-factors-are-considered-when-determining-the-cost-of-a-flight-ticket-including-the-date-and-time-the-passenger-books-Picture-Pexels?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/2bf80dfc-c99f-5e41-bc07-76a3154690cc&operation=CROP&offset=565x0&resize=4192x2369',
    title: 'Instrumentation Technology',
    link: 'https://mitindia.edu/en/aero-home',
  },
  {
    id: 1,
    imageUrl: 'https://image-prod.iol.co.za/16x9/800/Many-factors-are-considered-when-determining-the-cost-of-a-flight-ticket-including-the-date-and-time-the-passenger-books-Picture-Pexels?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/2bf80dfc-c99f-5e41-bc07-76a3154690cc&operation=CROP&offset=565x0&resize=4192x2369',
    title: 'Instrumentation Technology',
    link: 'https://mitindia.edu/en/aero-home',
  },
  {
    id: 1,
    imageUrl: 'https://image-prod.iol.co.za/16x9/800/Many-factors-are-considered-when-determining-the-cost-of-a-flight-ticket-including-the-date-and-time-the-passenger-books-Picture-Pexels?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/2bf80dfc-c99f-5e41-bc07-76a3154690cc&operation=CROP&offset=565x0&resize=4192x2369',
    title: 'Instrumentation Technology',
    link: 'https://mitindia.edu/en/aero-home',
  },
  {
    id: 1,
    imageUrl: 'https://image-prod.iol.co.za/16x9/800/Many-factors-are-considered-when-determining-the-cost-of-a-flight-ticket-including-the-date-and-time-the-passenger-books-Picture-Pexels?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/2bf80dfc-c99f-5e41-bc07-76a3154690cc&operation=CROP&offset=565x0&resize=4192x2369',
    title: 'Instrumentation Technology',
    link: 'https://mitindia.edu/en/aero-home',
  },
  // Add more card data objects here
];

const CardMarquee = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  const handleCardClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <animated.div style={fadeIn}>
        <Typography variant="h5" component="h3" gutterBottom style={{ fontWeight: 'bolder', textAlign: 'center' }}>
          DEPARTMENTS
        </Typography>
      </animated.div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <animated.div style={fadeIn}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
            {cardData.map((card) => (
              <Card key={card.id} style={{ width: '10rem', margin: '2rem',  }} onClick={() => handleCardClick(card.link)}>
                <CardActionArea>
                  <CardMedia component="img" height="120" image={card.imageUrl} />
                  <CardContent>
                    <Typography gutterBottom variant="body2" component="div" color="text.secondary">
                      {card.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>
        </animated.div>
        <br />
        
      </div>
    </div>
  );
};

export default CardMarquee;
