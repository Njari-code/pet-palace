type StorageKey = 'cart' | 'wishlist' | 'recentlyViewed' | 'theme' | 'userPreferences';

export const storage = {
  get: <T>(key: StorageKey, defaultValue: T): T => {
    try {
      const item = localStorage.getItem(`petpalace_${key}`);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading ${key} from localStorage:`, error);
      return defaultValue;
    }
  },

  set: <T>(key: StorageKey, value: T): void => {
    try {
      localStorage.setItem(`petpalace_${key}`, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing ${key} to localStorage:`, error);
    }
  },

  remove: (key: StorageKey): void => {
    try {
      localStorage.removeItem(`petpalace_${key}`);
    } catch (error) {
      console.error(`Error removing ${key} from localStorage:`, error);
    }
  },

  clear: (): void => {
    try {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('petpalace_')) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }
};