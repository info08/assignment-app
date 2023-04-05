import Arx from "../images/arx.png";
import Aws from "../images/aws.png";
import Azure from "../images/azure.png";
import Bio from "../images/bio.png";
import Csv from "../images/csv.png";
import Dropbox from "../images/dropbox.png";
import GCloud from "../images/googleCloud.png";
import IbmC from "../images/ibmClod.png";
import IbmSql from "../images/ibmSql.png";
import Labwa from "../images/labware.png";
import MsE from "../images/msExcel.png";
import Pdf from "../images/pdf.png";
import Sens from "../images/sens.png";
import The from "../images/thermo.png";


export const data = [
  {
    id: "1",
    title: "Arxspan",
    type: "Software",
    urlImage: Arx,
  },
  {
    id: "2",
    title: "Amazon Web Services",
    type: "Cloud",
    urlImage: Aws,
  },
  {
    id: "3",
    title: "Amazon Web Services",
    type: "Cloud",
    urlImage: Azure,
  },
  {
    id: "4",
    title: "CauguSens d",
    type: "Instruments",
    urlImage: Bio,
  },
  {
    id: "5",
    title: "CauguSens d",
    type: "Files",
    urlImage: Csv,
  },
  {
    id: "6",
    title: "DropBox",
    type: "Cloud",
    urlImage: Dropbox,
  },
  {
    id: "7",
    title: "Google Cloud",
    type: "Cloud",
    urlImage: GCloud,
  },
  {
    id: "8",
    title: "Ibm Cloud",
    type: "Cloud",
    urlImage: IbmC,
  },
  {
    id: "9",
    title: "Ibm Sql Database",
    type: "Database",
    urlImage: IbmSql,
  },
  {
    id: "10",
    title: "Labware",
    type: "Media",
    urlImage: Labwa,
  },
  {
    id: "11",
    title: "Ms Excel",
    type: "Files",
    urlImage: MsE,
  },
  {
    id: "12",
    title: "Pdf",
    type: "Files",
    urlImage: Pdf,
  },
  {
    id: "13",
    title: "Sens",
    type: "Instruments",
    urlImage: Sens,
  },
  {
    id: "13",
    title: "Themo",
    type: "Instruments",
    urlImage: The,
  },
];


export const btnData = [
    { id: 1, name: "All Sources" ,type:"All" ,active:true},
    { id: 2, name: "Instruments" ,type: "Instruments",active:false},
    { id: 3, name: "Database" ,type: "Database",active:false},
    { id: 4, name: "Files" ,type: "Files",active:false},
    { id: 5, name: "Media" ,type: "Media",active:false},
    { id: 6, name: "Could Service" ,type: "Cloud",active:false},
    { id: 7, name: "Software" ,type: "Software",active:false},
  ];
  