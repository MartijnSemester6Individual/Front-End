import { loadEnvConfig } from '@next/env';

export default async function SetupEnv() {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
}