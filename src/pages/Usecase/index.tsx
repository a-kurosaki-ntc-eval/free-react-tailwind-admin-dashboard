import React, { useEffect } from 'react';
import UsecaseInfoForm from '../../components/Usecase/UsecaseInfoForm';
import UsecaseDataTable from '../../components/Usecase/UsecaseDataTable';
import { useAppContext } from '../../context/AppContext';

const Usecase: React.FC = () => {
  const { setUsecaseFiles } = useAppContext();

  useEffect(() => {
    setUsecaseFiles([
      {
        id: '1',
        name: 'test1.text',
        size: 3.5,
      },
      {
        id: '2',
        name: 'test2.text',
        size: 3.5,
      },
      {
        id: '3',
        name: 'test3.text',
        size: 3.5,
      },
      {
        id: '4',
        name: 'test4.text',
        size: 3.5,
      },
      {
        id: '5',
        name: 'test5.text',
        size: 3.5,
      },
    ]);
  }, []);

  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          ユースケース
        </h2>
      </div>

      <div className="flex flex-col gap-10">
        <UsecaseInfoForm
          endpoint='hogehoge'
        />
        <UsecaseDataTable
          uploadEndpoint="hogehoge"
          deleteEndpoint='hogehoge'
          listEndpoint='hogehoge'
        />
      </div>
    </>
  );
};

export default Usecase;