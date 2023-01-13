// const path = require('path')

module.exports = {
    entry:"./src/main.js",
    output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
},
module:{
    module: {
        rules: [
        //css配置
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
    }
}