import { execSync } from 'child_process';

export default function getNodeVersion() {
  const info = execSync('node -v');
  return info.toString();
}
