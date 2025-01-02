import { baseCurrencyState, targetCurrencyState } from '@store/dashboard';
import { useRecoilValue } from 'recoil';
import Moment from 'react-moment';
import 'moment-timezone';
import { timezones } from '../timezone/timezones';

const CurrencyTimeZone = () => {
  const baseCurrency = useRecoilValue(baseCurrencyState);
  const targetCurrency = useRecoilValue(targetCurrencyState);

  return (
    <div className="mt-4">
      <p>
        {baseCurrency} :
        <Moment format="YYYY-MM-DD HH:mm:ss" tz={timezones[baseCurrency]} interval={1000} />
      </p>
      <p>
        {targetCurrency} :
        <Moment format="YYYY-MM-DD HH:mm:ss" tz={timezones[targetCurrency]} interval={1000} />
      </p>
    </div>
  );
};

export default CurrencyTimeZone;
