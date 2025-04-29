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
