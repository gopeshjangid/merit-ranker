"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Mail, Phone, MapPin, Calendar, Award, BookOpen, Users } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="relative">
              <Avatar className="size-24 ring-4 ring-primary/20">
                <AvatarImage src="" alt="Dr. Sarah Johnson" />
                <AvatarFallback className="bg-gradient-to-br from-primary to-violet-600 text-white text-2xl font-bold">
                  SJ
                </AvatarFallback>
              </Avatar>
              <Button size="icon" variant="secondary" className="absolute -bottom-2 -right-2 size-8 rounded-full">
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold">Dr. Sarah Johnson</h2>
                  <p className="text-muted-foreground">Senior Teacher - Economics & Political Science</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">UPSC Expert</Badge>
                    <Badge variant="secondary">10+ Years Experience</Badge>
                    <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20">Verified</Badge>
                  </div>
                </div>
                <Button>Edit Profile</Button>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">1,234</div>
                <div className="text-xs text-muted-foreground">Students</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-violet-500/10">
                <BookOpen className="h-5 w-5 text-violet-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">89</div>
                <div className="text-xs text-muted-foreground">Courses</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-indigo-500/10">
                <Award className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-xs text-muted-foreground">Rating</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-green-500/10">
                <Calendar className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">523</div>
                <div className="text-xs text-muted-foreground">Classes</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Details Tabs */}
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="professional">Professional</TabsTrigger>
          <TabsTrigger value="bio">Bio & Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details and contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Sarah" defaultValue="Sarah" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Johnson" defaultValue="Johnson" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="flex gap-2">
                  <Mail className="h-4 w-4 mt-3 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="sarah.johnson@meritranker.com" defaultValue="sarah.johnson@meritranker.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="flex gap-2">
                  <Phone className="h-4 w-4 mt-3 text-muted-foreground" />
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="flex gap-2">
                  <MapPin className="h-4 w-4 mt-3 text-muted-foreground" />
                  <Input id="location" placeholder="New Delhi, India" defaultValue="New Delhi, India" />
                </div>
              </div>
              <Button className="w-full md:w-auto">Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="professional" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Professional Details</CardTitle>
              <CardDescription>Manage your teaching qualifications and expertise</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="qualification">Highest Qualification</Label>
                <Input id="qualification" placeholder="Ph.D. in Economics" defaultValue="Ph.D. in Economics" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialization">Specialization</Label>
                <Input id="specialization" placeholder="UPSC Civil Services" defaultValue="UPSC Civil Services" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <Input id="experience" type="number" placeholder="10" defaultValue="12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subjects">Subjects Taught (comma separated)</Label>
                <Input id="subjects" placeholder="Economics, Political Science, Current Affairs" defaultValue="Economics, Political Science, Current Affairs" />
              </div>
              <Button className="w-full md:w-auto">Update Professional Info</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bio" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Biography & Achievements</CardTitle>
              <CardDescription>Share your story and accomplishments with students</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bio">Professional Bio</Label>
                <Textarea 
                  id="bio" 
                  placeholder="Tell students about yourself..." 
                  className="min-h-32"
                  defaultValue="Experienced educator with a passion for helping students achieve their UPSC dreams. Specialized in Economics and Political Science with a proven track record of producing top rankers."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="achievements">Key Achievements</Label>
                <Textarea 
                  id="achievements" 
                  placeholder="List your major achievements..." 
                  className="min-h-24"
                  defaultValue="• Mentored 200+ UPSC selections&#10;• Published author of 'Economics for Civil Services'&#10;• AIR 15 in UPSC 2010"
                />
              </div>
              <Button className="w-full md:w-auto">Save Bio</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
