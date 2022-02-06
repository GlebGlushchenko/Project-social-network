import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '537e1b34-1aa6-47d7-a570-77c5f21c5ab2' },
  withCredentials: true,
})
const secondInstance = axios.create({
  baseURL:
    'https://newsapi.org/v2/top-headlines?country=ru&apiKey=bb5af496690a467eb59db91b2c7dd005',
})

export const newsApi = {
  getNews() {
    return secondInstance.get().then((res) => res.data)
  },
}

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data)
  },
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data)
  },
  getAuthMe() {
    return instance.get('auth/me').then((response) => response.data)
  },
  getProfileUser(id) {
    return instance.get(`profile/${id}`).then((response) => response.data)
  },

  updateStatus(statusText) {
    return instance.put(`/profile/status`, {
      status: statusText,
    })
  },

  getStatus(userId) {
    return instance.get(`/profile/status/${userId}`)
  },
}

export const followAPI = {
  getFollow(index) {
    return instance.post(`/follow/${index}`, {})
  },
  getUnFollow(index) {
    return instance.delete(`/follow/${index}`)
  },
}

export const authorizationAPI = {
  login({ login, password, rememberMe }) {
    return instance.post(`/auth/login`, {
      email: login,
      password,
      rememberMe,
    })
  },
  logOut() {
    return instance.delete(`/auth/login`)
  },
}
