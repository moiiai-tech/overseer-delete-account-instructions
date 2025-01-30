import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav>
        <Link href={"https://moiiai.com/"}><Image src="/moiiai-new.svg" width={150} alt="Logo" height={40} /></Link>

      </nav>
      <main className="flex flex-col gap-12 items-center ">
        <h1 className="text-4xl font-medium">Data Deletion Policy & FAQs</h1>
        <Accordion type="single" collapsible className="w-full min-w-[60vw]">
          <AccordionItem value="item-1">
            <AccordionTrigger>How can I delete my data?</AccordionTrigger>
            <AccordionContent>
              You can delete your data by navigating to the <strong>Settings</strong> section in the app.
              Once logged in, you will find an option to delete your account and associated data.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What happens when I delete my data?</AccordionTrigger>
            <AccordionContent>
              When you choose to delete your data, all your personal information, account details, and associated records will be permanently removed from our system.
              This action is irreversible.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I recover my data after deletion?</AccordionTrigger>
            <AccordionContent>
              No. Once your data is deleted, it cannot be recovered. Please ensure that you back up any important information before proceeding with deletion.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How long does it take to process the deletion?</AccordionTrigger>
            <AccordionContent>
              Data deletion is processed immediately, but it may take up to 24 hours for all records to be completely removed from our system.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Do you retain any data after deletion?</AccordionTrigger>
            <AccordionContent>
              No. Once a user deletes their account, all data associated with it is permanently removed.
              However, some legal or regulatory requirements may require us to retain minimal data for compliance purposes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm">© 2025 MoiiAi Inc</p>
      </footer>
    </div>
  );
}
