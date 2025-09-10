import { z } from "zod";

export const stepSchema = z.object({
    id: z.number().optional(),
    label: z.string().min(1, { message: "Step label is required" }),
    commands: z.array(z.string()).default([]),
    additionalInfo: z.array(z.string()).default([]),
    codeBlock: z.string().default(""),
    isOptional: z.boolean().default(false)
});

export const guideSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(1, "Project name is required"),
    icon: z.string().default(""),
    techStack: z.array(z.string().min(1, { message: "Tech name is required" }))
        .min(1, { message: "At least one technology is required" }),
    steps: z.array(stepSchema).min(1, { message: "At least one step is required" })
});

export type Step = z.infer<typeof stepSchema>;
export type Guide = z.infer<typeof guideSchema>;