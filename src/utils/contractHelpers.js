import { ethers } from "ethers";
import TokenAbi from "contracts/TokenAbi.json";
import StakeContractAbi from "contracts/StakeContractAbi.json";
import { TokenAddress, StakeContractAddress } from "contracts/address.js";

// const RPC_URL = getRpcUrl()
// const simpleRpcProvider = new ethers.providers.JsonRpcProvider(RPC_URL)

const getContract = (abi, address, signer) => {
  const signerOrProvider = signer;
  return new ethers.Contract(address, abi, signerOrProvider);
};

export const getTokenContract = (signer) => {
  return getContract(TokenAbi, TokenAddress, signer);
};

export const getStakeContract = (signer) => {
  return getContract(StakeContractAbi, StakeContractAddress, signer);
};
