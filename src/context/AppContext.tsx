import { createContext, useContext, useState } from 'react';
import { FileType } from '../types/file';

type AppContextType = {
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  systemMessage: string;
  setSystemMessage: (systemMessage: string) => void;
  sampleQuestion1: string;
  setSampleQuestion1: (sampleQuestion1: string) => void;
  sampleQuestion2: string;
  setSampleQuestion2: (sampleQuestion2: string) => void;
  sampleQuestion3: string;
  setSampleQuestion3: (sampleQuestion3: string) => void;
  usecaseFiles: FileType[];
  setUsecaseFiles: (usecaseFiles: FileType[]) => void;
};

const AppContext = createContext({} as AppContextType);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [systemMessage, setSystemMessage] = useState<string>('');
  const [sampleQuestion1, setSampleQuestion1] = useState<string>('');
  const [sampleQuestion2, setSampleQuestion2] = useState<string>('');
  const [sampleQuestion3, setSampleQuestion3] = useState<string>('');
  const [usecaseFiles, setUsecaseFiles] = useState<FileType[]>([]);

  return (
    <AppContext.Provider
      value={{
        isEditing,
        setIsEditing,
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
        usecaseFiles,
        setUsecaseFiles,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };