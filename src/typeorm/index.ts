import { Customer } from "./customer.entity";
import { User } from "./user.entity";
import { Comment } from "./comment.entity";
import { Address } from "./address.entity";
import { Post } from "./Post.entity";

const entities = [ User, Customer, Comment, Address, Post ];

export { User, Customer, Comment, Address, Post };
export default entities;