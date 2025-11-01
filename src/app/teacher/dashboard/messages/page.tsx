"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Send, Paperclip, MoreVertical } from "lucide-react"
import { cn } from "@/lib/utils"

const conversations = [
  { id: 1, name: "Rahul Sharma", message: "Thank you for the explanation...", time: "2m ago", unread: 2, avatar: "", initials: "RS" },
  { id: 2, name: "Priya Patel", message: "Can you share the notes?", time: "1h ago", unread: 1, avatar: "", initials: "PP" },
  { id: 3, name: "Amit Kumar", message: "When is the next class?", time: "3h ago", unread: 0, avatar: "", initials: "AK" },
  { id: 4, name: "Sneha Reddy", message: "Got it, thanks!", time: "1d ago", unread: 0, avatar: "", initials: "SR" },
]

export default function MessagesPage() {
  return (
    <div className="h-[calc(100vh-8rem)]">
      <Card className="h-full flex flex-col md:flex-row overflow-hidden">
        {/* Conversations List */}
        <div className="w-full md:w-80 border-r flex flex-col">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search messages..." className="pl-9" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                className={cn(
                  "w-full p-4 flex items-start gap-3 hover:bg-muted/50 transition-colors border-b",
                  conv.id === 1 && "bg-muted/50"
                )}
              >
                <Avatar className="size-10">
                  <AvatarImage src={conv.avatar} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-violet-600 text-white text-sm">
                    {conv.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-sm">{conv.name}</span>
                    <span className="text-xs text-muted-foreground">{conv.time}</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-1">
                    <p className="text-sm text-muted-foreground truncate">{conv.message}</p>
                    {conv.unread > 0 && (
                      <Badge className="h-5 min-w-5 px-1.5 flex items-center justify-center rounded-full text-xs">
                        {conv.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="size-10">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-to-br from-primary to-violet-600 text-white">
                  RS
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">Rahul Sharma</h3>
                <p className="text-xs text-muted-foreground">Active now</p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="flex gap-3">
              <Avatar className="size-8">
                <AvatarFallback className="bg-gradient-to-br from-primary to-violet-600 text-white text-xs">
                  RS
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="bg-muted rounded-lg p-3 max-w-md">
                  <p className="text-sm">Hi ma'am, I have a doubt about the fiscal policy chapter.</p>
                </div>
                <span className="text-xs text-muted-foreground ml-2 mt-1">10:30 AM</span>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <div className="flex-1 flex flex-col items-end">
                <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-md">
                  <p className="text-sm">Sure Rahul! What specific topic are you confused about?</p>
                </div>
                <span className="text-xs text-muted-foreground mr-2 mt-1">10:32 AM</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Avatar className="size-8">
                <AvatarFallback className="bg-gradient-to-br from-primary to-violet-600 text-white text-xs">
                  RS
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="bg-muted rounded-lg p-3 max-w-md">
                  <p className="text-sm">The difference between fiscal deficit and revenue deficit. Can you explain with an example?</p>
                </div>
                <span className="text-xs text-muted-foreground ml-2 mt-1">10:33 AM</span>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <div className="flex-1 flex flex-col items-end">
                <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-md">
                  <p className="text-sm">Great question! Fiscal deficit is the difference between total expenditure and total receipts (excluding borrowings). Revenue deficit is when revenue expenditure exceeds revenue receipts. I'll share detailed notes with examples in our next class.</p>
                </div>
                <span className="text-xs text-muted-foreground mr-2 mt-1">10:35 AM</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Avatar className="size-8">
                <AvatarFallback className="bg-gradient-to-br from-primary to-violet-600 text-white text-xs">
                  RS
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="bg-muted rounded-lg p-3 max-w-md">
                  <p className="text-sm">Thank you for the explanation! Looking forward to the detailed notes.</p>
                </div>
                <span className="text-xs text-muted-foreground ml-2 mt-1">Just now</span>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Input placeholder="Type a message..." className="flex-1" />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
