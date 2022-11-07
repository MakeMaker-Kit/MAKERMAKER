import { Substance } from "@fernarzt/cms-types";
import { Document, ObjectField } from "../../../types/createSchema";

export const SubstanceDocument: Document<Substance> = {
  type: "document",
  name: "Substance",
  title: "Substances",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "codes",
      title: "Codes",
      type: "object",
      fields: [
        {
          name: "act",
          title: "ACT Code",
          type: "object",
          fields: [
            {
              name: "code",
              title: "Code",
              type: "string",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
          ],
        },
      ],
    } as ObjectField<Substance["codes"], "codes">,
  ],
  preview: {
    select: {
      title: "codes.act.code",
      subtitle: "title",
    },
  },
};
