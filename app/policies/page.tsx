import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Legal Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Tabs defaultValue="privacy" className="w-full md:col-span-1">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
            <TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
          </TabsList>
          <div className="md:col-span-3">
          <TabsContent value="privacy">
            <ScrollArea className="h-[600px] w-full rounded-md border p-4">
              <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
              <p className="mb-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="mb-4">
                At [Your Company Name], we respect your privacy and are committed to protecting it through our compliance with this policy.
              </p>
              <h3 className="text-xl font-semibold mb-2">1. Information We Collect</h3>
              <p className="mb-4">
                We collect several types of information from and about users of our website, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Personal data: Name, email address, telephone number, etc.</li>
                <li>Usage data: IP address, browser type, operating system, etc.</li>
                <li>Marketing and communications data: Your preferences in receiving marketing from us.</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">2. How We Use Your Information</h3>
              <p className="mb-4">
                We use information that we collect about you or that you provide to us, including any personal information:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>To present our website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>To carry out our obligations and enforce our rights.</li>
                <li>To notify you about changes to our website or any products or services we offer or provide though it.</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">3. Disclosure of Your Information</h3>
              <p className="mb-4">
                We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>To our subsidiaries and affiliates.</li>
                <li>To contractors, service providers, and other third parties we use to support our business.</li>
                <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of [Your Company Name]'s assets.</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">4. Data Security</h3>
              <p className="mb-4">
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
              </p>
              <h3 className="text-xl font-semibold mb-2">5. Changes to Our Privacy Policy</h3>
              <p className="mb-4">
                It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the website home page.
              </p>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="terms">
            <ScrollArea className="h-[600px] w-full rounded-md border p-4">
              <h2 className="text-2xl font-semibold mb-4">Terms and Conditions</h2>
              <p className="mb-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="mb-4">
                Please read these terms and conditions carefully before using Our Service.
              </p>
              <h3 className="text-xl font-semibold mb-2">1. Interpretation and Definitions</h3>
              <p className="mb-4">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
              <h3 className="text-xl font-semibold mb-2">2. Acknowledgment</h3>
              <p className="mb-4">
                These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
              </p>
              <h3 className="text-xl font-semibold mb-2">3. User Accounts</h3>
              <p className="mb-4">
                When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service.
              </p>
              <h3 className="text-xl font-semibold mb-2">4. Content</h3>
              <p className="mb-4">
                Our Service allows You to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that You post to the Service, including its legality, reliability, and appropriateness.
              </p>
              <h3 className="text-xl font-semibold mb-2">5. Prohibited Uses</h3>
              <p className="mb-4">
                You may use the Service only for lawful purposes and in accordance with Terms. You agree not to use the Service:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>In any way that violates any applicable national or international law or regulation.</li>
                <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">6. Termination</h3>
              <p className="mb-4">
                We may terminate or suspend Your Account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately.
              </p>
              <h3 className="text-xl font-semibold mb-2">7. Limitation of Liability</h3>
              <p className="mb-4">
                To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
              </p>
            </ScrollArea>
          </TabsContent>
        </div>
        </Tabs>
      </div>
    </div>
  )
}