import { useState } from "react";

import FAQItem from "./FAQItem";
import { faqs } from "./faqData";

function FAQRight() {
  const [activeFAQ, setActiveFAQ] = useState(0);

  const handleToggle = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <div className="space-y-5">
      {faqs.map((faq) => (
        <FAQItem
          key={faq.id}
          faq={faq}
          isOpen={activeFAQ === faq.id}
          onClick={() => handleToggle(faq.id)}
        />
      ))}
    </div>
  );
}

export default FAQRight;