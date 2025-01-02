import { baseCurrencyState, targetCurrencyState } from '@store/dashboard';
import { useRecoilValue } from 'recoil';
import Moment from 'react-moment';
import 'moment-timezone';

const CurrencyTimeZone = () => {
  const baseCurrency = useRecoilValue(baseCurrencyState);
  const targetCurrency = useRecoilValue(targetCurrencyState);

  const timezones: { [key: string]: string } = {
    USD: 'America/New_York',
    KRW: 'Asia/Seoul',
  };

  return (
    <div className="mt-4">
      <p>
        <Moment format="YYYY-MM-DD HH:mm:ss" tz={timezones[baseCurrency]} interval={1000} />
      </p>
      <p>
        <Moment format="YYYY-MM-DD HH:mm:ss" tz={timezones[targetCurrency]} interval={1000} />
      </p>
    </div>
  );
};

export default CurrencyTimeZone;
