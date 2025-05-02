import axios from 'axios';

// Configuración base de axios
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

// Servicio de autenticación
const AuthService = {
  // Primer paso del registro
  registerStep1: async (userData) => {
    try {
      const response = await apiClient.post('/api/auth/register/step1', {
        name: userData.name,
        email: userData.email
      });

      localStorage.setItem('email_register', userData.email); 
      
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Segundo paso del registro
  registerStep2: async (userData) => {
    try {
      const response = await apiClient.post('/api/auth/register/step2', {
        email: userData.email,
        token: userData.token,
        password: userData.password,
        password_confirm: userData.password_confirm
      });

      localStorage.setItem('accessToken', response.data.access_token); 
      localStorage.setItem('name', response.data?.user?.name); 
      localStorage.setItem('email',response.data?.user?.emial); 
      
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Inicio de sesión
  login: async (credentials) => {
    try {
      // El endpoint de login de OAuth2 espera datos en formato form-urlencoded
      const formData = new URLSearchParams();
      formData.append('username', credentials.email);
      formData.append('password', credentials.password);

      const response = await apiClient.post('/api/auth/token', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      console.log({response})
      
      // Guardar token y datos del usuario
      if (response.data.access_token) {
        localStorage.setItem('accessToken', response.data.access_token);
        localStorage.setItem('userData', JSON.stringify(response.data.user));
      }
      
      return response;
      
    } catch (error) {
      throw error;
    }
  },

  // Solicitar restablecimiento de contraseña
  requestPasswordReset: async (email) => {
    try {
      const response = await apiClient.post('/api/auth/reset-password/request', { email });
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Restablecer contraseña
  ForgotPassword: async (resetData) => {
    try {
      const response = await apiClient.post('/api/auth/reset-password/confirm', resetData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Obtener información del usuario actual
  getCurrentUser: async () => {
    try {
      const response = await apiClient.get('/api/auth/me');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Verificar estado de autenticación
  checkAuthStatus: async () => {
    try {
      const response = await apiClient.get('/api/auth/status');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  verifyEmail: async (token) => {
    try{
      
      const response = await apiClient.post('/api/auth/verify-email', {"token": token });  
      return response; 

    }catch(error){
      console.error('Error al verificar:', error.response?.data || error.message);
      throw(error)
    }
  }, 

  // Cerrar sesión
  logout: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userData');
  },

  // Verificar si el usuario está autenticado
  isAuthenticated: () => {
    return !!localStorage.getItem('accessToken');
  },

  // Obtener datos del usuario desde localStorage
  getUserData: () => {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  }
};

export default AuthService;