export interface IUser {
  name: string;
  id: number;
  thumbnail: string;
  stories: IStories[];
}
interface IStories {
  url: string;
}
