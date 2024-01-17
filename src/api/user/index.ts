import request from '@/utils/request'
import type { CaptchaResponse } from './type'

enum API {
  CAPTCHA_GENERATE = '/pub/captcha',
}

export const reqGenerateCaptcha = () =>
  request.get<any, CaptchaResponse>(API.CAPTCHA_GENERATE)
