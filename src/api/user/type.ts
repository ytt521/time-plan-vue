export interface BaseResponse {
  code: number
  errMsg: null | string
  timestamp: string
}
export interface CaptchaResponse extends BaseResponse {
  data: {
    uid: string
    img: string
  }
}
export interface UserLogin {
  userName: string
  password: string
}
export interface LocalLoginResponse extends BaseResponse {
  data: string
}
