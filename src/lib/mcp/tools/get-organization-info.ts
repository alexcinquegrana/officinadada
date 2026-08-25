import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_organization_info",
  title: "Info Officina Dadà",
  description:
    "Restituisce informazioni generali sull'associazione Officina Dadà: nome, descrizione, sede, anno di fondazione e sito web.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: "Officina Dadà A.S.D.",
      tagline: "Discipline artistiche e arti circensi in Valsabbia",
      description:
        "Associazione Sportiva Dilettantistica fondata nel 2018 a Roè Volciano (BS), dedicata alla diffusione delle arti circensi e aeree — tessuti, cerchio, amaca, corda, trapezio e flexibility — per ogni età e livello.",
      foundedYear: 2018,
      location: {
        address: "Via Arnoldo Bellini 7, 25077 Roè Volciano (BS), Italia",
        city: "Roè Volciano",
        province: "BS",
        region: "Valsabbia · Lombardia",
        country: "Italia",
      },
      legal: {
        legalName: "Officina Dadà A.S.D.",
        registeredOffice: "Via Malpaga 1, 25070 Casto (BS), Italia",
        operatingOffice: "Via A. Bellini 7, 25077 Roè Volciano (BS), Italia",
        taxCode: "96040640177",
        vatNumber: "04721180984",
        sdiCode: "KRRH6B9",
        pec: "elenatrombinidada@postecert.it",
      },
      photographyCredits: "David Pasotti",

    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
