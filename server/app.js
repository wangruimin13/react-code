const Koa = require('koa');
const app = new Koa()
// const router = require('koa-router')
app.proxy = true
// app.use(router())

// logger
app.keys = ['im a newer secret', 'i like turtle'];
app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
  });
  
  // x-response-time
  
  app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  });
  
  // response
app.use(async ctx=>{
    console.log(ctx.req,'-----req')
    ctx.body = formatObj([1,2,3])
})
app.listen(3000,()=>{
    console.log('port at 3000')
})
function formatObj(data) {
    let newData = {};
    for (let key in data) {
        let item = data[key];
        if (item !== undefined) {
            if (Object.prototype.toString.call(item) === '[object Array]') {
                item = item.join(',');
            } else if (Object.prototype.toString.call(item) === '[object Object]') {
                item = JSON.stringify(item);
            }
            newData[key] = item;
        }
    }
    return newData;
}
console.log(app.env,app.keys,app.proxy)