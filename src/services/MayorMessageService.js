// src/services/MayorMessageService.js
import axios from 'axios';

// Usar la misma configuración base que AuthService
const API_URL = 'https://ayudaelectrovia.com';

// Crear una instancia de axios con configuración base
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para añadir el token a las peticiones
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Servicio para mensajes al alcalde
const MayorMessageService = {
  // Enviar un Contacta un agente de ventas 
  sendMessage: async (messageData) => {
    try {

      const response = await apiClient.post('/api/mayor-messages/', {
        nombre: messageData.nombre,
        correo: messageData.correo,
        telefono: messageData.telefono,
        interes: messageData.interes,
        mensaje: messageData.mensaje
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Obtener todos los mensajes (para administradores)
  getAllMessages: async () => {
    try {
      const response = await apiClient.get('/api/mayor-messages/');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Obtener un mensaje específico
  getMessage: async (messageId) => {
    try {
      const response = await apiClient.get(`/api/mayor-messages/${messageId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default MayorMessageService;