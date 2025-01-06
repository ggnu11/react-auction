import { DatePicker, Form } from 'antd';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

interface FilterDateCellProps {
  title: string;
  fieldName: string;
}

const FilterDateCell = ({ title, fieldName }: FilterDateCellProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <label className="block text-gray-700">{title}</label>
      <Form.Item
        name={fieldName}
        rules={[
          { required: true, message: t(`validation_${fieldName}`) },
          ...(fieldName === 'to'
            ? [
                ({ getFieldValue }: any) => ({
                  validator(_: any, value: any) {
                    const from = getFieldValue('from');
                    if (!value || !from || dayjs(value).isAfter(dayjs(from))) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error(t('validation_to_before_from')));
                  },
                }),
              ]
            : []),
        ]}
      >
        <DatePicker className="w-full" />
      </Form.Item>
    </div>
  );
};

export default FilterDateCell;
