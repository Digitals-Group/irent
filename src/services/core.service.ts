import { RequestInit } from 'next/dist/server/web/spec-extension/request';

const API_BASE_URL = process.env.BASE_URL;
const DEFAULT_TIMEOUT = 5000;
const MAX_RETRIES = 3;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchWithTimeout = (url: string, options: RequestInit, timeout: number) => {
  return new Promise<Response>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Request timed out')), timeout);

    fetch(url, options)
      .then((response) => {
        clearTimeout(timer);
        resolve(response);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
};

const requestWithRetry = async (
  url: string,
  options: RequestInit,
  retries: number,
  timeout: number
): Promise<Response> => {
  try {
    return await fetchWithTimeout(url, options, timeout);
  } catch (error) {
    if (retries > 0) {
      await sleep(1000); // Wait before retrying
      return requestWithRetry(url, options, retries - 1, timeout);
    }
    throw error;
  }
};

export const coreService = {
  async request(
    endpoint: string,
    options?: RequestInit,
    customHeaders?: Record<string, string>,
    timeout: number = DEFAULT_TIMEOUT,
    retries: number = MAX_RETRIES
  ) {
    const url = `${API_BASE_URL}${endpoint}`;

    const headers = {
      'Content-Type': 'application/json',
      ...customHeaders,
    };

    const fetchOptions: RequestInit = {
      ...options,
      headers,
    };

    const response = await requestWithRetry(url, fetchOptions, retries, timeout);
    const contentType = response.headers.get('content-type');

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch data: ${errorText}`);
    }

    if (contentType && contentType.includes('application/json')) {
      return response.json();
    } else {
      return response.text();
    }
  },
};
