import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import User from './User';

@Entity('roles_type', { schema: 'petlovedev' })
export default class RolesType {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
    id: number;

    @Column('varchar', { name: 'name', length: 50 })
    name: string;

    @OneToMany(() => User, (user) => user.roleType)
    users: User[];
}
