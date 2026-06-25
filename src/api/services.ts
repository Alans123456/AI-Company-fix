import api from "./api";

export interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  technologies: string[];
  features: string[];
  pricing: string;
}

// Description: Get all services
// Endpoint: GET /api/services
// Request: {}
// Response: { services: Service[] }
export const getServices = async () => {
  try {
    return await api.get("/api/services");
  } catch (error) {
    const err = error as {
      response?: { data?: { error?: string } };
      message?: string;
    };
    throw new Error(
      err?.response?.data?.error || err?.message || "Failed to load services",
    );
  }
};
