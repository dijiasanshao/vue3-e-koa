/**
 * 环境配置封装
 */

const env = import.meta.env.MODE||'prod';
const EnvConfig = {
    development:{
        baseApi:'',
        mockApi:'https://www.fastmock.site/mock/699accff362a971b451882fee39a6a44/api'
    },
    test:{
        baseApi:'/',
        mockApi:'https://www.fastmock.site/mock/699accff362a971b451882fee39a6a44/api'
    },
    production:{
        baseApi:'/',
        mockApi:'https://www.fastmock.site/mock/699accff362a971b451882fee39a6a44/api'
    }
}
console.log(import.meta.env.MODE)
export default {
    env,
    mock:true,
    namespace:'manager',
    ...EnvConfig[env]
}