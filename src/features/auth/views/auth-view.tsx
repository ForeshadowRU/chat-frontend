import { Text, Paper, Group, PaperProps, Alert } from '@mantine/core';
import { GoogleButton } from '../ui/GoggleButton';

export function AuthView(props: PaperProps) {
  return (
    <Paper radius="md" p="xl" withBorder {...props} w="50%" pos="absolute" top="25%" left="25%">
      <Text size="lg" fw={500}>
        Welcome to ShadowChat
      </Text>

      <Group grow mb="md" mt="md" w="50%">
        <GoogleButton radius="xl">Google</GoogleButton>
      </Group>

      <Alert title="Email регистрация в процессе WIP" my="lg" />
    </Paper>
  );
}
