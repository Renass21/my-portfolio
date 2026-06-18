import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
interface CardProjectsProps {
  titleProject: string;
  description: string;
  imageCard: string;
  projectUrl: string;
}

function CardProjects({
  titleProject,
  description,
  imageCard,
  projectUrl,
}: CardProjectsProps) {
  const [loading, setLoading] = useState(true);
  const [ogImage, setOgImage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!imageCard && projectUrl) {
      // Usar microlink.io para extrair OG image
      fetch(`https://api.microlink.io?url=${encodeURIComponent(projectUrl)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.data?.image?.url) {
            setOgImage(data.data.image.url);
          }
        })
        .catch(() => {
          // Se falhar, usar screenshot como fallback
          setOgImage(
            `https://screenshot.screenshotapi.net/screenshot?url=${encodeURIComponent(projectUrl)}&width=345&height=190`,
          );
        });
    }
  }, [imageCard, projectUrl]);

  const card = (
    <Card
      sx={{
        maxWidth: 345,
        m: 2,
        cursor: projectUrl && !loading ? "pointer" : "default",
      }}
    >
      {loading ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : imageCard ? (
        <CardMedia
          component="img"
          height="180"
          image={imageCard}
          alt={titleProject}
        />
      ) : ogImage ? (
        <CardMedia
          component="img"
          height="180"
          image={ogImage}
          alt={titleProject}
          sx={{ objectFit: "cover" }}
          onError={() => setOgImage(null)}
        />
      ) : (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      )}
      <CardHeader
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            <Typography
              variant="body1"
              component="p"
              sx={{ color: "text.secundary" }}
            >
              {titleProject}
            </Typography>
          )
        }
      />
      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="100%" />
          </React.Fragment>
        ) : (
          <Typography
            variant="body3"
            component="p"
            sx={{ color: "text.secundary" }}
          >
            {description}
          </Typography>
        )}
        {projectUrl && (
          <Button
            size="small"
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {projectUrl.includes("github.com") ? (
              <>
                <GitHubIcon fontSize="small" />
                GitHub
              </>
            ) : (
              <>
                <FolderOpenIcon fontSize="small" />
                Open Folder
              </>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  );

  return card;
}

export default CardProjects;
