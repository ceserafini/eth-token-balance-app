/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TokenUSDT, TokenUSDTInterface } from "../TokenUSDT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526040518060400160405280600681526020017f54657468657200000000000000000000000000000000000000000000000000008152506000908051906020019061004f92919061013b565b506040518060400160405280600481526020017f55534454000000000000000000000000000000000000000000000000000000008152506001908051906020019061009b92919061013b565b50610df06002553480156100ae57600080fd5b50600254600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061023f565b828054610147906101de565b90600052602060002090601f01602090048101928261016957600085556101b0565b82601f1061018257805160ff19168380011785556101b0565b828001600101855582156101b0579182015b828111156101af578251825591602001919060010190610194565b5b5090506101bd91906101c1565b5090565b5b808211156101da5760008160009055506001016101c2565b5090565b600060028204905060018216806101f657607f821691505b6020821081141561020a57610209610210565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6107b28061024e6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806306fdde031461006757806318160ddd1461008557806370a08231146100a35780638da5cb5b146100d357806395d89b41146100f1578063a9059cbb1461010f575b600080fd5b61006f61012b565b60405161007c9190610512565b60405180910390f35b61008d6101b9565b60405161009a9190610554565b60405180910390f35b6100bd60048036038101906100b89190610418565b6101bf565b6040516100ca9190610554565b60405180910390f35b6100db610208565b6040516100e891906104f7565b60405180910390f35b6100f961022e565b6040516101069190610512565b60405180910390f35b61012960048036038101906101249190610441565b6102bc565b005b6000805461013890610684565b80601f016020809104026020016040519081016040528092919081815260200182805461016490610684565b80156101b15780601f10610186576101008083540402835291602001916101b1565b820191906000526020600020905b81548152906001019060200180831161019457829003601f168201915b505050505081565b60025481565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6001805461023b90610684565b80601f016020809104026020016040519081016040528092919081815260200182805461026790610684565b80156102b45780601f10610289576101008083540402835291602001916102b4565b820191906000526020600020905b81548152906001019060200180831161029757829003601f168201915b505050505081565b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561033e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033590610534565b60405180910390fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461038d91906105e1565b9250508190555080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103e3919061058b565b925050819055505050565b6000813590506103fd8161074e565b92915050565b60008135905061041281610765565b92915050565b60006020828403121561042a57600080fd5b6000610438848285016103ee565b91505092915050565b6000806040838503121561045457600080fd5b6000610462858286016103ee565b925050602061047385828601610403565b9150509250929050565b61048681610615565b82525050565b60006104978261056f565b6104a1818561057a565b93506104b1818560208601610651565b6104ba81610714565b840191505092915050565b60006104d260118361057a565b91506104dd82610725565b602082019050919050565b6104f181610647565b82525050565b600060208201905061050c600083018461047d565b92915050565b6000602082019050818103600083015261052c818461048c565b905092915050565b6000602082019050818103600083015261054d816104c5565b9050919050565b600060208201905061056960008301846104e8565b92915050565b600081519050919050565b600082825260208201905092915050565b600061059682610647565b91506105a183610647565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156105d6576105d56106b6565b5b828201905092915050565b60006105ec82610647565b91506105f783610647565b92508282101561060a576106096106b6565b5b828203905092915050565b600061062082610627565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101561066f578082015181840152602081019050610654565b8381111561067e576000848401525b50505050565b6000600282049050600182168061069c57607f821691505b602082108114156106b0576106af6106e5565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f4e6f7420656e6f75676820746f6b656e73000000000000000000000000000000600082015250565b61075781610615565b811461076257600080fd5b50565b61076e81610647565b811461077957600080fd5b5056fea264697066735822122069fa76479138ab292982c533a6e6d5527aacf5a93058d75e1ba0ddc051664ad964736f6c63430008040033";

type TokenUSDTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenUSDTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenUSDT__factory extends ContractFactory {
  constructor(...args: TokenUSDTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TokenUSDT";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TokenUSDT> {
    return super.deploy(overrides || {}) as Promise<TokenUSDT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TokenUSDT {
    return super.attach(address) as TokenUSDT;
  }
  connect(signer: Signer): TokenUSDT__factory {
    return super.connect(signer) as TokenUSDT__factory;
  }
  static readonly contractName: "TokenUSDT";
  public readonly contractName: "TokenUSDT";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenUSDTInterface {
    return new utils.Interface(_abi) as TokenUSDTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenUSDT {
    return new Contract(address, _abi, signerOrProvider) as TokenUSDT;
  }
}
