import { fcfs } from "./fcfs.js";
import { sjf } from "./sjf.js";
import { srtf } from "./srtf.js";
import { rr } from "./rr.js";
import { npp } from "./npp.js";
import { pp } from "./pp.js";


export const solve = (algo, arrivalTime, burstTime, qunatumTime, priorities) => {
  switch (algo) {
    case "FCFS":
      return fcfs(arrivalTime, burstTime);
    case "SJF":
      return sjf(arrivalTime, burstTime);
    case "SRTF":
      return srtf(arrivalTime, burstTime);
    case "RR":
      return rr(arrivalTime, burstTime, qunatumTime);
    case "NPP":
      return npp(arrivalTime, burstTime, priorities);
    case "PP":
      return pp(arrivalTime, burstTime, priorities);

    default:
      break;
  }
};
