import { Button, Group } from '@mantine/core';

export default function IndexPage() {
  return (
    <Group mt={50} justify="center">
      <Button variant="default">Cover Art</Button>
      <Button variant="default">Logos</Button>
      <Button variant="default">Hand Drawings</Button>
      <Button variant="default">Illustrations</Button>
    </Group>
  );
}
