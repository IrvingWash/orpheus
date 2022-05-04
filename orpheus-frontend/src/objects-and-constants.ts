export interface Track {
	_id: string;
	title: string;
	artist: string;
	text: string;
	listens: number;
	picture: string;
	audio: string;
	comments: Comment[];
}

export interface Comment {
	_id: string;
	username: string;
	message: string;
}
