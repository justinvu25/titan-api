import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import Agent, { HttpsAgent } from 'agentkeepalive'

const httpAgent = new Agent()
const httpsAgent = new HttpsAgent()

const axiosInstance: AxiosInstance = axios.create({
	httpAgent,
	httpsAgent,
})

export const makeRequest = async <T>(
	config: AxiosRequestConfig,
): Promise<T> => {
	const response = await axiosInstance.request(config)
	return response.data
}
