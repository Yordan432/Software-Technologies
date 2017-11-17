let http = requere('http');

http.createServer(
function(req , res){
	res.end("Hello, Server!")
}
).listen(33451);
