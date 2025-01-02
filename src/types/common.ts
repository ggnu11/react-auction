// Select
interface ControllListItem {
  key: string;
  value: string;
}

export interface NewControllerProps {
  name: string;
  list?: ControllListItem[];
}

// Tab
interface NewTabProps {
  title: string;
  children: React.ReactNode;
}

export interface NewTabsProps {
  list: NewTabProps[];
  onChange?: (key: string) => void;
}

// Card
interface CardItem {
  id: number;
  name: string;
  image?: string;
  description?: string;
}

export interface NewCardProps {
  title: string;
  data: CardItem[];
  colSpan?: { [key: string]: number };
  cardStyle?: string;
  imgStyle?: string;
  cardMetaStyle?: string;
}
