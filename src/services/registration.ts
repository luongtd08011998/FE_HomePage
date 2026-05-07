import axios from "axios";

const REGISTRATION_INTERNAL_URL = "/api/registration";

export interface RegistrationPayload {
  name: string;
  phone: string;
  waterMeterAddress: string;
  email: string;
}

export interface RegistrationResponse {
  retCode: string;
  retMsg: string;
  result?: string;
}

export const registrationService = {
  /** Gửi yêu cầu đăng ký lắp đặt mới */
  async register(payload: RegistrationPayload): Promise<RegistrationResponse> {
    const { data } = await axios.post<RegistrationResponse>(
      REGISTRATION_INTERNAL_URL,
      payload
    );
    return data;
  },

  /** Lấy thông tin thời gian đã đăng ký theo số điện thoại */
  async getRegistrationTime(phone: string): Promise<string> {
    try {
      const { data } = await axios.get(REGISTRATION_INTERNAL_URL, {
        params: { phone }
      });
      return typeof data === "string" ? data : JSON.stringify(data);
    } catch (error) {
      console.error("Failed to fetch registration time", error);
      return "";
    }
  },
};
