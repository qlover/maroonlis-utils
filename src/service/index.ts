function useConfig(config) {
  return config;
}

export type BaseConfig = {
  delay?: number;
  filterResponse?: boolean;
  mock?: any;
};

export default async function request<C extends T, T = BaseConfig>(config: C) {
  const {} = useConfig(config);
}
