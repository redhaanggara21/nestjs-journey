import {
    Column,
    PrimaryGeneratedColumn,
    BeforeUpdate,
    BeforeInsert,
    BeforeRemove,
  } from 'typeorm';
  
  export class AppEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'int', width: 11, nullable: true, readonly: true })
    deleted_at: number;
  
    @Column({ type: 'int', width: 11, nullable: true, readonly: true })
    created_at: number;
  
    @Column({ type: 'int', width: 11, nullable: true })
    updated_at: number;
  
    @BeforeUpdate()
    public setUpdatedAt() {
      this.updated_at = Math.floor(Date.now() / 1000);
    }
  
    @BeforeInsert()
    public setCreatedAt() {
      this.created_at = Math.floor(Date.now() / 1000);
    }
  
    @BeforeRemove()
    public setDeletedAt() {
      this.deleted_at = Math.floor(Date.now() / 1000);
    }
  }