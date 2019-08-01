export interface Post {
    title: string;
    id: number;
    header: string;
    body: string;
    previewImagePath?: string;
    previewText?: string;
    postImage?: string;
    postImageSubtext?: string;
    contentImages?: [string];
    contentParagraph?: [string];
    contentHeaders?: [string];
}
