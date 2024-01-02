type Config = {
  iiif_url: string;
  website_url: string;
};

type Info = {
  license_text: string;
  license_links: string[];
  version: string;
};

export type CommonResponse = {
  config: Config;
  info: Info;
};
