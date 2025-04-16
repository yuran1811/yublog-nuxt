declare interface AuthorData {
  name: string;
  avatar: string;
  gender: boolean;
  bio: string;
  mail: string;
  discord: string;
  dribbble: string;
  facebook: string;
  github: string;
  instagram: string;
  linkedin: string;
  youtube: string;
}

declare interface PostData {
  title: string;
  author: string;
  date: Date;
  tags: string[];
  desc: string;
}

declare interface DockItemType {
  name: string;
  icon: string;
  img: string;
  type: 'iframe' | 'component' | 'link';
  iframe?: {
    url: string;
    width: number;
    height: number;
  };
  position?: {
    top: string;
    left: string;
  };
  link?: string;
  component?: Component;
  color?: string;
  background?: string;
}

declare interface TOC {
  depth: number;
  id: string;
  text: string;
  children?: TOC[];
}

declare interface GlobalStoreState {}

declare interface GlobalStoreActions {}
