<script lang="ts" setup>
import Dialog from '../components/ui/dialog/Dialog.vue';
import DialogTrigger from '../components/ui/dialog/DialogTrigger.vue';
import DialogContent from '../components/ui/dialog/DialogContent.vue';
import DialogHeader from '../components/ui/dialog/DialogHeader.vue';
import DialogTitle from '../components/ui/dialog/DialogTitle.vue';
import DialogDescription from '../components/ui/dialog/DialogDescription.vue';
import Label from '../components/ui/label/Label.vue';
import Input from '../components/ui/input/Input.vue';
import Checkbox from '../components/ui/checkbox/Checkbox.vue';
import Textarea from '../components/ui/textarea/Textarea.vue';
import { useGuidesStore } from '../stores/guideStore';
import { ref } from 'vue';
import { toTypedSchema } from '@vee-validate/zod';
import { ErrorMessage, Field, useFieldArray, useForm } from 'vee-validate';
import { guideSchema, type Guide, type Step } from '../schema/guide.schema';
import Button from '../components/ui/button/Button.vue';

const techInput = ref("");
const isDialogOpen = ref(false);
const isSubmitting = ref(false);

const validationSchema = toTypedSchema(guideSchema);

const { handleSubmit, values, resetForm, setFieldValue } = useForm<Guide>({
    validationSchema,
    initialValues: {
        name: "",
        icon: "",
        techStack: [],
        steps: [],
    },
});

const { fields: stepsFields, push: pushStep } = useFieldArray<Step>("steps");

const stepInput = ref<Step>({
    label: "",
    commands: [""],
    additionalInfo: [""],
    codeBlock: "",
    isOptional: false,
});

const addTech = () => {
    if (techInput.value.trim()) {
        setFieldValue('techStack', [...values.techStack, techInput.value.trim()]);
        techInput.value = "";
    }
};

const addStep = async () => {
    pushStep({ ...stepInput.value });
}

const removeStep = (index: number) => {
    stepsFields.value.splice(index, 1);
};

const guidesStore = useGuidesStore();

const onSubmit = handleSubmit(async (formValues) => {
    isSubmitting.value = true;
    try {
        const cleanedSteps = formValues.steps.map(step => ({
            ...step,
            commands: step.commands.filter(cmd => cmd.trim() !== ""),
            additionalInfo: step.additionalInfo.filter(info => info.trim() !== "")
        }));

        const newGuide = { ...formValues, steps: cleanedSteps, id: Date.now() };
        guidesStore.addGuide(newGuide);

        resetForm();
        techInput.value = "";
        stepInput.value = {
            label: "",
            commands: [""],
            additionalInfo: [""],
            codeBlock: "",
            isOptional: false
        };

        isDialogOpen.value = false;
        alert("Guide added successfully!");
    } catch (err) {
        console.error(err);
        alert("Error saving guide.");
    } finally {
        isSubmitting.value = false;
    }
});
</script>

<template>
    <Dialog v-model:open="isDialogOpen">
        <DialogTrigger as-child>
            <Button>Add Guide</Button>
        </DialogTrigger>

        <DialogContent class="max-h-[80vh] overflow-y-auto">
            <DialogHeader>
                <DialogTitle>Add Guide</DialogTitle>
                <DialogDescription>Fill in the details below</DialogDescription>
            </DialogHeader>

            <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
                <!-- title -->
                <div class="flex flex-col gap-1">
                    <Label>Title</Label>
                    <Field name="name" v-slot="{ field }">
                        <Input v-bind="field" placeholder="e.g. React Native, Expo-cli" />
                    </Field>
                    <ErrorMessage name="name" class="text-red-500 text-sm" />
                </div>

                <!-- icon -->
                <div class="flex flex-col gap-1">
                    <Label>Icon (optional)</Label>
                    <Field name="icon" v-slot="{ field }">
                        <Input v-bind="field" placeholder="Paste image URL or upload" />
                    </Field>
                    <ErrorMessage name="icon" class="text-red-500 text-sm" />
                </div>

                <!-- tech stack -->
                <div class="flex flex-col gap-1">
                    <Label>Tech Stack</Label>
                    <div class="flex gap-1">
                        <Input v-model="techInput" placeholder="e.g. React Native" />
                        <Button type="button" size="sm" @click="addTech">Add</Button>
                    </div>
                    <ErrorMessage name="techStack" class="text-red-500 text-sm" />
                    <ul class="flex gap-2 flex-wrap mt-2" v-if="values.techStack.length">
                        <li v-for="(tech, i) in values.techStack" :key="i"
                            class="px-2 py-1 rounded-full bg-blue-100 text-blue-950 font-medium flex items-center gap-1">
                            {{ tech }}
                        </li>
                    </ul>
                </div>

                <!-- steps -->
                <div class="flex flex-col gap-4">
                    <Label>Steps</Label>
                    <div v-for="(step, index) in stepsFields" :key="step.key" class="p-3 border rounded-md space-y-3">
                        <div class="flex justify-between items-center">
                            <h4 class="font-medium">Step {{ index + 1 }}</h4>
                            <Button type="button" variant="outline" size="sm" @click="removeStep(index)">
                                Remove
                            </Button>
                        </div>

                        <!-- step label -->
                        <div class="flex flex-col gap-1">
                            <Field :name="`steps.${index}.label`" validate-on-blur validate-on-change
                                v-slot="{ field, errorMessage }">
                                <Input v-bind="field" placeholder="Step label..." />
                                <span v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</span>
                            </Field>
                        </div>

                        <!-- commands -->
                        <div class="flex flex-col gap-1">
                            <Label>Commands</Label>
                            <div v-for="(_cmd, i) in step.value.commands" :key="i">
                                <Field :name="`steps.${index}.commands.${i}`" v-slot="{ field, errorMessage }">
                                    <Textarea v-bind="field" placeholder="Command..." />
                                    <span v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</span>
                                </Field>
                            </div>
                        </div>

                        <!-- additional info -->
                        <div class="flex flex-col gap-1">
                            <Label>Additional Info</Label>
                            <div v-for="(_info, i) in step.value.additionalInfo" :key="i">
                                <Field :name="`steps.${index}.additionalInfo.${i}`" v-slot="{ field, errorMessage }">
                                    <Textarea v-bind="field" placeholder="Optional notes..." />
                                    <span v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</span>
                                </Field>
                            </div>
                        </div>

                        <!-- code block -->
                        <div class="flex flex-col gap-1">
                            <Label>Code Block</Label>
                            <Field :name="`steps.${index}.codeBlock`" v-slot="{ field, errorMessage }">
                                <Textarea v-bind="field" placeholder="Code example..." class="font-mono" />
                                <span v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</span>
                            </Field>
                        </div>

                        <!-- optional checkbox -->
                        <div class="flex gap-2 items-center">
                            <Field :name="`steps.${index}.isOptional`" type="checkbox" v-slot="{ field }">
                                <Checkbox v-bind="field" />
                            </Field>
                            <Label>This step is optional</Label>
                        </div>
                    </div>
                    <ErrorMessage name="steps" class="text-red-500 text-sm" />


                    <Button type="button" variant="outline" size="sm" @click="addStep">+ Add Another Step</Button>
                </div>

                <!--form actions -->
                <div class="flex justify-end gap-2 pt-4">
                    <Button variant="outline" type="button" @click="isDialogOpen = false" :disabled="isSubmitting">
                        Cancel
                    </Button>
                    <Button type="submit" :disabled="isSubmitting">
                        {{ isSubmitting ? 'Saving...' : 'Save Guide' }}
                    </Button>
                </div>
            </form>
        </DialogContent>
    </Dialog>

</template>