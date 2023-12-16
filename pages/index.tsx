import { Card, Text, Button, Group, Flex } from '@mantine/core';
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon, IconBrandGithub } from '@tabler/icons-react';
import cx from 'clsx';
import classes from './DarkMode.module.css';
import { CardsCarousel } from './CardsCarousel';
import { Blockquote } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

export default function IndexPage() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const icon = <IconInfoCircle />;
  return (
    <Group p="lg" justify="center" align="center">
      <Flex mih={50} justify="center" align="center" direction="column" gap="md">
        {' '}
        <Card shadow="xs" padding="md" radius="md" withBorder mb="xs">
          <Group justify="center" align="center">
            <ActionIcon
              onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
              variant="default"
              size="lg"
              aria-label="Toggle color scheme">
              <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
              <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
            </ActionIcon>
            <Button
              variant="default"
              component="a"
              href="https://shad-cn-ui.vercel.app/"
              target="_blank">
              Portfolio Project
            </Button>
            <ActionIcon
              variant="default"
              size="lg"
              aria-label="Toggle color scheme"
              component="a"
              href="https://github.com/vtonu/GraphicDesign_Portfolio"
              target="_blank">
              <IconBrandGithub></IconBrandGithub>
            </ActionIcon>
          </Group>
          <Text mt="sm" c="dimmed" size="sm">
            A Mantine Project using React, NextJS and Tabler Icons.
          </Text>
        </Card>
        <Card
          shadow="xs"
          padding="md"
          radius="md"
          withBorder
          style={{ width: '50%', height: '50%' }}>
          <CardsCarousel></CardsCarousel>
        </Card>
        <Blockquote color="white" cite="– Bing Chat" icon={icon} mt="xl">
          Minimalism is the future: why clutter your life with things when you can clutter it with
          apps?
        </Blockquote>
      </Flex>
    </Group>
  );
}
