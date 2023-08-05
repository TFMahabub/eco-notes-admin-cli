import { COMMENTTYPE } from './commentTypes';
import { TAGTYPE } from './tagType';

export interface BLOGTYPE {
  _id: string;
  title: string;
  description: string;
  tags: TAGTYPE[];
  likes: number;
  comments: COMMENTTYPE[];
  postTime: string;
  uid:number
}
