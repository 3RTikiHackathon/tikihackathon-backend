import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Book } from './book.schema';
import { User } from './user.schema';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop()
  _id: Types.ObjectId;

  @Prop({ required: true, type: Types.ObjectId, ref: User.name })
  creatorId: Types.ObjectId;

  @Prop({ required: true, type: Types.ObjectId, ref: Book.name })
  bookId: Types.ObjectId;

  @Prop({ required: true })
  content: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
