
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

const profileFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  title: z.string().min(1, "Title is required"),
  bio: z.string(),
  email: z.string().email(),
  phone: z.string(),
  location: z.string(),
  linkedin: z.string().url(),
  github: z.string().url(),
  website: z.string().url(),
  avatar_url: z.string().url(),
  banner_url: z.string().url(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const ProfilePage = () => {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    // TODO: Fetch and set default values from an API
    defaultValues: {
      name: "",
      title: "",
      bio: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: "",
      website: "",
      avatar_url: "",
      banner_url: "",
    },
  });

  function onSubmit(data: ProfileFormValues) {
    console.log(data);
    // TODO: Handle form submission (e.g., API call)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Profile</h1>
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Name"
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
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Professional Title"
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
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="A short biography"
                      {...field}
                      className="bg-slate-100 border-slate-300 min-h-[100px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-600">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
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
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-600">Phone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Phone Number"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <FormField
                control={form.control}
                name="linkedin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-600">LinkedIn</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://linkedin.com/in/..."
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
                name="github"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-600">GitHub</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://github.com/..."
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
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Website</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://your-website.com"
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
                name="avatar_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-600">Avatar URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Image URL for your avatar"
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
                name="banner_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-600">Banner URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Image URL for your banner"
                        {...field}
                        className="bg-slate-100 border-slate-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-end">
                <Button type="submit" className="bg-slate-900 text-white hover:bg-slate-800">Save Changes</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProfilePage;
