// app/(site)/standards/data.ts

export const standardsData = {
  din: [
    {
      id: "din-1",
      title: "DIN 1",
      description: "Taper Pins",
      table: [
        { d1: 2, cMax: 0.3, r: 2 },
        { d1: 3, cMax: 0.45, r: 3 },
        { d1: 4, cMax: 0.6, r: 4 },
        { d1: 5, cMax: 0.75, r: 5 },
        { d1: 6, cMax: 0.9, r: 6 },
        { d1: 8, cMax: 1.2, r: 8 },
        { d1: 10, cMax: 1.5, r: 10 },
        { d1: 12, cMax: 1.8, r: 12 },
        { d1: 16, cMax: 2.5, r: 16 },
      ],
    },
    { id: "din-7", title: "DIN 7", description: "Dowel Pins" },
    { id: "din-39", title: "DIN 39", description: "Fixed Handles" },
    { id: "din-84", title: "DIN 84", description: "Slotted Cheese Head Screws" },
    { id: "din-85", title: "DIN 85", description: "Slotted Pan Head Screws" },
    { id: "din-93", title: "DIN 93", description: "Lock Washers (Tab Washers)" },
    { id: "din-94", title: "DIN 94", description: "Split Pins" },
    { id: "din-95", title: "DIN 95", description: "Slotted Oval Head Wood Screws" },
  ],
  iso: [
    { id: "iso-4014", title: "ISO 4014", description: "Hex Head Bolts" },
    { id: "iso-4762", title: "ISO 4762", description: "Hex Socket Head Cap Screws" },
  ],
} as const;
