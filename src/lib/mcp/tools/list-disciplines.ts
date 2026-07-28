import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_disciplines",
  title: "Discipline e corsi",
  description:
    "Elenca le discipline e i corsi offerti da Officina Dadà, con una breve descrizione di ciascuno.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const disciplines = [
      { name: "Danza aerea", detail: "Tessuti, cerchio, amaca, corda e trapezio" },
      { name: "Giocoleria", detail: "Palline, cerchi, foulard e coordinazione" },
      { name: "Circo in famiglia", detail: "Un'ora per grandi e piccoli, insieme in aria" },
      { name: "Flexibility", detail: "Mobilità, forza e ascolto del corpo" },
      { name: "Verticali", detail: "Equilibri, forza e controllo capovolti" },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(disciplines, null, 2) }],
      structuredContent: { disciplines },
    };
  },
});
