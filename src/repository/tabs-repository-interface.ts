import { Tab } from '../entity/tab';

export interface ITabsRepository {
  getTabs(): Tab[];
  removeAllTabs(): void;
  getTodayTabs(): Tab[];
  getTab(domain: string): Tab | undefined;
  addTab(domain: string, favicon: string | undefined): Promise<Tab | undefined>;
}
