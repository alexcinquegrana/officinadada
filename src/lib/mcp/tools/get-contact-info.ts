import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact_info",
  title: "Contatti",
  description:
    "Restituisce i contatti pubblici di Officina Dadà: email di segreteria, telefono, referente e area geografica.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const contact = {
      email: "segreteriaofficinadada@gmail.com",
      phone: "+39 327 327 6836",
      referent: "Elena Trombini",
      area: "Roè Volciano (BS) · Valsabbia · Provincia di Brescia",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
      structuredContent: contact,
    };
  },
});
