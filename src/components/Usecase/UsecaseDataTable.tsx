import { AiFillDelete } from 'react-icons/ai';
import { useAppContext } from '../../context/AppContext';

const allowedFileTypes = ['.txt', '.csv', '.xlsx', '.xls', '.pdf', '.doc', '.docx', '.ppt', '.pptx', 'xml', 'md'];

const allowedFileTypesSet = new Set(allowedFileTypes);

const checkFileType = (fileName: string) => {
  const fileType = fileName.slice(fileName.lastIndexOf('.'));
  return allowedFileTypesSet.has(fileType);
}

const UsecaseDataTable = ({
  uploadEndpoint,
  deleteEndpoint,
  listEndpoint
}: {
  uploadEndpoint: string,
  deleteEndpoint: string,
  listEndpoint: string
}) => {
  const { usecaseFiles, setUsecaseFiles } = useAppContext();
  const fileeNameSet = new Set(usecaseFiles.map((file) => file.name));

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-bold text-lg text-black dark:text-white">
          AIが回答するために利用する独自データ
        </h3>
      </div>

      <div className="flex justify-end p-5 pb-1">
        <label
          className="inline-block px-4 py-2 text-white bg-blue-500 rounded cursor-pointer"
          htmlFor="file-upload"
        >
          アップロード
        </label>
        <input
          className="hidden"
          id="file-upload"
          type="file"
          accept={allowedFileTypes.join(',')}
          multiple
          onChange={(e) => {
            const uploadedFiles = e.target.files;
            if (!uploadedFiles) return;
            for (let i = 0; i < uploadedFiles.length; ++i) {
              const uploadedFile = uploadedFiles[i];
              if (!checkFileType(uploadedFile.name)) {
                alert('ファイル形式が不正です');
                continue;
              }
              if (uploadedFile.size > 10 * 1024 * 1024) {
                alert('ファイルサイズが10MBを超えています');
                continue;
              }
              if (fileeNameSet.has(uploadedFile.name) && !confirm('同名のファイルが既に存在します 上書きしますか？')) {
                continue;
              }
              // ファイルが選択されたときの処理をここに書く
              (async () => {
                try {
                  const res = await fetch(uploadEndpoint, {
                    method: 'POST',
                    body: uploadedFile,
                  });
                } catch (e) {
                  console.error(e);
                  return;
                }
                try {
                  const res = await fetch(listEndpoint);
                  const data = await res.json();
                  setUsecaseFiles(data);
                } catch (e) {
                  console.error(e);
                  return;
                }
              })();
            }
          }}
        />
      </div>

      <div className="flex flex-col p-5">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              ファイル名
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              ファイルサイズ[MB]（最大10MB）
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              アクション
            </h5>
          </div>
        </div>

        {usecaseFiles.map((file, key) => (
          <div
            className={`grid grid-cols-3 ${key === usecaseFiles.length - 1
              ? ''
              : 'border-b border-stroke dark:border-strokedark'
              }`}
            key={file.id}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                {file.name}
              </p>
            </div>

            <div className="flex items-center justify-end xl:mr-15 lg:mr-10 p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{file.size}MB</p>
            </div>

            <div
              className="flex items-center justify-center p-2.5 xl:p-5 cursor-pointer"
              onClick={() => {
                if (!confirm(`${file.name}を削除しますか？`)) return;
                // ファイルを削除する処理をここに書く
                (async () => {
                  try {
                    const res = await fetch(deleteEndpoint, {
                      method: 'DELETE',
                      body: JSON.stringify({ id: file.id }),
                    });
                  } catch (e) {
                    console.error(e);
                    return;
                  }
                  try {
                    const res = await fetch(listEndpoint);
                    const data = await res.json();
                    setUsecaseFiles(data);
                  } catch (e) {
                    console.error(e);
                    return;
                  }
                })();
              }}
            >
              <AiFillDelete className="text-red-500" />
              <p className="text-meta-1">削除</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsecaseDataTable;
