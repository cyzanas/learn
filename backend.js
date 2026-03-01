let http=require('http')
let fs=require('fs')
let url=require('url')

http.createServer((req,res)=>{
    let q=url.parse(req.url,true)
    //console.log(q.pathname)
    if(q.pathname==="/"){
        fs.readFile('just.html',(err,data)=>{
            res.writeHead(200,{'content-type':'text/html'})
            res.write(data)
            res.end()
        })
    }else if(q.pathname ==='/login'){
        fs.readFile('test.html',(err,data)=>{
            res.writeHead(200,{'content-type':'text/html'})
            res.write(data)
            res.end()
        })
    }else if(q.pathname==='/signin'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(`<h1>${q.query.name}</h1>`)
        res.end()
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.end("Page not Found")
    }

}).listen(7000)
