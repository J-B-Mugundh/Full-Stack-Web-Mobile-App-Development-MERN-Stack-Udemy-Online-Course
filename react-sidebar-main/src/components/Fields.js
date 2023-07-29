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
    title: 'RESEARCH',
    link: 'https://mitindia.edu/en/aero-home',
  },
  {
    id: 1,
    imageUrl: 'https://image-prod.iol.co.za/16x9/800/Many-factors-are-considered-when-determining-the-cost-of-a-flight-ticket-including-the-date-and-time-the-passenger-books-Picture-Pexels?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/2bf80dfc-c99f-5e41-bc07-76a3154690cc&operation=CROP&offset=565x0&resize=4192x2369',
    title: 'PLACEMENTS',
    link: 'https://mitindia.edu/en/aero-home',
  },
  {
    id: 1,
    imageUrl: 'https://image-prod.iol.co.za/16x9/800/Many-factors-are-considered-when-determining-the-cost-of-a-flight-ticket-including-the-date-and-time-the-passenger-books-Picture-Pexels?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/2bf80dfc-c99f-5e41-bc07-76a3154690cc&operation=CROP&offset=565x0&resize=4192x2369',
    title: 'LIBRARY',
    link: 'https://mitindia.edu/en/aero-home',
  },
  {
    id: 1,
    imageUrl: 'https://image-prod.iol.co.za/16x9/800/Many-factors-are-considered-when-determining-the-cost-of-a-flight-ticket-including-the-date-and-time-the-passenger-books-Picture-Pexels?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/2bf80dfc-c99f-5e41-bc07-76a3154690cc&operation=CROP&offset=565x0&resize=4192x2369',
    title: 'ACCREDITATION',
    link: 'https://mitindia.edu/en/aero-home',
  },
  
];

const Fields = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  const handleCardClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <animated.div style={fadeIn}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
            {cardData.map((card) => (
              <Card key={card.id} style={{ width: '14rem', margin: '1.5rem', boxShadow: 'none', borderRadius: '0', fontWeight: '900' }} onClick={() => handleCardClick(card.link)}>
                <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="body" component="div" className="ui header">
                      {card.title}
                    </Typography>
                  </CardContent>
                  <CardMedia component="img" height="120" image={card.imageUrl} />
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

export default Fields;
