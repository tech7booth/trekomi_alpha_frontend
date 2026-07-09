export interface SendOtpRequest {
  email: string;
}

export interface SendOtpResponse {
  message: string;
}

export interface RegisterRequest {
  email: string;
  fullName: string;
  password: string;
  otp: string;
}

export interface RegisterResponse {
  message: string;
  data: {
    user: {
      id: string;
      email: string;
      fullName: string;
    };
    accessToken: string;
  }
}

export interface ApiErrorData {
  status?: number;
  message: string;
}


export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  data: {
    user: {
      id: string;
      email: string;
      fullName: string;
    };
    accessToken: string;
  }
}