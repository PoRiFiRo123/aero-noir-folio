
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const skillsFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  category: z.enum(["Frontend", "Backend", "AI", "Tools", "Mobile", "DevOps", "Data Science"]),
  level: z.enum(["Beginner", "Intermediate", "Advanced", "Expert"]),
  sort_order: z.coerce.number().optional(),
});

type SkillsFormValues = z.infer<typeof skillsFormSchema>;

const SkillsPage = () => {
  const form = useForm<SkillsFormValues>({
    resolver: zodResolver(skillsFormSchema),
    defaultValues: {
      name: "",
      sort_order: 0,
    },
  });

  function onSubmit(data: SkillsFormValues) {
    console.log(data);
    // TODO: Handle form submission
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Skills</h1>
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Skill Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., TypeScript"
                      {...field}
                      className="bg-slate-100 border-slate-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-600">Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-slate-100 border-slate-300">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Frontend">Frontend</SelectItem>
                        <SelectItem value="Backend">Backend</SelectItem>
                        <SelectItem value="AI">AI</SelectItem>
                        <SelectItem value="Mobile">Mobile</SelectItem>
                        <SelectItem value="DevOps">DevOps</SelectItem>
                        <SelectItem value="Data Science">Data Science</SelectItem>
                        <SelectItem value="Tools">Tools</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-600">Proficiency Level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-slate-100 border-slate-300">
                          <SelectValue placeholder="Select a level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
                        <SelectItem value="Expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="sort_order"
              render={({ field }) => (
                <FormItem className="max-w-[200px]">
                  <FormLabel className="text-slate-600">Sort Order</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      className="bg-slate-100 border-slate-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button type="submit" className="bg-slate-900 text-white hover:bg-slate-800">
                Save Skill
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SkillsPage;
