export interface POST {
  title: string;
  description: string;
  commentsCount: Number;
  comments?: COMMENTS[];
}

export interface COMMENTS {
  text: string;
  liked: boolean;
  unliked: boolean;
  createdBy: string;
}
