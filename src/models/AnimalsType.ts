import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import AnimalsAdoption from "./AnimalsAdoption";

@Entity("animals_type", { schema: "petlovedev" })
export default class AnimalsType {
    @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
    id: number;

    @Column("varchar", { name: "name", length: 20 })
    name: string;

    @OneToMany(
        () => AnimalsAdoption,
        (animalsAdoption) => animalsAdoption.animalType
    )
    animalsAdoptions: AnimalsAdoption[];
}
