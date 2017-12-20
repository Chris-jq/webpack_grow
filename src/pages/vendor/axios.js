module.exports = {
    get:(url,data,successHandle,failHandle)=>{

        let conf = {};

        if(typeof data == 'function'){
            conf = {
                url:url,
                method:"get",
            };
            trans(conf,data,successHandle);
        }else{
            conf = {
                url:url,
                method:"get",
                params:data
            };
            trans(conf,successHandle,failHandle);
        }


    },
    post:(url,data,successHandle,failHandle)=>{
        let conf = {
            url:url,
            method:"post",
            data:data,
            headers:{'Content-Type': 'application/json'},
        };
        trans(conf,successHandle,failHandle);
    },

};


let mesVue = new vue();

function trans(configure,successHandle,failHandle) {
    axios(configure)
        .then(function (res) {
            switch (res.data.code){
                case 0:
                    if(res.data.success){
                        successHandle(res.data.data);
                    }else{
                        mesVue.$message(`error:${res.data.msg}`);
                    }
                    break;
                case 1:
                    console.log(`客户端错误:`);
                    break;
                case 2:
                    console.log(`未登录:${res.data.msg}`);
                    break;
                case 3:
                    console.log(`confirm:${res.data.msg}`);
                    break;
                case 4:
                    console.log(`后台错误:${res.data.msg}`);
                    break;
            }
        })
        .catch(function (err) {
            if(failHandle){
                failHandle(err);
            }else {
                mesVue.$message(`error:${err}`);
            }
        })
}