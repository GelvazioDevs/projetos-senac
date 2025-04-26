import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const api = {
  // Systems
  async getSystems() {
    const response = await axios.get(`${API_URL}/systems`);
    return response.data;
  },
  async createSystem(system) {
    const response = await axios.post(`${API_URL}/systems`, system);
    return response.data;
  },
  async deleteSystem(id) {
    await axios.delete(`${API_URL}/systems/${id}`);
  },

  // Users
  async getUsers() {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  },
  async createUser(user) {
    const response = await axios.post(`${API_URL}/users`, user);
    return response.data;
  },
  async deleteUser(id) {
    await axios.delete(`${API_URL}/users/${id}`);
  },
  async login(username, password) {
    const response = await axios.get(`${API_URL}/users?usulogin=${username}&ususenha=${password}&usuativo=true`);
    return response.data[0] || null;
  },

  // Profiles
  async getProfiles() {
    const response = await axios.get(`${API_URL}/profiles`);
    return response.data;
  },
  async createProfile(profile) {
    const response = await axios.post(`${API_URL}/profiles`, profile);
    return response.data;
  },
  async deleteProfile(id) {
    await axios.delete(`${API_URL}/profiles/${id}`);
  }
}