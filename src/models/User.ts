import { Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, BeforeInsert } from "typeorm";
import { IsAlphanumeric, IsEmail, IsString, Length, Max, MaxLength, Min, MinLength } from 'class-validator';
import bcrypt from 'bcryptjs';
import RolesType from "./RolesType";

@Index("idx1_users_role_type_id_foreign", ["roleTypeId"], {})
@Entity("users", { schema: "petlovedev" })
export default class User {
    @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
    id: number;

    @Column("int", { name: "role_type_id", unsigned: true, default: () => "'3'" })
    @Min(1, { message: 'O Tipo de Usuário só pode ser 1 (Administrador), 2 (Operador) ou 3 (Somente Consulta) !' })
    @Max(3, { message: 'O Tipo de Usuário só pode ser 1 (Administrador), 2 (Operador) ou 3 (Somente Consulta) !' })
    roleTypeId: number;

    @Column("varchar", { name: "email", length: 100 })
    @IsEmail({}, { message: 'O formato do E-mail é inválido !' })
    @Length(6, 100, { message: 'O E-mail deve ter no mínimo 6 e no máximo 100 caracteres !' })
    email: string;

    @Column("varchar", { name: "password", length: 255 })
    @IsString({ message: 'A Senha só aceita caracteres alfanuméricos !' })
    @MinLength(6, { message: 'A Senha deverá ter no mínimo 6 e no máximo 30 caracteres !' })
    @MaxLength(30, { message: 'A Senha deverá ter no mínimo 6 e no máximo 30 caracteres !' })
    password: string;

    @Column("varchar", { name: "name", length: 100 })
    @IsAlphanumeric("pt-BR", { message: 'O Nome só aceita caracteres alfanuméricos !' })
    @Length(2, 100, { message: 'O Nome deverá ter no mínimo 2 e no máximo 100 caracteres !' })
    name: string;

    @Column("tinyint", { name: "terms" })
    @Min(0, { message: 'O Termo aceita somente 0 (não) ou 1 (sim) !'})
    @Max(1, { message: 'O Termo aceita somente 0 (não) ou 1 (sim) !'})
    terms: number;

    @Column("varchar", { name: "reset_password", nullable: true, length: 255 })
    resetPassword: string | null;

    @CreateDateColumn({ name: "created_at", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at", nullable: true })
    updatedAt: Date | null;

    @DeleteDateColumn({ name: "deleted_at", nullable: true })
    deletedAt: Date | null;

    @BeforeInsert()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    @ManyToOne(() => RolesType, (rolesType) => rolesType.users, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    })
    @JoinColumn([{ name: "role_type_id", referencedColumnName: "id" }])
    roleType: RolesType;
}
