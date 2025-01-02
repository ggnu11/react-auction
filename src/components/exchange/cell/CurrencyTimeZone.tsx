import { baseCurrencyState, targetCurrencyState } from '@store/dashboard';
import { useRecoilValue } from 'recoil';
import Moment from 'react-moment';
import 'moment-timezone';
import { timezones } from '../timezone/timezones';

const CurrencyTimeZone = () => {
  const baseCurrency = useRecoilValue(baseCurrencyState);
  const targetCurrency = useRecoilValue(targetCurrencyState);

  return (
    <div className="mt-8 flex flex-col items-center space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-lg p-8 w-full max-w-md">
        <p className="text-2xl font-bold text-white">
          {baseCurrency}:
          <span className="text-yellow-300 ml-2">
            <Moment format="YYYY-MM-DD HH:mm:ss" tz={timezones[baseCurrency]} interval={1000} />
          </span>
        </p>
      </div>
      <div className="bg-gradient-to-r from-green-500 to-teal-500 shadow-lg rounded-lg p-8 w-full max-w-md">
        <p className="text-2xl font-bold text-white">
          {targetCurrency}:
          <span className="text-yellow-300 ml-2">
            <Moment format="YYYY-MM-DD HH:mm:ss" tz={timezones[targetCurrency]} interval={1000} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default CurrencyTimeZone;
