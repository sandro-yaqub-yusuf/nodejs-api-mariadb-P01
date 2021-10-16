import { Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import AnimalsAdoption from "./AnimalsAdoption";

@Entity("adopters", { schema: "petlovedev" })
export default class Adopter {
    @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
    id: number;

    @Column("varchar", { name: "name", length: 100 })
    name: string;

    @Column("varchar", { name: "rg", nullable: true, length: 10 })
    rg: string | null;

    @Column("varchar", { name: "cpf", nullable: true, length: 11 })
    cpf: string | null;

    @Column("varchar", { name: "address", nullable: true, length: 255 })
    address: string | null;

    @Column("varchar", { name: "number", nullable: true, length: 20 })
    number: string | null;

    @Column("varchar", { name: "district", nullable: true, length: 100 })
    district: string | null;

    @Column("varchar", { name: "city", nullable: true, length: 100 })
    city: string | null;

    @Column("varchar", { name: "state", nullable: true, length: 2 })
    state: string | null;

    @Column("varchar", { name: "postcode", nullable: true, length: 8 })
    postcode: string | null;

    @Column("varchar", { name: "phone", nullable: true, length: 11 })
    phone: string | null;

    @Column("varchar", { name: "email", nullable: true, length: 100 })
    email: string | null;

    @CreateDateColumn({ name: "created_at", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at", nullable: true })
    updatedAt: Date | null;

    @DeleteDateColumn({ name: "deleted_at", nullable: true })
    deletedAt: Date | null;

    @OneToMany(
        () => AnimalsAdoption,
        (animalsAdoption) => animalsAdoption.adopter
    )
    animalsAdoptions: AnimalsAdoption[];
}
