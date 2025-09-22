
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

const projectsFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string(),
  technologies: z.string(),
  github_url: z.string().url().optional().or(z.literal('')) ,
  live_url: z.string().url().optional().or(z.literal('')) ,
  image_url: z.string().url().optional().or(z.literal('')) ,
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  sort_order: z.coerce.number().optional(),
});

type ProjectsFormValues = z.infer<typeof projectsFormSchema>;

const ProjectsPage = () => {
  const form = useForm<ProjectsFormValues>({
    resolver: zodResolver(projectsFormSchema),
    // TODO: Fetch and set default values from an API
    defaultValues: {
      title: "",
      description: "",
      technologies: "",
      github_url: "",
      live_url: "",
      image_url: "",
      start_date: "",
      end_date: "",
      sort_order: 0,
    },
  });

  function onSubmit(data: ProjectsFormValues) {
    console.log(data);
    // TODO: Handle form submission (e.g., API call to add/update a project)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Projects</h1>
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Project Title"
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
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Project description"
                      {...field}
                      className="bg-slate-100 border-slate-300 min-h-[100px]"
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
                      placeholder="Comma-separated (e.g., React, TypeScript, ...)"
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
                name="github_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-600">GitHub URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://github.com/user/repo"
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
                name="live_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-600">Live URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://project-live-url.com"
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
              name="image_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Image URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="URL for the project's cover image"
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
                      />
                    </FormControl>
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
                Save Project
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProjectsPage;
