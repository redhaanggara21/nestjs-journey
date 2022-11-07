import { Property, Entity, PrimaryKey } from '@mikro-orm/core';
import { IsEmail } from 'class-validator';

@Entity()
export class Address {
  @PrimaryKey()
  id!: number;

  @Property()
  street: string;

  @Property()
  city: string;

  @Property()
  country: string;

  @Property()
  created_at = new Date();

  @Property({ onUpdate: () => new Date() })
  updated_at = new Date();

  @Property({ onUpdate: () => new Date() })
  deleted_at = new Date();

  constructor(
    street: string,
    city: string,
    country: string
  ) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}