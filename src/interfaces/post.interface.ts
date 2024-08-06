export interface PostInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostCreateInterface {
  title: string;
  content: string;
}

export interface PostUpdateInterface {
  title?: string;
  content?: string;
}
