/**
 * @module IntroData
 * @description Contains introductory and support data for the website or component.
 */

/**
 * Object containing the introductory content.
 * @typedef {Object} IntroContent
 * @property {string} subtitle - Subtitle for the introduction section.
 * @property {string[]} titleArray - Array of title segments to be displayed.
 * @property {string} description - Description of the introduction.
 * @property {string[]} images - Array of image file paths for display.
 */

/**
 * Introductory data object.
 * @constant {IntroContent}
 */
export const IntroDatas = {
  subtitle: 'About us',
  titleArray: ["I'm on a mission to make", 'building better UIs effortless'],
  description: "Together, we are enabling developers & designers to bring stunning UIs to life with unrivalled speed and ease.",
  images: Array(4).fill("owner.jpg"),
};

/**
 * Object containing data for the "Join Us" section.
 * @typedef {Object} JoinUsContent
 * @property {string} subtitle - Subtitle for the join us section.
 * @property {string[]} titleArray - Array of title segments for the join us section.
 * @property {string} description - Description encouraging users to join.
 * @property {string} image - Image file path for the join us section.
 */

/**
 * "Join Us" data object.
 * @constant {JoinUsContent}
 */
export const JoinUsData = {
  subtitle: 'Join us',
  titleArray: ['Build the next generation', 'of tools for UI development'],
  description: "We are always looking for talented people to join our team. If you are passionate about building great products, we would love to hear from you.",
  image: 'join-us.png',
};

/**
 * Object containing data for the "Privacy Policy" section.
 * @typedef {Object} PrivacyPolicyContent
 * @property {string} label - Label for the privacy policy section.
 * @property {string} content - Content for the privacy policy section.
 */

/**
 * Privacy Policy data array.
 * @constant {PrivacyPolicyContent[]}
 * @description Array containing privacy policy data objects.
 * Each object represents a section of the privacy policy.
 * The content is in HTML format for styling and formatting.
 * The image and alt properties are optional.
 */
export const PrivacyPolicyData = [
  {
    label: "Introduction",
    content: `
              <p>Welcome to <strong style="color: hsl(210, 100%, 45%);">AestheticHub</strong>! I appreciate your trust in me and am committed to protecting your privacy. 
              Your privacy and security are my top priorities, and I strive to handle your personal data responsibly and transparently.</p>
              <p>At <strong style="color: hsl(210, 100%, 45%);">AestheticHub</strong>, I provide high-quality, pre-built UI templates that are easily accessible for 
              developers, designers, and businesses. My goal is to make frontend design effortless by offering ready-to-use templates 
              that you can copy, modify, and integrate into your projects seamlessly. While this platform is designed to be open and 
              user-friendly, I also take data privacy seriously.</p>
              <p>This Privacy Policy explains how I collect, use, store, and safeguard your information when you visit 
              <strong style="color: hsl(210, 100%, 45%);">AestheticHub</strong> and utilize my services. Whether you're browsing templates, exploring design inspirations, 
              or interacting with the website, I want to ensure that you have a safe and seamless experience.</p>
              <p>By using <strong style="color: hsl(210, 100%, 45%);">AestheticHub</strong>, you acknowledge that you have read and understood this Privacy Policy and agree 
              to the collection and use of information as outlined below. If you do not agree with any part of this Privacy Policy, please 
              discontinue the use of the website.</p>
              <p>If you have any questions or concerns regarding my data practices, feel free to contact me at 
              <a href="mailto:example@gmail.com" style="color: hsl(210, 100%, 45%);"><strong>example@gmail.com</strong></a>.</p>
            `
  },
  {
    label: "Information We Collect",
    content: `<p>We collect different types of information to improve our services and ensure a seamless experience for users. This includes:</p>
                  <p><strong style="color: hsl(210, 100%, 45%);">Personal Information</strong>: We may collect personally identifiable information when you voluntarily provide it, such as:</p>
                  <ul>
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Contact information</li>
                      <li>Any details you provide when signing up for newsletters, submitting inquiries, or creating an account (if applicable).</li>
                  </ul>
                  <p><strong style="color: hsl(210, 100%, 45%);">Usage Data</strong>: When you access our website, we may automatically collect non-personal data, including:</p>
                  <ul>
                      <li>IP address</li>
                      <li>Browser type and version</li>
                      <li>Pages visited and time spent on our site</li>
                      <li>Referring website or search terms</li>
                      <li>Device type (mobile, tablet, desktop)</li>
                      <li>Other diagnostic data to improve performance.</li>
                  </ul>
                  <p><strong style="color: hsl(210, 100%, 45%);">Cookies and Tracking Technologies</strong>: We use cookies and similar technologies to enhance user experience, track website activity, and analyze trends. 
                  You can control or disable cookies through your browser settings.</p>`
  },
  {
    label: "How We Use Your Information",
    content: `<p>We use the collected data for the following purposes to ensure a seamless experience for our users and to maintain the highest standards of security and service quality:</p>
              <ul>
                  <li><strong style="color: hsl(210, 100%, 45%);">To provide and improve our services:</strong> We utilize the information gathered to enhance the functionality of our website, ensuring a smooth browsing experience. This includes analyzing how users navigate through different sections, optimizing website speed, fixing technical issues, and updating content based on user interactions and feedback. Our goal is to continually refine our platform to meet user needs more effectively.</li>
                  <li><strong style="color: hsl(210, 100%, 45%);">To communicate with you:</strong> We may use your provided contact details to send important updates, newsletters, and promotional materials that align with your interests. Additionally, we respond to inquiries, resolve issues, and provide customer support to ensure that your concerns are addressed in a timely and effective manner.</li>
                  <li><strong style="color: hsl(210, 100%, 45%);">To analyze user behavior:</strong> Understanding how users interact with our platform helps us improve content, navigation, and overall design. We track website usage trends, identify popular features, and determine areas that need improvement. This allows us to tailor our services to provide a more intuitive and user-friendly experience.</li>
                  <li><strong style="color: hsl(210, 100%, 45%);">To enhance security:</strong> Protecting user data and ensuring the security of our platform is a top priority. We monitor for suspicious activities, detect potential threats, and implement protective measures against cyberattacks, fraud, and unauthorized access. This proactive approach helps safeguard user information and maintain the integrity of our services.</li>
                  <li><strong style="color: hsl(210, 100%, 45%);">To comply with legal obligations:</strong> In certain circumstances, we may be required to share collected data with relevant authorities to comply with applicable laws, regulations, or legal proceedings. This includes cooperating with law enforcement agencies in cases of fraud, security breaches, or other legal matters where disclosure is necessary.</li>
              </ul>
              <p>By using our website, you acknowledge and agree to the collection and utilization of data for these purposes. We are committed to ensuring transparency and will continue to update our practices in accordance with industry standards and regulatory requirements.</p>
              `
  }
];
