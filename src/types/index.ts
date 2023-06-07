export const initialStateLoader = {
  isLoadingData: false,
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type DataType = Post[];
