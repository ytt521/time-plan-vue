import { defineStore } from 'pinia'
import { reqUserLogin } from '@/api/user'
import type { UserLogin, LocalLoginResponse } from '@/api/user/type'
import { SET_TOKEN, GET_TOKEN, REMOVE_TONEN } from '@/utils/token'

let useUserStore = defineStore('User', {
  state: () => {
    return {
      token: GET_TOKEN(),
    }
  },
  actions: {
    async userLogin(data: UserLogin) {
      let result: LocalLoginResponse = await reqUserLogin(data)
      if (result.code == 200) {
        this.token = result.data
        SET_TOKEN(result.data)
        return 'success'
      } else {
        return Promise.reject(new Error(result.errMsg))
      }
    },
  },
  getters: {},
})
export default useUserStore
