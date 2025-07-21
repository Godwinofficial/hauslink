import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Upload,
  X,
  Plus,
  MapPin,
  Home,
  DollarSign,
  Check,
} from "lucide-react";

interface ImageFile extends File {
  preview?: string;
}

const AddProperty = () => {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    status: "for-sale",
    price: "",
    currency: "ZMW",
    location: {
      country: "Zambia",
      city: "",
      address: "",
      coordinates: {
        lat: "",
        lng: "",
      },
    },
    details: {
      bedrooms: "",
      bathrooms: "",
      garages: "",
      area: "",
      yearBuilt: "",
    },
    features: [] as string[],
  });

  const propertyTypes = [
    "House",
    "Apartment",
    "Villa",
    "Townhouse",
    "Land",
    "Commercial",
    "Office",
  ];

  const cities = [
    "Lusaka",
    "Kitwe",
    "Ndola",
    "Kabwe",
    "Livingstone",
    "Chipata",
    "Solwezi",
    "Kasama",
    "Mufulira",
    "Chingola",
  ];

  const amenities = [
    "Swimming Pool",
    "Garden",
    "Security System",
    "Garage",
    "Air Conditioning",
    "Furnished",
    "Balcony",
    "Solar Power",
    "Borehole",
    "Servant's Quarter",
    "Electric Fence",
    "Backup Generator",
    "Internet",
    "Parking",
    "DSTV Connection",
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const imageFiles = files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setImages((prev) => [...prev, ...imageFiles]);
  };

  const removeImage = (index: number) => {
    setImages((prev) => {
      const newImages = [...prev];
      URL.revokeObjectURL(newImages[index].preview || "");
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData((prev) => {
      const features = prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature];
      return { ...prev, features };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission with image upload
    console.log("Form data:", formData);
    console.log("Images:", images);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">Add New Property</h1>
        <p className="text-muted-foreground">
          Fill in the details below to list your property
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-6">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">Property Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, title: e.target.value }))
                  }
                  placeholder="e.g., Modern Villa with Pool"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Property Type</Label>
                <Select
                  value={formData.type}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, type: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyTypes.map((type) => (
                      <SelectItem key={type.toLowerCase()} value={type.toLowerCase()}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Listing Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, status: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="for-sale">For Sale</SelectItem>
                    <SelectItem value="for-rent">For Rent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, price: e.target.value }))
                    }
                    className="pl-10"
                    placeholder="Enter price"
                    required
                  />
                </div>
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  placeholder="Describe your property..."
                  className="min-h-[150px]"
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Location */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-6">Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Select
                  value={formData.location.city}
                  onValueChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      location: { ...prev.location, city: value },
                    }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.toLowerCase()} value={city.toLowerCase()}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="address"
                    value={formData.location.address}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        location: {
                          ...prev.location,
                          address: e.target.value,
                        },
                      }))
                    }
                    className="pl-10"
                    placeholder="Enter address"
                    required
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Property Details */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-6">Property Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="bedrooms">Bedrooms</Label>
                <Input
                  id="bedrooms"
                  type="number"
                  value={formData.details.bedrooms}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      details: {
                        ...prev.details,
                        bedrooms: e.target.value,
                      },
                    }))
                  }
                  placeholder="Number of bedrooms"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bathrooms">Bathrooms</Label>
                <Input
                  id="bathrooms"
                  type="number"
                  value={formData.details.bathrooms}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      details: {
                        ...prev.details,
                        bathrooms: e.target.value,
                      },
                    }))
                  }
                  placeholder="Number of bathrooms"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="garages">Garages</Label>
                <Input
                  id="garages"
                  type="number"
                  value={formData.details.garages}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      details: {
                        ...prev.details,
                        garages: e.target.value,
                      },
                    }))
                  }
                  placeholder="Number of garages"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="area">Area (sqm)</Label>
                <Input
                  id="area"
                  type="number"
                  value={formData.details.area}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      details: { ...prev.details, area: e.target.value },
                    }))
                  }
                  placeholder="Property size"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="yearBuilt">Year Built</Label>
                <Input
                  id="yearBuilt"
                  type="number"
                  value={formData.details.yearBuilt}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      details: {
                        ...prev.details,
                        yearBuilt: e.target.value,
                      },
                    }))
                  }
                  placeholder="Year of construction"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features & Amenities */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-6">Features & Amenities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {amenities.map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <Checkbox
                    id={feature}
                    checked={formData.features.includes(feature)}
                    onCheckedChange={() => handleFeatureToggle(feature)}
                  />
                  <label
                    htmlFor={feature}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {feature}
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Image Upload */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-6">Property Images</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((file, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden border"
                  >
                    <img
                      src={file.preview}
                      alt={`Property ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 p-1 bg-black/50 rounded-full hover:bg-black/75 transition-colors"
                    >
                      <X className="h-4 w-4 text-white" />
                    </button>
                  </div>
                ))}
                {images.length < 8 && (
                  <label className="aspect-square rounded-lg border-2 border-dashed border-muted-foreground/25 hover:border-muted-foreground/50 cursor-pointer flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-muted-foreground/80 transition-colors">
                    <Upload className="h-8 w-8" />
                    <span className="text-sm">Upload Image</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      multiple
                    />
                  </label>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                Upload up to 8 images. First image will be the cover photo.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-center gap-4">
          <Button type="button" variant="outline">
            Save as Draft
          </Button>
          <Button type="submit">
            <Check className="mr-2 h-4 w-4" />
            Publish Listing
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty; 