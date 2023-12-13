import { Card, Image, Text, Badge, Button, Group, Grid } from '@mantine/core';
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import cx from 'clsx';
import classes from './DarkMode.module.css';

export default function IndexPage() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  return (
    <Group mt={50} p="md" justify="center">
      <Grid>
        <Grid.Col span={{ base: 10, md: 6, lg: 3 }}>
          <ActionIcon
            onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
            variant="default"
            size="lg"
            aria-label="Toggle color scheme">
            <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
            <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
          </ActionIcon>
          <Group mb="xs" mt="xs">
            <Button variant="default">Cover Art</Button>
          </Group>
          <Card shadow="sm" padding="md" radius="md" withBorder>
            <Card.Section>
              <Image src="https://i.postimg.cc/FsfGqJJQ/coverart.jpg" height={160} alt="Norway" />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>Norway Fjord Adventures</Text>
              <Badge color="pink">Limited</Badge>
            </Group>

            <Text size="sm" c="dimmed">
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and
              activities on and around the fjords of Norway
            </Text>

            <Button color="blue" fullWidth mt="md" radius="md">
              Book classic tour now
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 10, md: 6, lg: 3 }}>
          <Group mb="xs" mt="xs">
            <Button variant="default">Logos</Button>
          </Group>
          <Card shadow="sm" padding="md" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>Norway Fjord Adventures</Text>
              <Badge color="pink">On Sale</Badge>
            </Group>

            <Text size="sm" c="dimmed">
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and
              activities on and around the fjords of Norway
            </Text>

            <Button color="blue" fullWidth mt="md" radius="md">
              Book classic tour now
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 10, md: 6, lg: 3 }}>
          <Group mb="xs" mt="xs">
            <Button variant="default">Hand Drawings</Button>
          </Group>
          <Card shadow="sm" padding="md" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>Norway Fjord Adventures</Text>
              <Badge color="pink">On Sale</Badge>
            </Group>

            <Text size="sm" c="dimmed">
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and
              activities on and around the fjords of Norway
            </Text>

            <Button color="blue" fullWidth mt="md" radius="md">
              Book classic tour now
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 10, md: 6, lg: 3 }}>
          <Group mb="xs" mt="xs">
            <Button variant="default">Illustrations</Button>
          </Group>
          <Card shadow="sm" padding="md" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>Norway Fjord Adventures</Text>
              <Badge color="pink">On Sale</Badge>
            </Group>

            <Text size="sm" c="dimmed">
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and
              activities on and around the fjords of Norway
            </Text>

            <Button color="blue" fullWidth mt="md" radius="md">
              Book classic tour now
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </Group>
  );
}
