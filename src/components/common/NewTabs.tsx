import Tabs, { TabsProps } from 'antd/es/tabs';

interface NewTabProps {
  title: string;
  children: React.ReactNode;
}

interface NewTabsProps {
  list: NewTabProps[];
  onChange?: (key: string) => void;
}

const NewTab: React.FC<NewTabsProps> = ({ list, onChange }) => {
  const items: TabsProps['items'] = list.map((tab, index) => ({
    key: (index + 1).toString(),
    label: tab.title,
    children: tab.children,
  }));

  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default NewTab;
