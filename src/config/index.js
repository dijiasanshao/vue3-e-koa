/**
 * 环境配置封装
 */

const env = import.meta.env.MODE|| 'prod';
const EnvConfig = {
    dev:{
        baseApi:'',
        mockApi:'https://www.fastmock.site/mock/699accff362a971b451882fee39a6a44/api'
    },
    test:{
        baseApi:'/',
        mockApi:'https://www.fastmock.site/mock/699accff362a971b451882fee39a6a44/api'
    },
    prod:{
        baseApi:'/',
        mockApi:'https://www.fastmock.site/mock/699accff362a971b451882fee39a6a44/api'
    }
}
export default {
    env,
    mock:true,
    ...EnvConfig[env]
}