import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import faqContent from './data.json';

const Faq = () => {
  return (
    <section className="w-full mt-24">
      <div className="width__wrapper mx-auto">
        <div className="text-center">
          <p>Frequently Asked Question</p>
          <h1 className="font-semibold font-heading">Punya Pertanyaan Lain?</h1>
        </div>

        <Accordion type="single" collapsible className="w-full my-12">
          {faqContent.faq.map((item, index) => (
            <AccordionItem value={`faq-${index}`} key={`faq-${index}`}>
              <AccordionTrigger className="text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance ">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
