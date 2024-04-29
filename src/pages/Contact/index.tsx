import bannerHK from '@/assets/banners/bannerHK.jpg';
import { EmailAddress, PhoneNumber, StreetAddress } from '@/components/ContactInfo';
import { LabeledBanner } from '@/components/LabeledBanner';
import styles from '@/pages/Contact/Contact.module.scss';
import { setPageTitle } from '@/utils/pageTitle';

export const Contact = () => {
  setPageTitle('Contact Us');

  return (
    <div class={styles.Contact}>
      <LabeledBanner {...[bannerHK, 'HONG KONG', '1024/493']} />
      <h2>Contact Us</h2>
      <p>We'd be happy to answer any questions you might have!</p>
      <span>
        <h4>ADDRESS</h4>
        <StreetAddress />
      </span>
      <span>
        <h4>PHONE</h4>
        <PhoneNumber />
      </span>
      <span>
        <h4>EMAIL</h4>
        <EmailAddress />
      </span>
    </div>
  );
};
