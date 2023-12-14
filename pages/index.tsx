import { Card, Image, Text, Badge, Button, Group, Grid } from '@mantine/core';
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon, IconBrandGithub } from '@tabler/icons-react';
import cx from 'clsx';
import classes from './DarkMode.module.css';
import { Carousel } from '@mantine/carousel';

export default function IndexPage() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  return (
    <Group p="lg" justify="center">
      <Grid justify="center" align="flex-start">
        <Grid.Col span={{ base: 10, md: 6, lg: 3 }}>
          <Card shadow="sm" padding="md" radius="md" withBorder>
            <Group mb="xs" mt="xs">
              <Button variant="default">Project 1</Button>
              <ActionIcon
                onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                variant="default"
                size="lg"
                aria-label="Toggle color scheme">
                <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
                <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
              </ActionIcon>
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
            <Card.Section>
              <Image src="https://i.postimg.cc/FsfGqJJQ/coverart.jpg" height={160} alt="Norway" />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>Graphic Design Portfolio</Text>
              {/* <Badge color="green">NEW</Badge> */}
            </Group>

            <Text size="sm" c="dimmed">
              Website made using Adobe Portfolio.
            </Text>

            <Button
              component="a"
              href="https://victortonu.myportfolio.com/"
              target="_blank"
              color="green"
              fullWidth
              mt="md"
              radius="md">
              See More
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 10, md: 6, lg: 3 }}>
          <Card shadow="sm" padding="md" radius="md" withBorder>
            <Group mb="xs" mt="xs">
              <Button variant="default">Project 2</Button>
            </Group>
            <Card.Section>
              <Image
                src="https://i.postimg.cc/xjHFT4P4/download.png"
                height={160}
                alt="3D Object"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>GAME 124 - Introduction to 3D with Maya</Text>
              {/* <Badge color="pink">On Sale</Badge> */}
            </Group>

            <Text size="sm" c="dimmed">
              This course is an introduction to the 3D content creation process as practiced in
              Maya.
            </Text>

            <Button
              component="a"
              href="https://nuxt-ui-maya.vercel.app/"
              target="_blank"
              color="red"
              fullWidth
              mt="md"
              radius="md">
              See More
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 10, md: 6, lg: 3 }}>
          <Card shadow="sm" padding="md" radius="md" withBorder>
            <Group mb="xs" mt="xs">
              <Button variant="default">Project 3</Button>
            </Group>
            <Card.Section>
              <Image
                src="https://nuxt-ui-3-d.vercel.app/_nuxt/project10_10_10.0e7d5d83.jpg"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>GAME 134 - 3D Materials & Textures</Text>
              <Badge color="green">NEW</Badge>
            </Group>

            <Text size="sm" c="dimmed">
              This course covers the elements of creating portfolio quality Material
              Shaders/Textures applied to a 3D model.
            </Text>

            <Button
              component="a"
              href="https://nuxt-ui-3-d.vercel.app/"
              target="_blank"
              color="green"
              fullWidth
              mt="md"
              radius="md">
              See More
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 10, md: 6, lg: 3 }}>
          <Card shadow="sm" padding="md" radius="md" withBorder>
            <Group mb="xs" mt="xs">
              <Button variant="default">Project 4</Button>
            </Group>
            <Card.Section>
              <Image
                src="https://img.itch.zone/aW1nLzE0MjU0MTYwLmpwZw==/315x250%23c/stk3C%2B.jpg"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>Itch.io Profile</Text>
              {/* <Badge color="pink">On Sale</Badge> */}
            </Group>

            <Text size="sm" c="dimmed">
              Itch.io page which contains all games from my college classes.
            </Text>

            <Button
              component="a"
              href="https://vtonu.itch.io/"
              target="_blank"
              color="green"
              fullWidth
              mt="md"
              radius="md">
              See More
            </Button>
          </Card>
          <Card shadow="sm" padding="md" radius="md" withBorder mt="md">
            <Group mb="xs" mt="xs">
              <Button variant="default">Project 5</Button>
            </Group>
            <Card.Section>
              <Image src="https://i.postimg.cc/xTzQXf6Q/download.png" height={160} alt="Norway" />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>Math Relationship</Text>
              {/* <Badge color="pink">On Sale</Badge> */}
            </Group>

            <Text size="sm" c="dimmed">
              A simple HTML, CSS, JS Project for my Math Class.
            </Text>

            <Button
              component="a"
              href="https://github.com/vtonu/MathRelationship_2"
              target="_blank"
              color="red"
              fullWidth
              mt="md"
              radius="md">
              See More
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </Group>
  );
}
