
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

const educationFormSchema = z.object({
  degree: z.string().min(1, "Degree is required"),
  institution: z.string().min(1, "Institution is required"),
  location: z.string().optional(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  is_current: z.boolean().optional(),
  gpa: z.string().optional(),
  description: z.string().optional(),
  sort_order: z.coerce.number().optional(),
});

type EducationFormValues = z.infer<typeof educationFormSchema>;

const EducationPage = () => {
  const form = useForm<EducationFormValues>({
    resolver: zodResolver(educationFormSchema),
    defaultValues: {
      degree: "",
      institution: "",
      location: "",
      start_date: "",
      end_date: "",
      is_current: false,
      gpa: "",
      description: "",
      sort_order: 0,
    },
  });

  function onSubmit(data: EducationFormValues) {
    console.log(data);
    // TODO: Handle form submission
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Education</h1>
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="degree"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-600">Degree</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Bachelor of Science"
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
                name="institution"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-600">Institution</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., University of Technology"
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
                      placeholder="e.g., City, Country"
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
                    I am currently studying here
                  </FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gpa"
              render={({ field }) => (
                <FormItem className="max-w-[200px]">
                  <FormLabel className="text-slate-600">GPA</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., 3.8/4.0"
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
                      placeholder="Additional details about your education (optional)"
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
                Save Education
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default EducationPage;
