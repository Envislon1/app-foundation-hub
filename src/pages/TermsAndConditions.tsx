import PageLayout from "@/components/PageLayout";
import { FileText } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <PageLayout>
      {/* Header */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <FileText className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">
            Terms & Conditions
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-lg shadow-soft p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>

                <div className="space-y-8">
                  <div className="p-6 rounded-lg bg-muted border-l-4 border-secondary">
                    <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                      Terms & Conditions Content Coming Soon
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The full terms and conditions content will be added here. This page is 
                      prepared for your app's PlayStore requirements. Please provide the terms 
                      and conditions text you'd like to display.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                      Sections to Include:
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        Acceptance of Terms
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        Use of Services
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        User Responsibilities
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        Intellectual Property
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        Limitation of Liability
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        Governing Law
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        Contact Information
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                If you have questions about these terms, please contact us at{" "}
                <a href="tel:+2348180286858" className="text-primary hover:underline">
                  +234 818 028 6858
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TermsAndConditions;
