import { defineMcp } from "@lovable.dev/mcp-js";
import getOrganizationInfo from "./tools/get-organization-info";
import listDisciplines from "./tools/list-disciplines";
import listFacilities from "./tools/list-facilities";
import listEvents from "./tools/list-events";
import getContactInfo from "./tools/get-contact-info";

export default defineMcp({
  name: "officina-dada-mcp",
  title: "Officina Dadà MCP",
  version: "0.1.0",
  instructions:
    "Server MCP pubblico di Officina Dadà A.S.D. — espone informazioni pubbliche sull'associazione: dati generali, discipline e corsi, sedi e attrezzature, timeline eventi e contatti. Tutti gli strumenti sono di sola lettura e non richiedono autenticazione.",
  tools: [getOrganizationInfo, listDisciplines, listFacilities, listEvents, getContactInfo],
});
