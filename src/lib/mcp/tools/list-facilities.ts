import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_facilities",
  title: "Sedi e attrezzature",
  description:
    "Restituisce le sedi di Officina Dadà con altezza degli appendimenti aerei, materassi anticaduta e attrezzature disponibili.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const facilities = [
      {
        name: "Sede principale — Roè Volciano (BS)",
        rooms: 2,
        roomDetails: "Due sale con parquet e specchi",
        rigHeightMeters: 5.5,
        aerialRigs: "10 – 14",
        crashMats: 8,
        equipment: ["Slackline", "Giocoleria", "Audio pro"],
      },
      {
        name: "Seconda sede — Vestone (palestra della Scuola Primaria)",
        rigHeightMeters: 6,
        aerialRigs: 4,
        crashMats: 4,
        equipment: ["2 spalliere"],
      },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(facilities, null, 2) }],
      structuredContent: { facilities },
    };
  },
});
