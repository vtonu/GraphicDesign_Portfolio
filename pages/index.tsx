import { Card, Image, Text, Badge, Button, Group, Grid } from '@mantine/core';
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon, IconBrandGithub } from '@tabler/icons-react';
import cx from 'clsx';
import classes from './DarkMode.module.css';
import { CardsCarousel } from './CardsCarousel';

export default function IndexPage() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  return (
    <Group p="lg" justify="center">
      <Grid justify="center" align="center">
        <Card shadow="xs" padding="md" radius="md" withBorder>
          <Group mb="xs" justify="center" align="center">
            <ActionIcon
              onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
              variant="default"
              size="lg"
              aria-label="Toggle color scheme">
              <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
              <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
            </ActionIcon>
            <Button variant="default">React Project</Button>
            <ActionIcon
              variant="default"
              size="lg"
              aria-label="Toggle color scheme"
              component="a"
              href="https://github.com/vtonu/ShadCN_UI"
              target="_blank">
              <IconBrandGithub></IconBrandGithub>
            </ActionIcon>
          </Group>
          <Card.Section>
            <Image src="https://i.postimg.cc/SR84jrQh/download.png" height={300} alt="Project 1" />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Graphic Design Portfolio</Text>
            {/* <Badge color="green">NEW</Badge> */}
          </Group>

          <Text size="sm" c="dimmed">
            A ShadCN Project using React, NextJS, Radix & TailwindCSS.
          </Text>

          <Button
            component="a"
            href="https://shad-cn-ui.vercel.app/"
            target="_blank"
            variant="default"
            fullWidth
            mt="md"
            radius="md">
            See More
          </Button>
        </Card>
      </Grid>
      <CardsCarousel></CardsCarousel>
    </Group>
  );
}
