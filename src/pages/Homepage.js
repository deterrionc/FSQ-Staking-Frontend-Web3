import { useState, useEffect, useRef } from "react";
// material
import {
  Box,
  Stack,
  Container,
  Typography,
  Button,
  InputBase,
  Grid,
} from "@mui/material";
import { styled } from "@mui/styles";
import FrogSlider from "components/FrogSlider";
import FrogFaq from "components/FrogFaq";
import { toast } from "react-toastify";
import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import { StakeContractAddress } from "contracts/address";
import { getTokenContract, getStakeContract } from "utils/contractHelpers";
import { TokenBalance } from "components/ConnectButton";
import { MetamaskErrorMessage } from "utils/MetamaskErrorMessage";

export default function Homepage() {
  const [stakedBalance, setStakedBalance] = useState(0);
  const [approved, setApproved] = useState(false);
  const [stakeMode, setStakeMode] = useState(true);
  const [amount, setAmount] = useState();

  const { library, account } = useEthers();
  const signer = library?.getSigner();
  const TokenContract = getTokenContract(signer);
  const StakeContract = getStakeContract(signer);
  const tokenBalance = TokenBalance();

  const handleApprove = async () => {
    try {
      const approvedResult = await TokenContract.approve(
        StakeContractAddress,
        ethers.constants.MaxUint256
      );
      console.log("approvedResult", approvedResult);
      // setApproved(true);
    } catch (error) {
      console.error("Error:", error);
      // toast.error(error.data.message);
      setApproved(false);
    }
  };

  const handleStake = async () => {
    try {
      const result = await StakeContract.stake(
        ethers.utils.parseUnits(amount, 4)
      );
      console.log("approvedResult", result);
      toast.success("You staked token successfully");
    } catch (error) {
      console.error("Error:", error);
      toast.error(MetamaskErrorMessage(error));
    }
  };

  const handleUnstake = async () => {
    try {
      const result = await StakeContract.unstake(
        ethers.utils.parseUnits(amount, 4)
      );
      console.log("approvedResult", result);
      toast.success("You unstaked token successfully");
    } catch (error) {
      console.error("Error:", error);
      toast.error(MetamaskErrorMessage(error));
    }
  };

  useEffect(() => {
    console.log("FIrst");
    const checkAllowance = async () => {
      try {
        const result = await TokenContract.allowance(
          account,
          StakeContractAddress
        );
        const allowedBalance = ethers.utils.formatUnits(result);
        if (allowedBalance > 0) {
          setApproved(true);
        } else {
          setApproved(false);
        }
      } catch (error) {
        console.error("Error:", error);
        setApproved(false);
      }
    };
    const checkStakedBalance = async () => {
      try {
        const result = await StakeContract.getStakingValue(account);
        console.log("staked", ethers.utils.formatUnits(result, 4));
        setStakedBalance(ethers.utils.formatUnits(result, 4));
      } catch (error) {
        console.error("Error:", error);
      }
    };
    if (account) {
      checkAllowance();
      checkStakedBalance();
    }
  }, [StakeContract, TokenContract, account]);

  return (
    <>
      <Stack>
        <Container maxWidth="md" sx={{ mt: 10 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={5}
            sx={{ mb: 10 }}
          >
            <Typography>
              If you do not Elon Cream tokens, you can buy them on Pancakeswap
            </Typography>
            <Button
              variant="contained"
              color="info"
              target="_blank"
              href="https://pancakeswap.finance/swap?outputCurrency=0xB566AFc04ED4b65BCC840ab585fa8023a3DB56CE"
            >
              Buy on Pancakeswap
            </Button>
          </Stack>

          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="flex-start"
            justifyContent="space-between"
            spacing={3}
          >
            <Stack
              sx={{
                bgcolor: "#161522",
                width: 1,
                px: 4,
                py: 2,
                borderRadius: 1,
              }}
              spacing={3}
            >
              <Stack
                direction="row"
                sx={{ bgcolor: "#202231", p: "2px", borderRadius: "10px" }}
                spacing={1}
              >
                <Button
                  fullWidth
                  sx={{
                    bgcolor: stakeMode ? "#161522" : "transparent",
                    color: "#e3e3e3",
                    fontSize: 16,
                    height: 52,
                  }}
                  onClick={() => setStakeMode(true)}
                >
                  Stake ELONCM
                </Button>
                <Button
                  fullWidth
                  sx={{
                    bgcolor: !stakeMode ? "#161522" : "transparent",
                    color: "#e3e3e3",
                    fontSize: 16,
                  }}
                  onClick={() => setStakeMode(false)}
                >
                  Unstake
                </Button>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h4">
                  {stakeMode ? "Stake ELONCM" : "Unstake ELONCM"}
                </Typography>
                {/* <Box>1 xELONCM = 1.2 ELONCM</Box> */}
              </Stack>

              <Stack
                alignItems="center"
                direction="row"
                sx={{ bgcolor: "#202231", p: 2, borderRadius: "10px" }}
              >
                <InputBase
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  fullWidth
                  sx={{ height: 28 }}
                  placeholder="0 ELONCM"
                />
                <Button variant="contained" sx={{ height: 28 }}>
                  Max
                </Button>
              </Stack>
              {!amount ? (
                <Button
                  disabled
                  fullWidth
                  sx={{
                    bgcolor: "#2e3348",
                    color: "white",
                    height: 52,
                    fontSize: 18,
                  }}
                >
                  Enter Amount
                </Button>
              ) : approved ? (
                <Button
                  fullWidth
                  sx={{
                    bgcolor: "#2e3348",
                    color: "white",
                    height: 52,
                    fontSize: 18,
                  }}
                  onClick={stakeMode ? handleStake : handleUnstake}
                >
                  {stakeMode ? "Stake" : "Unstake"}
                </Button>
              ) : (
                <Button
                  fullWidth
                  sx={{
                    bgcolor: "#2e3348",
                    color: "white",
                    height: 52,
                    fontSize: 18,
                  }}
                  onClick={handleApprove}
                >
                  Approve
                </Button>
              )}
            </Stack>
            <Stack
              sx={{
                bgcolor: "#161522",
                p: 4,
                borderRadius: 1,
                width: 420,
              }}
              spacing={5}
            >
              <Stack spacing={1}>
                <Typography fontSize={24}>Balance</Typography>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box
                    component="img"
                    src="/images/elon.png"
                    sx={{ width: 64, height: 64, borderRadius: "10px" }}
                  />
                  <Stack>
                    <Typography fontSize={20} fontWeight="bold">
                      {stakedBalance > 0 ? stakedBalance : "-"}
                    </Typography>
                    <Typography>xELONCM</Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Stack spacing={1}>
                <Typography fontSize={24}>Unstaked</Typography>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box
                    component="img"
                    src="/images/elon.png"
                    sx={{ width: 64, height: 64, borderRadius: "10px" }}
                  />
                  <Stack>
                    <Typography fontSize={20} fontWeight="bold">
                      {tokenBalance > 0 ? tokenBalance : "-"}
                    </Typography>
                    <Typography>ELONCM</Typography>
                  </Stack>
                </Stack>
              </Stack>
              {/* 
              <Button
                fullWidth
                sx={{ bgcolor: "#2e3348", color: "white", height: 52 }}
              >
                Your SushiBar Stats
              </Button> */}
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
