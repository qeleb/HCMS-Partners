import { StreetAddress } from '@/components/ContactInfo';
import styles from '@/pages/PrivacyPolicy/PrivacyPolicy.module.scss';
import { setPageTitle } from '@/utils/pageTitle';

export const PrivacyPolicy = () => {
  setPageTitle('Privacy Policy');

  return (
    <div class={styles.PrivacyPolicy}>
      <h2>Privacy Policy</h2>
      <div>
        <h3>Contact Us</h3>
        <StreetAddress />
      </div>
      <div>
        <h3>User Privacy</h3>
        It is our policy to respect the privacy of its users. We respect the privacy of our customers, those who answer
        our surveys, make orders online and those who fill out inquiry forms. It is our policy:
      </div>
      <div>
        <h3>Choice & Consent</h3>
        To respect the purpose for which our site visitors gave us information. We give users choice and consent over
        how their personal information is used and remove names immediately upon request.
      </div>
      <div>
        <h3>Third Party Use</h3>
        To not sell, rent, or loan our lists to third parties for e-mail marketing. While we may sell advertising in our
        e-mail publications to other companies, we do not allow third parties any other use of our lists.
      </div>
      <div>
        <h3>Unsubscriptions</h3>
        To send our periodicals only to those who request them, and immediately unsubscribe those who request it.
        Sometimes people subscribe for their friends, and while we cannot prevent that, our welcome messages to
        subscriber-and every issue of our free newsletter-explain how to subscribe and unsubscribe. We keep our
        subscription lists as clean as possible to prevent obsolete mails to take unnecessary bandwidth.
      </div>
      <div>
        <h3>Cookies</h3>
        To use cookies in a responsible manner to help our visitors, not to snoop on them. We use cookies to identify
        shoppers with their shopping carts, to make it easy to order a second time, to allow subscribers to store
        passwords in cookies if they desire, and to get our visitors by name when they return. We do NOT collect or use
        this information from cookies to develop a profile about our customers.
      </div>
      <div>
        <h3>Security</h3>
        To store subscriber and password files with personal information in a secure manner. We store such files in
        areas not accessible to Web browser, or behind password protection, or off-line.
      </div>
    </div>
  );
};
