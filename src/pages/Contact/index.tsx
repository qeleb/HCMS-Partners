import { createSignal } from 'solid-js';
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

  return (
    <div class={styles.Contact}>
      <LabeledBanner {...[bannerHK, 'HONG KONG', '1024/493']} />
      <h2>Contact Us</h2>
      <p>We'd be happy to answer any questions you might have!</p>
      <div class={styles.contactBody}>
        <div class={styles.contactForm}>
          <input placeholder="Name*" onInput={e => setName(e.target.value)} />
          <input placeholder="Email*" pattern="^\S+@\S+$" type="email" onInput={e => setEmail(e.target.value)} />
          <input placeholder="Phone*" type="tel" onInput={e => setPhone(e.target.value)} />
          <input placeholder="Company Name*" onInput={e => setCompanyName(e.target.value)} />
          <select name="Reason" onInput={e => setReason(e.target.value)}>
            <option value="">Reason for Contacting (Select one)</option>
            {
              /* eslint-disable-line solid/prefer-for */ [
                'Acquisition Planning',
                'Application Maintenance & Support',
                'Custom Development',
                'Data Conversion & Migration',
                'HR/Payroll Audits',
                'iLearning',
                'iRecruitment',
                'Oracle Advanced Benefits',
                'Oracle Human Resources',
                'Oracle Payroll',
                'Process Re-engineering / Best Practice Recommendations',
                'Employee / Manager Self Service',
                'Oracle Time & Labor',
                'Training',
                'Upgrades',
              ].map(x => (
                <option value={x}>{x}</option>
              ))
            }
          </select>
          <textarea placeholder="Comments" onInput={e => setComments(e.target.value)} />
          <a
            prop:href={
              // eslint-disable-next-line regexp/no-super-linear-backtracking
              name() && phone() && companyName() && reason() && /^\S+@\S+$/.test(email())
                ? `mailto:solutions@hcmspartners.com?${new URLSearchParams({
                    subject: `[CONTACT US]: ${reason()} for ${companyName()}`,
                    body: `Reason: ${reason()}

Name: ${name()}
Email: ${email()}
Phone #: ${phone()}
Company Name: ${companyName()}

Comments:
${comments()}`,
                    cc: email(),
                  })}`.replaceAll('+', '%20')
                : '#'
            }
            aria-label="Compose Email"
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
