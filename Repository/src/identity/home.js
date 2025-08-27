// src/IdentityHome.js
import React, { useState, useEffect } from "react";
import {
  Box,
  Avatar,
  Typography,
  Grid,
  Container,
  Card,
  Divider,
  Button,
} from "@mui/material";
import Web3 from "web3";

// ===== Contract Config =====
const INFURA_URL = "https://sepolia.infura.io/v3/a0ce7655b01f4ab98d4dc9871989a324";

const IDENTITY_CONTRACT = {
  address: "0xFb7223a4E6c48cC570207499404A7f0e6f8CBDe1",
  abi: [
    { inputs: [], name: "getIpfsPhoto", outputs: [{ type: "string" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "getName", outputs: [{ type: "string" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "getCountryBorn", outputs: [{ type: "string" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "getCityBirthplace", outputs: [{ type: "string" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "getBirthYear", outputs: [{ type: "string" }], stateMutability: "view", type: "function" },
  ],
};

const TOKEN_CONTRACT = {
  address: "0xBdA9c0Cdc4fD021DafbB1C5d275B8E7642370aFD",
  abi: [
    { inputs: [], name: "name", outputs: [{ type: "string" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "symbol", outputs: [{ type: "string" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "paperPage", outputs: [{ type: "string" }], stateMutability: "view", type: "function" },
    { inputs: [{ name: "account", type: "address" }], name: "balanceOf", outputs: [{ type: "uint256" }], stateMutability: "view", type: "function" },
  ],
  owner: "0x28d21BeD99CAd3E0E5bff135a43F6Cc6E53FE1c8",
};

function IdentityHome() {
  const [isLoading, setIsLoading] = useState(true);
  const [identity, setIdentity] = useState({});
  const [token, setToken] = useState({});

  useEffect(() => {
    const loadBlockchainData = async () => {
      try {
        const web3 = new Web3(INFURA_URL);

        // Identity contract
        const idContract = new web3.eth.Contract(IDENTITY_CONTRACT.abi, IDENTITY_CONTRACT.address);
        const [ipfs, name, country, city, birthYear] = await Promise.all([
          idContract.methods.getIpfsPhoto().call(),
          idContract.methods.getName().call(),
          idContract.methods.getCountryBorn().call(),
          idContract.methods.getCityBirthplace().call(),
          idContract.methods.getBirthYear().call(),
        ]);
        setIdentity({ ipfs, name, country, city, birthYear });

        // Token contract
        const tokenContract = new web3.eth.Contract(TOKEN_CONTRACT.abi, TOKEN_CONTRACT.address);
        const [tokenName, symbol, paperPage, balance] = await Promise.all([
          tokenContract.methods.name().call(),
          tokenContract.methods.symbol().call(),
          tokenContract.methods.paperPage().call(),
          tokenContract.methods.balanceOf(TOKEN_CONTRACT.owner).call(),
        ]);
        setToken({ 
          name: tokenName, 
          symbol, 
          paperPage, 
          balance: web3.utils.fromWei(balance, "ether") 
        });

        setIsLoading(false);
      } catch (err) {
        console.error("Blockchain fetch error:", err);
      }
    };

    loadBlockchainData();
  }, []);

  if (isLoading) {
    return (
      <Box textAlign="center" mt={10}>
        <Typography variant="h6">Loading data...</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      {/* Identity Card */}
      <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3, textAlign: "center" }}>
        <Avatar
          src={identity.ipfs}
          alt={identity.name}
          sx={{ width: 150, height: 150, margin: "0 auto", border: "3px solid #1976d2" }}
        />
        <Typography variant="h5" fontWeight="bold" mt={2}>
          {identity.name}
        </Typography>

        <Grid container spacing={2} mt={2} justifyContent="center">
          {[
            { label: "Country Born", value: identity.country },
            { label: "City Birthplace", value: identity.city },
            { label: "Birth Year", value: identity.birthYear },
          ].map((item) => (
            <Grid item xs={12} sm={4} key={item.label}>
              <Typography fontWeight="bold">{item.label}</Typography>
              <Typography>{item.value}</Typography>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 3 }} />
        <Typography variant="body1" sx={{ fontStyle: "italic", color: "text.secondary" }}>
          I am Deep Tech Founder. Here is my Business Page, I rarely do business
          by lips since I have short memory. I always use paper to do business;
          in digital age, nothing is better than doing it via Crypto Smart
          Contract. I also have a page containing lawsuits when doing business
          with others, to know whether there is violation. Everything about
          business is transparent and public here.
        </Typography>

        <Box sx={{ width: { xs: "100%", sm: 370 }, mt: 3, mx: "auto" }}>
          <Button
            href={`https://sepolia.etherscan.io/address/${IDENTITY_CONTRACT.address}`}
            target="_blank"
            variant="contained"
            sx={{ bgcolor: "#000", color: "#fff", width: "100%", fontSize: 11, "&:hover": { bgcolor: "#333" } }}
          >
            {IDENTITY_CONTRACT.address}
          </Button>
        </Box>
      </Card>

      {/* Token Card */}
      <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3, textAlign: "center", mt: 4 }}>
        <Typography variant="h6" fontWeight="bold" fontSize="23px">Credentials Collectibles</Typography>
        <Typography variant="p" fontSize="11px"  marginTop="0px">*Credentials Collectibles applied to profile when doing business</Typography>

        <Grid container spacing={2} mt={2} justifyContent="center"  marginTop="36px">
          {[
            { label: "Credentials 1", value: token.name },
          ].map((item) => (
            <Grid item xs={12} sm={3} key={item.label}>
              <Typography fontWeight="bold">{item.label}</Typography>
              <Typography>{item.value}</Typography>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2} mt={2} justifyContent="center">
          {[
            { label: "Token Symbol", value: token.symbol },
            { label: "Paper Page", value: token.paperPage },
            { label: "Balance Owned", value: token.balance },
          ].map((item) => (
            <Grid item xs={12} sm={3} key={item.label}>
              <Typography fontWeight="bold">{item.label}</Typography>
              <Typography>{item.value}</Typography>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 2 }}>
          <Button
            href={`https://sepolia.etherscan.io/address/${TOKEN_CONTRACT.address}`}
            target="_blank"
            variant="contained"
            sx={{ bgcolor: "#000", color: "#fff", width: "100%", fontSize: 11, "&:hover": { bgcolor: "#333" } }}
          >
            {TOKEN_CONTRACT.address}
          </Button>
        </Box>
      </Card>
    </Container>
  );
}

export default IdentityHome;
