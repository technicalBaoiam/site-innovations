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
          Welcome to Diuveens, your trusted destination for premium cosmetics
          and skincare products. We are dedicated to providing you with
          high-quality beauty solutions that enhance your natural glow. These
          Terms and Conditions outline the rules and regulations for the use of
          our website and the purchase of our products.
        </p>
        <p className="mb-3 sm:mb-4">
          By accessing and using the Diuveens website, you agree to comply with
          and be bound by the following terms and conditions. Please read them
          carefully. If you do not agree with any part of these terms, you are
          advised not to use our website.
        </p>
        <p>
          Our commitment is to ensure a satisfying and secure shopping
          experience for all our valued customers.
        </p>
      </section>

      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Products</h2>
        <h3 className="text-lg sm:text-xl font-bold mb-2">
          Product Information
        </h3>
        <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
          <li>
            The Diuveens strives to provide accurate and detailed descriptions
            of all products available on our website. However, we do not
            guarantee that the descriptions are entirely error-free, complete,
            or current.
          </li>
          <li>
            The images of products on our website are for illustrative purposes
            only. While we make every effort to display the colors accurately,
            we cannot guarantee that your device's display of the colors will
            accurately reflect the actual color of the products.
          </li>
        </ul>

        <h3 className="text-lg sm:text-xl font-bold mb-2">Pricing</h3>
        <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
          <li>
            All prices are subject to change without prior notice at the
            discretion of Diuveens.
          </li>
          <li>
            Prices for products are inclusive of applicable taxes unless stated
            otherwise.
          </li>
          <li>
            Shipping and handling charges will be added to the total price at
            checkout and are subject to change.
          </li>
        </ul>

        <h3 className="text-lg sm:text-xl font-bold mb-2">Availability</h3>
        <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
          <li>
            We strive to ensure that our product availability is accurate and up
            to date. However, we do not guarantee that all items will be in
            stock at the time of your order.
          </li>
          <li>
            In the event a product is unavailable after an order has been
            placed, we will notify you promptly and provide options for a
            substitute product, a backorder, or a full refund.
          </li>
        </ul>

        <h3 className="text-lg sm:text-xl font-bold mb-2">Use of Products</h3>
        <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
          <li>
            Our products are intended for personal use only and are not to be
            resold or redistributed without written permission from Diuveens.
          </li>
          <li>
            Please follow all usage instructions, warnings, and guidelines
            provided with the products to ensure proper use and to avoid adverse
            reactions.
          </li>
        </ul>

        <h3 className="text-lg sm:text-xl font-bold mb-2">
          Product Safety and Allergies
        </h3>
        <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
          <li>
            Diuveens takes product safety seriously and lists all ingredients on
            our product packaging and on our website. However, we are not liable
            for any allergic reactions or adverse effects caused by any of the
            ingredients used in our products.
          </li>
          <li>
            If you have any known allergies or sensitivities, please review the
            product ingredients carefully and consult with a healthcare
            professional before use.
          </li>
        </ul>
      </section>

      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
          Returns and Exchanges
        </h2>
        <p>
          Our returns and exchanges policy is detailed in a separate section of
          our Terms and Conditions. Please refer to the Returns and Exchanges
          section for information on how to return or exchange a product.
        </p>
      </section>

      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Website</h2>

        <h3 className="text-lg sm:text-xl font-bold mb-2">Eligibility</h3>
        <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
          <li>
            By using the Diuveens website, you confirm that you are at least 18
            years old or are accessing the site under the supervision of a
            parent or guardian.
          </li>
          <li>
            Users must ensure that all information provided during registration
            or any other interaction with our website is accurate, current, and
            complete.
          </li>
        </ul>

        <h3 className="text-lg sm:text-xl font-bold mb-2">Account Security</h3>
        <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
          <li>
            You are responsible for maintaining the confidentiality of your
            account information, including your password, and for all activities
            that occur under your account.
          </li>
          <li>
            You agree to notify Diuveens immediately of any unauthorized use of
            your account or any other breach of security.
          </li>
        </ul>

        <h3 className="text-lg sm:text-xl font-bold mb-2">
          Prohibited Activities
        </h3>
        <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
          <li>
            You agree not to engage in any activities that may harm or interfere
            with the functioning of the Diuveens website, including but not
            limited to:
          </li>
          <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
            <li>
              Uploading or distributing viruses, malware, or any other harmful
              software.
            </li>
            <li>
              Attempting to gain unauthorized access to our systems or networks.
            </li>
            <li>Using the website for any fraudulent or unlawful purpose.</li>
            <li>
              Copying, distributing, or disclosing any part of the website in
              any medium without our prior written consent.
            </li>
          </ul>
        </ul>

        <h3 className="text-lg sm:text-xl font-bold mb-2">
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
        </ul>
      </section>

      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
          Privacy Policy
        </h2>
        <p>
          Your use of the Diuveens website is also governed by our Privacy
          Policy, which can be found here. The Privacy Policy explains how we
          collect, use, and protect your personal information.
        </p>
      </section>

      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
          Modification and Termination
        </h2>
        <p>
          Diuveens reserves the right to modify, suspend, or terminate the
          website or any part thereof at any time without notice. We may also
          update these Terms and Conditions from time to time. Continued use of
          the website following any such changes constitutes your acceptance of
          the new terms.
        </p>
      </section>

      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
          Disclaimer of Warranties and Limitation of Liability
        </h2>
        <ul className="list-disc pl-5 sm:pl-8 mb-3 sm:mb-4">
          <li>
            The Diuveens website is provided on an "as is" and "as available"
            basis. We make no warranties, express or implied, regarding the
            operation or availability of the website or the information,
            content, or materials included on it.
          </li>
          <li>
            To the fullest extent permitted by law, Diuveens disclaims all
            warranties, express or implied, including but not limited to implied
            warranties of merchantability and fitness for a particular purpose.
          </li>
          <li>
            Diuveens will not be liable for any damages of any kind arising from
            the use of the website, including but not limited to direct,
            indirect, incidental, punitive, and consequential damages.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default TermsAndConditions;
