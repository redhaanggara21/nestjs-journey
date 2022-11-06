import { Customer } from "./customer.entity";
import { User } from "./user.entity";
import { Comment } from "./comment.entity";
import { Address } from "./address.entity";
import { Post } from "./Post.entity";
import { Category } from "./category.entity";

const entities = [ User, Customer, Comment, Address, Post, Category ];

export { User, Customer, Comment, Address, Post, Category };
export default entities;