from web3 import Web3

w3 = Web3(Web3.HTTPProvider("https://evocative-bitter-sky.quiknode.pro/4ceceeea05226bcd7a46b73610e609c51a926e74/"))

if not w3.is_connected():
  print("Failed to connect to the HTTP provider!")
  exit()

latest_block_number = w3.eth.block_number

print(f"Latest Block Number: {latest_block_number}")
