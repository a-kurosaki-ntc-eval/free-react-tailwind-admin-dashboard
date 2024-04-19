import React from 'react';
import { useState } from 'react';
import UsecaseInfoForm from '../../components/Usecase/UsecaseInfoForm';
import UsecaseDataTable from '../../components/Usecase/UsecaseDataTable';

const Usecase: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [systemMessage, setSystemMessage] = useState<string>('');
  const [sampleQuestion1, setSampleQuestion1] = useState<string>('');
  const [sampleQuestion2, setSampleQuestion2] = useState<string>('');
  const [sampleQuestion3, setSampleQuestion3] = useState<string>('');

  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          ユースケース
        </h2>
      </div>

      <div className="flex flex-col gap-10">
        <UsecaseInfoForm
          title={title}
          setTitle={setTitle}
          systemMessage={systemMessage}
          setSystemMessage={setSystemMessage}
          sampleQuestion1={sampleQuestion1}
          setSampleQuestion1={setSampleQuestion1}
          sampleQuestion2={sampleQuestion2}
          setSampleQuestion2={setSampleQuestion2}
          sampleQuestion3={sampleQuestion3}
          setSampleQuestion3={setSampleQuestion3}
          endpoint='hogehoge'
        />
        <UsecaseDataTable />
      </div>
    </>
  );
};

export default Usecase;