
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

const certificationsFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  issuer: z.string().min(1, "Issuer is required"),
  issue_date: z.string().optional(),
  expiry_date: z.string().optional(),
  credential_url: z.string().url().optional().or(z.literal('')),
  description: z.string().optional(),
  certificate_image_url: z.string().url().optional().or(z.literal('')),
  sort_order: z.coerce.number().optional(),
});

type CertificationsFormValues = z.infer<typeof certificationsFormSchema>;

const CertificationsPage = () => {
  const form = useForm<CertificationsFormValues>({
    resolver: zodResolver(certificationsFormSchema),
    defaultValues: {
      title: "",
      issuer: "",
      issue_date: "",
      expiry_date: "",
      credential_url: "",
      description: "",
      certificate_image_url: "",
      sort_order: 0,
    },
  });

  function onSubmit(data: CertificationsFormValues) {
    console.log(data);
    // TODO: Handle form submission
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Certifications</h1>
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-600">Certification Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Certified Kubernetes Administrator"
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
                name="issuer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-600">Issuing Organization</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., The Linux Foundation"
                        {...field}
                        className="bg-slate-100 border-slate-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="issue_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-600">Issue Date</FormLabel>
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
                name="expiry_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-600">Expiry Date (if applicable)</FormLabel>
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
              name="credential_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Credential URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Link to your credential"
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
                      placeholder="A brief description of the certification (optional)"
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
              name="certificate_image_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Certificate Image URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="URL for an image of your certificate (optional)"
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
                Save Certification
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CertificationsPage;
