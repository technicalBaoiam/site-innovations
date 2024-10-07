import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const faqs = [
  {
    question: "Q1. How does the 'Intern Teach Intern Earn' program work?",
    answer: (
      <div>
        <p>After completing the course, Interns can opt for teaching.</p>
        <ul className="list-disc list-inside">
          <li>You will first be tested on your skills and expertise.</li>
          <li>If you clear the tests, go to the ITIE section.</li>
          <li>Enter your Email ID and click on Become a Trainer.</li>
          <li>We will match you with an Intern who is looking to study the same course as you.</li>
          <li>After completing the teaching session, Interns will earn compensation and incentives.</li>
        </ul>
      </div>
    ),
  },
  // {
  //   question: "Q2. What is the procedure for signing up on the website?",
  //   answer: (
  //     <div>
  //       <p>The sign-up procedure for our website consists of 4 simple steps:</p>
  //       <ul className="list-disc list-inside">
  //         <li>Go to our website and click on the Login button and then the Signup button or just click this link <a  href="http://www.baoiam.com/Login/index.html" className="text-blue-600 underline">baoiam.com</a></li>
  //         <li>Enter a Username of your choice.</li>
  //         <li>Enter your Email ID.</li>
  //         <li>Create a strong password with uppercase, lowercase, numbers, and special characters.</li>
  //         <li>Click on Sign up and there you go, you are now a part of the Baoiam family!</li>
  //       </ul>
  //     </div>
  //   ),
  // },
  // {
  //   question: "Q3. How do I enroll or register, if I am interested in an online course?",
  //   answer: (
  //     <div>
  //       <p>The enrollment process is as easy as the sign-up process.</p>
  //       <ul className="list-disc list-inside">
  //       <li>Take a Dashboard tour and head to the Courses section.</li>
  //       <li>You will find a wide range of specially curated courses.</li>
  //       <li>Explore them and choose the one you like.</li>
  //       <li>Click on Enroll Now.</li>
  //       </ul>
  //     </div>
  //   ),
  // },
  // {
  //   question: "Q4. What kind of skill-based courses do you offer?",
  //   answer: (
  //     <div>
  //       <p>We offer a wide range of courses like Web Development, Data Analytics, Graphic Designing, Human Resources, Product Management, Strategic Marketing, SEO, Business Communication, and UI/UX. Head to the Courses section to explore many such skills-centric courses.</p>
  //     </div>
  //   ),
  // },
  {
    question: "Q2. Can I opt for more than one course at a time?",
    answer: (
      <div>
        <p>Yes, we offer the flexibility to choose multiple courses at once, with discounts available for bundled purchases. Since course durations vary based on lessons, modules, and difficulty, and are listed on their respective pages. </p>
      </div>
    ),
  },
  // {
  //   question: "Q6. How long does each course take?",
  //   answer: (
  //     <div>
  //       <p>Each course is timed differently depending on the lessons, modules and degree of difficulty. The duration of each course is mentioned on their respective course pages.</p>
  //     </div>
  //   ),
  // },
  {
    question: "Q3. Do you provide any study material? ",
    answer: (
      <div>
        <p>
        Yes, we provide downloadable study material for anytime access and offer live classes for better interaction and engagement.</p>
      </div>
    ),
  },
  {
    question: "Q4. Will I have access to recorded sessions if I miss live classes, and are there regular doubt-clearing sessions?",
    answer: (
      <div>
        <p>Yes, we understand balancing college or work with studies can be tough, so you'll have access to recorded sessionsand even regular doubt-clearing sessions are also a key feature at Baoiam to ensure you gain complete understanding.</p>
      </div>
    ),
  },
  // {
  //   question: "Q9. Will I gain access to the recorded sessions if I’m unable to attend the live classes?",
  //   answer: (
  //     <div>
  //       <p>Yes, we understand that juggling your college studies or work and course studies might be hard, so you will be able to access the recorded sessions.</p>
  //     </div>
  //   ),
  // },
  // {
  //   question: "Q10. Will there be regular doubt-clearing sessions?",
  //   answer: (
  //     <div>
  //       <p>Yes, the doubt-clearing session is one of the key features of Baoiam, as we don't want our students to have half-baked knowledge.</p>
  //     </div>
  //   ),
  // },
  {
    question: "Q5. Will I get a 'Certificate of Completion' after completing the course?",
    answer: (
      <div>
        <p>
        Yes, you will receive a Certificate of Completion after attending all classes, completing assignments and projects, and achieving good test scores. This certificate can open doors to your desired career by showcasing your training and skills in your field.</p>
      </div>
    ),
  },
  {
    question: "Q6. How do I contact Customer Care for technical or payment issues?",
    answer: (
      <div>
        <ul className="list-disc list-inside">
            <li>Send us an email : <a href="mailto:tutors@baoiam.com" className='text-blue-600 underline'>tutors@baoiam.com </a></li>
            <li>Give us a ring : <a href="tel:+91-8062179867" className='text-blue-600 underline'>+91-8062179867</a>  </li>
        </ul>
      </div>
    ),
  },
];



const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {

    gsap.fromTo('.en12',{opacity:0,y:30},{
      opacity:1,
      y:0,
      duration:1,
      ease:'power1.inOut',
      stagger:0.3,
      scrollTrigger:{
        trigger:'.endiv6',
        start:'top 90%',
        end:'bottom 80%'
      }
    })
  
  },[])

  return (
    <div className="en12 border rounded-lg mx-5 shadow-lg  text-gray-600 px-8 my-4">
      <button
        className="w-full text-left flex justify-between items-center py-4 text-base md:text-lg text-black dark:text-slate-200 font-bold dark:hover:text-indigo-200 hover:text-indigo-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="ml-2">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="py-4 dark:text-slate-300">
          <hr className=" border-gray-300 mb-4" />
          {answer}
        </div>
      )}
    </div>
  );
};





const Faq = () => {
  document.title = "Baoiam Innovations | Faqs";
  useEffect(() => {
    gsap.fromTo('.en12',{opacity:0,y:30},{
      opacity:1,
      y:0,
      duration:1,
      ease:'power1.inOut',
      stagger:0.3,
      scrollTrigger:{
        trigger:'.endiv6',
        start:'top 90%',
        end:'bottom 80%'
      }
    })
  
  },[])

  return (
    <div className="max-w-3xl mx-auto my-10 ">
      {/* <h2 className="font-bold text-4xl text-center mb-8 mt-20 mx-5 ">
        Frequently Asked <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">Questions</span>
      </h2> */}

      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default Faq;
