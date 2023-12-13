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
            <Button variant="default">Album Cover Art</Button>
          </Group>
          <Card shadow="sm" padding="md" radius="md" withBorder>
            <Card.Section>
              <Image src="https://i.postimg.cc/FsfGqJJQ/coverart.jpg" height={160} alt="Norway" />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>Business Talk Album Cover</Text>
              <Badge color="green">NEW</Badge>
            </Group>

            <Text size="sm" c="dimmed">
              One of my best instrumental albums. The cover art aesthetics reflects the beats'
              style. It contains some of my oldest beats that sound raw. Art was done in Photoshop.
            </Text>

            <Button
              component="a"
              href="https://youtu.be/cDOIXBE-AB8?list=PL_IwdIISBVJoiNegAnEgN5EKS4Nq5lUVT"
              target="_blank"
              color="green"
              fullWidth
              mt="md"
              radius="md">
              Listen on YouTube
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 10, md: 6, lg: 3 }}>
          <Group mb="xs" mt="xs">
            <Button variant="default">Logo & Brand</Button>
          </Group>
          <Card shadow="sm" padding="md" radius="md" withBorder>
            <Card.Section>
              <Image src="https://i.postimg.cc/3wMtTJQb/download.png" height={160} alt="Norway" />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>Ever Happened</Text>
              {/* <Badge color="pink">On Sale</Badge> */}
            </Group>

            <Text size="sm" c="dimmed">
              Official Ever Happened logo & website for my music brand.
            </Text>

            <Button
              component="a"
              href="https://www.happenedmusic.com/"
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
          <Group mb="xs" mt="xs">
            <Button variant="default">Loop Kit Covers</Button>
          </Group>
          <Card shadow="sm" padding="md" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://static.wixstatic.com/media/ac851e_88b2d1a6041f49048d1a198dd6b925c1~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ac851e_88b2d1a6041f49048d1a198dd6b925c1~mv2.jpg"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>Loop Kit Cover Art - Emotions</Text>
              {/* <Badge color="pink">On Sale</Badge> */}
            </Group>

            <Text size="sm" c="dimmed">
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and
              activities on and around the fjords of Norway
            </Text>

            <Button
              component="a"
              href="https://www.happenedmusic.com/product-page/lots-of-emotions-loop-kit"
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
          <Group mb="xs" mt="xs">
            <Button variant="default">Hand Drawings</Button>
          </Group>
          <Card shadow="sm" padding="md" radius="md" withBorder>
            <Card.Section>
              <Image src="https://i.postimg.cc/Bvq1DdTn/download.png" height={160} alt="Norway" />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>"Never Quit Drawing"</Text>
              {/* <Badge color="pink">On Sale</Badge> */}
            </Group>

            <Text size="sm" c="dimmed">
              Ink pen art when I was 14. I quit drawing for a while after this one.
            </Text>

            <Button
              component="a"
              href="https://victortonu.myportfolio.com/drawings"
              target="_blank"
              color="black"
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
