import z from "zod";

const tech = z.string().min(1, { message: "Tech name is required" });


const steps = z.object({
    id: z.number().optional(),
    label: z.string().min(1, { message: "Step label is required" }),
    command: z.array(z.string()).optional(),
    additional: z.array(z.string()).optional(),
    codeBlock: z.string().optional(),

})

const guideSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(1, "Project name is required"),
    icon: z.string().optional(),
    techStack: z.array(tech).min(1, { message: "Tech stack is require" }),
    steps: z.array(steps)
})

export type Guide = z.infer<typeof guideSchema>