// import request from '@/utils/request'
// import md5 from 'md5'


// export function register(data) {
//     const { email, password, checkPassword, username } = data
//     return request({
//         url: '/api/register',
//         method: 'post',
//         data: {
//             email: email,
//             username: username,
//             password: md5(password),
//             checkPassword: md5(checkPassword)
//         }
//     })
// }

// export function login(data) {
//     const { email, password } = data
//     return request({
//         url: '/api/login',
//         method: 'post',
//         data: {
//             email: email,
//             password: md5(password),
//         }
//     })
// }

// export function getInfo() {
//     return request({
//         url: '/api/user/info',
//         method: 'get'
//     })
// }

// export function logout() {
//     return request({
//         url: '/api/logout',
//         method: 'post'
//     })
// }