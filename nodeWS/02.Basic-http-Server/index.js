const http = require('http');

const port = 8000;

const fs=require('fs');

// --------Logical function-----
function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type': 'text/html'});

    // --------------Previously--------------
    // fs.readFile('./index.html',function(err,data){
    //     if(err){
    //         console.log('error',err);
    //         return res.end('<h1>Erorr!!</h1');
    //     }
    //      return res.end(data);
    // });
    //res.end('<h1>Gotcha</h1>');


    // ---------------Multiple Pages------------------
    let filePath;

    switch(req.url){

        case '/': 
             filePath='./index.html';
             break;
        case '/profile':
                filePath= './profile.html';
                break;
        default :
            filePath= './404.html';
    }

    fs.readFile(filePath , function(err,data){

            if(err){
            console.log('error',err);
            return res.end('<h1>Erorr!!</h1');
        }

         return res.end(data);

    });

}

// ------Starting the server------
const server = http.createServer(requestHandler);

server.listen(port , function(err){
    if(err){
    console.log(err);
    return;
    }else{
        console.log("server is running on port " , port)
    }
})