
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Trash2 } from "lucide-react";

const MediaManagerPage = () => {
  const [media, setMedia] = useState([
    { id: 1, name: "image1.jpg", url: "/placeholder.svg" },
    { id: 2, name: "image2.png", url: "/placeholder.svg" },
    { id: 3, name: "image3.gif", url: "/placeholder.svg" },
  ]);
  const [selectedMedia, setSelectedMedia] = useState<number[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newMedia = Array.from(files).map((file, index) => ({
        id: media.length + index + 1,
        name: file.name,
        url: URL.createObjectURL(file),
      }));
      setMedia([...media, ...newMedia]);
    }
  };

  const handleMediaSelection = (id: number) => {
    if (selectedMedia.includes(id)) {
      setSelectedMedia(selectedMedia.filter((mediaId) => mediaId !== id));
    } else {
      setSelectedMedia([...selectedMedia, id]);
    }
  };

  const handleDeleteMedia = () => {
    setMedia(media.filter((item) => !selectedMedia.includes(item.id)));
    setSelectedMedia([]);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Media Manager</h1>
        <div className="flex space-x-2">
          <Input type="file" multiple onChange={handleFileUpload} className="hidden" id="file-upload" />
          <Button asChild>
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </label>
          </Button>
          {selectedMedia.length > 0 && (
            <Button variant="destructive" onClick={handleDeleteMedia}>
              <Trash2 className="h-4 w-4 mr-2" />
              Delete ({selectedMedia.length})
            </Button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {media.map((item) => (
          <Card
            key={item.id}
            className={`cursor-pointer ${
              selectedMedia.includes(item.id) ? "border-blue-500" : ""
            }`}
            onClick={() => handleMediaSelection(item.id)}
          >
            <CardHeader>
              <img src={item.url} alt={item.name} className="h-32 w-full object-cover rounded-t-md" />
            </CardHeader>
            <CardContent>
              <p className="text-sm truncate">{item.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MediaManagerPage;
