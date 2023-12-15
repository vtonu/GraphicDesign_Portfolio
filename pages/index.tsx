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
      <Grid justify="center" align="flex-start">
        <Card shadow="xs" padding="md" radius="md" withBorder mb="xs">
          <Group mb="xs" justify="center" align="center">
            <ActionIcon
              onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
              variant="default"
              size="lg"
              aria-label="Toggle color scheme">
              <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
              <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
            </ActionIcon>
            <Button variant="default">Portfolio Project</Button>
            <ActionIcon
              variant="default"
              size="lg"
              aria-label="Toggle color scheme"
              component="a"
              href="https://github.com/vtonu"
              target="_blank">
              <IconBrandGithub></IconBrandGithub>
            </ActionIcon>
          </Group>
        </Card>
      </Grid>
      <Card shadow="xs" padding="md" radius="md" withBorder style={{ width: '50%', height: '50%' }}>
        <CardsCarousel></CardsCarousel>
      </Card>
    </Group>
  );
}
