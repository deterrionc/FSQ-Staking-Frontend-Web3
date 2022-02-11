// material
import { useState } from "react";
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  Stack,
  Link,
} from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { varFadeInUp, MotionInView } from "components/animate";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// ----------------------------------------------------------------------

const FIRST_FAQS = [
  {
    title: "1) SSPELL TREASURY",
    description: [
      "All $FTM raised from the sale of the NFTs will be converted into $sSpell and then they will be sent to the smart contract that will freeze these sSpell for 1 year.",
      "These sSpells will continue to generate at least 25% APY in $Spell.",
      "After one year, those who own 69420 Frogs’s NFTs can claim sSpell in the contract, in proportional amount (Reclaimable Spell amount for each NFT = (Total $sSpell in the smart contract / N° of NFTs owned).)",
    ],
  },
  {
    title: "2) CLAIM ROYALTY",
    description: [
      "69% of the 6,9% Royalty on the 1° and 2° market are claimable by the holders of the NFTs (not the minters).",
      "This incentive will be available in late December with the launch of the dedicated Marketplace.",
      "The purchase and sale of NFTs generates 6.9% royalties that can be claimed in proportion to the number of NFTS owned (Reclaimable $FTM amount for each Nfts = (69% of $FTM Royalty / N° of NFTs owned).)",
    ],
  },
];
// {
//   title: "3) $WAGME AIRDROP",
//   description: [
//     "All Minters of 69420 Frogs's NFTs will receive an airdrop of WAG ME TO THE SUN token ($ WAGME). Each minting entitles you to $ 69420 WAGME.",
//     "Total tokens in circulation: 6.9 Billions",
//     "Token utility: governance in Frog Nation DAO",
//   ],
// },
const SECOND_FAQS = [
  {
    title: "4) ACTION DAO WHITELIST",
    description: [
      "The original minters will participate in the pre-sale auction for the bootstrap of the Frog Nation DAO Treasury. For more information, download the roadmap at frognationdao.com",
    ],
  },
  {
    title: "What chains are supported?",
    description: ["Fantom."],
  },
  {
    title: "CLAIM ROYALTY",
    description: [
      "The team is ready to create the Marketplace, where it will be possible to sell and buy the NFTs and also claim the accrued royalities, and after a year also claim the Spells in the treasury. The Marketplace is scheduled to launch in mid-January.",
    ],
  },
];

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  marginBottom: "15px",
  background: "transparent",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "12px",
  "&:hover": { border: "1px solid yellow" },
  // "&:not(:last-child)": {
  //   borderBottom: 0,
  // },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <KeyboardArrowDownIcon sx={{ fontSize: "2rem", color: "white" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  borderRadius: "12px",
  height: 85,
  paddingLeft: "55px",
  paddingRight: "30px",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  margin: "0px 55px",
  padding: "28px 0px",
  borderTop: "1px solid rgba(255, 255, 255, 0.25)",
}));
// ----------------------------------------------------------------------

export default function FrogFaq() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box>
      {FIRST_FAQS.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary>
            <Typography fontFamily="Hobeaux" fontSize={20} color="#b3cd57">
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {item.description.length > 1 ? (
              <ol style={{ color: "#96dbfa" }}>
                {item.description.map((text) => (
                  <li>
                    <Typography fontSize={16} color="#96dbfa">
                      {text}
                    </Typography>
                  </li>
                ))}
              </ol>
            ) : (
              <Typography fontSize={16} color="#96dbfa">
                {item.description}
              </Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}

      <Accordion
        expanded={expanded === `panel2`}
        onChange={handleChange(`panel2`)}
      >
        <AccordionSummary>
          <Typography fontFamily="Hobeaux" fontSize={20} color="#b3cd57">
            3) $WAGME AIRDROP
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ol style={{ color: "#96dbfa" }}>
            <li>
              <Typography fontSize={16} color="#96dbfa">
                All Minters of 69420 Frogs's NFTs will receive an airdrop of WAG
                ME TO THE SUN token ($ WAGME). Each minting entitles you to $
                69420 WAGME.
              </Typography>
            </li>
            <li>
              <Typography fontSize={16} color="#96dbfa">
                Total tokens in circulation: 6.9 Billions
              </Typography>
            </li>
            <li>
              <Typography fontSize={16} color="#96dbfa">
                Token utility: Governance in Frog Nation DAO, Staking yield and
                WUSD Minting (soon tm), for more visit{" "}
                <Typography
                  component={Link}
                  target="_blank"
                  href="https://medium.com/@FrogNationDAO/whats-the-utility-of-wagme-token-8c8e323c130"
                >
                  WagMe Tokenomics
                </Typography>
              </Typography>
            </li>
          </ol>
        </AccordionDetails>
      </Accordion>

      {SECOND_FAQS.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index + 3}`}
          onChange={handleChange(`panel${index + 3}`)}
        >
          <AccordionSummary>
            <Typography fontFamily="Hobeaux" fontSize={20} color="#b3cd57">
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {item.description.length > 1 ? (
              <ol style={{ color: "#96dbfa" }}>
                {item.description.map((text) => (
                  <li>
                    <Typography fontSize={16} color="#96dbfa">
                      {text}
                    </Typography>
                  </li>
                ))}
              </ol>
            ) : (
              <Typography fontSize={16} color="#96dbfa">
                {item.description}
              </Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
