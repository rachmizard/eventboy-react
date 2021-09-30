import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = "api.com";
const TIMEOUT = 20000;

export class ApiService {
	private readonly client: AxiosInstance;

	constructor({ baseURL = BASE_URL, timeout = TIMEOUT, headers = {} }) {
		const client = axios.create({
			baseURL,
			timeout,
			headers,
		});

		this.client = client;
		this.createAxiosInterceptors(client);
	}

	createAxiosInterceptors(axiosInstance: AxiosInstance) {
		axiosInstance.interceptors.request.use(
			this.handleSuccess,
			this.handleError
		);
		axiosInstance.interceptors.response.use(
			this.handleSuccess,
			this.handleError
		);
		return axiosInstance;
	}

	get httpClient() {
		return this.createAxiosInterceptors(this.client);
	}

	handleSuccess() {
		return Promise.resolve();
	}

	handleError(response: any) {
		return Promise.reject();
	}

	get(
		url: string,
		config?: AxiosRequestConfig | undefined
	): Promise<AxiosResponse<any>> {
		return this.httpClient.get(url, config).then(({ data }) => data);
	}

	post(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
		return this.httpClient.post(url, data, config).then(({ data }) => data);
	}
}
