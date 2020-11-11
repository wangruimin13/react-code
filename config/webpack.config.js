const path = require('path');
const ROOT_PATH = path.resolve(__dirname,'../../');
const SRC_PATH = path.join(ROOT_PATH,'src');
const resolve = (...filename)=>{
    return path.resolve(filename)
}
module.exports = {
    entry:{
        main:resolve(SRC_PATH,'main.js')
    },
    output:{
        path:path.join(ROOT_PATH,'dist'),
        filename:'js/[name].[chunkhash:8].js'
    },
    externals:{//打包时忽略文件
        'echarts':'echarts'
    },
    resolve:{//解析
        alias:{
            '@':SRC_PATH,
            '@util':resolve(SRC_PATH,'util'),
            '@components':resolve(SRC_PATH,'components')
        },
        extensions:['.js','.ts','.tsx','.jsx']
    }
}