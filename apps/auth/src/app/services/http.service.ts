type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface HttpRequestOptions {
  body?: any;
  headers?: HeadersInit;
}

class HttpServiceClass {
  private async request(
    endpoint: string,
    method: HttpMethod,
    options?: HttpRequestOptions,
  ) {
    const url = endpoint;
    const headers = {
      "Content-Type": "application/json",
      ...options?.headers,
    };

    const config: RequestInit = {
      method: method,
      headers: headers,
      body: options?.body ? JSON.stringify(options.body) : null,
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
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

  public post(endpoint: string, body: any, options?: HttpRequestOptions) {
    return this.request(endpoint, "POST", { ...options, body });
  }

  public put(endpoint: string, body: any, options?: HttpRequestOptions) {
    return this.request(endpoint, "PUT", { ...options, body });
  }

  public delete(endpoint: string, options?: HttpRequestOptions) {
    return this.request(endpoint, "DELETE", options);
  }
}

export const HttpService = new HttpServiceClass();
