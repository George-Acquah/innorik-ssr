// src/utils/fetcher.ts

interface FetcherOptions extends RequestInit {
  headers?: Record<string, string>;
}

export const fetcher = async <T>(
  url: string,
  options: FetcherOptions = {}
): Promise<T> => {
  try {
    const baseUrl = 'http://localhost:5000'

    const response = await fetch(`${baseUrl}/${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(`Error ${response.status}: ${errorDetails}`);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error(
      `Failed to fetch: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};

export const mockDataFetching = <T>(
  data: T,
  delay = 1000,
  cb?: (data: T) => T
): Promise<T> => {
  return new Promise((resolve, reject) => () => {
    setTimeout(() => {
      try {
        if (cb) {
          resolve(cb(data));
        } else {
          resolve(data);
        }
      } catch (error) {
        reject(error);
      }
    }, delay);
  });
};
