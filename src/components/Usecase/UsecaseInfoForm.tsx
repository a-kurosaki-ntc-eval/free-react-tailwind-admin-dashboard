import { useState } from 'react';

const UsecaseInfoForm = (
  {
    title,
    setTitle,
    systemMessage,
    setSystemMessage,
    sampleQuestion1,
    setSampleQuestion1,
    sampleQuestion2,
    setSampleQuestion2,
    sampleQuestion3,
    setSampleQuestion3,
    endpoint
  }: {
    title: string,
    setTitle: (title: string) => void,
    systemMessage: string,
    setSystemMessage: (systemMessage: string) => void,
    sampleQuestion1: string,
    setSampleQuestion1: (sampleQuestion1: string) => void,
    sampleQuestion2: string,
    setSampleQuestion2: (sampleQuestion1: string) => void,
    sampleQuestion3: string,
    setSampleQuestion3: (sampleQuestion1: string) => void,
    endpoint: string
  }
) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-bold text-lg text-black dark:text-white">
          ユースケースの基本情報
        </h3>
      </div>
      <form action={endpoint} method='POST' onSubmit={(e) => {
        e.preventDefault();
        setIsEditing(false);
      }}>
        <div className="p-6.5">

          <div className="mb-4.5">
            <label htmlFor='title' className="mb-2.5 block text-black font-bold dark:text-white">
              タイトル <span className="text-meta-1">*</span>
            </label>
            <span>ユースケースを明確に表すタイトルを設定してください（最大50文字）</span>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="ユースケースのタイトルを入力してください"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              required
              maxLength={50}
              {...(isEditing ? { disabled: false } : { disabled: true })}
            />
          </div>

          <div className="mb-4.5">
            <label htmlFor='systemMessage' className="mb-2.5 block text-black font-bold dark:text-white">
              システムメッセージ <span className="text-meta-1">*</span>
            </label>
            <span>AIにユースケースを伝えるためのメッセージを設定してください（最大200文字）</span>
            <textarea
              rows={6}
              id="systemMessage"
              name="systemMessage"
              value={systemMessage}
              onChange={(e) => setSystemMessage(e.target.value)}
              placeholder="システムメッセージを入力してください"
              className="w-full h-20 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              required
              maxLength={200}
              {...(isEditing ? { disabled: false } : { disabled: true })}
            ></textarea>
          </div>


          <div className="mb-6">
            <label htmlFor='sampleQuestion1' className="mb-2.5 block text-black font-bold dark:text-white">
              サンプル質問
            </label>
            <span>アプリに表示されるサンプル質問を設定してください（各最大100文字）</span>
            <div className='relative'>
              <span className="absolute left-2.5 top-3 text-meta-1">*</span>
              <textarea
                rows={6}
                id="sampleQuestion1"
                name="sampleQuestion1"
                value={sampleQuestion1}
                onChange={(e) => setSampleQuestion1(e.target.value)}
                placeholder={`サンプル質問を入力してください`}
                className="w-full h-20 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                required
                maxLength={100}
                {...(isEditing ? { disabled: false } : { disabled: true })}
              ></textarea>
            </div>
            <textarea
              rows={6}
              id="sampleQuestion2"
              name="sampleQuestion2"
              value={sampleQuestion2}
              onChange={(e) => setSampleQuestion2(e.target.value)}
              placeholder="サンプル質問を入力してください"
              className="w-full h-20 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              maxLength={100}
              {...(isEditing ? { disabled: false } : { disabled: true })}
            ></textarea>
            <textarea
              rows={6}
              id="sampleQuestion3"
              name="sampleQuestion3"
              value={sampleQuestion3}
              onChange={(e) => setSampleQuestion3(e.target.value)}
              placeholder="サンプル質問を入力してください"
              className="w-full h-20 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              maxLength={100}
              {...(isEditing ? { disabled: false } : { disabled: true })}
            ></textarea>
          </div>

          {isEditing ? (
            <div className='w-full flex justify-between'>
              <button className="flex w-[48%] justify-center rounded bg-white  p-3 font-medium text-blue-700 border border-blue-700 hover:bg-blue-100" type='button' onClick={() => {
                // バックエンドから情報を取得し、フォームにセットする処理をここに書く
                setIsEditing(false)
              }}>
                キャンセル
              </button>
              <button
                className="flex w-[48%] justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                type='submit'
              >
                保存
              </button>
            </div>

          ) : (
            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90" type='button' onClick={() => setIsEditing(true)}>
              編集
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UsecaseInfoForm;