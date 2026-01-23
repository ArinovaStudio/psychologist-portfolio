import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail, Award, ShieldCheck, Star } from "lucide-react"

export default function ConsultantSection() {
  return (
    <section className="w-full py-20 px-4">
      <div className="mx-auto max-w-3xl text-center space-y-8">
        {/* Heading */}
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Want a consultant?
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500">
            Let’s Discuss
          </h3>
        </div>

        {/* Email Input */}
        <div className="mx-auto flex max-w-xl items-center rounded-full border bg-white px-3 py-2 shadow-sm">
          <div className="flex items-center justify-center h-10 max-w-10! w-full rounded-full bg-orange-100 text-orange-500">
            <Mail className="h-4 w-4" />
          </div>

          <Input
            placeholder="Enter Email Address"
            className="border-none focus-visible:ring-0 shadow-none focus-visible:ring-offset-0 text-sm"
          />

          <Button className="ml-2 rounded-full bg-orange-500 hover:bg-orange-600 px-6">
            Send
          </Button>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Star size={20} fill="black" stroke="white" />
            <span>4.9/5 Average Ratings</span>
          </div>

          <div className="flex items-center gap-2">
            <Award size={20} fill="black" stroke="white" />
            <span>25+ Winning Awards</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck size={20} fill="black" stroke="white" />
            <span>Certified Product Designer</span>
          </div>
        </div>
      </div>
    </section>
  )
}
