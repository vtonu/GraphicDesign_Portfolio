import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import classes from './CardsCarousel.module.css';

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}>
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button
        variant="default"
        color="dark"
        size="sm"
        component="a"
        href="https://victortonu.myportfolio.com/home"
        target="_blank">
        See More
      </Button>
    </Paper>
  );
}

const data = [
  {
    image: 'https://i.postimg.cc/FsfGqJJQ/coverart.jpg',
    title: '',
    category: 'ALBUM ARTWORK',
  },
  {
    image: 'https://i.postimg.cc/13fn23yj/download.png',
    title: '',
    category: 'HAND DRAWING',
  },
  {
    image: 'https://i.postimg.cc/9f9p3pcK/download.png',
    title: '',
    category: 'NuxtJS',
  },
  {
    image: 'https://i.postimg.cc/3xvpWxzD/download.png',
    title: '',
    category: 'NuxtJS',
  },
  {
    image: 'https://i.postimg.cc/D04ssfmD/download.png',
    title: '',
    category: 'CSS, HTML, JS',
  },
  {
    image: 'https://i.postimg.cc/X7Zxc3Tn/download.png',
    title: '',
    category: 'LOGO DESIGN',
  },
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: rem(2), sm: 'xl' }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}>
      {slides}
    </Carousel>
  );
}
