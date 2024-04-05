import { A } from '@solidjs/router';
import styles from '@/pages/NotFound/NotFound.module.scss';
import { setPageTitle } from '@/utils/pageTitle';

export const NotFound = () => {
  setPageTitle('Page Not Found');

  return (
    <div class={styles.NotFound}>
      <h2>Not Found</h2>
      <div>The page you were looking for was not found.</div>
      <div>
        Visit the <A href="/">home page</A>
      </div>
    </div>
  );
};
