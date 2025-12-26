"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Phone, Video, Info, Search, Paperclip } from "lucide-react"
import { useState } from "react"

const CONTACTS = [
  { id: 1, name: "Dr. Anjali Sharma", role: "Practitioner", status: "online", lastMsg: "How is your digestion today?" },
  {
    id: 2,
    name: "Dr. Vikram Seth",
    role: "Practitioner",
    status: "offline",
    lastMsg: "The herbs were sent yesterday.",
  },
  { id: 3, name: "Dhanvantari Support", role: "Admin", status: "online", lastMsg: "Your verification is complete." },
]

export default function ChatPage() {
  const [selectedContact, setSelectedContact] = useState(CONTACTS[0])

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-background">
      {/* Sidebar - Contact List */}
      <div className="w-80 border-r flex flex-col bg-muted/10">
        <div className="p-4 border-b space-y-4">
          <h1 className="text-xl font-serif font-bold text-primary">Messages</h1>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input className="pl-8 bg-background" placeholder="Search conversations..." />
          </div>
        </div>
        <ScrollArea className="flex-1">
          {CONTACTS.map((contact) => (
            <button
              key={contact.id}
              onClick={() => setSelectedContact(contact)}
              className={`w-full p-4 flex items-center gap-3 transition-colors hover:bg-muted/50 ${
                selectedContact.id === contact.id ? "bg-primary/10 border-r-4 border-primary" : ""
              }`}
            >
              <div className="relative">
                <Avatar>
                  <AvatarImage src={`/.jpg?height=40&width=40&query=${contact.name}`} />
                  <AvatarFallback>{contact.name[0]}</AvatarFallback>
                </Avatar>
                {contact.status === "online" && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-background rounded-full" />
                )}
              </div>
              <div className="flex-1 text-left">
                <div className="flex justify-between">
                  <span className="font-bold text-sm">{contact.name}</span>
                  <span className="text-[10px] text-muted-foreground uppercase">{contact.role}</span>
                </div>
                <p className="text-xs text-muted-foreground truncate">{contact.lastMsg}</p>
              </div>
            </button>
          ))}
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <header className="p-4 border-b flex items-center justify-between bg-background">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={`/.jpg?height=40&width=40&query=${selectedContact.name}`} />
              <AvatarFallback>{selectedContact.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-bold">{selectedContact.name}</p>
              <p className="text-xs text-emerald-600 font-medium">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Phone className="size-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="size-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Info className="size-4" />
            </Button>
          </div>
        </header>

        {/* Message Feed */}
        <ScrollArea className="flex-1 p-6 space-y-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 max-w-[70%]">
              <div className="bg-muted p-3 rounded-2xl rounded-tl-none">
                <p className="text-sm">Namaste! How are you feeling after starting the Triphala regimen?</p>
              </div>
              <span className="text-[10px] text-muted-foreground ml-1">10:30 AM</span>
            </div>

            <div className="flex flex-col gap-1 max-w-[70%] self-end">
              <div className="bg-primary text-primary-foreground p-3 rounded-2xl rounded-tr-none">
                <p className="text-sm">
                  Namaste Dr. Sharma. I've noticed a significant improvement in my energy levels already.
                </p>
              </div>
              <span className="text-[10px] text-muted-foreground mr-1 text-right">10:32 AM</span>
            </div>
          </div>
        </ScrollArea>

        {/* Message Input */}
        <footer className="p-4 border-t bg-background">
          <form className="flex items-center gap-2">
            <Button variant="ghost" size="icon" type="button">
              <Paperclip className="size-4" />
            </Button>
            <Input className="flex-1" placeholder="Type your message..." />
            <Button size="icon" type="submit" className="rounded-full">
              <Send className="size-4" />
            </Button>
          </form>
        </footer>
      </div>
    </div>
  )
}
