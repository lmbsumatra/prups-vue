import { defineStore } from "pinia"
import type { Guide, Step } from "../schema/guide.schema"

export const useGuidesStore = defineStore("guides", {
    state: () => ({
        guides: [
            {
                id: 0,
                name: "Frontend with ReactJS",
                icon: "",
                techStack: [
                    "ReactJS",
                    "TailwindCSS",
                    "Redux Toolkit",
                    "Zod",
                    "Axios",
                    "React Router",
                    "Vite",
                    "TypeScript"
                ],
                steps: [
                    {
                        id: 0,
                        label: "Create Vite Project",
                        commands: ["npm create vite@latest my-app"],
                        additionalInfo: [
                            "Choose: react, typescript",
                            "Navigate to project directory: cd my-app"
                        ],
                        codeBlock: "",
                        isOptional: false
                    },
                    {
                        id: 1,
                        label: "Install Dependencies",
                        commands: ["npm install"],
                        additionalInfo: [],
                        codeBlock: "",
                        isOptional: false
                    },
                    {
                        id: 2,
                        label: "Install Additional Packages",
                        commands: [
                            "npm install tailwindcss zod axios react-router-dom @reduxjs/toolkit react-redux"
                        ],
                        additionalInfo: [],
                        codeBlock: "",
                        isOptional: false
                    },
                    {
                        id: 3,
                        label: "Setup TailwindCSS",
                        commands: ["npm install @tailwindcss/vite", "npx tailwindcss init -p"],
                        additionalInfo: [],
                        codeBlock: "",
                        isOptional: false
                    },
                    {
                        id: 4,
                        label: "Configure TailwindCSS",
                        commands: [],
                        additionalInfo: [
                            "Add to index.css: @import 'tailwindcss';",
                            "Update vite.config.ts: import tailwindcss from '@tailwindcss/vite'; plugins: [react(), tailwindcss()]"
                        ],
                        codeBlock: "",
                        isOptional: false
                    },
                    {
                        id: 5,
                        label: "Adding ShadCN",
                        commands: ["npx shadcn@latest init"],
                        additionalInfo: ["Example usage: npx shadcn@latest add button"],
                        codeBlock: "",
                        isOptional: false
                    }
                ]
            },
            {
                id: 1,
                name: "Backend with Node/Express & MySQL",
                icon: "",
                techStack: [
                    "NodeJS",
                    "ExpressJS",
                    "Zod",
                    "TypeScript",
                    "Sequelize",
                    "MySQL",
                    "Nodemon"
                ],
                steps: [
                    {
                        id: 0,
                        label: "Initialize Project",
                        commands: ["npm init -y"],
                        additionalInfo: [],
                        codeBlock: "",
                        isOptional: false
                    },
                    {
                        id: 1,
                        label: "Install Dependencies",
                        commands: ["npm install express zod sequelize mysql2 dotenv cors"],
                        additionalInfo: [],
                        codeBlock: "",
                        isOptional: false
                    },
                    {
                        id: 2,
                        label: "Install Dev Dependencies",
                        commands: [
                            "npm install --save-dev typescript tsx @types/express @types/node"
                        ],
                        additionalInfo: [],
                        codeBlock: "",
                        isOptional: false
                    },
                    {
                        id: 3,
                        label: "Setup Sequelize & tsconfig",
                        commands: [],
                        additionalInfo: [
                            "Configure Sequelize with MySQL",
                            "Setup tsconfig.json",
                            "Modify package.json as needed"
                        ],
                        codeBlock: "",
                        isOptional: false
                    }
                ]
            },
            {
                id: 2,
                name: "Backend with Node/Express & MongoDB",
                icon: "",
                techStack: [
                    "NodeJS",
                    "ExpressJS",
                    "Zod",
                    "TypeScript",
                    "Mongoose",
                    "MongoDB",
                    "Nodemon"
                ],
                steps: [
                    {
                        id: 0,
                        label: "Initialize Project",
                        commands: ["npm init -y"],
                        additionalInfo: [],
                        codeBlock: "",
                        isOptional: false
                    },
                    {
                        id: 1,
                        label: "Install Dependencies",
                        commands: ["npm install express zod mongoose mongodb dotenv cors"],
                        additionalInfo: [],
                        codeBlock: "",
                        isOptional: false
                    },
                    {
                        id: 2,
                        label: "Install Dev Dependencies",
                        commands: [
                            "npm install --save-dev typescript tsx @types/express @types/node"
                        ],
                        additionalInfo: [],
                        codeBlock: "",
                        isOptional: false
                    },
                    {
                        id: 3,
                        label: "Setup tsconfig and Package",
                        commands: [],
                        additionalInfo: ["Setup tsconfig.json", "Modify package.json as needed"],
                        codeBlock: "",
                        isOptional: false
                    }
                ]
            },
            {
                id: 3,
                name: "Laravel Project",
                icon: "",
                techStack: ["Laravel", "PHP", "MySQL", "Laravel Breeze"],
                steps: [
                    {
                        id: 0,
                        label: "Create Laravel Project",
                        commands: ["laravel new project-name", "php artisan serve"],
                        additionalInfo: ["npm install"],
                        codeBlock: "",
                        isOptional: false
                    },
                    {
                        id: 1,
                        label: "Fix Port Issues",
                        commands: [],
                        additionalInfo: ["Edit php.ini: change EGPCS to GPCS if needed"],
                        codeBlock: "",
                        isOptional: false
                    },
                    {
                        id: 2,
                        label: "Database Migration",
                        commands: ["php artisan migrate"],
                        additionalInfo: [],
                        codeBlock: "",
                        isOptional: false
                    },
                    {
                        id: 3,
                        label: "Install Laravel Breeze",
                        commands: ["composer require laravel/breeze", "php artisan breeze:install"],
                        additionalInfo: ["Choose Blade when prompted"],
                        codeBlock: "",
                        isOptional: false
                    },
                    {
                        id: 4,
                        label: "Optional Email Verification",
                        commands: [],
                        additionalInfo: [
                            "Add 'implements MustVerifyEmail' to User model",
                            "Install Mailpit and configure SMTP port"
                        ],
                        codeBlock: "",
                        isOptional: false
                    },
                    {
                        id: 5,
                        label: "ORM & Pagination",
                        commands: [],
                        additionalInfo: [
                            "Use Eloquent ORM and import different pagination styles as needed"
                        ],
                        codeBlock: "",
                        isOptional: false
                    }
                ]
            },
            {
                id: 4,
                name: "Frontend with VueJS",
                icon: "",
                techStack: ["VueJS", "TypeScript", "TailwindCSS", "Pinia", "Vite"],
                steps: [
                    {
                        id: 0,
                        label: "Create Vite Project",
                        commands: ["npm create vite@latest proj-name"],
                        additionalInfo: ["Choose: vue, typescript"],
                        codeBlock: "",
                        isOptional: false
                    },
                    {
                        id: 1,
                        label: "Setup TailwindCSS",
                        commands: ["npm install tailwindcss @tailwindcss/vite"],
                        additionalInfo: [
                            "Add tailwindcss() to Vite config plugins",
                            "Add '@import \"tailwindcss\";' to main.css"
                        ],
                        codeBlock: "",
                        isOptional: false
                    },
                    {
                        id: 2,
                        label: "Install Pinia",
                        commands: ["npm install pinia"],
                        additionalInfo: [
                            "In main.ts, import { createPinia } from 'pinia'",
                            "Adjust app: App.use(createPinia()); App.mount('#app')"
                        ],
                        codeBlock: "",
                        isOptional: false
                    },
                    {
                        id: 3,
                        label: "TSX Parts in Vue",
                        commands: [],
                        additionalInfo: ["Script block for imports", "Template block for HTML", "Style block for CSS"],
                        codeBlock: "",
                        isOptional: true
                    },
                    {
                        id: 4,
                        label: "Installing Vue-router",
                        commands: ["npm install vue-router"],
                        additionalInfo: [],
                        codeBlock: "",
                        isOptional: false
                    },
                    {
                        id: 5,
                        label: "Create router",
                        commands: [],
                        additionalInfo: [
                            "Add/On /router/index.ts: Make routes object with each path, name, and component. (Optional: use defineAsyncComponent on view import for lazy loading)",
                            "Import that router on main.ts and use it: createApp(app).use(router)",
                            "Use <router-view /> on App.vue"
                        ],
                        codeBlock: "",
                        isOptional: false
                    },
                    {
                        id: 6,
                        label: "Using ShadCN with Vue + Vite",
                        commands: ["https://shadcn-vue.com/docs/installation/vite.html"],
                        additionalInfo: ["For better steps, follow the website above."],
                        codeBlock: "",
                        isOptional: false
                    },
                    {
                        id: 7,
                        label: "Form with Validation (Zod + Vee Validate)",
                        commands: ["npm install vee-validate zod"],
                        additionalInfo: ["For better steps, follow the website above."],
                        codeBlock: "",
                        isOptional: false
                    }
                ]
            },
            {
                id: 5,
                name: "React Native,  Expo-cli",
                icon: "",
                techStack: ["React Native", "Expo-cli"],
                steps: [
                    {
                        id: 0,
                        label: "Create React Native with Expo-cli Project",
                        commands: ["npx create-expo-app@latest app-name"],
                        additionalInfo: [],
                        codeBlock: "",
                        isOptional: false
                    }
                ]
            }
        ] as Guide[]

    }),
    actions: {
        // --- Guide CRUD ---
        addGuide(guide: Guide) {
            this.guides.push(guide);
        },
        removeGuide(id: number) {
            this.guides = this.guides.filter(g => g.id !== id);
        },
        updateGuide(updatedGuide: Guide) {
            const index = this.guides.findIndex(g => g.id === updatedGuide.id);
            if (index !== -1) this.guides[index] = updatedGuide;
        },

        // --- Step CRUD ---
        addStepToGuide(guideId: number | null, step: Step) {
            const guide = this.guides.find(g => g.id === guideId);
            if (guide) guide.steps.push(step);
        },
        updateStepInGuide(guideId: number, stepIndex: number, updatedStep: Step) {
            const guide = this.guides.find(g => g.id === guideId);
            if (guide && guide.steps[stepIndex]) guide.steps[stepIndex] = updatedStep;
        },
        removeStepFromGuide(guideId: number, stepIndex: number) {
            const guide = this.guides.find(g => g.id === guideId);
            if (guide) guide.steps.splice(stepIndex, 1);
        },
    },
})
