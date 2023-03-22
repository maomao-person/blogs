import request from '../../utils/http'
//查看所有告警信息
export const userLogin = (fromData:any) => {
    return request({
        url: '/api/user/login',
        method: 'post',
        data: fromData
    })
}