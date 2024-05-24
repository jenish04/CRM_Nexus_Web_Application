import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'CRM Nexus'}
      subTitle={translate('Do you need help on customize of this app')}
      extra={
        <>
          <p>
            Website : <a href="https://www.softcolon.com">www.softcolon.com</a>{' '}
          </p>
          
          <Button
            type="primary"
            onClick={() => {
              window.open(`https://softcolon.com/contact/`);
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;
