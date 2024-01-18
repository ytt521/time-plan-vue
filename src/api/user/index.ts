import request from '@/utils/request'
import type { CaptchaResponse, UserLogin, LocalLoginResponse } from './type'

enum API {
  CAPTCHA_GENERATE = '/pub/captcha',
  USER_LOGIN = '/user/login',
}

export const reqGenerateCaptcha = () =>
  request.get<any, CaptchaResponse>(API.CAPTCHA_GENERATE)

export const reqUserLogin = (data: UserLogin) =>
  request.post<any, LocalLoginResponse>(API.USER_LOGIN, data)
