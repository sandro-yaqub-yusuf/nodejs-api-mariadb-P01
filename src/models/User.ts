import { Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import bcrypt from 'bcryptjs';
import RolesType from './RolesType';

@Index('idx1_users_role_type_id_foreign', ['roleTypeId'], {})
@Entity('users', { schema: 'petlovedev' })
export default class User {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
    id: number;

    @Column('int', { name: 'role_type_id', unsigned: true, default: () => '3' })
    roleTypeId: number;

    @Column('varchar', { name: 'email', length: 100 })
    email: string;

    @Column('varchar', { name: 'password', length: 255 })
    password: string;

    @Column('varchar', { name: 'name', length: 100 })
    name: string;

    @Column('tinyint', { name: 'terms' })
    terms: number;

    @Column('varchar', { name: 'image', length: 255 })
    image: string;

    @Column('varchar', { name: 'reset_password', nullable: true, length: 255 })
    resetPassword: string | null;

    @CreateDateColumn({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', nullable: true })
    updatedAt: Date | null;

    @DeleteDateColumn({ name: 'deleted_at', nullable: true })
    deletedAt: Date | null;

    @BeforeInsert()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    @ManyToOne(() => RolesType, (rolesType) => rolesType.users, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    @JoinColumn([{ name: 'role_type_id', referencedColumnName: 'id' }])
    roleType: RolesType;
}
