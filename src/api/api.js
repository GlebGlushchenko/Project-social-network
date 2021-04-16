import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '45414e19-d78d-4b5b-aaf5-666ee2401d0a' },
  withCredentials: true,
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data)
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data)
  },
  getAuthMe() {
    return instance.get('auth/me').then((response) => response.data)
  },
  getProfileUser(id) {
    return instance.get(`profile/${id}`).then((response) => response.data)
  },
  getFollow(index) {
    return instance.post(`/follow/${index}`, {})
  },
  getUnFollow(index) {
    return instance.delete(`/follow/${index}`)
  },
}
