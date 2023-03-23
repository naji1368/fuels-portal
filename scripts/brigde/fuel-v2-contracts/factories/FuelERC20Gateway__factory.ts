/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { FuelERC20Gateway } from "../FuelERC20Gateway";

export class FuelERC20Gateway__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FuelERC20Gateway> {
    return super.deploy(overrides || {}) as Promise<FuelERC20Gateway>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FuelERC20Gateway {
    return super.attach(address) as FuelERC20Gateway;
  }
  connect(signer: Signer): FuelERC20Gateway__factory {
    return super.connect(signer) as FuelERC20Gateway__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FuelERC20Gateway {
    return new Contract(address, _abi, signerOrProvider) as FuelERC20Gateway;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "to",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "tokenId",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "fuelTokenId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenId",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "finalizeWithdrawal",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "fuelMessagePortal",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IFuelMessagePortal",
        name: "fuelMessagePortal",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "fuelTokenId",
        type: "bytes32",
      },
    ],
    name: "tokensDeposited",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a0604052306080523480156200001557600080fd5b506200002062000026565b620000e8565b600054610100900460ff1615620000935760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff9081161015620000e6576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6080516125a162000120600039600081816105a50152818161063b015281816108e0015281816109760152610aa101526125a16000f3fe6080604052600436106101445760003560e01c806352d1902d116100c0578063a217fddf11610074578063c4d66de811610059578063c4d66de8146103b8578063d547741f146103d8578063e63ab1e9146103f857600080fd5b8063a217fddf14610352578063ae04ec401461036757600080fd5b80635c975abb116100a55780635c975abb146102d25780638456cb59146102ea57806391d14854146102ff57600080fd5b806352d1902d146102aa57806353ef1461146102bf57600080fd5b80633659cfe6116101175780633f4ba83a116100fc5780633f4ba83a146102315780634f1ef286146102465780635176a43d1461025957600080fd5b80633659cfe6146101fe5780633ab09beb1461021e57600080fd5b806301ffc9a714610149578063248a9ca31461017e5780632f2ff15d146101bc57806336568abe146101de575b600080fd5b34801561015557600080fd5b50610169610164366004612082565b61042c565b60405190151581526020015b60405180910390f35b34801561018a57600080fd5b506101ae6101993660046120c4565b600090815260c8602052604090206001015490565b604051908152602001610175565b3480156101c857600080fd5b506101dc6101d73660046120ff565b6104c5565b005b3480156101ea57600080fd5b506101dc6101f93660046120ff565b6104ef565b34801561020a57600080fd5b506101dc61021936600461212f565b61058d565b6101dc61022c36600461214c565b61075f565b34801561023d57600080fd5b506101dc6108b5565b6101dc6102543660046121b8565b6108c8565b34801561026557600080fd5b5060005462010000900473ffffffffffffffffffffffffffffffffffffffff1660405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610175565b3480156102b657600080fd5b506101ae610a87565b6101dc6102cd36600461227c565b610b59565b3480156102de57600080fd5b5060645460ff16610169565b3480156102f657600080fd5b506101dc610cae565b34801561030b57600080fd5b5061016961031a3660046120ff565b600091825260c86020908152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b34801561035e57600080fd5b506101ae600081565b34801561037357600080fd5b506101ae6103823660046122bd565b73ffffffffffffffffffffffffffffffffffffffff91909116600090815261015e60209081526040808320938352929052205490565b3480156103c457600080fd5b506101dc6103d336600461212f565b610ce0565b3480156103e457600080fd5b506101dc6103f33660046120ff565b610e88565b34801561040457600080fd5b506101ae7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b0000000000000000000000000000000000000000000000000000000014806104bf57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b600082815260c860205260409020600101546104e081610ead565b6104ea8383610eb7565b505050565b73ffffffffffffffffffffffffffffffffffffffff8116331461057f5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6105898282610f8d565b5050565b3073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614156106395760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401610576565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166106ae7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16146107375760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610576565b6107408161102a565b6040805160008082526020820190925261075c91839190611035565b50565b6107676111f1565b600081116107b75760405162461bcd60e51b815260206004820152601360248201527f43616e6e6f74206465706f736974207a65726f000000000000000000000000006044820152606401610576565b6107d973ffffffffffffffffffffffffffffffffffffffff8416333084611246565b73ffffffffffffffffffffffffffffffffffffffff8316600090815261015e60209081526040808320858452909152902054610816908290612318565b73ffffffffffffffffffffffffffffffffffffffff8416600081815261015e602090815260408083208784528252808320949094558351908101869052928301919091523360608301526080820186905260a082018390529060c00160408051601f1981840301815291905290506108ae7fc453f2ed45abb180e0a17aa88e78941eb8169c5f949ee218b45afcb0cfd2c0a882611304565b5050505050565b60006108c081610ead565b61075c611397565b3073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614156109745760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401610576565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166109e97f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610a725760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610576565b610a7b8261102a565b61058982826001611035565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610b345760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610576565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610b616111f1565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff163314610bce5760405162461bcd60e51b815260206004820152601860248201527f43616c6c6572206973206e6f742074686520706f7274616c00000000000000006044820152606401610576565b60008111610c1e5760405162461bcd60e51b815260206004820152601460248201527f43616e6e6f74207769746864726177207a65726f0000000000000000000000006044820152606401610576565b6000610c286113f6565b73ffffffffffffffffffffffffffffffffffffffff8416600090815261015e60209081526040808320848452909152902054909150610c68908390612330565b73ffffffffffffffffffffffffffffffffffffffff8416600081815261015e60209081526040808320868452909152902091909155610ca890858461149c565b50505050565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a610cd881610ead565b61075c6114f2565b600054610100900460ff1615808015610d005750600054600160ff909116105b80610d1a5750303b158015610d1a575060005460ff166001145b610d8c5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610576565b6000805460ff191660011790558015610dcc57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b610dd58261152f565b610ddd6115b5565b610de561163a565b610ded61163a565b610df8600033610eb7565b610e227f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610eb7565b801561058957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b600082815260c86020526040902060010154610ea381610ead565b6104ea8383610f8d565b61075c81336116b7565b600082815260c86020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff1661058957600082815260c86020908152604080832073ffffffffffffffffffffffffffffffffffffffff851684529091529020805460ff19166001179055610f2f3390565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600082815260c86020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff161561058957600082815260c86020908152604080832073ffffffffffffffffffffffffffffffffffffffff85168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600061058981610ead565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615611068576104ea83611739565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156110ae57600080fd5b505afa9250505080156110de575060408051601f3d908101601f191682019092526110db91810190612347565b60015b6111505760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610576565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc81146111e55760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610576565b506104ea838383611829565b60645460ff16156112445760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610576565b565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610ca89085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261184e565b6000546040517f23c640e70000000000000000000000000000000000000000000000000000000081526201000090910473ffffffffffffffffffffffffffffffffffffffff16906323c640e79061136190859085906004016123b8565b600060405180830381600087803b15801561137b57600080fd5b505af115801561138f573d6000803e3d6000fd5b505050505050565b61139f611940565b6064805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b60008060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d67bdd256040518163ffffffff1660e01b815260040160206040518083038186803b15801561145f57600080fd5b505afa158015611473573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114979190612347565b905090565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526104ea9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016112a0565b6114fa6111f1565b6064805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586113cc3390565b600054610100900460ff166115ac5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610576565b61075c81611992565b600054610100900460ff166116325760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610576565b611244611a5c565b600054610100900460ff166112445760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610576565b600082815260c86020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16610589576116f781611ae5565b611702836020611b04565b6040516020016117139291906123d1565b60408051601f198184030181529082905262461bcd60e51b825261057691600401612452565b73ffffffffffffffffffffffffffffffffffffffff81163b6117c35760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610576565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b61183283611d34565b60008251118061183f5750805b156104ea57610ca88383611d81565b60006118b0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611ea69092919063ffffffff16565b8051909150156104ea57808060200190518101906118ce9190612465565b6104ea5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610576565b60645460ff166112445760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610576565b600054610100900460ff16611a0f5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610576565b6000805473ffffffffffffffffffffffffffffffffffffffff90921662010000027fffffffffffffffffffff0000000000000000000000000000000000000000ffff909216919091179055565b600054610100900460ff16611ad95760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610576565b6064805460ff19169055565b60606104bf73ffffffffffffffffffffffffffffffffffffffff831660145b60606000611b13836002612487565b611b1e906002612318565b67ffffffffffffffff811115611b3657611b36612189565b6040519080825280601f01601f191660200182016040528015611b60576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611b9757611b976124c4565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611bfa57611bfa6124c4565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000611c36846002612487565b611c41906001612318565b90505b6001811115611cde577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611c8257611c826124c4565b1a60f81b828281518110611c9857611c986124c4565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c93611cd7816124f3565b9050611c44565b508315611d2d5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610576565b9392505050565b611d3d81611739565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606073ffffffffffffffffffffffffffffffffffffffff83163b611e0d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401610576565b6000808473ffffffffffffffffffffffffffffffffffffffff1684604051611e359190612528565b600060405180830381855af49150503d8060008114611e70576040519150601f19603f3d011682016040523d82523d6000602084013e611e75565b606091505b5091509150611e9d828260405180606001604052806027815260200161254560279139611ebd565b95945050505050565b6060611eb58484600085611ed6565b949350505050565b60608315611ecc575081611d2d565b611d2d8383611fd5565b606082471015611f4e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610576565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f779190612528565b60006040518083038185875af1925050503d8060008114611fb4576040519150601f19603f3d011682016040523d82523d6000602084013e611fb9565b606091505b5091509150611fca87838387611fff565b979650505050505050565b815115611fe55781518083602001fd5b8060405162461bcd60e51b81526004016105769190612452565b606083156120785782516120715773ffffffffffffffffffffffffffffffffffffffff85163b6120715760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610576565b5081611eb5565b611eb58383611fd5565b60006020828403121561209457600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114611d2d57600080fd5b6000602082840312156120d657600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff8116811461075c57600080fd5b6000806040838503121561211257600080fd5b823591506020830135612124816120dd565b809150509250929050565b60006020828403121561214157600080fd5b8135611d2d816120dd565b6000806000806080858703121561216257600080fd5b843593506020850135612174816120dd565b93969395505050506040820135916060013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080604083850312156121cb57600080fd5b82356121d6816120dd565b9150602083013567ffffffffffffffff808211156121f357600080fd5b818501915085601f83011261220757600080fd5b81358181111561221957612219612189565b604051601f8201601f19908116603f0116810190838211818310171561224157612241612189565b8160405282815288602084870101111561225a57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60008060006060848603121561229157600080fd5b833561229c816120dd565b925060208401356122ac816120dd565b929592945050506040919091013590565b600080604083850312156122d057600080fd5b82356122db816120dd565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000821982111561232b5761232b6122e9565b500190565b600082821015612342576123426122e9565b500390565b60006020828403121561235957600080fd5b5051919050565b60005b8381101561237b578181015183820152602001612363565b83811115610ca85750506000910152565b600081518084526123a4816020860160208601612360565b601f01601f19169290920160200192915050565b828152604060208201526000611eb5604083018461238c565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351612409816017850160208801612360565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351612446816028840160208801612360565b01602801949350505050565b602081526000611d2d602083018461238c565b60006020828403121561247757600080fd5b81518015158114611d2d57600080fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156124bf576124bf6122e9565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081612502576125026122e9565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b6000825161253a818460208701612360565b919091019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220374f0a85fe51f4003ad66c793494f2d72087c2a4f702734cbc33aa75782aed2964736f6c63430008090033";
