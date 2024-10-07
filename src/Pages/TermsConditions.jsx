import React, { useEffect } from "react";

const TermsAndConditions = () => {
  document.title = "Baoiam Innovations | Terms & Conditions";
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {};
  }, []);

  return (
    <div className="bg-white text-black p-4 sm:p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
        TERMS & CONDITIONS
      </h1>
      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
          Introduction
        </h2>
        <p className="mb-3 sm:mb-4">
        Welcome to Baoiam, an ed-tech platform that provides various courses, including but not limited to art and craft, creative writing, and machine learning. By using our website or enrolling in any of our courses, you agree to be bound by the following Terms and Conditions. If you do not agree with these terms, please refrain from using our services.
        </p>
        {/* <p className="mb-3 sm:mb-4">
          By accessing and using the Diuveens website, you agree to comply with
          and be bound by the following terms and conditions. Please read them
          carefully. If you do not agree with any part of these terms, you are
          advised not to use our website.
        </p>
        <p>
          Our commitment is to ensure a satisfying and secure shopping
          experience for all our valued customers.
        </p> */}
      </section>
      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">User Accounts</h2>
        {/* <h3 className="text-lg sm:text-xl font-bold mb-2">
          Product Information
        </h3> */}
        <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
          <li>
          To access certain features of Baoiam, you may be required to create an account.
          </li>
          <li>
          You are responsible for maintaining the confidentiality of your account credentials.
          </li>
          <li>
          You must provide accurate and complete information when creating an account and keep this information updated.
          </li>
          <li>
          Baoiam reserves the right to terminate accounts at its discretion, including but not limited to cases where the user violates these Terms and Conditions.
          </li>
        </ul>

        <h3 className="text-lg sm:text-xl font-bold mb-2">Course Enrollment</h3>
        <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
          <li>
          Enrollment in any course is subject to availability and the payment of applicable fees.
          </li>
          <li>
          Baoiam reserves the right to change course content, instructors, or schedules without prior notice.
          </li>
          {/* <li>
            Shipping and handling charges will be added to the total price at
            checkout and are subject to change.
          </li> */}
        </ul>

        <h3 className="text-lg sm:text-xl font-bold mb-2">User Conduct</h3>
        <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
          <li>
          You agree to use our platform only for lawful purposes and in a manner that does not infringe the rights of others.
          </li>
          <li>
          The use of any Baoiam content for commercial purposes without our express consent is strictly prohibited.
          </li>
        </ul>

        <h3 className="text-lg sm:text-xl font-bold mb-2">intellectual Property</h3>
        <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
          <li>
          All course content, including text, videos, images, and other materials, is the intellectual property of Baoiam or its licensors.
          </li>
          <li>
          You may not copy, distribute, or create derivative works from any of our content without our express written permission.
          </li>
        </ul>

        <h3 className="text-lg sm:text-xl font-bold mb-2">
        Limitation of Liability
        </h3>
        <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
          <li>
          Baoiam is not liable for any indirect, incidental, or consequential damages arising from your use of our services.
          </li>
          <li>
          Our platform is provided "as is" without any warranties, either express or implied.
          </li>
        </ul>
      </section>
      <section className="mb-8">
          <h2 className="text-xl mb-2 font-bold">Changes to Terms</h2>
          <p>Baoiam reserves the right to update these Terms and Conditions at any time. Any changes will be effective immediately upon posting on our website.</p>
      </section>
        <hr/>
      <section className="mb-6 sm:mb-8 py-5">
      <h1 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6 text-center">
      Privacy Policy
      </h1>
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
          Introduction
      </h2>
        <p>
        At Baoiam, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our platform.
        </p>
      </section>
      <section className="mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-xl font-bold mb-3 sm:mb-4">
        Information We Collect
        </h3>
        <p>
          <span className="font-bold">Personal Information:</span> When you register for an account or enroll in a course, we may collect personal details such as your name, email address, and phone number.
        </p>
        <p>
          <span className="font-bold">Payment Information:</span> For paid courses, we collect payment information, including billing details and credit/debit card information, processed securely by third-party payment processors.
        </p>
        <p>
          <span className="font-bold">Usage Data:</span> We may collect information about how you access and interact with our website, including your IP address, browser type, and device information.
        </p>
      </section>
      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-xl font-bold mb-3 sm:mb-4">
        How We Use Your Information
        </h2>
        <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
          <li>
          To provide and manage your account and deliver course content.
          </li>
          <li>
          To improve our services based on your feedback and usage.
          </li>
          <li>
          To send promotional offers or updates about new courses, if you have opted to receive them.
          </li>
        </ul>
      </section>
      <section className="md:mb-3 mb-6 sm:mb-8">
      <h2 className="text-xl sm:text-xl font-bold  mb-3 sm:mb-4">
       Data Sharing and Security
        </h2>
        <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
          <li>
          We do not sell or share your personal data with third parties, except where necessary to provide our services (e.g., payment processors) or as required by law.
          </li>
          <li>
          We implement reasonable security measures to protect your data, but no method of transmission over the internet is completely secure.
          </li>
        </ul>
      </section>
      <section className="md:mb-4 mb-6 sm:mb-8">
       <h2 className="text-xl sm:text-xl font-bold md:mb-2 mb-3 sm:mb-4">
       Cookies
       </h2>
       <p>
       We use cookies to enhance your experience on our platform. You can control the use of cookies through your browser settings.
       </p>
      </section>
      <section className="mb-6 sm:mb-8">
       <h2 className="text-xl sm:text-xl font-bold md:mb-2 mb-3 sm:mb-4">
       Changes to Privacy Policy
       </h2>
       <p>
       Baoiam reserves the right to modify this Privacy Policy at any time. Changes will be posted on our website, and your continued use of the platform implies acceptance of the updated policy.
       </p>
      </section>
      <hr/>
      <section className="mb-6 py-5 sm:mb-8">
       <h1 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6 text-center">
       Refund Policy
      </h1>
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
          Introduction
      </h2>
        <p>
        At Baoiam, we strive to provide quality educational content. However, if you are not satisfied with your course, please review the following Refund Policy.
        </p>
      </section>
      <section className="mb-6 sm:mb-8">
        <h3 className="md:text-xl text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Eligibility for Refunds </h3>

        {/* <h3 className="text-lg sm:text-xl font-bold mb-2">Eligibility</h3> */}
        <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
          <li>
          Refunds will only be provided for courses that are not completed.
          </li>
          <li>
          If you have accessed more than 25% of the course content, you will not be eligible for a refund.
          </li>
          <li>
          Requests for refunds must be made within 7 days of purchase.
          </li>
        </ul>

        <h3 className="text-lg sm:text-xl font-bold mb-2">Process for Refunds</h3>
        <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
          <li>
          To request a refund, please contact our support team at [support@baoiam.com] with your order details.
          </li>
          <li>
          Once your refund request is approved, we will process your refund within 7-10 business days.
          </li>
          <li>
          Refunds will be processed to the original method of payment.
          </li>
        </ul>

        <h3 className="text-lg sm:text-xl font-bold mb-2">
        Non-Refundable Services
        </h3>
        <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
          <li>
          Custom mentorship, counseling services, or offline classes are non-refundable once availed.
          </li>
          <li>
            Promotional or discounted courses may not be eligible for refunds unless specified.
          </li>
          </ul>

        {/* <h3 className="text-lg sm:text-xl font-bold mb-2">
          Intellectual Property
        </h3>
        <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
          <li>
            All content on the Diuveens website, including text, graphics,
            logos, images, and software, is the property of Diuveens or its
            content suppliers and is protected by intellectual property laws.
          </li>
          <li>
            You may not use, reproduce, modify, or distribute any content from
            our website without our prior written permission.
          </li>
        </ul>

        <h3 className="text-lg sm:text-xl font-bold mb-2">User Content</h3>
        <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
          <li>
            Any content you submit to Diuveens, including reviews, comments, and
            suggestions, becomes the property of Diuveens.
          </li>
          <li>
            You grant us a non-exclusive, royalty-free, perpetual, and
            irrevocable right to use, reproduce, modify, adapt, publish,
            translate, create derivative works from, distribute, and display
            such content.
          </li>
          <li>
            You agree not to submit any content that is unlawful, defamatory,
            obscene, threatening, infringing on intellectual property rights, or
            otherwise objectionable.
          </li>
        </ul>

        <h3 className="text-lg sm:text-xl font-bold mb-2">Third-Party Links</h3>
        <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
          <li>
            The Diuveens website may contain links to third-party websites for
            your convenience. We do not endorse or take responsibility for the
            content, privacy policies, or practices of any third-party websites.
          </li>
          <li>
            You acknowledge and agree that Diuveens is not liable for any loss
            or damage caused by your use of any third-party websites.
          </li>
        </ul> */}

      <section className="mb-6 sm:mb-8">
       <h2 className="text-xl sm:text-xl font-bold md:mb-2 md-3 sm:mb-4">
       Changes to Refund Policy
       </h2>
       <p>
       Baoiam reserves the right to amend this Refund Policy at any time. Changes will be effective immediately and will be posted on our website.
       </p>
      </section>

      </section>
    </div>
  );
};

export default TermsAndConditions;
