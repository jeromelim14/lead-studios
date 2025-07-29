import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
}

const Faq1 = ({
  heading = "Frequently Asked Questions",
  items = [
    {
      question: "Do you Have Any Performance Guarantee?",
      answer:
        "No. We do not offer any unrealistic \"50 calls in 14 days or you don't pay\" guarantees. All we guarantee is building out a sales funnel that puts your offer in front of 1000s of high-intent leads in your ICP daily, with proven sales scripts and the tech set-up completely done for you. Besides, if our objective really was to help you book tons of calls, we wouldn't focus on ICP targeting - we'd just blast everyone to hit call quotas. But 5 calls from your exact ICP are worth more than 50 random calls that waste your time. We build systems for quality (eg: better clients with higher lifetime value), not quantity.",
    },
    {
      question: "Are You Just An Email Marketing Agency?",
      answer:
        "No. Unlike 'marketing agencies', we build-and-release complete email systems that you own forever. Agencies rent you results for monthly fees; we hand over the asset once and you keep everything. When we're done, you have a permanent lead generation system, not an ongoing vendor dependency.",
    },
    {
      question: "Why Do You Not Sell Email Marketing Services?",
      answer:
        "We believe not in selling results, but in selling systems. When the right systems are built, the results will follow. It is up to you to decide whether getting thousands of your most ideal customers to see your offer every single day will help you set more appointments and grow your business and enterprise value.",
    },
    {
      question: "What If I Am Already Spending Money On Marketing?",
      answer:
        "This system actually complements any existing marketing efforts. For less than the cost of one month with other traditional agencies, you get a permanent asset that can generate leads consistently without monthly fees or agency dependencies.",
    },
    {
      question: "How Long Does It Take To Get The System Up And Running?",
      answer:
        "Our Lead Studios System is fully set-up and ready to go in just 14 days, and will take another 2 weeks to be fully warmed up and capable to send 1000s of emails a day. This is unlike traditional agencies that take 30-60 days or in-house teams that need 60+ days. You'll have a complete, ready-to-use system within two weeks.",
    },
    {
      question: "What About Other Ways To Schedule Appointments Like Paid Ads And Content?",
      answer:
        "Although those are pretty good options, they each do come with their own complexities. Paid Ads are 'risky' as you run the risk of burning advertising dollars without much of a return on your money. Content is great, but takes much effort and requires you to be consistent for a long time. The truth is, there's more than one way to book more calls for your SaaS. Paid ads and content can work great, but if you want a fast and predictable way to get in front of decision-makers without gambling ad spend or waiting months for content to rank- look no further.",
    },
    {
      question: "What happens if I want to make changes to the system after the 14 days?",
      answer:
        "That's the beauty of owning your system - you can make any changes you want! We provide complete documentation and training so you understand exactly how everything works. Want to test new email scripts? Update your ICP? Add more domains? Scale to more emails per day? You can do all of this because you own all the assets. Unlike agencies where you have to request changes and pay extra fees, you have complete control over your system.",
    },
    {
      question: "I'm already doing some cold email - can you work with my existing setup?",
      answer:
        "Absolutely. We can audit your current setup and integrate it into our system where it makes sense. If you already have domains and they're healthy, we can use them. If you have email accounts that aren't burned, we can incorporate them. However, if your current setup has deliverability issues or isn't properly configured, we'll recommend starting fresh to ensure maximum performance. During our discovery call, we'll assess your existing infrastructure and give you a clear recommendation.",
    },
    {
      question: "What if my industry is too niche or specialized?",
      answer:
        "Our ICP discovery process is specifically designed to work with any B2B market, no matter how specialized. In fact, niche industries often work better because there's less competition in their inboxes. The more specific your niche, the more targeted we can make your messaging - which typically leads to higher response rates and better qualified leads. Our framework adapts to any B2B market where decision-makers use email.",
    },
    {
      question: "How do I know if this will work for my specific business model?",
      answer:
        "If you're a B2B SaaS doing $100K+ ARR and your ideal customers are businesses (not consumers), this system will work. The fundamentals of B2B cold email don't change based on your specific product - what changes is the messaging and targeting, which we customize completely for your business. The key is having a clear ICP and a defined sales process, which we help you develop during the discovery phase.",
    },
  ],
}: Faq1Props) => {
  return (
    <section className="py-20 px-6 bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12 text-4xl md:text-5xl font-normal text-white text-center font-['Castoro']">
          {heading}
        </h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <Accordion key={index} type="single" collapsible className="w-full">
              <AccordionItem value={`item-${index}`} className="border-gray-700">
                <AccordionTrigger className="text-left hover:text-white/80 hover:no-underline text-white font-medium text-lg py-6 font-['Inter'] capitalize">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-base leading-relaxed pb-6 font-['Inter']">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Faq1 };