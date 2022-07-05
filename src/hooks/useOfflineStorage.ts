export interface IUseOfflineStorage {
  saveData: (key: string, data: any) => void;
  loadData: (key: string) => any;
}

// @ts-ignore
export const useOfflineStorage: IUseOfflineStorage = {
  saveData: (key, data) => {
    // Code to save data
  },
  loadData: (key) => {
    // Code to load data
  }
};