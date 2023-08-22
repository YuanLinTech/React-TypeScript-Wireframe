//$$$$$$$$$$$$$$$$$$$$$$$$$$ NEW DOCKET $$$$$$$$$$$$$$$$$$$$$$$$$

import { TISODate, TISODateTime } from "./dateFormat";
import { User } from "./user";

export interface Docket {
  docketPk: string; // Id number for database
  docketId: string; //Id number to display
  docketName: string; //Description / title
  // message: string; //not used - detailed description
  createdOn: TISODateTime; // Timestamp when created
  lastModifiedOn: TISODateTime; // Timestamp last modifies
  createdByJson?: User;
  lastModifiedByJson?: User;
  createdBy: string;
  lastModifiedBy: string;
  // isTask: boolean;
  isPermit: boolean;
  isExpense: boolean;
  isIncome: boolean;
  isVariation: boolean;
  isSticky: boolean;
  isPrivate: boolean;
  isArchived: boolean;
  isCallForward: boolean;
  isRfi: boolean;
  isFollowUp: boolean;
  percentageCompleted: number;
  latestComment?: null;

  project: string | null; // projectId
  projectSiteAddress: string; // project's site address
  status: string; // actionStatusId
  statusColor: string; //action status color
  costBudget: string | null; // Decimal number in string format,budgeted amount or null if not expense
  costActual: string | null; // Decimal number in string format,total of orders or null if not expense
  costXero: string | null; // Decimal number in string format, costs from accounting service or null if not expense
  costRunning: string | null; // Decimal number in string format or null if not expense
  incomeBudget: string | null; // Decimal number in string format,budgeted amount or null if not income
  incomeActual: string | null; // Decimal number in string format, total of invoices or null if not income
  incomeXero: string | null; // Decimal number in string format, income from accounting service or null if not income
  incomeRunning: string | null; // Decimal number in string format or null if not income
  account_tracking_id: string | null;
  startDate: TISODate | null; //planned start date, null if not scheduled
  endDate: TISODate | null; //planned end date, null if not scheduled
  commenced: TISODateTime | null; //actual commenced time, null if not commenced
  completed: TISODateTime | null; //actual completed time, null if not complete
  timerValue: number | null; //total seconds active, null if not started
  timerStart: TISODateTime | null; //time timer started, null if not started
  timerEnd: TISODateTime | null; //time timer ended, null if not ended
  reminder: TISODateTime | null; //time for reminder, null if not set
  // inCourt: string | null; //contactCompanyId
  accountCode?: string;
  stageModel?: string;
  stageName?: string;
  coreDocket?: string;
  watching: string[]; //userIds
  assignedContractor: string | null; //contactCompanyId

  isNew?: boolean; //*THIS IS TO INDICATE NEW ADDED ONE
}

export interface DocketStatus {
  statusId: string; // Id
  company: string; // CompanyId
  statusName: string; // eg working, draft etc
  color: string; // eg #0000ff or rgba(0, 0, 255, 1)
  index: string; // order to display in list
}
