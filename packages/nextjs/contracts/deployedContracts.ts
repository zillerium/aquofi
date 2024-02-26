/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  80001: {
    RWAContract: {
      address: "0x0581cC464B98615C2efD44e9dd1927bFF69594a0",
      abi: [
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
              internalType: "string",
              name: "rwaDesc",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "rwaPriceDate",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "rwaCurrency",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "rwaId",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "valuation",
              type: "uint256",
            },
          ],
          name: "RWADataSubmitted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "signer",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "status",
              type: "bool",
            },
          ],
          name: "SignerStatusChanged",
          type: "event",
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
          inputs: [
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
          ],
          name: "setOwner",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_signer",
              type: "address",
            },
            {
              internalType: "bool",
              name: "_status",
              type: "bool",
            },
          ],
          name: "setSigner",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "signers",
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
              internalType: "string",
              name: "_rwaDesc",
              type: "string",
            },
            {
              internalType: "string",
              name: "_rwaPriceDate",
              type: "string",
            },
            {
              internalType: "string",
              name: "_rwaCurrency",
              type: "string",
            },
            {
              internalType: "string",
              name: "_rwaId",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "_valuation",
              type: "uint256",
            },
          ],
          name: "submitRWAData",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;