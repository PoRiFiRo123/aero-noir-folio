
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
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const experienceFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  company: z.string().min(1, "Company is required"),
  location: z.string().optional(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  is_current: z.boolean().optional(),
  description: z.string().optional(),
  technologies: z.string().optional(),
  sort_order: z.coerce.number().optional(),
});

type ExperienceFormValues = z.infer<typeof experienceFormSchema>;

const ExperiencePage = () => {
  const form = useForm<ExperienceFormValues>({
    resolver: zodResolver(experienceFormSchema),
    defaultValues: {
      title: "",
      company: "",
      location: "",
      start_date: "",
      end_date: "",
      is_current: false,
      description: "",
      technologies: "",
      sort_order: 0,
    },
  });

  function onSubmit(data: ExperienceFormValues) {
    console.log(data);
    // TODO: Handle form submission
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Experience</h1>
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-600">Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Job Title"
                        {...field}
                        className="bg-slate-100 border-slate-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-600">Company</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Company Name"
                        {...field}
                        className="bg-slate-100 border-slate-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Location</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="City, Country"
                      {...field}
                      className="bg-slate-100 border-slate-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <FormField
                control={form.control}
                name="start_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-600">Start Date</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        className="bg-slate-100 border-slate-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="end_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-600">End Date</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        className="bg-slate-100 border-slate-300"
                        disabled={form.watch("is_current")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="is_current"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-slate-600 font-medium">
                    I am currently working here
                  </FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your role and responsibilities"
                      {...field}
                      className="bg-slate-100 border-slate-300 min-h-[120px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="technologies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Technologies</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Comma-separated (e.g., JavaScript, AWS, ...)"
                      {...field}
                      className="bg-slate-100 border-slate-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                Save Experience
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ExperiencePage;
