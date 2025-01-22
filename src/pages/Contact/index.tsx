import { createMemo, createSignal } from 'solid-js';
import bannerHK from '@/assets/banners/bannerHK.jpg';
import { EmailAddress, PhoneNumber, StreetAddress } from '@/components/ContactInfo';
import { LabeledBanner } from '@/components/LabeledBanner';
import styles from '@/pages/Contact/Contact.module.scss';
import { setPageTitle } from '@/utils/pageTitle';

export const Contact = () => {
  setPageTitle('Contact Us');

  const [name, setName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [phone, setPhone] = createSignal('');
  const [companyName, setCompanyName] = createSignal('');
  const [reason, setReason] = createSignal('');
  const [comments, setComments] = createSignal('');

  const isValid = createMemo(() => name() && email() && phone() && companyName() && reason());
  const subject = createMemo(() => `[CONTACT US]: ${reason()} for ${companyName()} `);
  const body = createMemo(
    () => `Reason: ${reason()}

Name: ${name()}
Email: ${email()}
Phone #: ${phone()}
Company Name: ${companyName()}

Comments:
${comments()}`
  );

  return (
    <div class={styles.Contact}>
      <LabeledBanner {...[bannerHK, 'HONG KONG', '1024/493']} />
      <h2>Contact Us</h2>
      <p>We'd be happy to answer any questions you might have!</p>
      <div class={styles.contactBody}>
        <div class={styles.contactForm}>
          <input placeholder="Name*" onInput={e => setName(e.currentTarget.value)} />
          <input placeholder="Email*" type="email" onInput={e => setEmail(e.currentTarget.value)} />
          <input placeholder="Phone*" type="tel" onInput={e => setPhone(e.currentTarget.value)} />
          <input placeholder="Company Name*" onInput={e => setCompanyName(e.currentTarget.value)} />
          <select name="Reason" onInput={e => setReason(e.currentTarget.value)}>
            <option value="">Reason for Contacting (Select one)</option>
            <option value="Acquisition Planning">Acquisition Planning</option>
            <option value="Application Maintenance & Support">Application Maintenance & Support</option>
            <option value="Custom Development">Custom Development</option>
            <option value="Data Conversion & Migration">Data Conversion & Migration</option>
            <option value="HR/Payroll Audits">HR/Payroll Audits</option>
            <option value="iLearning">iLearning</option>
            <option value="iRecruitment">iRecruitment</option>
            <option value="Oracle Advanced Benefits">Oracle Advanced Benefits</option>
            <option value="Oracle Human Resources">Oracle Human Resources</option>
            <option value="Oracle Payroll">Oracle Payroll</option>
            <option value="Process Re-engineering / Best Practice Recommendations">
              Process Re-engineering / Best Practice Recommendations
            </option>
            <option value="Employee / Manager Self Service">Employee / Manager Self Service</option>
            <option value="Oracle Time & Labor">Oracle Time & Labor</option>
            <option value="Training">Training</option>
            <option value="Upgrades">Upgrades</option>
          </select>
          <textarea placeholder="Comments" onInput={e => setComments(e.currentTarget.value)} />
          <a
            prop:href={
              isValid() ? encodeURI(`mailto:solutions@hcmspartners.com?subject=${subject()}&body=${body()}`) : '#'
            }
          >
            compose
          </a>
        </div>
        <div class={styles.contactInfo}>
          <div>
            <h4>ADDRESS</h4>
            <StreetAddress />
          </div>
          <div>
            <h4>PHONE</h4>
            <PhoneNumber />
          </div>
          <div>
            <h4>EMAIL</h4>
            <EmailAddress />
          </div>
        </div>
      </div>
    </div>
  );
};
