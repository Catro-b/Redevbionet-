const QuickNode = require('@quicknode/sdk');
// if you are using ESM style imports, use this line instead:
// import QuickNode from '@quicknode/sdk';

const core = new Core({
  endpointUrl: 'https://evocative-bitter-sky.quiknode.pro/4ceceeea05226bcd7a46b73610e609c51a926e74/',
  })

  const currentBlockNumber = await core.client.getBlockNumber();
  console.log(currentBlockNumber)