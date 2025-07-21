import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bell,
  Mail,
  Smartphone,
  Globe,
  Clock,
  Shield,
  AlertTriangle,
  Save,
  User,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: {
        newInquiries: true,
        inquiryResponses: true,
        propertyViews: false,
        marketingUpdates: true,
      },
      push: {
        newInquiries: true,
        inquiryResponses: true,
        propertyViews: true,
        marketingUpdates: false,
      },
    },
    preferences: {
      language: "english",
      timezone: "africa-lusaka",
      currency: "zmw",
    },
  });

  const handleNotificationChange = (
    channel: "email" | "push",
    setting: string,
    value: boolean
  ) => {
    setSettings((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [channel]: {
          ...prev.notifications[channel],
          [setting]: value,
        },
      },
    }));
  };

  const handlePreferenceChange = (setting: string, value: string) => {
    setSettings((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [setting]: value,
      },
    }));
  };

  const handleSave = () => {
    // TODO: Implement settings update
    console.log("Save settings:", settings);
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account preferences and notifications
        </p>
      </div>

      {/* Profile Link Card */}
      <Card>
        <CardContent className="p-4">
          <Link to="/lister/profile">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-semibold">Profile Settings</h2>
                  <p className="text-sm text-muted-foreground">
                    Update your personal and business information
                  </p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>
          </Link>
        </CardContent>
      </Card>

      {/* Email Notifications */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Email Notifications</h2>
              <p className="text-sm text-muted-foreground">
                Choose what emails you'd like to receive
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {Object.entries(settings.notifications.email).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center justify-between py-3 border-b last:border-0"
              >
                <Label htmlFor={`email-${key}`} className="flex-1">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </Label>
                <Switch
                  id={`email-${key}`}
                  checked={value}
                  onCheckedChange={(checked) =>
                    handleNotificationChange("email", key, checked)
                  }
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Push Notifications */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Bell className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Push Notifications</h2>
              <p className="text-sm text-muted-foreground">
                Manage your mobile notifications
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {Object.entries(settings.notifications.push).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center justify-between py-3 border-b last:border-0"
              >
                <Label htmlFor={`push-${key}`} className="flex-1">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </Label>
                <Switch
                  id={`push-${key}`}
                  checked={value}
                  onCheckedChange={(checked) =>
                    handleNotificationChange("push", key, checked)
                  }
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Preferences</h2>
              <p className="text-sm text-muted-foreground">
                Customize your account settings
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Language</Label>
              <Select
                value={settings.preferences.language}
                onValueChange={(value) =>
                  handlePreferenceChange("language", value)
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="nyanja">Nyanja</SelectItem>
                  <SelectItem value="bemba">Bemba</SelectItem>
                  <SelectItem value="tonga">Tonga</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Time Zone</Label>
              <Select
                value={settings.preferences.timezone}
                onValueChange={(value) =>
                  handlePreferenceChange("timezone", value)
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="africa-lusaka">Africa/Lusaka (GMT+2)</SelectItem>
                  <SelectItem value="africa-johannesburg">Africa/Johannesburg (GMT+2)</SelectItem>
                  <SelectItem value="europe-london">Europe/London (GMT)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Currency</Label>
              <Select
                value={settings.preferences.currency}
                onValueChange={(value) =>
                  handlePreferenceChange("currency", value)
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="zmw">Zambian Kwacha (ZMW)</SelectItem>
                  <SelectItem value="usd">US Dollar (USD)</SelectItem>
                  <SelectItem value="gbp">British Pound (GBP)</SelectItem>
                  <SelectItem value="eur">Euro (EUR)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Security</h2>
              <p className="text-sm text-muted-foreground">
                Manage your account security settings
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              <Smartphone className="mr-2 h-4 w-4" />
              Enable Two-Factor Authentication
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Clock className="mr-2 h-4 w-4" />
              View Login History
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start text-red-600 hover:text-red-600 hover:bg-red-50"
            >
              <AlertTriangle className="mr-2 h-4 w-4" />
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-center">
        <Button onClick={handleSave} size="lg" className="w-full sm:w-auto">
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default Settings; 