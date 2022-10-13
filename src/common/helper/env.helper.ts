import { existsSync } from 'fs';
import { resolve } from 'path';

export function getEnvPath(dest: string): string {
  const env: string | undefined = process.env.NODE_ENV;
  const fallback: string = resolve(`${dest}/.env`);
  let filename: string;

  switch(process.env.NODE_ENV) {
    case "local":
      filename = `${env}.env`;
      break;
    case "development":
      filename = `${env}.env`;
      break;
    case "production":
      filename = `${env}.env`;
      break;
    case "staging":
        filename = `${env}.env`;
      break;
    case "test":
        filename = `${env}.env`;
      break;
    default:
      filename = `${env}.env`;
  }

  let filePath: string = resolve(`${dest}/${filename}`);

  if (!existsSync(filePath)) {
    filePath = fallback;
  }

  return filePath;
}