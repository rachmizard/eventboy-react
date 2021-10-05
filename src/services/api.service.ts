import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { apiConfig } from "config/api";

const BASE_URL = apiConfig.baseUrlApi;
const TIMEOUT = 20000;

export class ApiService {
    private readonly client: AxiosInstance;

    constructor(baseURL = BASE_URL, timeout = TIMEOUT, headers = {}) {
        const client = axios.create({
            baseURL,
            timeout,
            headers,
        });

        this.client = client;

        this.client.interceptors.response.use(
            this.handleSuccess,
            this.handleError
        );
    }

    get httpClient() {
        return this.client;
    }

    handleSuccess(value: any) {
        return Promise.resolve(value);
    }

    handleError(error: any) {
        return Promise.reject(error.response.data);
    }

    get(
        url: string,
        config?: AxiosRequestConfig | undefined
    ): Promise<AxiosResponse<any>> {
        return this.httpClient
            .get(url, config)
            .then((response) => response.data);
    }

    post(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
        return this.httpClient
            .post(url, data, config)
            .then((response) => response.data);
    }
}
