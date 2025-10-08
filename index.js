<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Execute JS</title>
</head>
<body>
<script>
// Your JavaScript code
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "method": "eth_blockNumber",
  "params": [],
  "id": 1,
  "jsonrpc": "2.0"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://flashy-little-spree.quiknode.pro/9317c0fd24fec591eb649b473dd50506c7ee79d7/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
</script>
</body>
</html>