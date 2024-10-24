export const mockDataFetching = <T>(data: T, delay = 1000, cb?: (data: T) => T): Promise<T> => {
  return new Promise((resolve, reject) => () => {
    setTimeout(() => {
      try {
        if (cb) {
          resolve(cb(data))
        } else {
          resolve(data);
        }
      } catch (error) {
        reject(error);
      }
    }, delay);
  });
};
