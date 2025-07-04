import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import codaiImg from 'src/assets/images/codai.jpg';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import { useEffect, useState } from 'react';

interface MediaProps {
  loading?: boolean;
  projectUrl?: string;
}


function CardSkeleton(props: MediaProps) {
  const { loading = false, projectUrl } = props;
  const card = (
    <Card sx={{ maxWidth: 345, m: 2, cursor: projectUrl && !loading ? 'pointer' : 'default' }}>
      <CardHeader
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            'Nikel - Coda:í'
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="20%" />
          ) : (
            <small>clique no card</small>
          )
        }
      />
      {loading ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          height="140"
          image={codaiImg}
          alt="Nikel"
        />
      )}
      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="100%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" component="p" sx={{ color: 'text.secundary' }}>
            {
              "Projeto chamado Nikel, do curso Codaí feito com bootstrap, HTML, CSS e Javascript"
            }
         </Typography>
        )}
      </CardContent>
    </Card>
  );
  if (!loading && projectUrl) {
    return (
      <a href={projectUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        {card}
      </a>
    );
  }
  return card;
}

export default function CardProjects() {
  const [loading, setLoading] = useState(true);
  
  useEffect(()=> {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <CardSkeleton loading={loading} projectUrl="https://nikel-codai2-0.vercel.app/" />
      {/* Adicione outros cards com outros links se quiser */}
    </div>
  );
}

