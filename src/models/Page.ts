import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pages', { schema: 'petlovedev' })
export default class Page {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
    id: number;

    @Column('varchar', { name: 'title', length: 50 })
    title: string;

    @Column('text', { name: 'content', nullable: true })
    content: string | null;
}
