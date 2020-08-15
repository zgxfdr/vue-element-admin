import request from '@/utils/request';

// 查询资产列表
export const getAssetList = data => {
    console.log(data)
    return request({
        url: "/sys/property/getPage",
        method: "POST",
        data
    })
}
// 查询资产分类
export const getAssetTypes = data => {
    return request({
        url: "/sysEnum/queryEnumByCode",
        method: "POST",
        data
    })
}
