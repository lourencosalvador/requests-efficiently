import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

interface IRequestConfig extends AxiosRequestConfig {
  //  configurações adicionais que você precise
}

class ApiService {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      // Configurações padrão para todas as requisições
      baseURL: 'https://api.example.com',
      timeout: 10000,
    });
  }

  async get<T>(url: string, config?: IRequestConfig): Promise<T | undefined> {
    try {
      const response = await this.axiosInstance.get(url, config);
      return response.data;
    } catch (error: any) {
      this.handleError(error);
    }
  }

  async post<T>(url: string, data: any, config?: IRequestConfig): Promise<T | undefined> {
    try {
      const response = await this.axiosInstance.post(url, data, config);
      return response.data;
    } catch (error: any) {
      this.handleError(error);
    }
  }

  // métodos para requisições PUT, DELETE, etc.

  private handleError(error: AxiosError) {
    // Tratamento de erros personalizado
    console.error('Erro ao fazer requisição:', error);
    //  lançar uma exceção ou retornar um erro personalizado
  }
}

export default new ApiService();