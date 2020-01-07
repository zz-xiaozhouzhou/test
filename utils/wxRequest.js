
export default function wxRequest(url, params) {
    return new Promise((resolve, reject) => {
        wx.request({
            /* 参数 */
            url,
            data: params.data,
            method: params.method || 'get',
            /* 成功后的回调函数 */
            success: res => {
                /* 判断状态 */
                const {statusCode}=res;
                if (statusCode === 200) {
                    resolve(res);
                } else {
                    reject(res);
                }
            }
        },
        )
    })
}