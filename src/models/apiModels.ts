// Member model
export interface Member extends PartialMember {
  _id: string;
  role: string;
  status: string;
}

export interface PartialMember {
  /* Used as a partial member for when user signs up */
  realName: string;
  email: string;
  password: string;
  classof: string;
  graduated: boolean;
  phone?: string;
}

export type Participant = Pick<Member, "_id" | "realName">

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

export interface TokenPayload {
  accessToken: boolean;
  exp: number;
  iat: number;
  role: string;
  user_id: string;
}

export interface ChangePasswordPayload {
  password: string,
  newPassword: string,
}

export interface MemberUpdate {
	realName?: string;
	email?: string;
	classof?: string;
	phone?: string;
}

export interface Event {
  id?: string;
  title: string;
  description: string;
  date: string;
  address: string;
  price: number;
  duration?: number;
  extraInformation?: string;
  maxParticipants?: number;
  romNumber?: string;
  building?: string;
  participants?:Participant[]; 
}

export type EventUpdate = Partial<Pick<Event, "title" | "description" | "date" | "address">> 

export interface Comment {
  comment: string;
  author: string;
  created_at: Date;
}

export interface Post {
  id: string;
  message: string;
  author: string;
  created_at: string;
  comments: Comment[] 
}
