"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function ContactForm() {
    const [isSubmitted, setIsSubmitted] = React.useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate submission
        setTimeout(() => {
            setIsSubmitted(true)
        }, 1000)
    }

    if (isSubmitted) {
        return (
            <Card className="bg-card/50 border-primary/20">
                <CardContent className="pt-6 text-center space-y-4">
                    <div className="mx-auto h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. A telecom specialist will contact you shortly.</p>
                    <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="bg-card border-border">
            <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                <CardDescription>Tell us about your project or inquiry.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="fullname">Full Name</Label>
                            <Input id="fullname" placeholder="John Doe" required className="bg-background/50" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="john@company.com" required className="bg-background/50" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" placeholder="Acme Telecom" required className="bg-background/50" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="industry">Industry Focus</Label>
                        <select id="industry" defaultValue="" className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" required>
                            <option value="" disabled>Select an option</option>
                            <option value="operator">Telecom Operator</option>
                            <option value="mvno">MVNO/MVNE</option>
                            <option value="enterprise">Enterprise</option>
                            <option value="iot">IoT Provider</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Project Description</Label>
                        <Textarea id="message" placeholder="How can we help you?" required className="bg-background/50" rows={4} />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Submit Inquiry</Button>
                </CardFooter>
            </form>
        </Card>
    )
}
