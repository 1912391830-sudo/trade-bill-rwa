
// abi.js
// RwaNft 合约ABI
export const RwaNftABI = [{
  "_format": "hh-sol-artifact-1",
  "contractName": "RwaNft",
  "sourceName": "contracts/RwaNft.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "uri",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "initialOwner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ERC1155InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC1155InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "idsLength",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "valuesLength",
          "type": "uint256"
        }
      ],
      "name": "ERC1155InvalidArrayLength",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "ERC1155InvalidOperator",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC1155InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC1155InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "ERC1155MissingApprovalForAll",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "reason",
          "type": "string"
        }
      ],
      "name": "InvalidInput",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "enum RwaNft.AssetStatus",
          "name": "expected",
          "type": "uint8"
        },
        {
          "internalType": "enum RwaNft.AssetStatus",
          "name": "actual",
          "type": "uint8"
        }
      ],
      "name": "InvalidStatus",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "NotAssetOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "caller",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "requiredHolder",
          "type": "address"
        }
      ],
      "name": "NotCollateralHolder",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "totalSharesBurned",
          "type": "uint256"
        }
      ],
      "name": "AssetRedeemed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "totalSharesMinted",
          "type": "uint256"
        }
      ],
      "name": "AssetSplit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "enum RwaNft.AssetStatus",
          "name": "newStatus",
          "type": "uint8"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "relatedAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "AssetStatusUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "documentHash",
          "type": "bytes32"
        }
      ],
      "name": "RwaMinted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        }
      ],
      "name": "TransferBatch",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "TransferSingle",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "value",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "URI",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "assetRecords",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "documentHash",
          "type": "bytes32"
        },
        {
          "internalType": "enum RwaNft.AssetStatus",
          "name": "status",
          "type": "uint8"
        },
        {
          "internalType": "address",
          "name": "collateralizedBy",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "accounts",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        }
      ],
      "name": "balanceOfBatch",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_totalShares",
          "type": "uint256"
        }
      ],
      "name": "checkRedeemEligibility",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isEligible",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "currentShares",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_collateralReceiver",
          "type": "address"
        }
      ],
      "name": "collateralize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getAssetSummary",
      "outputs": [
        {
          "internalType": "enum RwaNft.AssetStatus",
          "name": "status",
          "type": "uint8"
        },
        {
          "internalType": "address",
          "name": "currentHolder",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "collateralizedBy",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "documentHash",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getDocumentHash",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "_documentHash",
          "type": "bytes32"
        }
      ],
      "name": "mintRwa",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nextTokenId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_amountOfShares",
          "type": "uint256"
        }
      ],
      "name": "redeem",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        }
      ],
      "name": "release",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeBatchTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_shareTokenAddress",
          "type": "address"
        }
      ],
      "name": "setShareTokenAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "shareTokenAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_amountOfShares",
          "type": "uint256"
        }
      ],
      "name": "split",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "uri",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060405161249038038061249083398101604081905261002f9161010e565b808261003a8161007a565b506001600160a01b03811661006957604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b6100728161008a565b505050610332565b60026100868282610274565b5050565b600380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811461010957600080fd5b919050565b6000806040838503121561012157600080fd5b82516001600160401b0381111561013757600080fd5b8301601f8101851361014857600080fd5b80516001600160401b03811115610161576101616100dc565b604051601f8201601f19908116603f011681016001600160401b038111828210171561018f5761018f6100dc565b6040528181528282016020018710156101a757600080fd5b60005b828110156101c6576020818501810151838301820152016101aa565b506000602083830101528094505050506101e2602084016100f2565b90509250929050565b600181811c908216806101ff57607f821691505b60208210810361021f57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561026f57806000526020600020601f840160051c8101602085101561024c5750805b601f840160051c820191505b8181101561026c5760008155600101610258565b50505b505050565b81516001600160401b0381111561028d5761028d6100dc565b6102a18161029b84546101eb565b84610225565b6020601f8211600181146102d557600083156102bd5750848201515b600019600385901b1c1916600184901b17845561026c565b600084815260208120601f198516915b8281101561030557878501518255602094850194600190920191016102e5565b50848210156103235786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b61214f806103416000396000f3fe608060405234801561001057600080fd5b506004361061014c5760003560e01c80637cbc2373116100c3578063a88dc9561161007c578063a88dc956146102f7578063abf4dd3914610340578063dedcd07414610353578063e985e9c514610366578063f242432a14610379578063f2fde38b1461038c57600080fd5b80637cbc23731461025c5780638124fea61461026f5780638796ec86146102825780638922b653146102955780638da5cb5b146102bf578063a22cb465146102e457600080fd5b80632eb2c2d6116101155780632eb2c2d6146101e25780634b19becc146101f55780634e1273f41461020857806350b8b04c14610228578063715018a61461024b57806375794a3c1461025357600080fd5b8062fdd58e1461015157806301ffc9a71461017757806303c9a4b41461019a5780630e89341c146101af5780631e1a4eef146101cf575b600080fd5b61016461015f366004611976565b61039f565b6040519081526020015b60405180910390f35b61018a6101853660046119b6565b6103c7565b604051901515815260200161016e565b6101ad6101a8366004611976565b6103d2565b005b6101c26101bd3660046119da565b610582565b60405161016e9190611a39565b6101ad6101dd366004611a4c565b610616565b6101ad6101f0366004611baf565b6106fb565b6101ad610203366004611c65565b610762565b61021b610216366004611c87565b610991565b60405161016e9190611d8c565b61023b6102363660046119da565b610a5e565b60405161016e9493929190611dd7565b6101ad610b75565b61016460055481565b6101ad61026a366004611c65565b610b89565b6101ad61027d366004611e0c565b610d06565b6101646102903660046119da565b610e4c565b6102a86102a3366004611e38565b610ead565b60408051921515835260208301919091520161016e565b6003546001600160a01b03165b6040516001600160a01b03909116815260200161016e565b6101ad6102f2366004611e6b565b610f87565b6103316103053660046119da565b6004602052600090815260409020805460019091015460ff81169061010090046001600160a01b031683565b60405161016e93929190611ea7565b6101ad61034e366004611e0c565b610f96565b6006546102cc906001600160a01b031681565b61018a610374366004611ed4565b6110fc565b6101ad610387366004611efe565b61112a565b6101ad61039a366004611a4c565b611189565b6000818152602081815260408083206001600160a01b03861684529091529020545b92915050565b60006103c1826111c7565b6103da611217565b6001600160a01b0382166104365760405163d647364f60e01b815260206004820181905260248201527f526563697069656e742063616e6e6f74206265207a65726f206164647265737360448201526064015b60405180910390fd5b600580546000918261044783611f6d565b909155506040805160608101909152838152909150602081016000815260006020918201819052838152600480835260409091208351815591830151600180840180549293909260ff1916919084908111156104a5576104a5611d9f565b0217905550604091820151600191820180546001600160a01b0390921661010002610100600160a81b0319909216919091179055815160208101909252600082526104f39185918491611244565b826001600160a01b0316817f5e9cd90e63e017e5068c1bb37d529a934537f65a844ec06060f62db969627a4d8460405161052f91815260200190565b60405180910390a36001600160a01b0383166000827f97891222abf0f8cc16bb567b04992841e8fbd1d136ce7612b849c360ac28f58d4260405161057591815260200190565b60405180910390a4505050565b60606002805461059190611f86565b80601f01602080910402602001604051908101604052809291908181526020018280546105bd90611f86565b801561060a5780601f106105df5761010080835404028352916020019161060a565b820191906000526020600020905b8154815290600101906020018083116105ed57829003601f168201915b50505050509050919050565b61061e611217565b6001600160a01b03811661067f5760405163d647364f60e01b815260206004820152602160248201527f5368617265546f6b656e20616464726573732063616e6e6f74206265207a65726044820152606f60f81b606482015260840161042d565b6006546001600160a01b0316156106d95760405163d647364f60e01b815260206004820152601e60248201527f5368617265546f6b656e206164647265737320616c7265616479207365740000604482015260640161042d565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b336001600160a01b038616811480159061071c575061071a86826110fc565b155b1561074d5760405163711bec9160e11b81526001600160a01b0380831660048301528716602482015260440161042d565b61075a86868686866112a1565b505050505050565b60008281526004602052604090206002600182015460ff16600481111561078b5761078b611d9f565b146107b7576001810154604051631482039960e01b815261042d91859160029160ff1690600401611fc0565b60016107c3338561039f565b10156107eb57604051632f5d3abb60e11b81526004810184905233602482015260440161042d565b8160000361084c5760405163d647364f60e01b815260206004820152602760248201527f53686172657320616d6f756e74206d7573742062652067726561746572207468604482015266616e207a65726f60c81b606482015260840161042d565b6006546001600160a01b03166108a55760405163d647364f60e01b815260206004820152601a60248201527f5368617265546f6b656e2061646472657373206e6f7420736574000000000000604482015260640161042d565b6108b133846001611308565b6006546040516340c10f1960e01b8152336004820152602481018490526001600160a01b03909116906340c10f1990604401600060405180830381600087803b1580156108fd57600080fd5b505af1158015610911573d6000803e3d6000fd5b5050505060018101805460ff19166004179055604051828152339084907fa594557aa90631c9667157f88c1f77af39146be7f1f9e6fd80220d44982f541c9060200160405180910390a33360045b847f97891222abf0f8cc16bb567b04992841e8fbd1d136ce7612b849c360ac28f58d4260405161057591815260200190565b606081518351146109c25781518351604051635b05999160e01b81526004810192909252602482015260440161042d565b6000835167ffffffffffffffff8111156109de576109de611a67565b604051908082528060200260200182016040528015610a07578160200160208202803683370190505b50905060005b8451811015610a5657602080820286010151610a319060208084028701015161039f565b828281518110610a4357610a43611fe9565b6020908102919091010152600101610a0d565b509392505050565b6000806000806005548510610ab05760405163d647364f60e01b8152602060048201526017602482015276151bdad95b88125108191bd95cc81b9bdd08195e1a5cdd604a1b604482015260640161042d565b600085815260046020819052604082209190600183015460ff166004811115610adb57610adb611d9f565b14158015610b0257506003600183015460ff166004811115610aff57610aff611d9f565b14155b15610b4d5760018083015460ff166004811115610b2157610b21611d9f565b03610b3f5750600181015461010090046001600160a01b0316610b4d565b506003546001600160a01b03165b6001820154915460ff8316989197506101009092046001600160a01b03169550909350915050565b610b7d611217565b610b876000611370565b565b600082815260046020819052604090912090600182015460ff166004811115610bb457610bb4611d9f565b14610bdf576001810154604051631482039960e01b815261042d91859160049160ff16908201611fc0565b6006546001600160a01b0316610c385760405163d647364f60e01b815260206004820152601a60248201527f5368617265546f6b656e2061646472657373206e6f7420736574000000000000604482015260640161042d565b600654604051632770a7eb60e21b8152336004820152602481018490526001600160a01b0390911690639dc29fac90604401600060405180830381600087803b158015610c8457600080fd5b505af1158015610c98573d6000803e3d6000fd5b50505050610cb83384600160405180602001604052806000815250611244565b60018101805460ff19166002179055604051828152339084907f22ef9db570288059f173980fa92b801ff0910545fde98e7d1a4ca74c1d92373f9060200160405180910390a333600261095f565b600082815260046020526040902060018082015460ff166004811115610d2e57610d2e611d9f565b14610d5c57600181810154604051631482039960e01b815261042d928692909160ff90911690600401611fc0565b600181015461010090046001600160a01b03163314610db05760018101546040516352218a6160e11b8152600481018590523360248201526101009091046001600160a01b0316604482015260640161042d565b6001600160a01b038216610e075760405163d647364f60e01b815260206004820181905260248201527f526563697069656e742063616e6e6f74206265207a65726f2061646472657373604482015260640161042d565b610e243383856001604051806020016040528060008152506113c2565b6001810180546001600160a81b03191660029081179091556001600160a01b0383169061095f565b60006005548210610e9a5760405163d647364f60e01b8152602060048201526017602482015276151bdad95b88125108191bd95cc81b9bdd08195e1a5cdd604a1b604482015260640161042d565b5060009081526004602052604090205490565b600082815260046020819052604082208291600182015460ff166004811115610ed857610ed8611d9f565b14610eea576000809250925050610f7f565b6006546001600160a01b0316610f07576000809250925050610f7f565b6006546040516370a0823160e01b81526001600160a01b038881166004830152909116906370a0823190602401602060405180830381865afa158015610f51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f759190611fff565b9150838210159250505b935093915050565b610f92338383611450565b5050565b600082815260046020526040812090600182015460ff166004811115610fbe57610fbe611d9f565b14158015610fe557506002600182015460ff166004811115610fe257610fe2611d9f565b14155b15611011576001810154604051631482039960e01b815261042d91859160009160ff1690600401611fc0565b600161101d338561039f565b101561104557604051632f5d3abb60e11b81526004810184905233602482015260440161042d565b6001600160a01b0382166110af5760405163d647364f60e01b815260206004820152602a60248201527f436f6c6c61746572616c2072656365697665722063616e6e6f74206265207a65604482015269726f206164647265737360b01b606482015260840161042d565b6110cc3383856001604051806020016040528060008152506113c2565b600181810180546001600160a81b0319166101006001600160a01b0386169081029190911783179091559061095f565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b336001600160a01b038616811480159061114b575061114986826110fc565b155b1561117c5760405163711bec9160e11b81526001600160a01b0380831660048301528716602482015260440161042d565b61075a86868686866113c2565b611191611217565b6001600160a01b0381166111bb57604051631e4fbdf760e01b81526000600482015260240161042d565b6111c481611370565b50565b60006001600160e01b03198216636cdb3d1360e11b14806111f857506001600160e01b031982166303a24d0760e21b145b806103c157506301ffc9a760e01b6001600160e01b03198316146103c1565b6003546001600160a01b03163314610b875760405163118cdaa760e01b815233600482015260240161042d565b6001600160a01b03841661126e57604051632bfa23e760e11b81526000600482015260240161042d565b6040805160018082526020820186905281830190815260608201859052608082019092529061075a6000878484876114e6565b6001600160a01b0384166112cb57604051632bfa23e760e11b81526000600482015260240161042d565b6001600160a01b0385166112f457604051626a0d4560e21b81526000600482015260240161042d565b61130185858585856114e6565b5050505050565b6001600160a01b03831661133157604051626a0d4560e21b81526000600482015260240161042d565b604080516001808252602082018590528183019081526060820184905260a08201909252600060808201818152919291611301918791859085906114e6565b600380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0384166113ec57604051632bfa23e760e11b81526000600482015260240161042d565b6001600160a01b03851661141557604051626a0d4560e21b81526000600482015260240161042d565b6040805160018082526020820186905281830190815260608201859052608082019092529061144787878484876114e6565b50505050505050565b6001600160a01b0382166114795760405162ced3e160e81b81526000600482015260240161042d565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6114f285858585611539565b6001600160a01b03841615611301578251339060010361152b576020848101519084015161152483898985858961174d565b505061075a565b61075a818787878787611871565b80518251146115685781518151604051635b05999160e01b81526004810192909252602482015260440161042d565b3360005b835181101561166e576020818102858101820151908501909101516001600160a01b0388161561161f576000828152602081815260408083206001600160a01b038c168452909152902054818110156115f8576040516303dee4c560e01b81526001600160a01b038a16600482015260248101829052604481018390526064810184905260840161042d565b6000838152602081815260408083206001600160a01b038d16845290915290209082900390555b6001600160a01b03871615611664576000828152602081815260408083206001600160a01b038b1684529091528120805483929061165e908490612018565b90915550505b505060010161156c565b5082516001036116ef5760208301516000906020840151909150856001600160a01b0316876001600160a01b0316846001600160a01b03167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6285856040516116e0929190918252602082015260400190565b60405180910390a45050611301565b836001600160a01b0316856001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb868660405161173e92919061202b565b60405180910390a45050505050565b6001600160a01b0384163b1561075a5760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e61906117919089908990889088908890600401612059565b6020604051808303816000875af19250505080156117cc575060408051601f3d908101601f191682019092526117c99181019061209e565b60015b611835573d8080156117fa576040519150601f19603f3d011682016040523d82523d6000602084013e6117ff565b606091505b50805160000361182d57604051632bfa23e760e11b81526001600160a01b038616600482015260240161042d565b805160208201fd5b6001600160e01b0319811663f23a6e6160e01b1461144757604051632bfa23e760e11b81526001600160a01b038616600482015260240161042d565b6001600160a01b0384163b1561075a5760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906118b590899089908890889088906004016120bb565b6020604051808303816000875af19250505080156118f0575060408051601f3d908101601f191682019092526118ed9181019061209e565b60015b61191e573d8080156117fa576040519150601f19603f3d011682016040523d82523d6000602084013e6117ff565b6001600160e01b0319811663bc197c8160e01b1461144757604051632bfa23e760e11b81526001600160a01b038616600482015260240161042d565b80356001600160a01b038116811461197157600080fd5b919050565b6000806040838503121561198957600080fd5b6119928361195a565b946020939093013593505050565b6001600160e01b0319811681146111c457600080fd5b6000602082840312156119c857600080fd5b81356119d3816119a0565b9392505050565b6000602082840312156119ec57600080fd5b5035919050565b6000815180845260005b81811015611a19576020818501810151868301820152016119fd565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006119d360208301846119f3565b600060208284031215611a5e57600080fd5b6119d38261195a565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611aa657611aa6611a67565b604052919050565b600067ffffffffffffffff821115611ac857611ac8611a67565b5060051b60200190565b600082601f830112611ae357600080fd5b8135611af6611af182611aae565b611a7d565b8082825260208201915060208360051b860101925085831115611b1857600080fd5b602085015b83811015611b35578035835260209283019201611b1d565b5095945050505050565b600082601f830112611b5057600080fd5b813567ffffffffffffffff811115611b6a57611b6a611a67565b611b7d601f8201601f1916602001611a7d565b818152846020838601011115611b9257600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215611bc757600080fd5b611bd08661195a565b9450611bde6020870161195a565b9350604086013567ffffffffffffffff811115611bfa57600080fd5b611c0688828901611ad2565b935050606086013567ffffffffffffffff811115611c2357600080fd5b611c2f88828901611ad2565b925050608086013567ffffffffffffffff811115611c4c57600080fd5b611c5888828901611b3f565b9150509295509295909350565b60008060408385031215611c7857600080fd5b50508035926020909101359150565b60008060408385031215611c9a57600080fd5b823567ffffffffffffffff811115611cb157600080fd5b8301601f81018513611cc257600080fd5b8035611cd0611af182611aae565b8082825260208201915060208360051b850101925087831115611cf257600080fd5b6020840193505b82841015611d1b57611d0a8461195a565b825260209384019390910190611cf9565b9450505050602083013567ffffffffffffffff811115611d3a57600080fd5b611d4685828601611ad2565b9150509250929050565b600081518084526020840193506020830160005b82811015611d82578151865260209586019590910190600101611d64565b5093949350505050565b6020815260006119d36020830184611d50565b634e487b7160e01b600052602160045260246000fd5b60058110611dd357634e487b7160e01b600052602160045260246000fd5b9052565b60808101611de58287611db5565b6001600160a01b039485166020830152929093166040840152606090920191909152919050565b60008060408385031215611e1f57600080fd5b82359150611e2f6020840161195a565b90509250929050565b600080600060608486031215611e4d57600080fd5b611e568461195a565b95602085013595506040909401359392505050565b60008060408385031215611e7e57600080fd5b611e878361195a565b915060208301358015158114611e9c57600080fd5b809150509250929050565b83815260608101611ebb6020830185611db5565b6001600160a01b03929092166040919091015292915050565b60008060408385031215611ee757600080fd5b611ef08361195a565b9150611e2f6020840161195a565b600080600080600060a08688031215611f1657600080fd5b611f1f8661195a565b9450611f2d6020870161195a565b93506040860135925060608601359150608086013567ffffffffffffffff811115611c4c57600080fd5b634e487b7160e01b600052601160045260246000fd5b600060018201611f7f57611f7f611f57565b5060010190565b600181811c90821680611f9a57607f821691505b602082108103611fba57634e487b7160e01b600052602260045260246000fd5b50919050565b83815260608101611fd46020830185611db5565b611fe16040830184611db5565b949350505050565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561201157600080fd5b5051919050565b808201808211156103c1576103c1611f57565b60408152600061203e6040830185611d50565b82810360208401526120508185611d50565b95945050505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a060808201819052600090612093908301846119f3565b979650505050505050565b6000602082840312156120b057600080fd5b81516119d3816119a0565b6001600160a01b0386811682528516602082015260a0604082018190526000906120e790830186611d50565b82810360608401526120f98186611d50565b9050828103608084015261210d81856119f3565b9897505050505050505056fea2646970667358221220c23d12d770d22d52899f40745c4d0534424fc4f69eb1274d0b0c80056f32b1d764736f6c634300081c0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061014c5760003560e01c80637cbc2373116100c3578063a88dc9561161007c578063a88dc956146102f7578063abf4dd3914610340578063dedcd07414610353578063e985e9c514610366578063f242432a14610379578063f2fde38b1461038c57600080fd5b80637cbc23731461025c5780638124fea61461026f5780638796ec86146102825780638922b653146102955780638da5cb5b146102bf578063a22cb465146102e457600080fd5b80632eb2c2d6116101155780632eb2c2d6146101e25780634b19becc146101f55780634e1273f41461020857806350b8b04c14610228578063715018a61461024b57806375794a3c1461025357600080fd5b8062fdd58e1461015157806301ffc9a71461017757806303c9a4b41461019a5780630e89341c146101af5780631e1a4eef146101cf575b600080fd5b61016461015f366004611976565b61039f565b6040519081526020015b60405180910390f35b61018a6101853660046119b6565b6103c7565b604051901515815260200161016e565b6101ad6101a8366004611976565b6103d2565b005b6101c26101bd3660046119da565b610582565b60405161016e9190611a39565b6101ad6101dd366004611a4c565b610616565b6101ad6101f0366004611baf565b6106fb565b6101ad610203366004611c65565b610762565b61021b610216366004611c87565b610991565b60405161016e9190611d8c565b61023b6102363660046119da565b610a5e565b60405161016e9493929190611dd7565b6101ad610b75565b61016460055481565b6101ad61026a366004611c65565b610b89565b6101ad61027d366004611e0c565b610d06565b6101646102903660046119da565b610e4c565b6102a86102a3366004611e38565b610ead565b60408051921515835260208301919091520161016e565b6003546001600160a01b03165b6040516001600160a01b03909116815260200161016e565b6101ad6102f2366004611e6b565b610f87565b6103316103053660046119da565b6004602052600090815260409020805460019091015460ff81169061010090046001600160a01b031683565b60405161016e93929190611ea7565b6101ad61034e366004611e0c565b610f96565b6006546102cc906001600160a01b031681565b61018a610374366004611ed4565b6110fc565b6101ad610387366004611efe565b61112a565b6101ad61039a366004611a4c565b611189565b6000818152602081815260408083206001600160a01b03861684529091529020545b92915050565b60006103c1826111c7565b6103da611217565b6001600160a01b0382166104365760405163d647364f60e01b815260206004820181905260248201527f526563697069656e742063616e6e6f74206265207a65726f206164647265737360448201526064015b60405180910390fd5b600580546000918261044783611f6d565b909155506040805160608101909152838152909150602081016000815260006020918201819052838152600480835260409091208351815591830151600180840180549293909260ff1916919084908111156104a5576104a5611d9f565b0217905550604091820151600191820180546001600160a01b0390921661010002610100600160a81b0319909216919091179055815160208101909252600082526104f39185918491611244565b826001600160a01b0316817f5e9cd90e63e017e5068c1bb37d529a934537f65a844ec06060f62db969627a4d8460405161052f91815260200190565b60405180910390a36001600160a01b0383166000827f97891222abf0f8cc16bb567b04992841e8fbd1d136ce7612b849c360ac28f58d4260405161057591815260200190565b60405180910390a4505050565b60606002805461059190611f86565b80601f01602080910402602001604051908101604052809291908181526020018280546105bd90611f86565b801561060a5780601f106105df5761010080835404028352916020019161060a565b820191906000526020600020905b8154815290600101906020018083116105ed57829003601f168201915b50505050509050919050565b61061e611217565b6001600160a01b03811661067f5760405163d647364f60e01b815260206004820152602160248201527f5368617265546f6b656e20616464726573732063616e6e6f74206265207a65726044820152606f60f81b606482015260840161042d565b6006546001600160a01b0316156106d95760405163d647364f60e01b815260206004820152601e60248201527f5368617265546f6b656e206164647265737320616c7265616479207365740000604482015260640161042d565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b336001600160a01b038616811480159061071c575061071a86826110fc565b155b1561074d5760405163711bec9160e11b81526001600160a01b0380831660048301528716602482015260440161042d565b61075a86868686866112a1565b505050505050565b60008281526004602052604090206002600182015460ff16600481111561078b5761078b611d9f565b146107b7576001810154604051631482039960e01b815261042d91859160029160ff1690600401611fc0565b60016107c3338561039f565b10156107eb57604051632f5d3abb60e11b81526004810184905233602482015260440161042d565b8160000361084c5760405163d647364f60e01b815260206004820152602760248201527f53686172657320616d6f756e74206d7573742062652067726561746572207468604482015266616e207a65726f60c81b606482015260840161042d565b6006546001600160a01b03166108a55760405163d647364f60e01b815260206004820152601a60248201527f5368617265546f6b656e2061646472657373206e6f7420736574000000000000604482015260640161042d565b6108b133846001611308565b6006546040516340c10f1960e01b8152336004820152602481018490526001600160a01b03909116906340c10f1990604401600060405180830381600087803b1580156108fd57600080fd5b505af1158015610911573d6000803e3d6000fd5b5050505060018101805460ff19166004179055604051828152339084907fa594557aa90631c9667157f88c1f77af39146be7f1f9e6fd80220d44982f541c9060200160405180910390a33360045b847f97891222abf0f8cc16bb567b04992841e8fbd1d136ce7612b849c360ac28f58d4260405161057591815260200190565b606081518351146109c25781518351604051635b05999160e01b81526004810192909252602482015260440161042d565b6000835167ffffffffffffffff8111156109de576109de611a67565b604051908082528060200260200182016040528015610a07578160200160208202803683370190505b50905060005b8451811015610a5657602080820286010151610a319060208084028701015161039f565b828281518110610a4357610a43611fe9565b6020908102919091010152600101610a0d565b509392505050565b6000806000806005548510610ab05760405163d647364f60e01b8152602060048201526017602482015276151bdad95b88125108191bd95cc81b9bdd08195e1a5cdd604a1b604482015260640161042d565b600085815260046020819052604082209190600183015460ff166004811115610adb57610adb611d9f565b14158015610b0257506003600183015460ff166004811115610aff57610aff611d9f565b14155b15610b4d5760018083015460ff166004811115610b2157610b21611d9f565b03610b3f5750600181015461010090046001600160a01b0316610b4d565b506003546001600160a01b03165b6001820154915460ff8316989197506101009092046001600160a01b03169550909350915050565b610b7d611217565b610b876000611370565b565b600082815260046020819052604090912090600182015460ff166004811115610bb457610bb4611d9f565b14610bdf576001810154604051631482039960e01b815261042d91859160049160ff16908201611fc0565b6006546001600160a01b0316610c385760405163d647364f60e01b815260206004820152601a60248201527f5368617265546f6b656e2061646472657373206e6f7420736574000000000000604482015260640161042d565b600654604051632770a7eb60e21b8152336004820152602481018490526001600160a01b0390911690639dc29fac90604401600060405180830381600087803b158015610c8457600080fd5b505af1158015610c98573d6000803e3d6000fd5b50505050610cb83384600160405180602001604052806000815250611244565b60018101805460ff19166002179055604051828152339084907f22ef9db570288059f173980fa92b801ff0910545fde98e7d1a4ca74c1d92373f9060200160405180910390a333600261095f565b600082815260046020526040902060018082015460ff166004811115610d2e57610d2e611d9f565b14610d5c57600181810154604051631482039960e01b815261042d928692909160ff90911690600401611fc0565b600181015461010090046001600160a01b03163314610db05760018101546040516352218a6160e11b8152600481018590523360248201526101009091046001600160a01b0316604482015260640161042d565b6001600160a01b038216610e075760405163d647364f60e01b815260206004820181905260248201527f526563697069656e742063616e6e6f74206265207a65726f2061646472657373604482015260640161042d565b610e243383856001604051806020016040528060008152506113c2565b6001810180546001600160a81b03191660029081179091556001600160a01b0383169061095f565b60006005548210610e9a5760405163d647364f60e01b8152602060048201526017602482015276151bdad95b88125108191bd95cc81b9bdd08195e1a5cdd604a1b604482015260640161042d565b5060009081526004602052604090205490565b600082815260046020819052604082208291600182015460ff166004811115610ed857610ed8611d9f565b14610eea576000809250925050610f7f565b6006546001600160a01b0316610f07576000809250925050610f7f565b6006546040516370a0823160e01b81526001600160a01b038881166004830152909116906370a0823190602401602060405180830381865afa158015610f51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f759190611fff565b9150838210159250505b935093915050565b610f92338383611450565b5050565b600082815260046020526040812090600182015460ff166004811115610fbe57610fbe611d9f565b14158015610fe557506002600182015460ff166004811115610fe257610fe2611d9f565b14155b15611011576001810154604051631482039960e01b815261042d91859160009160ff1690600401611fc0565b600161101d338561039f565b101561104557604051632f5d3abb60e11b81526004810184905233602482015260440161042d565b6001600160a01b0382166110af5760405163d647364f60e01b815260206004820152602a60248201527f436f6c6c61746572616c2072656365697665722063616e6e6f74206265207a65604482015269726f206164647265737360b01b606482015260840161042d565b6110cc3383856001604051806020016040528060008152506113c2565b600181810180546001600160a81b0319166101006001600160a01b0386169081029190911783179091559061095f565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b336001600160a01b038616811480159061114b575061114986826110fc565b155b1561117c5760405163711bec9160e11b81526001600160a01b0380831660048301528716602482015260440161042d565b61075a86868686866113c2565b611191611217565b6001600160a01b0381166111bb57604051631e4fbdf760e01b81526000600482015260240161042d565b6111c481611370565b50565b60006001600160e01b03198216636cdb3d1360e11b14806111f857506001600160e01b031982166303a24d0760e21b145b806103c157506301ffc9a760e01b6001600160e01b03198316146103c1565b6003546001600160a01b03163314610b875760405163118cdaa760e01b815233600482015260240161042d565b6001600160a01b03841661126e57604051632bfa23e760e11b81526000600482015260240161042d565b6040805160018082526020820186905281830190815260608201859052608082019092529061075a6000878484876114e6565b6001600160a01b0384166112cb57604051632bfa23e760e11b81526000600482015260240161042d565b6001600160a01b0385166112f457604051626a0d4560e21b81526000600482015260240161042d565b61130185858585856114e6565b5050505050565b6001600160a01b03831661133157604051626a0d4560e21b81526000600482015260240161042d565b604080516001808252602082018590528183019081526060820184905260a08201909252600060808201818152919291611301918791859085906114e6565b600380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0384166113ec57604051632bfa23e760e11b81526000600482015260240161042d565b6001600160a01b03851661141557604051626a0d4560e21b81526000600482015260240161042d565b6040805160018082526020820186905281830190815260608201859052608082019092529061144787878484876114e6565b50505050505050565b6001600160a01b0382166114795760405162ced3e160e81b81526000600482015260240161042d565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6114f285858585611539565b6001600160a01b03841615611301578251339060010361152b576020848101519084015161152483898985858961174d565b505061075a565b61075a818787878787611871565b80518251146115685781518151604051635b05999160e01b81526004810192909252602482015260440161042d565b3360005b835181101561166e576020818102858101820151908501909101516001600160a01b0388161561161f576000828152602081815260408083206001600160a01b038c168452909152902054818110156115f8576040516303dee4c560e01b81526001600160a01b038a16600482015260248101829052604481018390526064810184905260840161042d565b6000838152602081815260408083206001600160a01b038d16845290915290209082900390555b6001600160a01b03871615611664576000828152602081815260408083206001600160a01b038b1684529091528120805483929061165e908490612018565b90915550505b505060010161156c565b5082516001036116ef5760208301516000906020840151909150856001600160a01b0316876001600160a01b0316846001600160a01b03167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6285856040516116e0929190918252602082015260400190565b60405180910390a45050611301565b836001600160a01b0316856001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb868660405161173e92919061202b565b60405180910390a45050505050565b6001600160a01b0384163b1561075a5760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e61906117919089908990889088908890600401612059565b6020604051808303816000875af19250505080156117cc575060408051601f3d908101601f191682019092526117c99181019061209e565b60015b611835573d8080156117fa576040519150601f19603f3d011682016040523d82523d6000602084013e6117ff565b606091505b50805160000361182d57604051632bfa23e760e11b81526001600160a01b038616600482015260240161042d565b805160208201fd5b6001600160e01b0319811663f23a6e6160e01b1461144757604051632bfa23e760e11b81526001600160a01b038616600482015260240161042d565b6001600160a01b0384163b1561075a5760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906118b590899089908890889088906004016120bb565b6020604051808303816000875af19250505080156118f0575060408051601f3d908101601f191682019092526118ed9181019061209e565b60015b61191e573d8080156117fa576040519150601f19603f3d011682016040523d82523d6000602084013e6117ff565b6001600160e01b0319811663bc197c8160e01b1461144757604051632bfa23e760e11b81526001600160a01b038616600482015260240161042d565b80356001600160a01b038116811461197157600080fd5b919050565b6000806040838503121561198957600080fd5b6119928361195a565b946020939093013593505050565b6001600160e01b0319811681146111c457600080fd5b6000602082840312156119c857600080fd5b81356119d3816119a0565b9392505050565b6000602082840312156119ec57600080fd5b5035919050565b6000815180845260005b81811015611a19576020818501810151868301820152016119fd565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006119d360208301846119f3565b600060208284031215611a5e57600080fd5b6119d38261195a565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611aa657611aa6611a67565b604052919050565b600067ffffffffffffffff821115611ac857611ac8611a67565b5060051b60200190565b600082601f830112611ae357600080fd5b8135611af6611af182611aae565b611a7d565b8082825260208201915060208360051b860101925085831115611b1857600080fd5b602085015b83811015611b35578035835260209283019201611b1d565b5095945050505050565b600082601f830112611b5057600080fd5b813567ffffffffffffffff811115611b6a57611b6a611a67565b611b7d601f8201601f1916602001611a7d565b818152846020838601011115611b9257600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215611bc757600080fd5b611bd08661195a565b9450611bde6020870161195a565b9350604086013567ffffffffffffffff811115611bfa57600080fd5b611c0688828901611ad2565b935050606086013567ffffffffffffffff811115611c2357600080fd5b611c2f88828901611ad2565b925050608086013567ffffffffffffffff811115611c4c57600080fd5b611c5888828901611b3f565b9150509295509295909350565b60008060408385031215611c7857600080fd5b50508035926020909101359150565b60008060408385031215611c9a57600080fd5b823567ffffffffffffffff811115611cb157600080fd5b8301601f81018513611cc257600080fd5b8035611cd0611af182611aae565b8082825260208201915060208360051b850101925087831115611cf257600080fd5b6020840193505b82841015611d1b57611d0a8461195a565b825260209384019390910190611cf9565b9450505050602083013567ffffffffffffffff811115611d3a57600080fd5b611d4685828601611ad2565b9150509250929050565b600081518084526020840193506020830160005b82811015611d82578151865260209586019590910190600101611d64565b5093949350505050565b6020815260006119d36020830184611d50565b634e487b7160e01b600052602160045260246000fd5b60058110611dd357634e487b7160e01b600052602160045260246000fd5b9052565b60808101611de58287611db5565b6001600160a01b039485166020830152929093166040840152606090920191909152919050565b60008060408385031215611e1f57600080fd5b82359150611e2f6020840161195a565b90509250929050565b600080600060608486031215611e4d57600080fd5b611e568461195a565b95602085013595506040909401359392505050565b60008060408385031215611e7e57600080fd5b611e878361195a565b915060208301358015158114611e9c57600080fd5b809150509250929050565b83815260608101611ebb6020830185611db5565b6001600160a01b03929092166040919091015292915050565b60008060408385031215611ee757600080fd5b611ef08361195a565b9150611e2f6020840161195a565b600080600080600060a08688031215611f1657600080fd5b611f1f8661195a565b9450611f2d6020870161195a565b93506040860135925060608601359150608086013567ffffffffffffffff811115611c4c57600080fd5b634e487b7160e01b600052601160045260246000fd5b600060018201611f7f57611f7f611f57565b5060010190565b600181811c90821680611f9a57607f821691505b602082108103611fba57634e487b7160e01b600052602260045260246000fd5b50919050565b83815260608101611fd46020830185611db5565b611fe16040830184611db5565b949350505050565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561201157600080fd5b5051919050565b808201808211156103c1576103c1611f57565b60408152600061203e6040830185611d50565b82810360208401526120508185611d50565b95945050505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a060808201819052600090612093908301846119f3565b979650505050505050565b6000602082840312156120b057600080fd5b81516119d3816119a0565b6001600160a01b0386811682528516602082015260a0604082018190526000906120e790830186611d50565b82810360608401526120f98186611d50565b9050828103608084015261210d81856119f3565b9897505050505050505056fea2646970667358221220c23d12d770d22d52899f40745c4d0534424fc4f69eb1274d0b0c80056f32b1d764736f6c634300081c0033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}];
// RwaShareToken 合约ABI
export const RwaShareTokenABI = [{
  "_format": "hh-sol-artifact-1",
  "contractName": "RwaShareToken",
  "sourceName": "contracts/RwaShareToken.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "allowance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientAllowance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSpender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50604051610bfd380380610bfd83398101604081905261002f91610125565b806040518060400160405280601081526020016f5257412041737365742053686172657360801b815250604051806040016040528060048152602001635257415360e01b815250816003908161008591906101f4565b50600461009282826101f4565b5050506001600160a01b0381166100c357604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b6100cc816100d3565b50506102b2565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60006020828403121561013757600080fd5b81516001600160a01b038116811461014e57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061017f57607f821691505b60208210810361019f57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156101ef57806000526020600020601f840160051c810160208510156101cc5750805b601f840160051c820191505b818110156101ec57600081556001016101d8565b50505b505050565b81516001600160401b0381111561020d5761020d610155565b6102218161021b845461016b565b846101a5565b6020601f821160018114610255576000831561023d5750848201515b600019600385901b1c1916600184901b1784556101ec565b600084815260208120601f198516915b828110156102855787850151825560209485019460019092019101610265565b50848210156102a35786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b61093c806102c16000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063715018a61161008c5780639dc29fac116100665780639dc29fac146101cd578063a9059cbb146101e0578063dd62ed3e146101f3578063f2fde38b1461022c57600080fd5b8063715018a6146101a25780638da5cb5b146101aa57806395d89b41146101c557600080fd5b806323b872dd116100c857806323b872dd14610142578063313ce5671461015557806340c10f191461016457806370a082311461017957600080fd5b806306fdde03146100ef578063095ea7b31461010d57806318160ddd14610130575b600080fd5b6100f761023f565b6040516101049190610785565b60405180910390f35b61012061011b3660046107ef565b6102d1565b6040519015158152602001610104565b6002545b604051908152602001610104565b610120610150366004610819565b6102eb565b60405160128152602001610104565b6101776101723660046107ef565b61030f565b005b610134610187366004610856565b6001600160a01b031660009081526020819052604090205490565b610177610325565b6005546040516001600160a01b039091168152602001610104565b6100f7610339565b6101776101db3660046107ef565b610348565b6101206101ee3660046107ef565b61035a565b610134610201366004610878565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61017761023a366004610856565b610368565b60606003805461024e906108ab565b80601f016020809104026020016040519081016040528092919081815260200182805461027a906108ab565b80156102c75780601f1061029c576101008083540402835291602001916102c7565b820191906000526020600020905b8154815290600101906020018083116102aa57829003601f168201915b5050505050905090565b6000336102df8185856103ab565b60019150505b92915050565b6000336102f98582856103bd565b61030485858561043c565b506001949350505050565b61031761049b565b61032182826104c8565b5050565b61032d61049b565b61033760006104fe565b565b60606004805461024e906108ab565b61035061049b565b6103218282610550565b6000336102df81858561043c565b61037061049b565b6001600160a01b03811661039f57604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b6103a8816104fe565b50565b6103b88383836001610586565b505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811015610436578181101561042757604051637dc7a0d960e11b81526001600160a01b03841660048201526024810182905260448101839052606401610396565b61043684848484036000610586565b50505050565b6001600160a01b03831661046657604051634b637e8f60e11b815260006004820152602401610396565b6001600160a01b0382166104905760405163ec442f0560e01b815260006004820152602401610396565b6103b883838361065b565b6005546001600160a01b031633146103375760405163118cdaa760e01b8152336004820152602401610396565b6001600160a01b0382166104f25760405163ec442f0560e01b815260006004820152602401610396565b6103216000838361065b565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b03821661057a57604051634b637e8f60e11b815260006004820152602401610396565b6103218260008361065b565b6001600160a01b0384166105b05760405163e602df0560e01b815260006004820152602401610396565b6001600160a01b0383166105da57604051634a1406b160e11b815260006004820152602401610396565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561043657826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161064d91815260200190565b60405180910390a350505050565b6001600160a01b03831661068657806002600082825461067b91906108e5565b909155506106f89050565b6001600160a01b038316600090815260208190526040902054818110156106d95760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610396565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661071457600280548290039055610733565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161077891815260200190565b60405180910390a3505050565b602081526000825180602084015260005b818110156107b35760208186018101516040868401015201610796565b506000604082850101526040601f19601f83011684010191505092915050565b80356001600160a01b03811681146107ea57600080fd5b919050565b6000806040838503121561080257600080fd5b61080b836107d3565b946020939093013593505050565b60008060006060848603121561082e57600080fd5b610837846107d3565b9250610845602085016107d3565b929592945050506040919091013590565b60006020828403121561086857600080fd5b610871826107d3565b9392505050565b6000806040838503121561088b57600080fd5b610894836107d3565b91506108a2602084016107d3565b90509250929050565b600181811c908216806108bf57607f821691505b6020821081036108df57634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156102e557634e487b7160e01b600052601160045260246000fdfea2646970667358221220214ec19a6d6f34d83dec5da1cf7df49adb14976b38be66b645d9de7c4d48683764736f6c634300081c0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063715018a61161008c5780639dc29fac116100665780639dc29fac146101cd578063a9059cbb146101e0578063dd62ed3e146101f3578063f2fde38b1461022c57600080fd5b8063715018a6146101a25780638da5cb5b146101aa57806395d89b41146101c557600080fd5b806323b872dd116100c857806323b872dd14610142578063313ce5671461015557806340c10f191461016457806370a082311461017957600080fd5b806306fdde03146100ef578063095ea7b31461010d57806318160ddd14610130575b600080fd5b6100f761023f565b6040516101049190610785565b60405180910390f35b61012061011b3660046107ef565b6102d1565b6040519015158152602001610104565b6002545b604051908152602001610104565b610120610150366004610819565b6102eb565b60405160128152602001610104565b6101776101723660046107ef565b61030f565b005b610134610187366004610856565b6001600160a01b031660009081526020819052604090205490565b610177610325565b6005546040516001600160a01b039091168152602001610104565b6100f7610339565b6101776101db3660046107ef565b610348565b6101206101ee3660046107ef565b61035a565b610134610201366004610878565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61017761023a366004610856565b610368565b60606003805461024e906108ab565b80601f016020809104026020016040519081016040528092919081815260200182805461027a906108ab565b80156102c75780601f1061029c576101008083540402835291602001916102c7565b820191906000526020600020905b8154815290600101906020018083116102aa57829003601f168201915b5050505050905090565b6000336102df8185856103ab565b60019150505b92915050565b6000336102f98582856103bd565b61030485858561043c565b506001949350505050565b61031761049b565b61032182826104c8565b5050565b61032d61049b565b61033760006104fe565b565b60606004805461024e906108ab565b61035061049b565b6103218282610550565b6000336102df81858561043c565b61037061049b565b6001600160a01b03811661039f57604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b6103a8816104fe565b50565b6103b88383836001610586565b505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811015610436578181101561042757604051637dc7a0d960e11b81526001600160a01b03841660048201526024810182905260448101839052606401610396565b61043684848484036000610586565b50505050565b6001600160a01b03831661046657604051634b637e8f60e11b815260006004820152602401610396565b6001600160a01b0382166104905760405163ec442f0560e01b815260006004820152602401610396565b6103b883838361065b565b6005546001600160a01b031633146103375760405163118cdaa760e01b8152336004820152602401610396565b6001600160a01b0382166104f25760405163ec442f0560e01b815260006004820152602401610396565b6103216000838361065b565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b03821661057a57604051634b637e8f60e11b815260006004820152602401610396565b6103218260008361065b565b6001600160a01b0384166105b05760405163e602df0560e01b815260006004820152602401610396565b6001600160a01b0383166105da57604051634a1406b160e11b815260006004820152602401610396565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561043657826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161064d91815260200190565b60405180910390a350505050565b6001600160a01b03831661068657806002600082825461067b91906108e5565b909155506106f89050565b6001600160a01b038316600090815260208190526040902054818110156106d95760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610396565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661071457600280548290039055610733565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161077891815260200190565b60405180910390a3505050565b602081526000825180602084015260005b818110156107b35760208186018101516040868401015201610796565b506000604082850101526040601f19601f83011684010191505092915050565b80356001600160a01b03811681146107ea57600080fd5b919050565b6000806040838503121561080257600080fd5b61080b836107d3565b946020939093013593505050565b60008060006060848603121561082e57600080fd5b610837846107d3565b9250610845602085016107d3565b929592945050506040919091013590565b60006020828403121561086857600080fd5b610871826107d3565b9392505050565b6000806040838503121561088b57600080fd5b610894836107d3565b91506108a2602084016107d3565b90509250929050565b600181811c908216806108bf57607f821691505b6020821081036108df57634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156102e557634e487b7160e01b600052601160045260246000fdfea2646970667358221220214ec19a6d6f34d83dec5da1cf7df49adb14976b38be66b645d9de7c4d48683764736f6c634300081c0033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}];
// RwaNftBank 合约ABI
export const RwaNftBankABI = [{
  "_format": "hh-sol-artifact-1",
  "contractName": "RwaNftBank",
  "sourceName": "contracts/RwaNftBank.sol",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "shareToken",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "SharesCollateralized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "shareToken",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "SharesWithdrawn",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "collateralBalances",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_shareToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "collateralizeShares",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_shareToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getCollateralBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_shareToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawShares",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x6080604052348015600f57600080fd5b503380603557604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b603c816041565b506091565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6106e3806100a06000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639b1129181161005b5780639b112918146100e5578063a92ec968146100f8578063b7d5820b1461010b578063f2fde38b1461011e57600080fd5b806339ecf9ba14610082578063715018a6146100c05780638da5cb5b146100ca575b600080fd5b6100ad6100903660046105d0565b600160209081526000928352604080842090915290825290205481565b6040519081526020015b60405180910390f35b6100c8610131565b005b6000546040516001600160a01b0390911681526020016100b7565b6100c86100f3366004610603565b610145565b6100c8610106366004610603565b6102d9565b6100ad6101193660046105d0565b6104cc565b6100c861012c36600461062d565b6104f9565b610139610537565b6101436000610564565b565b6000811161019a5760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f60448201526064015b60405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018290526000906001600160a01b038416906323b872dd906064016020604051808303816000875af11580156101f0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610214919061064f565b90508061025b5760405162461bcd60e51b8152602060048201526015602482015274151bdad95b881d1c985b9cd9995c8819985a5b1959605a1b6044820152606401610191565b6001600160a01b03831660009081526001602090815260408083203384529091528120805484929061028e908490610687565b909155505060405182815233906001600160a01b038516907f22e277f0878ec9e56a51c21fb507360d1891cd873f94ba7ca342a6733322e64c906020015b60405180910390a3505050565b600081116103295760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f6044820152606401610191565b6001600160a01b038216600090815260016020908152604080832033845290915290205481111561039c5760405162461bcd60e51b815260206004820152601f60248201527f496e73756666696369656e7420636f6c6c61746572616c2062616c616e6365006044820152606401610191565b6001600160a01b0382166000908152600160209081526040808320338452909152812080548392906103cf90849061069a565b909155505060405163a9059cbb60e01b8152336004820152602481018290526000906001600160a01b0384169063a9059cbb906044016020604051808303816000875af1158015610424573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610448919061064f565b90508061048f5760405162461bcd60e51b8152602060048201526015602482015274151bdad95b881d1c985b9cd9995c8819985a5b1959605a1b6044820152606401610191565b60405182815233906001600160a01b038516907f4810d2f105dcba10d740b4ac1d8fa8454dd37014b2051bace1edb1d903c440c4906020016102cc565b6001600160a01b038083166000908152600160209081526040808320938516835292905220545b92915050565b610501610537565b6001600160a01b03811661052b57604051631e4fbdf760e01b815260006004820152602401610191565b61053481610564565b50565b6000546001600160a01b031633146101435760405163118cdaa760e01b8152336004820152602401610191565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b03811681146105cb57600080fd5b919050565b600080604083850312156105e357600080fd5b6105ec836105b4565b91506105fa602084016105b4565b90509250929050565b6000806040838503121561061657600080fd5b61061f836105b4565b946020939093013593505050565b60006020828403121561063f57600080fd5b610648826105b4565b9392505050565b60006020828403121561066157600080fd5b8151801515811461064857600080fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156104f3576104f3610671565b818103818111156104f3576104f361067156fea26469706673582212202cb299519146ba6091f6832edc30e4c88d8ff5741238a0a1c74683a90eb415c964736f6c634300081c0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061007d5760003560e01c80639b1129181161005b5780639b112918146100e5578063a92ec968146100f8578063b7d5820b1461010b578063f2fde38b1461011e57600080fd5b806339ecf9ba14610082578063715018a6146100c05780638da5cb5b146100ca575b600080fd5b6100ad6100903660046105d0565b600160209081526000928352604080842090915290825290205481565b6040519081526020015b60405180910390f35b6100c8610131565b005b6000546040516001600160a01b0390911681526020016100b7565b6100c86100f3366004610603565b610145565b6100c8610106366004610603565b6102d9565b6100ad6101193660046105d0565b6104cc565b6100c861012c36600461062d565b6104f9565b610139610537565b6101436000610564565b565b6000811161019a5760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f60448201526064015b60405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018290526000906001600160a01b038416906323b872dd906064016020604051808303816000875af11580156101f0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610214919061064f565b90508061025b5760405162461bcd60e51b8152602060048201526015602482015274151bdad95b881d1c985b9cd9995c8819985a5b1959605a1b6044820152606401610191565b6001600160a01b03831660009081526001602090815260408083203384529091528120805484929061028e908490610687565b909155505060405182815233906001600160a01b038516907f22e277f0878ec9e56a51c21fb507360d1891cd873f94ba7ca342a6733322e64c906020015b60405180910390a3505050565b600081116103295760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f6044820152606401610191565b6001600160a01b038216600090815260016020908152604080832033845290915290205481111561039c5760405162461bcd60e51b815260206004820152601f60248201527f496e73756666696369656e7420636f6c6c61746572616c2062616c616e6365006044820152606401610191565b6001600160a01b0382166000908152600160209081526040808320338452909152812080548392906103cf90849061069a565b909155505060405163a9059cbb60e01b8152336004820152602481018290526000906001600160a01b0384169063a9059cbb906044016020604051808303816000875af1158015610424573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610448919061064f565b90508061048f5760405162461bcd60e51b8152602060048201526015602482015274151bdad95b881d1c985b9cd9995c8819985a5b1959605a1b6044820152606401610191565b60405182815233906001600160a01b038516907f4810d2f105dcba10d740b4ac1d8fa8454dd37014b2051bace1edb1d903c440c4906020016102cc565b6001600160a01b038083166000908152600160209081526040808320938516835292905220545b92915050565b610501610537565b6001600160a01b03811661052b57604051631e4fbdf760e01b815260006004820152602401610191565b61053481610564565b50565b6000546001600160a01b031633146101435760405163118cdaa760e01b8152336004820152602401610191565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b03811681146105cb57600080fd5b919050565b600080604083850312156105e357600080fd5b6105ec836105b4565b91506105fa602084016105b4565b90509250929050565b6000806040838503121561061657600080fd5b61061f836105b4565b946020939093013593505050565b60006020828403121561063f57600080fd5b610648826105b4565b9392505050565b60006020828403121561066157600080fd5b8151801515811461064857600080fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156104f3576104f3610671565b818103818111156104f3576104f361067156fea26469706673582212202cb299519146ba6091f6832edc30e4c88d8ff5741238a0a1c74683a90eb415c964736f6c634300081c0033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}];

// 部署地址（也可以放这里，方便统一调用）
export const contractAddresses = {
  RwaNft: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  RwaShareToken: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  RwaNftBank: "0x538D2755B5Fb9A4f7c5769bdcf5103E569D6E241"
};