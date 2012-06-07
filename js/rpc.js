var rpc=[];
rpc.url="http://"+SERVER_IP+":"+SERVER_PORT;

rpc.displayResult = function(response,success) 
{
	if(success)
		$('#status').text(JSON.stringify(response));
	else $('#error').text('No response from server. Please check if it is running.');
};

rpc.call =function(request,callback)
{
	request.id = 1;
	
	$.ajax({
  		type: 'POST',
  		url: rpc.url,
  		data: JSON.stringify(request),
  		success: function(x){ callback(x,true); },
  		error: function(x){ callback(x,false); },
  		dataType: "json"
	});
}


rpc.send=function(key,fromAccount,toAccount,amount,callback)
{
	var request = {};
	request.method = "send";
	request.params = [key,fromAccount,toAccount,amount];
	
	rpc.call(request,callback);
}

rpc.wallet_accounts=function(key,callback)
{
	var request = {};
	request.method = "wallet_accounts";
	request.params = [key];
	
	rpc.call(request,callback);
}

rpc.fetch_data=function (key,callback)
{
	var request = {};
	request.method = "fetch_data";
	request.params = [key];
	
	rpc.call(request,callback);
}

rpc.store_data=function(key,value)
{
	var request = {};
	request.method = "store_data";
	request.params = [key,value];
	
	rpc.call(request,rpc.displayResult);
}

rpc.peers=function ()
{
	var request = {};
	request.method = "peers";
	request.params = [];
	
	rpc.call(request,rpc.displayResult);
}

rpc.stop=function ()
{
	var request = {};
	request.method = "stop";
	request.params = [];
	
	rpc.call(request,rpc.displayResult);
}

rpc.ledger=function ()
{
	var request = {};
	request.method = "ledger";
	request.params = [];
	
	rpc.call(request,rpc.displayResult);
}

rpc.unl_list=function ()
{
	var request = {};
	request.method = "unl_list";
	request.params = [];
	
	rpc.call(request,rpc.displayResult);
}