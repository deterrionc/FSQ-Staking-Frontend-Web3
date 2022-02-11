import { Button } from "@mui/material";
import { useEthers, useEtherBalance, useTokenBalance } from "@usedapp/core";
import {
  TokenAddress,
} from "contracts/address";
import { ethers } from "ethers";

export function TokenBalance() {
  const { account } = useEthers();
  const tokenBalanceBigNumber = useTokenBalance(TokenAddress, account);
  const tokenBalance =
    tokenBalanceBigNumber && ethers.utils.formatUnits(tokenBalanceBigNumber, 4);
  return tokenBalance;
}

export default function Logo() {
  const { activateBrowserWallet, deactivate, account } = useEthers();
  return (
    <>
      {account ? (
        <Button
          sx={{
            border: "1px solid #333",
            px: 2,
            py: 1,
            fontSize: 14,
            color: "#939393",
          }}
          onClick={deactivate}
        >
          {`${account.slice(0, 6)}...${account.slice(-6)}`}
        </Button>
      ) : (
        <Button
          sx={{
            border: "1px solid #333",
            px: 2,
            py: 1,
            fontSize: 14,
            color: "#939393",
          }}
          onClick={activateBrowserWallet}
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
}
