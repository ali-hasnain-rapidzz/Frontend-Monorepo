/* eslint-disable @typescript-eslint/explicit-function-return-type */
import fetch, { BodyInit, HeadersInit, RequestInit } from "node-fetch";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface HttpRequestOptions {
  body?: object;
  headers?: HeadersInit;
}

class HttpServiceClass {
  private async request(
    endpoint: string,
    method: HttpMethod,
    options?: HttpRequestOptions,
  ) {
    const url = endpoint;
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options?.headers,
    };

    const config: RequestInit = {
      method,
      headers,
      body: options?.body
        ? (JSON.stringify(options.body) as BodyInit)
        : undefined,
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("HTTP Request Failed: ", error);
      throw error;
    }
  }

  public get(endpoint: string, options?: HttpRequestOptions) {
    return this.request(endpoint, "GET", options);
  }

  public post(endpoint: string, body: object, options?: HttpRequestOptions) {
    return this.request(endpoint, "POST", { ...options, body });
  }

  public put(endpoint: string, body: object, options?: HttpRequestOptions) {
    return this.request(endpoint, "PUT", { ...options, body });
  }

  public delete(endpoint: string, options?: HttpRequestOptions) {
    return this.request(endpoint, "DELETE", options);
  }
}

export const HttpService = new HttpServiceClass();
