declare interface ProjectDataType {
  name: string;
  release: string;
  link: string;
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
