import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0xf1dbd001c0b06cba5e59aa1faf8ee8aa44d0a8d4"; // Sepolia contract
const ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_c1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_c2",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_c3",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_c4",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_c5",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_signerA",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_nameA",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_birthplaceA",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_signerB",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_nameB",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_birthplaceB",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "signer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "enum LegalContract.SignState",
				"name": "newState",
				"type": "uint8"
			}
		],
		"name": "Signed",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "content1",
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
		"name": "content2",
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
		"name": "content3",
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
		"name": "content4",
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
		"name": "content5",
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
		"name": "getAllContents",
		"outputs": [
			{
				"internalType": "string[5]",
				"name": "",
				"type": "string[5]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getSignerAInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
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
		"name": "getSignerBInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
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
		"name": "getState",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hasSigned",
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
		"inputs": [],
		"name": "signContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "signerA",
		"outputs": [
			{
				"internalType": "address",
				"name": "wallet",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "birthplace",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "signerB",
		"outputs": [
			{
				"internalType": "address",
				"name": "wallet",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "birthplace",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "state",
		"outputs": [
			{
				"internalType": "enum LegalContract.SignState",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const LegalContract = () => {
  const [contents, setContents] = useState([]);
  const [state, setState] = useState("Loading...");
  const [account, setAccount] = useState(null);
  const [signers, setSigners] = useState({ signerA: null, signerB: null });
  const [isSigning, setIsSigning] = useState(false);

  // Connect MetaMask
  const connectWallet = async () => {
    if (!window.ethereum) return alert("Please install MetaMask!");
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    if (chainId !== "0xaa36a7") {
      try {
        await window.ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId: "0xaa36a7" }] });
      } catch {
        alert("Please switch your MetaMask network to Sepolia");
        return;
      }
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    setAccount((await signer.getAddress()).toLowerCase());
  };

  // Fetch contract data
  const fetchContractData = async () => {
    if (!window.ethereum) return;
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

    try {
      const allContents = await contract.getAllContents();
      setContents(allContents);

      const currentState = await contract.getState();
      setState(currentState);

      const signerAInfo = await contract.signerA();
      const signerBInfo = await contract.signerB();

      setSigners({
        signerA: {
          wallet: signerAInfo.wallet.toLowerCase(),
          name: signerAInfo.name,
          birthplace: signerAInfo.birthplace
        },
        signerB: {
          wallet: signerBInfo.wallet.toLowerCase(),
          name: signerBInfo.name,
          birthplace: signerBInfo.birthplace
        }
      });
    } catch (err) {
      console.error("Error fetching contract data:", err);
    }
  };

  // Sign contract
  const signContract = async () => {
    if (!window.ethereum || !account) return;
    setIsSigning(true);

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const signerAddress = (await signer.getAddress()).toLowerCase();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

      if (signerAddress !== signers.signerA.wallet && signerAddress !== signers.signerB.wallet) {
        alert("This wallet is not authorized to sign");
        setIsSigning(false);
        return;
      }

      const tx = await contract.signContract();
      await tx.wait();

      const newState = await contract.getState();
      setState(newState);
    } catch (err) {
      console.error("Signing error:", err);
    }

    setIsSigning(false);
  };

  useEffect(() => {
    fetchContractData();
    const interval = setInterval(fetchContractData, 10000);
    return () => clearInterval(interval);
  }, [account]);

  return (
  <div
    style={{
      maxWidth: "900px",
      margin: "0 auto",
      padding: "0 20px",
      fontFamily: "Arial",
    }}
  >
    <h2 style={{ textAlign: "center" }}>PERJANJIAN SUPLAI PASIR BESI</h2>
    <p style={{ textAlign: "center" }}>Nomor: I/4A/2025</p>

    <p>
      Pada hari ini, 25 Desember 1998, bertempat di Wakasobala, kami yang
      bertanda tangan di bawah ini:
    </p>

    {/* Pihak Pertama */}
    <div style={{ paddingLeft: "10px", lineHeight: "1.4" }}>
      <p>
        <strong>1. Pihak Pertama</strong>
      </p>
      <p>
        <strong>Nama:</strong> {signers.signerA?.name}
      </p>
      <p>
        <strong>Wallet Address:</strong> {signers.signerA?.wallet}
      </p>
      <p>
        <strong>Alamat:</strong> Dricto Street 15 {signers.signerA?.birthplace}
      </p>
      <p>
        <strong>Keperluan:</strong> Membangun Rumah
      </p>
      <p>
        Selanjutnya disebut <strong>“Pihak Pertama”</strong>.
      </p>
    </div>

    {/* Pihak Kedua */}
    <div style={{ paddingLeft: "10px", lineHeight: "1.4" }}>
      <p>
        <strong>2. Pihak Kedua</strong>
      </p>
      <p>
        <strong>Nama:</strong> {signers.signerB?.name}
      </p>
      <p>
        <strong>Wallet Address:</strong> {signers.signerB?.wallet}
      </p>
      <p>
        <strong>Alamat:</strong> Metrapata Street 45{" "}
        {signers.signerB?.birthplace}
      </p>
      <p>Pekerjaan: Penambang Pasir Besi</p>
      <p>
        Selanjutnya disebut <strong>“Pihak Kedua”</strong>.
      </p>
    </div>

    <p style={{ paddingTop: "20px" }}>
      <strong>
        Kedua belah pihak sepakat untuk mengikatkan diri dalam Perjanjian Suplai
        Pasir Besi dengan ketentuan sebagai berikut:
      </strong>
    </p>

    {/* Pasal Sections */}
    <div style={{ paddingTop: "5px", lineHeight: "1.6" }}>
      <h3>Pasal 1</h3>
      <h4>Obyek Perjanjian</h4>
      <p>{contents[0]}</p>
    </div>

    <div style={{ paddingTop: "5px", lineHeight: "1.6" }}>
      <h3>Pasal 2</h3>
      <h4>Harga dan Cara Pembayaran</h4>
      <p>{contents[1]}</p>
    </div>

    <div style={{ paddingTop: "5px", lineHeight: "1.6" }}>
      <h3>Pasal 3</h3>
      <h4>Jadwal Pengiriman</h4>
      <p>1. {contents[2]}</p>
      <p>
        2. Pihak Kedua bertanggung jawab atas pengangkutan hingga lokasi proyek,
        kecuali disepakati lain.
      </p>
    </div>

    <div style={{ paddingTop: "10px", lineHeight: "1.6" }}>
      <h3>Pasal 4</h3>
      <h4>Kewajiban dan Tanggung Jawab</h4>
      <p>1. Pihak Kedua:</p>
      <ul>
        <li>Menyediakan pasir besi sesuai kualitas dan jumlah yang disepakati.</li>
        <li>Menjamin bahwa pasir besi tidak tercemar atau bercampur.</li>
        <li>Mematuhi aturan keselamatan kerja selama proses pengangkutan.</li>
      </ul>

      <p>2. Pihak Pertama:</p>
      <ul>
        <li>Membayar sesuai harga dan waktu yang telah disepakati.</li>
        <li>Menerima pasir besi sesuai jadwal yang ditentukan.</li>
      </ul>
    </div>

    <div style={{ paddingTop: "10px", lineHeight: "1.6" }}>
      <h3>Pasal 5</h3>
      <h4>Force Majeure</h4>
      <p>{contents[3]}</p>
    </div>

    <div style={{ paddingTop: "10px", lineHeight: "1.6" }}>
      <h3>Pasal 6</h3>
      <h4>Penyelesaian Sengketa</h4>
      <p>{contents[4]}</p>
    </div>

    <div style={{ paddingTop: "10px", lineHeight: "1.6" }}>
      <h3>Pasal 7</h3>
      <h4>Lain-Lain</h4>
      <ul>
        <li>
          Perjanjian ini berlaku sejak tanggal ditandatangani oleh Wallet
          Address kedua belah pihak.
        </li>
        <li>
          Perubahan perjanjian harus disepakati secara tertulis oleh kedua belah
          pihak lalu dipublish sebagai Smart Contract yang ditandatangani oleh
          Wallet Address kedua belah pihak.
        </li>
      </ul>
    </div>

    {/* State */}
    <div style={{ marginTop: "20px" }}>
      <strong>State:</strong> {state}
    </div>

    {/* Buttons */}
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <button onClick={connectWallet}>
        {account ? `Connected: ${account}` : "Connect MetaMask"}
      </button>
      <button onClick={signContract} disabled={isSigning || state === "Signed"}>
        {isSigning ? "Signing..." : "Sign Contract"}
      </button>
    </div>

    {/* Signers */}
    <div style={{ marginTop: "15px" }}>
      <strong>Designated Signers:</strong>
      <div>
        A: {signers.signerA?.name} ({signers.signerA?.wallet}) –{" "}
        {signers.signerA?.birthplace}
      </div>
      <div>
        B: {signers.signerB?.name} ({signers.signerB?.wallet}) –{" "}
        {signers.signerB?.birthplace}
      </div>
    </div>

	{/* Contract */}
    <div style={{ marginTop: "15px" }}>
      <strong>Smart Contract Issued:</strong>
      <div>
        0xf1dbd001c0b06cba5e59aa1faf8ee8aa44d0a8d4
      </div>
    </div>
  </div>
);
};

export default LegalContract;
