import AquoConfig from "~~/aquo.config";
import { contracts } from "~~/utils/scaffold-eth/contract";

export function getAllContracts() {
  const contractsData = contracts?.[AquoConfig.targetNetworks[0].id];
  return contractsData ? contractsData : {};
}
