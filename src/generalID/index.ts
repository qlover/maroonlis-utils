export default function generalID(randomLength?: number) {
  return Number(
    Math.random()
      .toString()
      .substring(2, randomLength ? randomLength + 2 : void 0) + Date.now()
  ).toString(36);
}
