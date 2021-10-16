import { Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import AnimalsType from "./AnimalsType";
import Adopter from "./Adopter";

@Index("idx1_animals_adoption_adopter_id_foreign", ["adopterId"], {})
@Index("idx2_animals_adoption_animal_type_id_foreign", ["animalTypeId"], {})
@Entity("animals_adoption", { schema: "petlovedev" })
export default class AnimalsAdoption {
    @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
    id: number;

    @Column("int", { name: "animal_type_id", nullable: true, unsigned: true })
    animalTypeId: number | null;

    @Column("int", { name: "adopter_id", nullable: true, unsigned: true })
    adopterId: number | null;

    @Column("varchar", { name: "race", length: 50 })
    race: string;

    @Column("varchar", { name: "name", length: 50 })
    name: string;

    @Column("varchar", { name: "age", length: 25 })
    age: string;

    @Column("varchar", { name: "color", length: 50 })
    color: string;

    @Column("varchar", { name: "sex", length: 1 })
    sex: string;

    @Column("text", { name: "note", nullable: true })
    note: string | null;

    @Column("varchar", { name: "image", length: 255 })
    image: string;

    @CreateDateColumn({ name: "created_at", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at", nullable: true })
    updatedAt: Date | null;

    @DeleteDateColumn({ name: "deleted_at", nullable: true })
    deletedAt: Date | null;

    @ManyToOne(() => Adopter, (adopter) => adopter.animalsAdoptions, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    })
    @JoinColumn([{ name: "adopter_id", referencedColumnName: "id" }])
    adopter: Adopter;

    @ManyToOne(() => AnimalsType, (animalsType) => animalsType.animalsAdoptions, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    })
    @JoinColumn([{ name: "animal_type_id", referencedColumnName: "id" }])
    animalType: AnimalsType;
}
